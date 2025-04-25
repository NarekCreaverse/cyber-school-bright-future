
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.courses": "Courses",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title": "Welcome to Cyber School",
    "hero.subtitle": "Empowering the Next Generation of Tech Leaders",
    "modules.title": "Our Learning Modules",
    "modules.subtitle": "Explore our comprehensive curriculum",
    "video.title": "Featured Videos",
    "video.comingSoon": "Video content coming soon",
    "benefits.title": "Why Choose Us",
    "benefits.item1": "Expert Teachers",
    "benefits.item2": "Interactive Learning",
    "benefits.item3": "Modern Curriculum",
  },
  am: {
    "nav.home": "Գլխավոր",
    "nav.courses": "Դասընթացներ",
    "nav.about": "Մեր մասին",
    "nav.contact": "Կապ",
    "hero.title": "Բարի գալուստ Կիբեռ դպրոց",
    "hero.subtitle": "Ձևավորում ենք տեխնոլոգիական առաջնորդների նոր սերունդ",
    "modules.title": "Մեր ուսուցման մոդուլները",
    "modules.subtitle": "Բացահայտեք մեր համապարփակ ուսումնական ծրագիրը",
    "video.title": "Տեսանյութեր",
    "video.comingSoon": "Տեսանյութերը շուտով",
    "benefits.title": "Ինչու՞ ընտրել մեզ",
    "benefits.item1": "Փորձառու ուսուցիչներ",
    "benefits.item2": "Ինտերակտիվ ուսուցում",
    "benefits.item3": "Ժամանակակից ծրագիր",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
