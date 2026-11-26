import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";

export default function Home() {
  return (
    <div className="relative min-h-screen text-zinc-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-zinc-900 dark:selection:text-white">
      {/* Background Motif Kotak-kotak Elegan & Ambient Lighting */}
      <BackgroundGrid />

      <Navbar />
      <main className="flex-grow relative">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <PortfolioShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
