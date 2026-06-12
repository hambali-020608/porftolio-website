"use client";

import React, { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { certificates } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { FaExternalLinkAlt, FaAward, FaFilePdf, FaDownload, FaArrowLeft } from "react-icons/fa";

export default function Certificates() {
  const { language } = useLanguage();
  const t = translations[language].certificates;
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="certificates" aria-label="Certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          index="03"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="perspective-1000 h-[350px] w-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className={`relative w-full h-full flip-card-inner preserve-3d ${flippedCards[index] ? 'rotate-x-180' : ''}`}
              >
                {/* FRONT SIDE */}
                <article className="absolute inset-0 backface-hidden bg-gray-950 border border-white/5 p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-500">
                        <FaAward className="text-xl" />
                      </div>
                      <span className="font-mono text-[9px] text-gray-700 tracking-widest uppercase">
                        ID: {cert.id}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white font-orbitron tracking-wide">
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
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={() => toggleFlip(index)}
                      className="inline-flex items-center gap-2 text-[9px] text-cyan-500/60 font-bold uppercase tracking-[0.2em] hover:text-cyan-400 transition-all group"
                    >
                      {t.view} <FaExternalLinkAlt className="text-[8px] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Aesthetic Corner */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-white/10"></div>
                </article>

                {/* BACK SIDE (Flipped) */}
                <article className="absolute inset-0 backface-hidden bg-gray-900 border border-cyan-500/20 p-8 md:p-10 flex flex-col justify-between rotate-x-180">
                  <div className="space-y-6 text-center pt-8">
                    <div className="w-16 h-16 mx-auto rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                      <FaFilePdf size={32} />
                    </div>
                    <div className="space-y-2">
                      <p className="font-mono text-[8px] text-cyan-500/60 tracking-[0.3em] uppercase">Ready_to_Download</p>
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest">{cert.id}.PDF</h4>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a 
                      href={cert.pdf}
                      download
                      className="w-full flex items-center justify-center gap-3 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-[0_0_15px_rgba(8,145,178,0.3)]"
                    >
                      <FaDownload /> {t.download}
                    </a>
                    
                    <button 
                      onClick={() => toggleFlip(index)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-[8px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
                    >
                      <FaArrowLeft className="text-[7px]" /> {t.back}
                    </button>
                  </div>

                  {/* Technical Scanline effect on back */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                    <div className="w-full h-1/2 bg-cyan-500/20 blur-3xl animate-pulse"></div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
