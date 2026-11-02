"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  Send, 
  Heart, 
  Pin, 
  MessageSquare, 
  Check, 
  Copy,
  ExternalLink
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

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
  // Direct Message Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState(false);

  // Guestbook Comments State (with LocalStorage)
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

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem("guestbook_comments");
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      id: "comm-" + Date.now(),
      name: commentName.trim(),
      text: commentText.trim(),
      time: "Baru saja",
      likes: 0,
    };

    const updated = [comments[0], newComment, ...comments.slice(1)];
    setComments(updated);
    localStorage.setItem("guestbook_comments", JSON.stringify(updated));
    setCommentName("");
    setCommentText("");
  };

  const handleLike = (id: string) => {
    const updated = comments.map((c) =>
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    );
    setComments(updated);
    localStorage.setItem("guestbook_comments", JSON.stringify(updated));
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Project Inquiry from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailto;
    setSentMessage(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Contact Me
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-mono">
            Have something in mind? Send a message and let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ================= LEFT COLUMN: HUBUNGI SAYA ================= */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0d11] border border-zinc-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Hubungi Saya
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  Feel free to reach out if you want to collaborate, discuss ideas, or simply say hello.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {sentMessage ? "Opening Email..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Connect With Me (Social Cards as in video at 00:47) */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block">
                Connect With Me
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0d0d11] border border-zinc-800 hover:border-zinc-700 flex items-center gap-3 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-zinc-900 group-hover:text-teal-400 transition-colors">
                    <LinkedinIcon />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-white block">LinkedIn</span>
                    <span className="text-[10px] text-zinc-500 font-mono truncate block">
                      in/rafatha-andhika
                    </span>
                  </div>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0d0d11] border border-zinc-800 hover:border-zinc-700 flex items-center gap-3 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-zinc-900 group-hover:text-purple-400 transition-colors">
                    <GithubIcon />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-white block">GitHub</span>
                    <span className="text-[10px] text-zinc-500 font-mono truncate block">
                      @rafathaandhika
                    </span>
                  </div>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0d0d11] border border-zinc-800 hover:border-zinc-700 flex items-center gap-3 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-zinc-900 group-hover:text-rose-400 transition-colors">
                    <InstagramIcon />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-white block">Instagram</span>
                    <span className="text-[10px] text-zinc-500 font-mono truncate block">
                      @rafathaandhika
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="p-3.5 rounded-xl bg-[#0d0d11] border border-zinc-800 hover:border-zinc-700 flex items-center gap-3 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-zinc-900 group-hover:text-emerald-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-white block">Email</span>
                    <span className="text-[10px] text-zinc-400 font-mono truncate block">
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
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0d11] border border-zinc-800 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Comments
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  Leave your thoughts here.
                </p>
              </div>

              <form onSubmit={handlePostComment} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-teal-500 transition-colors"
                />

                <textarea
                  rows={2}
                  required
                  placeholder="Your Comment"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>

            {/* Comment Feed Stream (as seen in video at 00:44) */}
            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
              {comments.map((comm) => (
                <div
                  key={comm.id}
                  className={`p-4 rounded-2xl bg-[#0d0d11] border ${
                    comm.isPinned
                      ? "border-purple-500/40 bg-purple-950/10"
                      : "border-zinc-800"
                  } space-y-2`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-xs text-white">
                        {comm.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-xs font-bold text-white">
                        {comm.name}
                      </span>
                      {comm.isPinned && (
                        <span className="flex items-center gap-1 text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          <Pin className="w-2.5 h-2.5" /> PINNED
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleLike(comm.id)}
                      className="flex items-center gap-1 text-xs text-zinc-400 hover:text-rose-400 transition-colors cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 hover:fill-rose-400" />
                      <span className="font-mono text-[10px]">{comm.likes}</span>
                    </button>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed pl-9">
                    {comm.text}
                  </p>

                  <div className="text-[10px] font-mono text-zinc-500 text-right">
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
