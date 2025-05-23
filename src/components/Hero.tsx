
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, Code, Star } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const { t } = useLanguage();
  const [animateItems, setAnimateItems] = useState(false);
  
  useEffect(() => {
    // Start animations after component mounts with a slight delay
    setTimeout(() => {
      setAnimateItems(true);
    }, 300);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-[90vh] bg-gradient-to-br from-cyberpurple/30 via-cybernavy to-black overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyberpurple/20 to-cyberturquoise/20"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
              filter: 'blur(40px)',
              transform: 'translate(-50%, -50%)',
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content - Text */}
          <div className={`space-y-6 transition-all duration-1000 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyberturquoise to-cyberpurple rounded-full mb-6"></div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyberturquoise to-cyberpurple leading-tight animate-pulse">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-white/80 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('courses')}
                className="bg-cyberpurple hover:bg-cyberpurple/90 text-white group relative overflow-hidden shadow-cyberpurple/20 shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  {t('nav.courses')}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyberturquoise to-cyberpurple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                <span>{t('hero.registerFree')}</span>
                <Sparkles className="ml-2 w-4 h-4 text-cyberturquoise group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
          
          {/* Right content - Enhanced animated graphics */}
          <div 
            className={`relative h-[400px] transition-all duration-1000 delay-300 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {/* Technology icons with enhanced animations */}
            <div className="absolute w-full h-full">
              {[
                { icon: <Code className="w-full h-full text-cyberpurple" />, delay: 0.1, size: 70, top: '10%', left: '20%' },
                { icon: <Rocket className="w-full h-full text-cyberturquoise" />, delay: 0.3, size: 60, top: '60%', left: '70%' },
                { icon: <Sparkles className="w-full h-full text-white/80" />, delay: 0.5, size: 50, top: '30%', left: '70%' },
                { icon: <Star className="w-full h-full text-yellow-400" />, delay: 0.7, size: 55, top: '20%', left: '60%' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  style={{
                    width: item.size,
                    height: item.size,
                    top: item.top,
                    left: item.left,
                    opacity: animateItems ? 1 : 0,
                    transform: animateItems ? 'scale(1)' : 'scale(0.8)',
                    transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${item.delay}s`,
                    animation: `float-icon ${8 + i * 2}s ease-in-out infinite alternate`
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
            
            {/* Main circular element with enhanced animations */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-to-br from-cyberpurple/30 to-cyberturquoise/30 backdrop-blur-3xl animate-pulse"
              style={{
                boxShadow: '0 0 40px rgba(124, 58, 237, 0.3), 0 0 80px rgba(14, 165, 233, 0.2)',
                opacity: animateItems ? 1 : 0,
                transform: animateItems ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.8)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animationDuration: '3s'
              }}
            >
              <div className="absolute inset-4 rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpurple/20 to-cyberturquoise/20 animate-spin-slow"></div>
                <div className="text-center z-10">
                  <h3 className="text-xl font-bold text-white">Creaverse</h3>
                </div>
              </div>
            </div>
            
            {/* Enhanced orbiting elements */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="absolute top-1/2 left-1/2 rounded-full bg-white/20 w-3 h-3 hover:bg-cyberturquoise/60 hover:scale-150 transition-all duration-300"
                style={{ 
                  animation: `orbit ${3 + i * 1.5}s linear infinite`,
                  animationDelay: `${i * 0.2}s`,
                  transformOrigin: 'center',
                  opacity: animateItems ? 0.7 : 0,
                  transition: 'opacity 1s ease'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-24" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,36,20,36,20h0C108,30,188,40,290,45,390,49,451,52,500,52c130.89,0,198.49-20,321.39-21.44"
            className="shape-fill fill-cyberpurple/40"
          ></path>
          <path 
            d="M1200,0V120H0V22.38C150.19,59.17,347.19,83.88,500,83.88c131.2,0,246.2-17.68,372.91-37.92C984.11,29.15,1071.3,11.38,1200,0"
            className="shape-fill fill-cybernavy"
          ></path>
        </svg>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0px); }
          100% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        
        @keyframes float-icon {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(5px) rotate(-5deg); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
