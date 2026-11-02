"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Hand } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function InteractiveLanyard() {
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Motion values for smooth drag and spring physics
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring physics for natural pendulum recoil
  const springConfig = { damping: 18, stiffness: 220, mass: 1.2 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  // Rotation tilts naturally with horizontal displacement
  const rotate = useTransform(smoothX, [-200, 200], [-24, 24]);
  // 3D Tilt perspective transforms
  const rotateY = useTransform(smoothX, [-200, 200], [-18, 18]);
  const rotateX = useTransform(smoothY, [-100, 250], [15, -15]);

  // Dynamic strap SVG coordinates
  const [strapEnd, setStrapEnd] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const unsubX = smoothX.on("change", (val) => {
      setStrapEnd((prev) => ({ ...prev, x: val }));
    });
    const unsubY = smoothY.on("change", (val) => {
      setStrapEnd((prev) => ({ ...prev, y: val }));
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [smoothX, smoothY]);

  // Gentle idle pendulum swing when not interacting
  useEffect(() => {
    if (isDragging || hasInteracted) return;

    const controls = animate(rawX, [0, 8, -8, 5, -5, 0], {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    });

    return () => controls.stop();
  }, [isDragging, hasInteracted, rawX]);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center pt-8 pb-4 select-none touch-none">
      
      {/* Anchor ceiling mount */}
      <div className="relative z-30 flex flex-col items-center">
        <div className="w-12 h-3.5 bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 rounded-full shadow-lg border border-zinc-600" />
        <div className="w-5 h-2 bg-zinc-800 rounded-b shadow-inner" />
      </div>

      {/* Dynamic SVG Lanyard Strap connecting Ceiling to Card Clip */}
      <svg
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none z-10 overflow-visible"
        width="400"
        height="350"
        viewBox="-200 0 400 350"
      >
        <defs>
          <linearGradient id="lanyardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="50%" stopColor="#3f3f46" />
            <stop offset="100%" stopColor="#18181b" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Shadow ribbon */}
        <path
          d={`M -12 0 Q ${strapEnd.x * 0.4} ${(70 + strapEnd.y) * 0.5} ${strapEnd.x - 12} ${75 + strapEnd.y} L ${strapEnd.x + 12} ${75 + strapEnd.y} Q ${strapEnd.x * 0.4} ${(70 + strapEnd.y) * 0.5} 12 0 Z`}
          fill="#000000"
          opacity="0.35"
        />

        {/* Main Ribbon Fabric (Bersih tanpa teks) */}
        <path
          d={`M -14 0 Q ${strapEnd.x * 0.5} ${(70 + strapEnd.y) * 0.5} ${strapEnd.x - 14} ${75 + strapEnd.y} L ${strapEnd.x + 14} ${75 + strapEnd.y} Q ${strapEnd.x * 0.5} ${(70 + strapEnd.y) * 0.5} 14 0 Z`}
          fill="url(#lanyardGrad)"
          stroke="#52525b"
          strokeWidth="1"
          filter="url(#shadow)"
        />
      </svg>

      {/* Draggable Card Body */}
      <motion.div
        drag
        dragConstraints={{ left: -140, right: 140, top: -40, bottom: 220 }}
        dragElastic={0.6}
        dragSnapToOrigin={true}
        style={{
          x: smoothX,
          y: smoothY,
          rotate: rotate,
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
        }}
        onDragStart={() => {
          setIsDragging(true);
          setHasInteracted(true);
        }}
        onDrag={(_, info) => {
          rawX.set(info.offset.x);
          rawY.set(info.offset.y);
        }}
        onDragEnd={() => {
          setIsDragging(false);
          rawX.set(0);
          rawY.set(0);
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ cursor: "grabbing" }}
        className="relative z-20 mt-16 cursor-grab active:cursor-grabbing group select-none"
      >
        {/* Metal Carabiner Clip connecting Strap to Badge */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
          <div className="w-8 h-4 rounded-sm bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-500 shadow-md border border-zinc-400/80" />
          <div className="w-4 h-3 bg-zinc-600 rounded-b shadow-sm" />
        </div>

        {/* Hint Pill (Disappears once dragged) */}
        {!hasInteracted && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none whitespace-nowrap">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[11px] font-mono font-semibold backdrop-blur-md shadow-lg animate-bounce">
              <Hand className="w-3.5 h-3.5 animate-pulse" />
              Tarik / Geser Saya!
            </span>
          </div>
        )}

        {/* The Realistic ID Badge Card (Clean Minimalist Edition) */}
        <div className="w-72 sm:w-80 rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-5 border border-zinc-700/80 shadow-2xl shadow-black/90 transition-shadow">
          
          {/* Top Clip Hole cutout */}
          <div className="w-12 h-2.5 mx-auto bg-zinc-950 rounded-full border border-zinc-800 mb-4 shadow-inner" />

          {/* Portrait Container */}
          <div className="relative mb-4 aspect-[4/5] rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/60 shadow-inner group-hover:border-zinc-500 transition-colors">
            <Image
              src="/profile.jpg"
              alt={PORTFOLIO_DATA.personal.name}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              priority
              className="object-cover object-center filter contrast-[1.05]"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10 pointer-events-none" />
          </div>

          {/* Name & Title */}
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.shortName}
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              {PORTFOLIO_DATA.personal.role}
            </p>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
