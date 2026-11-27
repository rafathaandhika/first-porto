import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafathaandhika.vercel.app"),
  title: "Rafatha Andhika | Odoo & Python Developer",
  description:
    "Muhammad Rafatha Andhika Rasyidinputra — Specialized Odoo (v14–v18) & Python Developer building custom ERP modules, QWeb PDF/Excel reports, automated business workflows, and REST API integrations.",
  keywords: [
    "Muhammad Rafatha Andhika Rasyidinputra",
    "Rafatha Andhika",
    "Odoo Developer",
    "Freelance Odoo Developer Indonesia",
    "Python Developer",
    "Odoo Custom Modules",
    "ERP Consultant",
    "PostgreSQL",
    "QWeb Reports",
    "Odoo API Integration",
  ],
  authors: [{ name: "Muhammad Rafatha Andhika Rasyidinputra" }],
  openGraph: {
    title: "Rafatha Andhika | Odoo & Python Developer",
    description:
      "Specialized in Odoo (v14–v18), custom module development, Python business logic, QWeb reporting, and enterprise ERP integrations.",
    url: "https://rafathaandhika.vercel.app",
    siteName: "Rafatha Andhika Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafatha Andhika | Odoo & Python Developer",
    description:
      "Specialized in Odoo (v14–v18), custom module development, Python business logic, and enterprise ERP integrations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rafathaandhika.vercel.app/#person",
        name: "Muhammad Rafatha Andhika Rasyidinputra",
        alternateName: "Rafatha Andhika",
        url: "https://rafathaandhika.vercel.app",
        image: "https://rafathaandhika.vercel.app/profile.jpg",
        jobTitle: "Odoo & Python Backend Developer",
        description:
          "Backend-focused Python and Odoo ERP Developer (v14–v18) specializing in custom Odoo modules, QWeb PDF/Excel reporting, Security ACLs, and REST/RPC API integrations.",
        email: "mailto:rafatha.andikha123@gmail.com",
        sameAs: [
          "https://github.com/rafathaandhika",
          "https://www.linkedin.com/in/rafatha-andhika-5a2843316/",
          "https://www.instagram.com/rafathaandhika/",
        ],
        knowsAbout: [
          "Odoo ERP",
          "Python",
          "PostgreSQL",
          "QWeb PDF",
          "REST API",
          "ERP Development",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Rafatha Andhika — Odoo & Python Freelance Development",
        url: "https://rafathaandhika.vercel.app/#services",
        provider: {
          "@id": "https://rafathaandhika.vercel.app/#person",
        },
        areaServed: ["Indonesia", "Remote Worldwide"],
        serviceType: [
          "Odoo Custom Module Development",
          "QWeb PDF & Excel Reporting",
          "Odoo Bug Fixing & Security ACL",
          "REST API & System Integration",
        ],
      },
    ],
  };

  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var isDark = saved ? saved === 'dark' : true;
                  document.documentElement.classList.toggle('dark', isDark);
                  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] dark:bg-[#07080c] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-purple-500/30 selection:text-zinc-900 dark:selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
