"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  Send, 
  Heart, 
  Pin, 
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageCircle
} from "lucide-react";
import { PORTFOLIO_DATA, getLocalizedContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

interface Comment {
  id: string;
  name: string;
  text: string;
  time: string;
  likes: number;
  isPinned?: boolean;
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = getLocalizedContent(lang);

  // Direct Message Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Guestbook Comments State
  const defaultComments: Comment[] = [
    {
      id: "pin-1",
      name: "Rafatha Andhika",
      text: "Terima kasih sudah mampir ke portofolio saya! Jangan ragu untuk hubungi saya jika ada proyek atau diskusi seputar Odoo & Python.",
      time: "Pinned",
      likes: 12,
      isPinned: true,
    },
    {
      id: "guest-1",
      name: "Rizky Pratama",
      text: "Portofolionya keren bro, clean banget tampilannya!",
      time: "2 hari lalu",
      likes: 4,
    },
    {
      id: "guest-2",
      name: "Alex M.",
      text: "Impressive Odoo modules. Let's connect on LinkedIn!",
      time: "1 minggu lalu",
      likes: 7,
    },
  ];

  const [comments, setComments] = useState<Comment[]>(defaultComments);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [isPostingComment, setIsPostingComment] = useState(false);
  const [commentNotice, setCommentNotice] = useState<string>("");

  const whatsappUrl = `https://wa.me/${PORTFOLIO_DATA.personal.whatsapp}?text=${encodeURIComponent(
    t.contact.whatsappPrefill
  )}`;

  // Load shared comments from backend API
  useEffect(() => {
    let active = true;
    fetch("/api/comments", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: { comments?: Comment[]; persistent?: boolean }) => {
        if (!active) return;
        if (Array.isArray(data.comments) && data.comments.length > 0) {
          setComments(data.comments);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch comments:", err);
      });
    return () => {
      active = false;
    };
  }, []);

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim() || isPostingComment) return;

    setIsPostingComment(true);
    setCommentNotice("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: commentName.trim(),
          text: commentText.trim(),
        }),
      });

      const data = (await res.json()) as {
        comments?: Comment[];
        persistent?: boolean;
        error?: string;
      };

      if (!res.ok) {
        throw new Error(data.error || "Failed to post comment.");
      }

      if (Array.isArray(data.comments)) {
        setComments(data.comments);
      }

      setCommentName("");
      setCommentText("");

      if (data.persistent === false) {
        setCommentNotice(t.contact.redisNotice);
      }
    } catch {
      setCommentNotice(t.contact.commentError);
    } finally {
      setIsPostingComment(false);
    }
  };

  const handleLike = async (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );

    try {
      const res = await fetch("/api/comments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        const data = (await res.json()) as { comments?: Comment[] };
        if (Array.isArray(data.comments)) {
          setComments(data.comments);
        }
      }
    } catch {
      // Keep optimistic UI if network fails
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${PORTFOLIO_DATA.personal.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            _subject: `Pesan Portofolio dari ${name.trim()}`,
            _replyto: email.trim(),
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true)) {
        setStatus("success");
        setStatusMessage(t.contact.successMsg);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(data.message || "Send failed.");
      }
    } catch {
      setStatus("error");
      setStatusMessage(t.contact.errorMsg);
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-zinc-200/80 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ================= LEFT COLUMN: CONTACT FORM + WHATSAPP + SOCIALS ================= */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 space-y-5 shadow-sm dark:shadow-none">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-mono">
                  {t.contact.formSubtitle}
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <div className="space-y-2.5">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t.contact.sendingBtn}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.contact.sendBtn}
                      </>
                    )}
                  </button>

                  {/* Direct WhatsApp CTA Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-md shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.contact.whatsappBtn}
                  </a>
                </div>

                {status === "success" && (
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/30 text-xs text-rose-700 dark:text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Connect With Me */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400 font-semibold block">
                {t.contact.connectTitle}
              </span>

              {/* Highlighted WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 hover:border-emerald-400 dark:hover:border-emerald-400/60 flex items-center justify-between gap-3 transition-colors group shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white block">
                      WhatsApp ({PORTFOLIO_DATA.personal.whatsappDisplay})
                    </span>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-mono truncate block">
                      {t.contact.whatsappCardSub}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-300 group-hover:translate-x-1 transition-transform shrink-0">
                  →
                </span>
              </a>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center gap-3 transition-colors group shadow-sm dark:shadow-none"
                >
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    <LinkedinIcon />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white block">LinkedIn</span>
                    <span className="text-[10px] text-zinc-500 font-mono truncate block">
                      in/rafatha-andhika
                    </span>
                  </div>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center gap-3 transition-colors group shadow-sm dark:shadow-none"
                >
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <GithubIcon />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white block">GitHub</span>
                    <span className="text-[10px] text-zinc-500 font-mono truncate block">
                      @rafathaandhika
                    </span>
                  </div>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center gap-3 transition-colors group shadow-sm dark:shadow-none"
                >
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                    <InstagramIcon />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white block">Instagram</span>
                    <span className="text-[10px] text-zinc-500 font-mono truncate block">
                      @rafathaandhika
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="p-3.5 rounded-xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center gap-3 transition-colors group shadow-sm dark:shadow-none"
                >
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-zinc-900 dark:text-white block">Email</span>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono truncate block">
                      rafatha.andikha123
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE GUESTBOOK COMMENTS ================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Post Comment Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm dark:shadow-none">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {t.contact.commentsTitle}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-mono">
                  {t.contact.commentsSubtitle}
                </p>
              </div>

              <form onSubmit={handlePostComment} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder={t.contact.commentNamePlaceholder}
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-teal-500 transition-colors"
                />

                <textarea
                  rows={2}
                  required
                  placeholder={t.contact.commentTextPlaceholder}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                />

                <div className="flex items-center justify-between gap-3">
                  <div className="text-[11px] text-amber-600 dark:text-amber-400">
                    {commentNotice}
                  </div>
                  <button
                    type="submit"
                    disabled={isPostingComment}
                    className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-xs transition-colors cursor-pointer shrink-0 inline-flex items-center gap-1.5"
                  >
                    {isPostingComment ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        {t.contact.postingBtn}
                      </>
                    ) : (
                      t.contact.postBtn
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Comment Feed Stream */}
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {comments.map((comm) => (
                <div
                  key={comm.id}
                  className={`p-4 rounded-2xl bg-white/90 dark:bg-[#0d0d11] border shadow-sm dark:shadow-none ${
                    comm.isPinned
                      ? "border-purple-300 dark:border-purple-500/40 bg-purple-50/60 dark:bg-purple-950/10"
                      : "border-zinc-200 dark:border-zinc-800"
                  } space-y-2`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-xs text-zinc-800 dark:text-white">
                        {comm.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-xs font-bold text-zinc-900 dark:text-white">
                        {comm.name}
                      </span>
                      {comm.isPinned && (
                        <span className="flex items-center gap-1 text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
                          <Pin className="w-2.5 h-2.5" /> PINNED
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleLike(comm.id)}
                      className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 hover:fill-rose-400" />
                      <span className="font-mono text-[10px]">{comm.likes}</span>
                    </button>
                  </div>

                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed pl-9">
                    {comm.text}
                  </p>

                  <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 text-right">
                    {comm.time}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
