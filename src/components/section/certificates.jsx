import React from "react";
import SectionHeading from "../shared/SectionHeading";
import { certificates } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

export default function Certificates() {
  const { language } = useLanguage();
  const t = translations[language].certificates;

  return (
    <section id="certificates" aria-label="Certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          index="03"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/5 bg-white/5 max-w-7xl mx-auto overflow-hidden">
          {certificates.map((cert, index) => (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-gray-950 p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <div className="space-y-8">
                {/* Header: Icon & ID */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-500">
                    <FaAward className="text-xl" />
                  </div>
                  <span className="font-mono text-[9px] text-gray-700 tracking-widest uppercase">
                    ID: {cert.id}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white font-orbitron tracking-wide group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-500">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-gray-700">{t.issuer}:</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-gray-700">{t.date}:</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Footer: Action */}
                <div className="pt-4">
                   <a 
                    href={cert.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[9px] text-cyan-500/60 font-bold uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-all"
                  >
                    {t.view} <FaExternalLinkAlt className="text-[8px]" />
                  </a>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-500"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
