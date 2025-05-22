
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
    "nav.certification": "Certification",
    "nav.contact": "Contact",
    "hero.title": "Welcome to Creaverse",
    "hero.subtitle": "Empowering the Next Generation of Tech Leaders",
    "hero.registerFree": "Register for Free Lesson",
    "modules.title": "Our Learning Modules",
    "modules.subtitle": "Explore our comprehensive curriculum",
    "about.title": "About Us",
    "about.description": "We are dedicated to providing high-quality IT education for children",
    "contact.title": "Contact Us",
    "contact.description": "Get in touch with us to learn more about our programs",
    "video.title": "Our Educational Videos",
    "video.comingSoon": "Educational videos coming soon",
    "certification.title": "Our Certification",
    "certification.description": "Upon completion of each semester, students receive official Creaverse certificates recognizing their achievements",
    "certification.officialCertificate": "Official Certificate",
    "certification.officialCertificateDesc": "Recognized certification of completion",
    "certification.skillAssessment": "Skill Assessment",
    "certification.skillAssessmentDesc": "Detailed evaluation of acquired skills",
    "certification.achievementRecognition": "Achievement Recognition",
    "certification.achievementRecognitionDesc": "Celebration of student accomplishments",
    "seo.title": "Creaverse - IT Education for Kids in Yerevan, Armenia",
    "seo.description": "Specialized IT school for children in Yerevan, Armenia offering coding, robotics, and digital skills education",
  },
  am: {
    "nav.home": "Գլխավոր",
    "nav.courses": "Դասընթացներ",
    "nav.about": "Մեր մասին",
    "nav.certification": "Հավաստագրում",
    "nav.contact": "Կապ",
    "hero.title": "Բարի գալուստ Creaverse",
    "hero.subtitle": "Ձևավորում ենք տեխնոլոգիական առաջնորդների նոր սերունդ",
    "hero.registerFree": "Գրանցվել անվճար դասի",
    "modules.title": "Մեր ուսուցման մոդուլները",
    "modules.subtitle": "Բացահայտեք մեր համապարփակ ուսումնական ծրագիրը",
    "about.title": "Մեր մասին",
    "about.description": "Մենք նվիրված ենք երեխաներին բարձրորակ IT կրթություն տրամադրելուն",
    "contact.title": "Կապ մեզ հետ",
    "contact.description": "Կապվեք մեզ հետ մեր ծրագրերի մասին ավելին իմանալու համար",
    "video.title": "Մեր ուսուցողական տեսանյութերը",
    "video.comingSoon": "Ուսուցողական տեսանյութերը շուտով կհասանելի լինեն",
    "certification.title": "Մեր հավաստագրերը",
    "certification.description": "Յուրաքանչյուր կիսամյակի ավարտին ուսանողները ստանում են Creaverse-ի պաշտոնական հավաստագրեր՝ ճանաչելով իրենց ձեռքբերումները",
    "certification.officialCertificate": "Պաշտոնական հավաստագիր",
    "certification.officialCertificateDesc": "Ավարտի ճանաչված հավաստագիր",
    "certification.skillAssessment": "Հմտությունների գնահատում",
    "certification.skillAssessmentDesc": "Ձեռք բերված հմտությունների մանրամասն գնահատում",
    "certification.achievementRecognition": "Ձեռքբերումների ճանաչում",
    "certification.achievementRecognitionDesc": "Ուսանողների ձեռքբերումների տոնակատարություն",
    "seo.title": "Creaverse - IT կրթություն երեխաների համար Երևանում, Հայաստան",
    "seo.description": "Մասնագիտացված IT դպրոց երեխաների համար Երևանում, Հայաստան՝ առաջարկելով ծրագրավորման, ռոբոտաշինության և թվային հմտությունների ուսուցում",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('am');

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
