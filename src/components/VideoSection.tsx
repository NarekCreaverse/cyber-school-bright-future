
import { useLanguage } from "@/contexts/LanguageContext";

export const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-cybernavy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 animate-fade-in">
          {t('video.title')}
        </h2>
        <div className="max-w-3xl mx-auto bg-white/5 rounded-lg p-8 text-center">
          <p className="text-white/80">{t('video.comingSoon')}</p>
        </div>
      </div>
    </section>
  );
};
