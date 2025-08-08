
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
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-foreground">
              Creaverse Cyber School
            </span>
          </div>
          
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors duration-300">{t('nav.home')}</button>
            <button onClick={() => scrollToSection('courses')} className="text-foreground hover:text-primary transition-colors duration-300">{t('nav.courses')}</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors duration-300">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('certification')} className="text-foreground hover:text-primary transition-colors duration-300">{t('nav.certification')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors duration-300">{t('nav.contact')}</button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/412a2633-2663-449a-968c-4c44fa35da4a.png" 
                alt="Creaverse Logo" 
                className="h-8 w-8 rounded-full border-2 border-muted"
              />
              <span className="text-sm font-medium text-foreground">Creaverse</span>
            </div>
            <Button
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              variant="outline"
              className="border-muted text-foreground hover:bg-muted transition-colors duration-300"
            >
              {language === 'en' ? 'հայերեն' : 'English'}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300">{t('nav.home')}</button>
            <button onClick={() => scrollToSection('courses')} className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300">{t('nav.courses')}</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('certification')} className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300">{t('nav.certification')}</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300">{t('nav.contact')}</button>
          </div>
        )}
      </div>
    </nav>
  );
};
