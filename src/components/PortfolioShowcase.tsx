"use client";

import { useState } from "react";
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  X, 
  Code, 
  Cpu, 
  Database, 
  Globe, 
  Terminal, 
  GitBranch,
  ShieldCheck,
  FileCode2,
  Server
} from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem, CertificateItem, TechItem } from "@/data/portfolio";

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "stack">("projects");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  return (
    <section id="portfolio" className="py-24 relative border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Portfolio Showcase
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-mono">
            Explore my journey through projects, certifications, and technical expertise.
          </p>

          {/* Navigation Pill Switcher (as seen in TikTok video) */}
          <div className="inline-flex items-center gap-1.5 p-1.5 mt-8 rounded-full bg-zinc-900 border border-zinc-800 shadow-xl">
            <button
              onClick={() => {
                setActiveTab("projects");
                setSelectedProject(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === "projects"
                  ? "bg-white text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => {
                setActiveTab("certificates");
                setSelectedProject(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === "certificates"
                  ? "bg-white text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => {
                setActiveTab("stack");
                setSelectedProject(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === "stack"
                  ? "bg-white text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Tech Stack
            </button>
          </div>
        </div>

        {/* ===================== TAB 1: PROJECTS ===================== */}
        {activeTab === "projects" && (
          <div>
            {/* If a project is selected -> Show Project Detail View (as seen in video at 00:22) */}
            {selectedProject ? (
              <div className="rounded-3xl bg-[#0d0d11] border border-zinc-800 p-6 sm:p-10 animate-fadeIn">
                
                {/* Back Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors mb-8 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                        {selectedProject.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono mt-1">
                        {selectedProject.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Stats 3 Mini Cards (Technologies Used, Key Features, No Link) */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-center">
                        <div className="text-xl font-black text-white font-mono">
                          {selectedProject.techCount}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400 mt-1 uppercase">
                          Technologies Used
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-center">
                        <div className="text-xl font-black text-white font-mono">
                          {selectedProject.featuresCount}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400 mt-1 uppercase">
                          Key Features
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 flex flex-col items-center justify-center">
                        {selectedProject.liveLink ? (
                          <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-teal-400 hover:underline"
                          >
                            Live Demo <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-zinc-500">
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
                      <span className="text-xs font-mono font-semibold text-zinc-400 uppercase">
                        Technologies Used
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Features List */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
                    <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-white flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-purple-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ) : (
              /* Projects Grid List */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PORTFOLIO_DATA.projects.map((project) => (
                  <div
                    key={project.id}
                    className="group rounded-3xl bg-[#0d0d11] border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Thumbnail with overlay badge */}
                      <div className="relative aspect-video w-full bg-zinc-900 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-transparent to-transparent z-10" />
                        {/* Abstract Tech Graphic if image fails */}
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 group-hover:scale-105 transition-transform duration-500">
                          <div className="w-14 h-14 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center mb-2">
                            <Layers className="w-7 h-7 text-purple-400" />
                          </div>
                          <span className="text-xs font-mono text-zinc-400">
                            {project.category}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 z-20">
                          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                            {project.technologies[0]}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-mono mt-1">
                          {project.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-3 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer with Details button */}
                    <div className="p-6 pt-0 flex items-center justify-between border-t border-zinc-800/60 mt-4">
                      <span className="text-[11px] font-mono text-zinc-500">
                        {project.techCount} Technologies
                      </span>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-semibold text-white transition-all cursor-pointer"
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

        {/* ===================== TAB 2: CERTIFICATES ===================== */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCertificate(cert)}
                className="group p-5 rounded-3xl bg-[#0d0d11] border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer space-y-4"
              >
                <div className="relative aspect-[4/3] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <ShieldCheck className="w-12 h-12 text-teal-400 mx-auto group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono text-zinc-400 block">
                      Klik untuk perbesar
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mt-1">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificate Modal Lightbox (as in video at 00:30) */}
        {selectedCertificate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative max-w-2xl w-full p-6 rounded-3xl bg-zinc-900 border border-zinc-700 shadow-2xl">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 my-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-4">
                <ShieldCheck className="w-16 h-16 text-teal-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">
                  {selectedCertificate.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  Diterbitkan oleh: {selectedCertificate.issuer} ({selectedCertificate.date})
                </p>
                <div className="p-4 rounded-xl bg-zinc-900 text-xs text-zinc-400 font-mono">
                  Dokumen verifikasi sertifikasi resmi
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 3: TECH STACK ===================== */}
        {activeTab === "stack" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0d0d11] border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col items-center justify-center text-center group hover:-translate-y-1"
              >
                {/* Tech Icon Square (Mac / App Icon Style as seen in video at 00:33) */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg border border-white/10 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: `${tech.color}15` }}
                >
                  <Terminal className="w-7 h-7" style={{ color: tech.color }} />
                </div>

                <span className="font-bold text-white text-sm tracking-tight">
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
