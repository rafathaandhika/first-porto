"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { PORTFOLIO_DATA, getLocalizedContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = getLocalizedContent(lang);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));

    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    document.documentElement.style.colorScheme = nextDark ? "dark" : "light";
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      // ignore storage errors
    }
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 sm:py-4 px-2.5 sm:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-between gap-2">
        
        {/* Domain Brand (shown on tablet/desktop to keep mobile navbar unclipped) */}
        <Link
          href="#home"
          className="hidden md:inline-flex pointer-events-auto px-4 py-2 rounded-full bg-white/80 dark:bg-[#121216]/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white shadow-sm dark:shadow-none transition-colors shrink-0"
        >
          {PORTFOLIO_DATA.personal.domain}
        </Link>

        {/* Floating Navigation Pills + Language & Theme Toggles */}
        <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 max-w-full">
          <nav className="flex items-center gap-0.5 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-white/85 dark:bg-[#121216]/85 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 shadow-lg shadow-zinc-200/50 dark:shadow-xl dark:shadow-black/40">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-1.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-white bg-zinc-900 dark:bg-white/10 shadow-sm"
                      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* ID / EN Language Switcher */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            className="px-2 sm:px-3 py-2 sm:py-2 rounded-full bg-white/85 dark:bg-[#121216]/85 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 text-[11px] sm:text-xs font-mono font-bold text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white shadow-lg shadow-zinc-200/50 dark:shadow-xl dark:shadow-black/40 transition-all hover:scale-105 cursor-pointer shrink-0 uppercase"
          >
            {lang === "id" ? "ID" : "EN"}
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 sm:p-2.5 rounded-full bg-white/85 dark:bg-[#121216]/85 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white shadow-lg shadow-zinc-200/50 dark:shadow-xl dark:shadow-black/40 transition-all hover:scale-105 cursor-pointer shrink-0"
          >
            {mounted ? (
              isDark ? (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600" />
              )
            ) : (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
