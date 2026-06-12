"use client";

import { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { expertiseCards, skillCategories, skillsData } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const expT = translations[language].expertise;
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const translatedExpertise = expertiseCards.map(card => {
    if (card.role === "AI") return { ...card, ...expT.ai };
    if (card.role === "FD") return { ...card, ...expT.fd };
    if (card.role === "DA") return { ...card, ...expT.da };
    return card;
  });

  return (
    <section id="skills" aria-label="Skills and Expertise" className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          index="01"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Expertise Grid - Responsive Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-white/5 bg-white/5 mb-32 overflow-hidden">
          {translatedExpertise.map((card, idx) => (
            <div
              key={card.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative p-8 md:p-12 bg-gray-950 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <div className="relative z-10 space-y-6 md:space-y-8">
                <div className="flex items-center justify-between">
                   <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded border border-white/10 text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-500">
                    <card.icon className="text-xl md:text-2xl" />
                  </div>
                  <span className="font-mono text-[9px] md:text-[10px] text-gray-700 tracking-widest uppercase">
                    Ref: {card.role}
                  </span>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-white font-orbitron tracking-wide group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light tracking-wide">
                    {card.desc}
                  </p>
                </div>

                <div className="h-[1px] w-0 bg-cyan-500/40 transition-all duration-700 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Header */}
        <div className="space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8">
            <h3 data-aos="fade-right" className="text-lg md:text-xl font-bold text-white font-orbitron tracking-widest uppercase flex items-center gap-4">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              {t.techStack}
            </h3>
            
            <div 
              data-aos="fade-left"
              className="flex flex-wrap justify-center gap-2"
            >
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 md:px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                    activeCategory === cat.id 
                    ? "bg-cyan-500 text-white border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
                    : "text-gray-500 border-white/10 hover:border-cyan-500/40 hover:text-cyan-400"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px border border-white/5 bg-white/5 overflow-hidden">
            {filteredSkills.map((skill, idx) => (
              <div
                key={skill.name}
                data-aos="zoom-in"
                data-aos-delay={idx % 6 * 50}
                className="group relative bg-gray-950 p-8 md:p-10 flex flex-col items-center justify-center gap-4 md:gap-6 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <skill.icon className="text-3xl md:text-4xl text-gray-600 group-hover:text-cyan-400 transition-all duration-500 group-hover:scale-110" />
                <span className="text-[9px] md:text-[10px] font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-[0.2em]">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
