"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import { projects } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" aria-label="Selected Projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          index="02"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px border border-white/5 bg-white/5 max-w-7xl mx-auto overflow-hidden">
          {visibleProjects.map((project, index) => (
            <article
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-gray-950 p-6 sm:p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.01]"
            >
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-8 md:gap-10">
                {/* Project Image Container */}
                <div className="relative w-full sm:w-2/5 lg:w-full xl:w-2/5 aspect-[16/9] sm:aspect-[4/3] overflow-hidden border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-gray-950/80 border border-white/10 text-[7px] md:text-[8px] font-mono font-bold text-gray-400 tracking-widest uppercase">
                    ID: {project.id}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                        <span className="text-[8px] md:text-[9px] font-mono text-cyan-500/80 tracking-widest uppercase">{t.status}</span>
                      </div>
                      <h3 className="text-lg md:text-2xl font-bold text-white font-orbitron group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3 md:gap-4 shrink-0">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        <FaGithub size={18}/>
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-cyan-400 transition-colors"
                      >
                        <FaExternalLinkAlt size={16}/>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 bg-transparent border border-white/10 text-gray-500 text-[8px] md:text-[9px] font-bold uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Action Button */}
        {projects.length > 4 && (
          <div className="mt-16 md:mt-20 text-center" data-aos="fade-up">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 md:px-10 py-3 md:py-4 bg-transparent border border-white/10 text-gray-400 text-[9px] md:text-[10px] font-bold tracking-[0.4em] hover:border-cyan-500 hover:text-cyan-400 transition-all uppercase"
            >
              {showAll ? t.showLess : t.viewAll}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
