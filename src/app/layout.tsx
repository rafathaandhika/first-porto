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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
