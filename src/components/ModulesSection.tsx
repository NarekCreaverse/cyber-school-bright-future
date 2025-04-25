
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Robot, Terminal, Gamepad, BookText, MonitorPlay, Image, School } from "lucide-react";

const moduleCategories = [
  {
    title: { en: "Beginner Programming", am: "Սկսնակ ծրագրավորում" },
    icon: <Code className="w-6 h-6 text-cyberturquoise" />,
    modules: ["PictoWorld", "Scratch Junior", "Code Monkey", "Scratch", "Tynker", "Kodu Game Lab", "Google Blockly"]
  },
  {
    title: { en: "Game Development", am: "Խաղերի ստեղծում" },
    icon: <Gamepad className="w-6 h-6 text-cyberturquoise" />,
    modules: ["Minecraft education", "Alice 3D", "Minecraft in Scratch", "Roblox Studio", "Unity", "Unreal Engine"]
  },
  {
    title: { en: "Robotics & Hardware", am: "Ռոբոտաշինություն և սարքավորումներ" },
    icon: <Robot className="w-6 h-6 text-cyberturquoise" />,
    modules: ["Robotics Bases", "PC Building", "Robotics based on arduino", "IoT", "TinkerCad"]
  },
  {
    title: { en: "Design & Media", am: "Դիզայն և մեդիա" },
    icon: <Image className="w-6 h-6 text-cyberturquoise" />,
    modules: ["PowerPoint and Canva", "Adobe Premiere Pro", "Adobe Photoshop", "Figma", "Adobe Illustrator", "GIF Animation", "3D MAX"]
  },
  {
    title: { en: "Advanced Programming", am: "Առաջադեմ ծրագրավորում" },
    icon: <Terminal className="w-6 h-6 text-cyberturquoise" />,
    modules: ["HTML+CSS", "Python", "JavaScript", "Java", "С++", "Kotlin", "C#", "PHP + SQL"]
  },
];

export const ModulesSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-cybernavy via-cyberpurple/20 to-cyberblue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Our Learning Modules' : 'Մեր ուսուցման մոդուլները'}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Explore our comprehensive curriculum designed to nurture future tech leaders'
              : 'Բացահայտեք մեր համապարփակ ուսումնական ծրագիրը՝ նախատեսված ապագա տեխնոլոգիական առաջնորդներ պատրաստելու համար'}
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {moduleCategories.map((category, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {category.icon}
                      <h3 className="text-xl font-semibold text-white">
                        {category.title[language as 'en' | 'am']}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.modules.map((module, idx) => (
                        <li key={idx} className="text-white/80 hover:text-cyberturquoise transition-colors">
                          {module}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-cyberturquoise hover:bg-cyberturquoise/80" />
          <CarouselNext className="bg-cyberturquoise hover:bg-cyberturquoise/80" />
        </Carousel>
      </div>
    </section>
  );
};
