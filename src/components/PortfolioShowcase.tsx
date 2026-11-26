"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers,
  CheckCircle2, 
  Cpu, 
  Terminal, 
  Sparkles,
  Lock
} from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolio";

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<"projects" | "stack">("projects");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const projectGallery = selectedProject
    ? selectedProject.gallery && selectedProject.gallery.length > 0
      ? selectedProject.gallery
      : selectedProject.image
        ? [{ src: selectedProject.image, caption: selectedProject.title }]
        : []
    : [];

  return (
    <section id="portfolio" className="py-24 relative border-t border-zinc-200/80 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            Portfolio Showcase
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono">
            Explore my journey through real-world projects and technical expertise.
          </p>

          {/* Navigation Pill Switcher */}
          <div className="inline-flex items-center gap-1.5 p-1.5 mt-8 rounded-full bg-white/90 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-xl">
            <button
              onClick={() => {
                setActiveTab("projects");
                setSelectedProject(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "projects"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => {
                setActiveTab("stack");
                setSelectedProject(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "stack"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Tech Stack
            </button>
          </div>
        </div>

        {/* ===================== TAB 1: PROJECTS ===================== */}
        {activeTab === "projects" && (
          <div>
            {selectedProject ? (
              <div className="rounded-3xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 animate-fadeIn shadow-sm dark:shadow-none">
                
                {/* Back Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors mb-8 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Projects
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Preview Image + Details */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Dashboard Visual Preview & Gallery (only shown when real screenshot exists) */}
                    {projectGallery.length > 0 && (
                      <div className="space-y-3">
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                          <Image
                            src={projectGallery[activeImageIndex]?.src || projectGallery[0].src}
                            alt={projectGallery[activeImageIndex]?.caption || selectedProject.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 640px"
                            className="object-cover object-top"
                          />
                          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2 pointer-events-none">
                            <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-100 truncate">
                              {projectGallery[activeImageIndex]?.caption}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-300 shrink-0">
                              <Lock className="w-3 h-3" />
                              Real Documentation
                            </span>
                          </div>
                        </div>

                        {projectGallery.length > 1 && (
                          <div className="grid grid-cols-3 gap-2.5">
                            {projectGallery.map((img, idx) => (
                              <button
                                key={img.src}
                                type="button"
                                onClick={() => setActiveImageIndex(idx)}
                                className={`relative aspect-video rounded-xl overflow-hidden border transition-all cursor-pointer ${
                                  activeImageIndex === idx
                                    ? "border-purple-500 ring-2 ring-purple-500/30"
                                    : "border-zinc-200 dark:border-zinc-800 opacity-70 hover:opacity-100"
                                }`}
                              >
                                <Image
                                  src={img.src}
                                  alt={img.caption}
                                  fill
                                  sizes="200px"
                                  className="object-cover object-top"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <div>
                      <span className="text-xs font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mt-1">
                        {selectedProject.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                        {selectedProject.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Stats 3 Mini Cards */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 text-center">
                        <div className="text-xl font-black text-zinc-900 dark:text-white font-mono">
                          {selectedProject.techCount}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-1 uppercase">
                          Technologies Used
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 text-center">
                        <div className="text-xl font-black text-zinc-900 dark:text-white font-mono">
                          {selectedProject.contributions.length}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-1 uppercase">
                          Contributions
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center">
                        {selectedProject.liveLink ? (
                          <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-teal-600 dark:text-teal-400 hover:underline"
                          >
                            Live Demo <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                            Enterprise / NDA
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-zinc-500 mt-0.5">
                          Deployment
                        </span>
                      </div>
                    </div>

                    {/* Technologies Used Badges */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
                        Technologies Used
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Contributions & Key Features */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* My Contributions Card */}
                    <div className="p-6 rounded-2xl bg-purple-50/70 dark:bg-purple-950/15 border border-purple-200/80 dark:border-purple-500/30 space-y-4">
                      <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-purple-900 dark:text-purple-200 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        Kontribusi Saya
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.contributions.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Features Card */}
                    <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 space-y-4">
                      <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.keyFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              /* Projects Centered Grid List */
              <div className="flex flex-wrap justify-center gap-6">
                {PORTFOLIO_DATA.projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full md:w-[calc(50%-0.75rem)] group rounded-3xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-none"
                  >
                    <div>
                      {/* Thumbnail: Real screenshot if available, clean tech header otherwise */}
                      <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 560px"
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200 dark:from-zinc-900 dark:via-black dark:to-zinc-950 group-hover:scale-105 transition-transform duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center mb-2 shadow-sm dark:shadow-none">
                              <Layers className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                            </div>
                            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                              {project.category}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/15 dark:from-[#0d0d11] dark:via-transparent dark:to-black/25 z-10 pointer-events-none" />

                        <div className="absolute top-3 left-3 z-20">
                          <span className="px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200">
                            {project.category}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 z-20">
                          <span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-black/75 backdrop-blur-md border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-800 dark:text-zinc-200 shadow-sm dark:shadow-none">
                            {project.technologies[1] || project.technologies[0]}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                          {project.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer with Details button */}
                    <div className="p-6 pt-4 flex items-center justify-between border-t border-zinc-200/80 dark:border-zinc-800/60 mt-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                        <Lock className="w-3 h-3 text-amber-500/80" />
                        Enterprise / NDA • {project.contributions.length} Contributions
                      </span>

                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setActiveImageIndex(0);
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-xs font-semibold text-zinc-900 dark:text-white transition-all cursor-pointer"
                      >
                        Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ===================== TAB 2: TECH STACK ===================== */}
        {activeTab === "stack" && (
          <div className="flex flex-wrap justify-center gap-4">
            {PORTFOLIO_DATA.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.67rem)] md:w-[calc(25%-0.75rem)] p-5 rounded-2xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col items-center justify-center text-center group hover:-translate-y-1 shadow-sm dark:shadow-none"
              >
                {/* Tech Icon Square */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-md dark:shadow-lg border border-zinc-200/80 dark:border-white/10 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: `${tech.color === "#ffffff" ? "#71717a" : tech.color}18` }}
                >
                  <Terminal
                    className="w-7 h-7"
                    style={{ color: tech.color === "#ffffff" ? "currentColor" : tech.color }}
                  />
                </div>

                <span className="font-bold text-zinc-900 dark:text-white text-sm tracking-tight">
                  {tech.name}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono mt-0.5 uppercase">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
