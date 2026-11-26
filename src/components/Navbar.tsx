"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

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
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        
        {/* Domain Brand */}
        <Link
          href="#home"
          className="pointer-events-auto px-4 py-2 rounded-full bg-white/80 dark:bg-[#121216]/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white shadow-sm dark:shadow-none transition-colors"
        >
          {PORTFOLIO_DATA.personal.domain}
        </Link>

        {/* Center / Right Floating Navigation Pills + Theme Toggle */}
        <div className="pointer-events-auto flex items-center gap-2">
          <nav className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-white/80 dark:bg-[#121216]/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 shadow-lg shadow-zinc-200/50 dark:shadow-xl dark:shadow-black/40">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
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

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2.5 rounded-full bg-white/80 dark:bg-[#121216]/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white shadow-lg shadow-zinc-200/50 dark:shadow-xl dark:shadow-black/40 transition-all hover:scale-105 cursor-pointer"
          >
            {mounted ? (
              isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )
            ) : (
              <Sun className="w-4 h-4 opacity-0" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
