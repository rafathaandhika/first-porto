"use client";

import { PORTFOLIO_DATA, getLocalizedContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const t = getLocalizedContent(lang);

  return (
    <footer className="py-8 border-t border-zinc-200/80 dark:border-zinc-900/80 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm text-center text-xs text-zinc-500 font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <p>
          © 2026 {PORTFOLIO_DATA.personal.name} — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
