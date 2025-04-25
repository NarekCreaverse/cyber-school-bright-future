
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-cybernavy/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Creaverse
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-cyberturquoise"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-cyberturquoise transition-colors">{t('nav.home')}</a>
            <a href="#courses" className="text-white hover:text-cyberturquoise transition-colors">{t('nav.courses')}</a>
            <a href="#about" className="text-white hover:text-cyberturquoise transition-colors">{t('nav.about')}</a>
            <a href="#contact" className="text-white hover:text-cyberturquoise transition-colors">{t('nav.contact')}</a>
          </div>

          <Button
            onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
            variant="outline"
            className="bg-cyberpurple text-white hover:bg-cyberpurple/80"
          >
            {language === 'en' ? 'հայերեն' : 'English'}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#" className="block text-white hover:text-cyberturquoise transition-colors">{t('nav.home')}</a>
            <a href="#courses" className="block text-white hover:text-cyberturquoise transition-colors">{t('nav.courses')}</a>
            <a href="#about" className="block text-white hover:text-cyberturquoise transition-colors">{t('nav.about')}</a>
            <a href="#contact" className="block text-white hover:text-cyberturquoise transition-colors">{t('nav.contact')}</a>
          </div>
        )}
      </div>
    </nav>
  );
};
