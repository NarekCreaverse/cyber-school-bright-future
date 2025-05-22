
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

export const SEO = () => {
  const { t, language } = useLanguage();
  
  return (
    <Helmet>
      <title>{t('seo.title')}</title>
      <meta name="description" content={t('seo.description')} />
      <meta name="keywords" content="IT education, kids coding, programming for children, robotics for kids, Yerevan, Armenia, technology education" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t('seo.title')} />
      <meta property="og:description" content={t('seo.description')} />
      <meta property="og:locale" content={language === 'am' ? 'hy_AM' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('seo.title')} />
      <meta name="twitter:description" content={t('seo.description')} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="AM" />
      <meta name="geo.placename" content="Yerevan" />
      <meta name="geo.position" content="40.183333;44.516667" />
      <meta name="ICBM" content="40.183333, 44.516667" />
    </Helmet>
  );
};
