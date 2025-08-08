
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ModulesSection } from "@/components/ModulesSection";
import { VideoSection } from "@/components/VideoSection";
import { AboutSection } from "@/components/AboutSection";
import { CertificationSection } from "@/components/CertificationSection";
import { ContactSection } from "@/components/ContactSection";
import { SEO } from "@/components/SEO";
import { HelmetProvider } from "react-helmet-async";

const Index = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <SEO />
          <Navbar />
          <Hero />
          <ModulesSection id="courses" />
          <AboutSection />
          <VideoSection />
          <CertificationSection />
          <ContactSection />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default Index;
