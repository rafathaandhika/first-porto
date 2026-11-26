"use client";

import { Code2, FileSpreadsheet, ShieldCheck, Webhook, MessageCircle, Check } from "lucide-react";
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
