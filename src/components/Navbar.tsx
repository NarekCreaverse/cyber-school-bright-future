
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed w-full bg-cybernavy/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Cyber School
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-cyberturquoise transition-colors">{t('nav.home')}</a>
            <a href="#" className="text-white hover:text-cyberturquoise transition-colors">{t('nav.courses')}</a>
            <a href="#" className="text-white hover:text-cyberturquoise transition-colors">{t('nav.about')}</a>
            <a href="#" className="text-white hover:text-cyberturquoise transition-colors">{t('nav.contact')}</a>
          </div>
          <Button
            onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
            variant="outline"
            className="bg-cyberpurple text-white hover:bg-cyberpurple/80"
          >
            {language === 'en' ? 'հայերեն' : 'English'}
          </Button>
        </div>
      </div>
    </nav>
  );
};
