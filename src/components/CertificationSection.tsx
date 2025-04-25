
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, BookCheck, GraduationCap } from "lucide-react";

export const CertificationSection = () => {
  const { language } = useLanguage();

  return (
    <section id="certification" className="py-24 bg-gradient-to-br from-cybernavy to-cyberpurple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {language === 'en' ? 'Our Certification' : 'Մեր հավաստագրերը'}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-12 animate-fade-in">
            {language === 'en' 
              ? 'Upon completion of each semester, students receive official Creaverse certificates recognizing their achievements'
              : 'Յուրաքանչյուր կիսամյակի ավարտին ուսանողները ստանում են Creaverse-ի պաշտոնական հավաստագրեր՝ ճանաչելով իրենց ձեռքբերումները'}
          </p>

          <div className="relative w-full max-w-2xl mx-auto mb-12 group">
            <img 
              src="/lovable-uploads/4e13bd3c-1eb7-4305-83ea-c8321845070a.png"
              alt="Creaverse Certificate" 
              className="w-full h-auto rounded-lg shadow-xl animate-fade-in hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-cyberturquoise animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {language === 'en' ? 'Official Certificate' : 'Պաշտոնական հավաստագիր'}
              </h3>
              <p className="text-white/80">
                {language === 'en'
                  ? 'Recognized certification of completion'
                  : 'Ավարտի ճանաչված հավաստագիր'}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <BookCheck className="w-12 h-12 text-cyberturquoise animate-pulse delay-100" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {language === 'en' ? 'Skill Assessment' : 'Հմտությունների գնահատում'}
              </h3>
              <p className="text-white/80">
                {language === 'en'
                  ? 'Detailed evaluation of acquired skills'
                  : 'Ձեռք բերված հմտությունների մանրամասն գնահատում'}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-cyberturquoise animate-pulse delay-200" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {language === 'en' ? 'Achievement Recognition' : 'Ձեռքբերումների ճանաչում'}
              </h3>
              <p className="text-white/80">
                {language === 'en'
                  ? 'Celebration of student accomplishments'
                  : 'Ուսանողների ձեռքբերումների տոնակատարություն'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
