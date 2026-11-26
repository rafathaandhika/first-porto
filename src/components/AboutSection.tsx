"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Eye, 
  FileText, 
  ArrowRight, 
  Award, 
  FolderGit2, 
  CheckCircle2, 
  X, 
  ExternalLink, 
  Download 
} from "lucide-react";
import { PORTFOLIO_DATA, getLocalizedContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const { lang } = useLanguage();
  const t = getLocalizedContent(lang);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCvOpen(false);
    };
    if (isCvOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCvOpen]);

  return (
    <section id="about" className="py-24 relative border-t border-zinc-200/80 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Text & Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/60 text-zinc-600 dark:text-zinc-400 text-xs font-mono uppercase tracking-wider shadow-sm dark:shadow-none">
              {t.about.badge}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
              {PORTFOLIO_DATA.personal.name}
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {t.about.bioAbout}
            </p>

            {/* Quote Card */}
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 italic font-mono flex items-center gap-3 shadow-sm dark:shadow-none">
              <span className="text-xl text-purple-600 dark:text-purple-400 font-serif leading-none">&ldquo;</span>
              <span>{t.about.quote}</span>
              <span className="text-xl text-purple-600 dark:text-purple-400 font-serif leading-none">&rdquo;</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer group"
              >
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {t.about.previewCv}
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium text-xs sm:text-sm transition-colors shadow-sm dark:shadow-none"
              >
                {t.about.viewProjects}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Framed Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-purple-500/25 via-teal-400/20 to-transparent dark:from-purple-600/30 dark:via-teal-500/20 dark:to-transparent blur-xl" />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-b from-zinc-200 via-white to-zinc-100 dark:from-zinc-700 dark:via-zinc-900 dark:to-black border border-zinc-300 dark:border-zinc-700/80 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 overflow-hidden relative group">
                  <Image
                    src="/profile.jpg"
                    alt={PORTFOLIO_DATA.personal.name}
                    fill
                    sizes="(max-width: 768px) 256px, 288px"
                    className="object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stats 3 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex items-center justify-between shadow-sm dark:shadow-none">
            <div>
              <div className="text-3xl font-black text-zinc-900 dark:text-white font-mono">
                {t.about.stats[0].number}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase mt-1">
                {t.about.stats[0].label}
              </div>
            </div>
            <FolderGit2 className="w-8 h-8 text-purple-600/80 dark:text-purple-400/80" />
          </div>

          <div className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex items-center justify-between shadow-sm dark:shadow-none">
            <div>
              <div className="text-3xl font-black text-zinc-900 dark:text-white font-mono">
                {t.about.stats[1].number}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase mt-1">
                {t.about.stats[1].label}
              </div>
            </div>
            <Award className="w-8 h-8 text-teal-600/80 dark:text-teal-400/80" />
          </div>

          <div className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex items-center justify-between shadow-sm dark:shadow-none">
            <div>
              <div className="text-3xl font-black text-zinc-900 dark:text-white font-mono">
                {t.about.stats[2].number}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase mt-1">
                {t.about.stats[2].label}
              </div>
            </div>
            <CheckCircle2 className="w-8 h-8 text-emerald-600/80 dark:text-emerald-400/80" />
          </div>
        </div>

      </div>

      {/* CV Preview Modal */}
      {isCvOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 dark:bg-black/85 backdrop-blur-md"
          onClick={() => setIsCvOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl h-[88vh] bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Topbar Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#08080c]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                    {t.about.cvModalTitle}
                  </h3>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono hidden sm:block">
                    {PORTFOLIO_DATA.personal.name}
                  </p>
                </div>
              </div>

              {/* Action shortcuts */}
              <div className="flex items-center gap-2">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-900 hover:bg-zinc-300/80 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs text-zinc-800 dark:text-zinc-200 font-medium transition-colors"
                  title={t.about.openNewTab}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.about.openNewTab}</span>
                </a>

                <a
                  href="/cv.pdf"
                  download="CV_Muhammad_Rafatha_Andhika.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-black text-xs font-semibold transition-colors shadow-sm"
                  title={t.about.downloadPdf}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.about.downloadPdf}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsCvOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/70 dark:hover:bg-zinc-800 transition-colors ml-1 cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full h-full bg-zinc-100 dark:bg-[#16161c] relative">
              <iframe
                src="/cv.pdf#toolbar=1&navpanes=0"
                className="w-full h-full border-0"
                title="Curriculum Vitae - Muhammad Rafatha Andhika Rasyidinputra"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
