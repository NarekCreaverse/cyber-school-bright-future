
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cybernavy via-cyberpurple to-cyberblue">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2970&q=80')] mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="space-x-4">
            <Button className="bg-cyberturquoise hover:bg-cyberturquoise/80 text-white">
              {t('nav.courses')}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
