
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-cybernavy/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white hover:text-cyberturquoise transition-colors duration-300">
            Creaverse
          </span>
          
          <button
            className="md:hidden text-white hover:text-cyberturquoise transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.home')}</button>
            <button onClick={() => scrollToSection('courses')} className="text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.courses')}</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('certification')} className="text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.certification')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.contact')}</button>
          </div>

          <Button
            onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
            variant="outline"
            className="bg-cyberpurple text-white hover:bg-cyberpurple/80 transition-colors duration-300"
          >
            {language === 'en' ? 'հայերեն' : 'English'}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.home')}</button>
            <button onClick={() => scrollToSection('courses')} className="block w-full text-left text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.courses')}</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('certification')} className="block w-full text-left text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.certification')}</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-cyberturquoise transition-colors duration-300">{t('nav.contact')}</button>
          </div>
        )}
      </div>
    </nav>
  );
};
