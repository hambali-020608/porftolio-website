"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../shared/SectionHeading";
import { projects } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { ExpandableCard } from "../card";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Extend projects for smooth infinite loop
  const extendedProjects = [...projects, ...projects.slice(0, cardsPerView)];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    if (currentIndex === 0) {
      // If at start, jump to the end of first set first, then move back
      // But for simplicity, let's just go back with wrap
      setCurrentIndex(projects.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleAnimationComplete = () => {
    setIsTransitioning(false);
    if (currentIndex >= projects.length) {
      // Silent jump back to start
      setCurrentIndex(0);
    }
  };

  return (
    <section id="projects" aria-label="Selected Projects" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          index="02"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="flex justify-center items-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="group relative p-4 bg-gray-950 border border-white/10 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
            aria-label="Previous Project"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-cyan-500/50"></div>
            <FaChevronLeft size={14} />
          </motion.button>
          
          <div className="text-[10px] font-mono text-gray-600 tracking-[0.3em] uppercase hidden sm:block">
            Navigation_System
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="group relative p-4 bg-gray-950 border border-white/10 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
            aria-label="Next Project"
          >
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan-500/50"></div>
            <FaChevronRight size={14} />
          </motion.button>
        </div>

        <div className="relative overflow-hidden -mx-4 px-4">
          <motion.div
            className="flex"
            animate={{ 
              x: `-${currentIndex * (100 / cardsPerView)}%` 
            }}
            transition={isTransitioning ? { 
              type: "spring", 
              stiffness: 180, 
              damping: 24,
              mass: 0.8
            } : { duration: 0 }}
            onAnimationComplete={handleAnimationComplete}
          >
            {extendedProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                style={{
                  width: `${100 / cardsPerView}%`,
                  flexShrink: 0
                }}
                className="px-4"
              >
                <ExpandableCard
                  id={project.id}
                  title={project.title}
                  description={project.tags.slice(0, 2).join(" | ")}
                  src={project.image}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                      <span className="text-[10px] font-mono text-cyan-500 tracking-widest uppercase">
                    
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 bg-white/5 border border-white/10 text-gray-500 text-[8px] font-bold uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-white/5">
                      {project.github !== "#" && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[10px] font-mono tracking-widest"
                        >
                          <FaGithub size={14}/>
                          SRC_CODE
                        </a>
                      )}
                      {project.live !== "#" && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cyan-500/70 hover:text-cyan-400 transition-colors text-[10px] font-mono tracking-widest"
                        >
                          <FaExternalLinkAlt size={12}/>
                          LIVE_SYS
                        </a>
                      )}
                    </div>
                  </div>
                </ExpandableCard>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button 
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
              className={`h-[2px] transition-all duration-500 ${
                index === (currentIndex % projects.length)
                  ? "w-8 bg-cyan-500" 
                  : "w-4 bg-white/10"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
