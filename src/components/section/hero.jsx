"use client";
import { ReactTyped } from "react-typed";
import { motion } from "motion/react";
// import Hero3D from "../canvas/Hero3D";
import { socialLinks } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[100svh] flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Refined Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full blueprint-grid-fine opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto flex flex-col items-center justify-center z-10 w-full max-w-5xl pt-20 text-center">

        {/* Content: Text */}
        <motion.div
          className="w-full space-y-8 md:space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 md:space-y-6">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.0] font-orbitron tracking-tighter">
              {t.hi} <br />
              <span className="text-cyan-400/90">Hambali Subastian</span>
            </h1>
          </div>

          <div className="h-16 md:h-12">
            <p className="text-base md:text-3xl font-medium text-gray-300 font-outfit tracking-wide">
              {t.iam}{" "}
              <ReactTyped
                key={language}
                strings={t.roles}
                typeSpeed={50}
                backSpeed={40}
                className="text-white font-bold border-b border-cyan-500/40"
                loop
              />
            </p>
          </div>

          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto leading-relaxed font-light tracking-widest uppercase">
            {t.desc}
          </p>
          {/* Action & Coordinates */}
          <div className="flex flex-col items-center gap-8 mt-8 md:mt-12">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center group relative px-10 py-4 bg-transparent border border-cyan-500/40 text-cyan-400 font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 overflow-hidden"
            >
              <span className="relative z-10 italic">{t.viewWork}</span>
              <div className="absolute inset-0 bg-cyan-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>

            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl text-gray-500 transition-all duration-300 hover:text-cyan-400 hover:-translate-y-1`}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#skills"
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group transition-colors"
      >
        <span className="font-mono text-[8px] md:text-[9px] text-gray-500 tracking-[0.4em] group-hover:text-cyan-400 transition-colors uppercase">Scroll</span>
        <div className="w-[1px] h-10 md:h-12 bg-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-cyan-500 animate-[scanline_2s_linear_infinite]"></div>
        </div>
      </a>
    </section>
  );
}
