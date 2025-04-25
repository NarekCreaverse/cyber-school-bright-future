
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { mail, phone } from "lucide-react";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-cybernavy to-cyberpurple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-12">
            {t('contact.description')}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a href="mailto:info@creaverse.am" className="flex items-center justify-center gap-2 text-white hover:text-cyberturquoise transition-colors">
              <mail className="w-5 h-5" />
              info@creaverse.am
            </a>
            <a href="tel:+37411223344" className="flex items-center justify-center gap-2 text-white hover:text-cyberturquoise transition-colors">
              <phone className="w-5 h-5" />
              +374 11 22 33 44
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
