
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-cybernavy via-cyberpurple/20 to-cyberblue/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            {t('about.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {language === 'en' ? 'Modern Curriculum' : 'Ժամանակակից ծրագիր'}
              </h3>
              <p className="text-white/80">
                {language === 'en' 
                  ? 'Latest technologies and teaching methods'
                  : 'Նորագույն տեխնոլոգիաներ և ուսուցման մեթոդներ'}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {language === 'en' ? 'Expert Teachers' : 'Փորձառու ուսուցիչներ'}
              </h3>
              <p className="text-white/80">
                {language === 'en'
                  ? 'Experienced professionals in the field'
                  : 'Փորձառու մասնագետներ ոլորտում'}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {language === 'en' ? 'Practical Learning' : 'Գործնական ուսուցում'}
              </h3>
              <p className="text-white/80">
                {language === 'en'
                  ? 'Hands-on experience with real projects'
                  : 'Գործնական փորձ իրական նախագծերի հետ'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
