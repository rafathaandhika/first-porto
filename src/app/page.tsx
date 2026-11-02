import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";

export default function Home() {
  return (
    <div className="relative min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-white">
      {/* Background Motif Kotak-kotak Elegan & Ambient Lighting */}
      <BackgroundGrid />

      <Navbar />
      <main className="flex-grow relative">
        <Hero />
        <AboutSection />
        <PortfolioShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
