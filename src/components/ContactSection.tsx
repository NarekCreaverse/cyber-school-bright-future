
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-cybernavy to-cyberpurple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-12 animate-fade-in">
            {t('contact.description')}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <a href="mailto:creaverse.cs@gmail.com" className="flex items-center justify-center gap-2 text-white hover:text-cyberturquoise transition-colors group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              creaverse.cs@gmail.com
            </a>
            <a href="tel:+37491991935" className="flex items-center justify-center gap-2 text-white hover:text-cyberturquoise transition-colors group">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              +374 91 99 19 35
            </a>
            <a href="tel:+37411991931" className="flex items-center justify-center gap-2 text-white hover:text-cyberturquoise transition-colors group">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              +374 11 99 19 31
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-white animate-fade-in">
            <MapPin className="w-5 h-5 text-cyberturquoise" />
            <span>Ալեք Մանուկյան 1, Երևան, Հայաստան</span>
          </div>
        </div>
      </div>
    </section>
  );
};
