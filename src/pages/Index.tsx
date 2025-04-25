
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cybernavy">
        <Navbar />
        <Hero />
        <VideoSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
