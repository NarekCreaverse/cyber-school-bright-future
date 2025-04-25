
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ModulesSection } from "@/components/ModulesSection";
import { VideoSection } from "@/components/VideoSection";
import { AboutSection } from "@/components/AboutSection";
import { CertificationSection } from "@/components/CertificationSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cybernavy">
        <Navbar />
        <Hero />
        <ModulesSection />
        <AboutSection />
        <VideoSection />
        <CertificationSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
