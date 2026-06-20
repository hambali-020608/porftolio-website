"use client";

import { useState, useEffect } from "react";
import SectionHeading from "../shared/SectionHeading";
import { expertiseCards, skillCategories } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import OrbitalExpertise from "../orbital_skill";
import { InfiniteSlider } from "../ui/infinite-slider";
import { cn } from "../../lib/utils";
import { db } from "../../constants/firebase_init";
import { collection, getDocs, query } from "firebase/firestore";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as PiIcons from "react-icons/pi";

const getIconComponent = (iconName) => {
  if (!iconName) return FaIcons.FaCode;
  if (typeof iconName !== 'string') return iconName;
  if (SiIcons[iconName]) return SiIcons[iconName];
  if (FaIcons[iconName]) return FaIcons[iconName];
  if (PiIcons[iconName]) return PiIcons[iconName];
  return FaIcons.FaCode;
};

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const expT = translations[language].expertise;
  const [activeCategory, setActiveCategory] = useState("all");
  const [expertiseCardsList, setExpertiseCardsList] = useState([]);
  const [techStackList, setTechStackList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const qSkills = query(collection(db, "skills"));
        const snapshotSkills = await getDocs(qSkills);
        const skillsDataArr = snapshotSkills.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setExpertiseCardsList(skillsDataArr);

        const qTech = query(collection(db, "tech_stack"));
        const snapshotTech = await getDocs(qTech);
        const techDataArr = snapshotTech.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTechStackList(techDataArr);
      } catch (err) {
        console.error("Error fetching skills/tech stack data:", err);
      } finally {
        setLoading(false);
      }
    };  
    fetchSkillsData();
  }, []);

  const filteredSkills = activeCategory === "all"
    ? techStackList
    : techStackList.filter(skill => skill.category === activeCategory);

  const translatedExpertise = expertiseCardsList.map(card => {
    const IconComponent = getIconComponent(card.icon);
    const translation = card.role === "AI" ? expT.ai : card.role === "FD" ? expT.fd : card.role === "DA" ? expT.da : {};
    return { 
      ...card, 
      ...translation,
      icon: IconComponent 
    };
  });

  // Divide skills into 3 rows for the slider
  const rowSize = Math.ceil(techStackList.length / 3);
  const rows = [
    techStackList.slice(0, rowSize),
    techStackList.slice(rowSize, rowSize * 2),
    techStackList.slice(rowSize * 2),
  ];

  if (loading || expertiseCardsList.length === 0 || techStackList.length === 0) return null;

  return (
    <section id="skills" aria-label="Skills and Expertise" className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          index="01"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Orbital Expertise View (Desktop) */}
        <div className="hidden lg:block mb-32">
          <OrbitalExpertise expertise={translatedExpertise} />
        </div>

        {/* Expertise Grid - Responsive Dashboard (Mobile/Tablet Fallback) */}
        <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-px border border-white/5 bg-white/5 mb-32 overflow-hidden">
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

                <div className="h-[1px]  w-0 bg-cyan-500/40 transition-all duration-700 group-hover:w-full"></div>
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
             x     {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sliding Tech Stack */}
          <div 
            className="space-y-4 md:space-y-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
            data-aos="fade-up"
          >
            {rows.map((rowSkills, rowIndex) => (
              <InfiniteSlider 
                key={rowIndex}
                gap={24} 
                reverse={rowIndex === 1} 
                speed={rowIndex === 1 ? 40 : 50}
                speedOnHover={15}
                className="py-2"
              >
                {rowSkills.map((skill, idx) => {
                  // Filter logic within slider if category is not 'all'
                  if (activeCategory !== "all" && skill.category !== activeCategory) return null;
                  
                  const IconComponent = getIconComponent(skill.icon);
                  return (
                    <div
                      key={skill.name}
                      className="group relative bg-gray-950/50 border border-white/5 p-4 md:p-6 min-w-[120px] md:min-w-[160px] flex items-center gap-4 transition-all duration-300 hover:bg-white/[0.05] hover:border-cyan-500/30"
                    >
                      <IconComponent className="text-2xl md:text-3xl text-gray-500 group-hover:text-cyan-400 transition-all duration-500 group-hover:scale-110" />
                      <span className="text-[10px] md:text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </InfiniteSlider>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

