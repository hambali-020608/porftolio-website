"use client";

import { FaRocket, FaEnvelope, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import { stats } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const translatedStats = stats.map(stat => {
    if (stat.label === "Years Experience" || stat.label === "Tahun Pengalaman") return { ...stat, label: t.stats.years };
    if (stat.label === "Projects Completed" || stat.label === "Proyek Selesai") return { ...stat, label: t.stats.projects };
    if (stat.label === "Technologies Mastered" || stat.label === "Teknologi Dikuasai") return { ...stat, label: t.stats.tech };
    return stat;
  });

  return (
    <section id="about" aria-label="About Me" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          index="04"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 border border-white/5 bg-gray-900/10 backdrop-blur-sm">

          {/* Left Column: Image Area */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-5/12 p-6 sm:p-8 md:p-12 lg:border-r border-white/5"
          >
            <div className="relative aspect-square w-full max-w-[320px] md:max-w-[400px] mx-auto bg-gray-900">
               {/* Viewport Brackets */}
              <div className="viewport-bracket viewport-bracket-tl -translate-x-2 -translate-y-2"></div>
              <div className="viewport-bracket viewport-bracket-br translate-x-2 translate-y-2 opacity-50"></div>
              
              <div className="relative w-full h-full overflow-hidden border border-white/10 group">
                <img
                  src="/my2.jpeg"
                  alt="Hambali Subastian"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Metadata */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gray-950 border border-white/10 p-3 md:p-4 font-mono text-[7px] md:text-[8px] tracking-[0.2em] text-gray-500 uppercase space-y-1">
                <p>NAME: HAMBALI SUBASTIAN</p>
                <p>ROLE: DEVELOPER</p>
                <p>CITY: INDONESIA</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-7/12 p-6 sm:p-8 md:p-12 space-y-8 md:space-y-12 flex flex-col justify-center"
          >
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-4xl font-black text-white font-orbitron tracking-tight">
                {t.passionate} <span className="text-cyan-500/80">{t.solving}</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-xs md:text-base font-light tracking-wide">
                {t.bio}
              </p>
            </div>

            {/* Stats Grid - Data Driven */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
              {translatedStats.map((stat, idx) => (
                <div key={idx} className="bg-gray-950/40 p-4 md:p-6 text-center group hover:bg-white/[0.02] transition-colors">
                  <p className="text-[8px] md:text-[9px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-2">{stat.label}</p>
                  <h4 className="text-xl md:text-3xl font-black text-white font-orbitron group-hover:text-cyan-400 transition-colors">{stat.value}</h4>
                </div>
              ))}
            </div>

            {/* Contact Info Directory & CV */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8 md:gap-12 pt-4">
               <div className="flex flex-col gap-3 md:gap-4 flex-1">
                <div className="flex items-center gap-3 md:gap-4 text-gray-500 hover:text-cyan-400 transition-colors group cursor-pointer">
                  <span className="font-mono text-[8px] md:text-[10px] text-gray-700 group-hover:text-cyan-600 transition-colors">01_EMAIL</span>
                  <div className="h-[1px] flex-1 bg-gray-800/50"></div>
                  <span className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase">bastian.soltech@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-gray-500 group">
                  <span className="font-mono text-[8px] md:text-[10px] text-gray-700">02_LOCATION</span>
                  <div className="h-[1px] flex-1 bg-gray-800/50"></div>
                  <span className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase">Indonesia (GMT+7)</span>
                </div>
              </div>

              {/* CV Download Button */}
              <div className="sm:border-l border-white/5 sm:pl-8 md:pl-12 flex items-center">
                <a 
                  href="/CV_HAMBALI_SUBASTIAN.pdf" 
                  download="CV_Hambali_Subastian.pdf"
                  className="w-full sm:w-auto group relative px-8 py-4 bg-transparent border border-cyan-500/30 text-cyan-400 flex items-center justify-center gap-3 transition-all hover:bg-cyan-500 hover:text-white"
                >
                  <FaFileDownload className="text-sm" />
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase italic">{t.download}</span>
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
