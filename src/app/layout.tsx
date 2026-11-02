import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Rafatha Andhika | Odoo & Python Developer",
  description:
    "Muhammad Rafatha Andhika Rasyidinputra — Specialized Odoo (v14–v18) & Python Consultant building custom ERP modules, automated business workflows, and enterprise integrations.",
  keywords: [
    "Muhammad Rafatha Andhika Rasyidinputra",
    "Rafatha Andhika",
    "Odoo Developer",
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
      "Specialized in Odoo (v14–v18), custom module development, Python business logic, and enterprise ERP integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-[#07080c] text-zinc-100 font-sans selection:bg-purple-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
