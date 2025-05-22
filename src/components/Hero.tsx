
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Terminal, Bot, School } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-br from-cybernavy via-cyberpurple/20 to-cyberblue/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cybernavy/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`flex justify-center gap-6 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <Terminal className="w-12 h-12 text-cyberturquoise animate-pulse" />
            <Bot className="w-12 h-12 text-cyberblue animate-pulse delay-100" />
            <School className="w-12 h-12 text-cyberpurple animate-pulse delay-200" />
          </div>
          
          <h1 
            className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}
          >
            {t('hero.title')}
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}
          >
            {t('hero.subtitle')}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyberturquoise to-cyberblue hover:opacity-90 text-white min-w-[200px] animate-pulse hover:animate-none"
            >
              {t('nav.courses')}
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#0bcfce] to-[#37a1da] hover:opacity-90 text-white min-w-[200px] hover:scale-105 transition-transform"
            >
              {t('hero.registerFree')}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-24 animate-fade-in" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="shape-fill fill-cyberpurple"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="shape-fill fill-cyberblue"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="shape-fill fill-cyberturquoise"
          ></path>
        </svg>
      </div>
    </div>
  );
};
