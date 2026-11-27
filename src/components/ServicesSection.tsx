"use client";

import { useState } from "react";
import { Code2, FileSpreadsheet, ShieldCheck, Webhook, MessageCircle, Check, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA, getLocalizedContent, ServiceItem } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

function ServiceIcon({ kind }: { kind: ServiceItem["icon"] }) {
  switch (kind) {
    case "module":
      return <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
    case "report":
      return <FileSpreadsheet className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
    case "security":
      return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    case "api":
      return <Webhook className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
  }
}

export default function ServicesSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { lang } = useLanguage();
  const t = getLocalizedContent(lang);
  const whatsappUrl = `https://wa.me/${PORTFOLIO_DATA.personal.whatsapp}?text=${encodeURIComponent(
    t.contact.whatsappPrefill
  )}`;

  return (
    <section id="services" className="py-24 relative border-t border-zinc-200/80 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/60 text-zinc-600 dark:text-zinc-400 text-xs font-mono uppercase tracking-wider shadow-sm dark:shadow-none">
            {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            {t.services.heading}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="group p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 group-hover:scale-105 transition-transform">
                    <ServiceIcon kind={service.icon} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 uppercase">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/70">
                {service.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How I Work (Freelance Workflow) */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
              {t.services.workflowTitle}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed">
              {t.services.workflowSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.workflowSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-white/85 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none flex flex-col gap-2.5"
              >
                <span className="inline-flex w-fit px-2.5 py-1 rounded-full bg-purple-100/80 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-500/30 text-[11px] font-mono font-bold text-purple-700 dark:text-purple-300">
                  {step.step}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance FAQ Accordion */}
        <div className="mb-10 max-w-3xl mx-auto">
          <div className="text-center mb-6 space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
              {t.services.faqTitle}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono">
              {t.services.faqSubtitle}
            </p>
          </div>

          <div className="space-y-3">
            {t.services.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white/90 dark:bg-[#0d0d11] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm dark:shadow-none"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/70 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Consultation CTA Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50/90 via-white to-purple-50/80 dark:from-emerald-950/25 dark:via-[#0d0d11] dark:to-purple-950/25 border border-emerald-200/80 dark:border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm dark:shadow-none">
          <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-200 text-center sm:text-left">
            {t.services.ctaText}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-lg shadow-emerald-600/20 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            {t.services.ctaWhatsapp}
          </a>
        </div>

      </div>
    </section>
  );
}
