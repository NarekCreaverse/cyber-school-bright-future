
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Terminal, Bot, School } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cybernavy via-cyberpurple/20 to-cyberblue/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cybernavy/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-8">
            <Terminal className="w-12 h-12 text-cyberturquoise animate-pulse" />
            <Bot className="w-12 h-12 text-cyberblue animate-pulse delay-100" />
            <School className="w-12 h-12 text-cyberpurple animate-pulse delay-200" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyberturquoise to-cyberblue hover:opacity-90 text-white min-w-[200px]"
            >
              {t('nav.courses')}
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#0bcfce] to-[#37a1da] hover:opacity-90 text-white min-w-[200px]"
            >
              {t('hero.registerFree')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
