"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-900/80 bg-zinc-950/40 backdrop-blur-sm text-center text-xs text-zinc-500 font-mono">
      <div className="max-w-6xl mx-auto px-4">
        <p>
          © 2025 {PORTFOLIO_DATA.personal.name} — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
