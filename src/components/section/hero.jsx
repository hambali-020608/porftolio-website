import { ReactTyped } from "react-typed";
import Hero3D from "../canvas/Hero3D";
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
      
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between z-10 w-full max-w-7xl pt-20">

        {/* Left Content: Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0 space-y-8 md:space-y-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="space-y-4 md:space-y-6">
             <div className="flex items-center justify-center md:justify-start">
               <span className="px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
                {t.status}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.0] font-orbitron tracking-tighter">
              {t.hi} <br />
              <span className="text-cyan-400/90">Hambali</span>
            </h1>
          </div>

          <div className="h-16 md:h-12">
            <p className="text-base md:text-xl font-medium text-gray-300 font-outfit tracking-wide">
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

          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed font-light tracking-widest uppercase">
            {t.desc}
          </p>

          {/* Action & Coordinates */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 mt-8 md:mt-12">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center group relative px-10 py-4 bg-transparent border border-cyan-500/40 text-cyan-400 font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 overflow-hidden"
            >
              <span className="relative z-10 italic">{t.viewWork}</span>
              <div className="absolute inset-0 bg-cyan-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>

            <div className="flex items-center gap-6 border-l-0 sm:border-l border-gray-800 pl-0 sm:pl-8">
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
        </div>

        {/* Right Content: 3D Model Viewport */}
        <div
          className="w-full md:w-5/12 flex justify-center md:justify-end relative"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="relative w-full aspect-square max-w-[320px] md:max-w-[500px] border border-white/5 bg-gray-900/10 backdrop-blur-sm">
            <div className="viewport-bracket viewport-bracket-tl -translate-x-2 -translate-y-2"></div>
            <div className="viewport-bracket viewport-bracket-tr translate-x-2 -translate-y-2"></div>
            <div className="viewport-bracket viewport-bracket-bl -translate-x-2 translate-y-2"></div>
            <div className="viewport-bracket viewport-bracket-br translate-x-2 translate-y-2"></div>
            
            <div className="absolute top-3 left-3 font-mono text-[8px] text-gray-600 tracking-widest uppercase">
              Module: Hero_3D<br/>
              State: Active
            </div>

            <Hero3D />
          </div>
        </div>
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
