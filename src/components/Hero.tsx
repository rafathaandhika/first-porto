"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import InteractiveLanyard from "@/components/InteractiveLanyard";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = PORTFOLIO_DATA.personal.rotatingRoles;

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-zinc-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PORTFOLIO_DATA.personal.status}</span>
            </div>

            {/* Giant Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] uppercase">
                Odoo & Python <br />
                <span className="text-zinc-400">Developer</span>
              </h1>
            </div>

            {/* Typewriter text */}
            <div className="h-8 flex items-center text-lg sm:text-xl font-mono text-zinc-200">
              <span className="text-purple-400 mr-2">&gt;</span>
              <span>{displayText}</span>
              <span className="animate-pulse ml-1 text-teal-400 font-bold">|</span>
            </div>

            {/* Bio summary */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              {PORTFOLIO_DATA.personal.bioShort}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Python", "Odoo ERP", "PostgreSQL", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bullet Links */}
            <div className="space-y-2 pt-2 text-xs sm:text-sm font-mono text-zinc-400">
              <a
                href="#portfolio"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <span className="text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
                <span>explore my work below</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <span className="text-teal-400 group-hover:translate-x-1 transition-transform">→</span>
                <span>open to full-time & freelance opportunities</span>
              </a>
            </div>

          </div>

          {/* Right Column: Signature Interactive Draggable Lanyard Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <InteractiveLanyard />
          </div>

        </div>

        {/* Scroll Indicator at Bottom */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors"
          >
            <span>SCROLL</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}
