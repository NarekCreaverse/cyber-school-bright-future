
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ModulesSection } from "@/components/ModulesSection";
import { VideoSection } from "@/components/VideoSection";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cybernavy">
        <Navbar />
        <Hero />
        <ModulesSection />
        <VideoSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
