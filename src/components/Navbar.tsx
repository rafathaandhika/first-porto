"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
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

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Domain Brand */}
        <Link
          href="#home"
          className="pointer-events-auto px-4 py-2 rounded-full bg-[#121216]/80 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-mono text-zinc-300 hover:text-white transition-colors"
        >
          {PORTFOLIO_DATA.personal.domain}
        </Link>

        {/* Center / Right Floating Navigation Pills */}
        <nav className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#121216]/80 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "text-white bg-white/10 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
