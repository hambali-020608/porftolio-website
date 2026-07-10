"use client";

import { useState, useEffect, useMemo, useCallback, memo, useRef } from "react";
import { useSpring, useTransition, animated, config, useSprings } from "@react-spring/web";
import SectionHeading from "../shared/SectionHeading";
import { skillCategories } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import OrbitalExpertise from "../orbital_skill";
import { InfiniteSlider } from "../ui/infinite-slider";
import { db } from "../../constants/firebase_init";
import { collection, getDocs, query } from "firebase/firestore";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as PiIcons from "react-icons/pi";

// --- ICON MAP ---
const iconMap = new Map();
Object.entries(SiIcons).forEach(([key, val]) => iconMap.set(key, val));
Object.entries(FaIcons).forEach(([key, val]) => iconMap.set(key, val));
Object.entries(PiIcons).forEach(([key, val]) => iconMap.set(key, val));
const DEFAULT_ICON = FaIcons.FaCode;

const getIconComponent = (iconName) => {
  if (!iconName) return DEFAULT_ICON;
  if (typeof iconName !== 'string') return iconName;
  return iconMap.get(iconName) || DEFAULT_ICON;
};

// --- SKELETON DENGAN REACT SPRING ANIMATION ---
const SkillsSkeleton = memo(function SkillsSkeleton() {
  const mockNodes = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({ angle: i * 60 })), 
    []
  );

  // Spring animation untuk pulse effect
  const pulseSpring = useSpring({
    from: { opacity: 0.3, transform: 'scale(0.95)' },
    to: { opacity: 0.7, transform: 'scale(1.05)' },
    config: config.slow,
    loop: { reverse: true },
  });

  // Spring animation untuk orbiting nodes
  const [nodeSprings] = useSprings(mockNodes.length, (index) => ({
    from: { 
      transform: `rotate(${index * 60}deg) translateX(110px) rotate(${-index * 60}deg)`,
      opacity: 0.3 
    },
    to: { 
      transform: `rotate(${index * 60 + 360}deg) translateX(110px) rotate(${-index * 60 - 360}deg)`,
      opacity: 0.6 
    },
    config: { duration: 20000 },
    loop: { reverse: false },
    delay: index * 200,
  }));

  return (
    <div className="w-full space-y-24 will-change-[opacity]">
      {/* 1. Skeleton Orbital Centerpiece */}
      <div className="w-full max-w-[450px] mx-auto aspect-square flex items-center justify-center relative my-16 select-none pointer-events-none">
        
        {/* Core Tengah dengan Pulse Animation */}
        <animated.div 
          style={pulseSpring}
          className="w-20 h-20 md:w-24 md:h-24 bg-gray-900 border border-cyan-500/20 flex flex-col items-center justify-center relative"
        >
          <div className="text-[8px] font-mono text-cyan-500/30 tracking-widest">
            LOADING
          </div>
          <div className="text-[6px] font-mono text-gray-700 tracking-[0.2em] mt-1">
            SYS_INIT
          </div>
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-cyan-500/40"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-cyan-500/40"></div>
        </animated.div>

        {/* Ring Orbit dengan React Spring */}
        <animated.div 
          style={{
            transform: useSpring({
              from: { transform: 'rotate(0deg)' },
              to: { transform: 'rotate(360deg)' },
              config: { duration: 40000 },
              loop: { reverse: false },
            }).transform,
          }}
          className="absolute w-[60%] h-[60%] border border-dashed border-cyan-500/10 rounded-full"
        />

        {/* Node-node dengan Spring Animation */}
        {mockNodes.map((node, idx) => {
          const radian = (node.angle * Math.PI) / 180;
          const x = 110 * Math.cos(radian);
          const y = 110 * Math.sin(radian);
          
          return (
            <animated.div
              key={idx}
              style={nodeSprings[idx]}
              className="absolute w-12 h-12 md:w-16 md:h-16 bg-gray-900/60 border border-white/5 flex items-center justify-center"
            >
              <div className="w-6 h-6 bg-white/5 rounded"></div>
              <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-cyan-500/30"></div>
            </animated.div>
          );
        })}
      </div>

      {/* 2. Skeleton Slider */}
      <div className="space-y-4 pt-12 border-t border-white/5">
        {[1, 2].map((row) => (
          <div key={row} className="flex gap-4 overflow-hidden w-full opacity-40 select-none pointer-events-none">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-950/40 border border-white/5 p-4 md:p-6 min-w-[140px] md:min-w-[180px] flex items-center gap-4"
              >
                <div className="w-8 h-8 bg-white/5 rounded"></div>
                <div className="h-3 bg-white/10 w-20 rounded"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

// --- TECH STACK ITEM DENGAN REACT SPRING ---
const TechStackItem = memo(function TechStackItem({ skill, index, style }) {
  const IconComponent = useMemo(() => getIconComponent(skill.icon), [skill.icon]);
  
  // Spring animation untuk hover effect
  const [spring, api] = useSpring(() => ({
    transform: 'scale(1)',
    boxShadow: '0 0 0px rgba(34,211,238,0)',
    config: { tension: 300, friction: 10 },
  }));

  const handleHoverStart = useCallback(() => {
    api.start({
      transform: 'scale(1.05)',
      boxShadow: '0 0 30px rgba(34,211,238,0.2)',
    });
  }, [api]);

  const handleHoverEnd = useCallback(() => {
    api.start({
      transform: 'scale(1)',
      boxShadow: '0 0 0px rgba(34,211,238,0)',
    });
  }, [api]);

  return (
    <animated.div
      style={{ ...style, ...spring }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className="group relative bg-gray-950/50 border border-white/5 p-4 md:p-6 min-w-[120px] md:min-w-[160px] flex items-center gap-4 transition-colors duration-300 hover:bg-white/[0.05] hover:border-cyan-500/30 cursor-pointer"
    >
      <IconComponent className="text-2xl md:text-3xl text-gray-500 group-hover:text-cyan-400 transition-all duration-500 group-hover:scale-110" />
      <span className="text-[10px] md:text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">
        {skill.name}
      </span>
    </animated.div>
  );
});

// --- TECH STACK ROW COMPONENT ---
const TechStackRow = memo(function TechStackRow({ rowSkills, rowIndex, baseIndex }) {
  // Spring untuk row entrance - sekarang di top level component
  const rowSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: rowIndex * 100 + 300,
    config: config.gentle,
  });

  // Buat entrance animation untuk setiap item
  const itemSprings = useSprings(
    rowSkills.length,
    rowSkills.map((_, idx) => ({
      from: { 
        opacity: 0, 
        transform: 'translateY(20px) scale(0.9)',
      },
      to: { 
        opacity: 1, 
        transform: 'translateY(0px) scale(1)',
      },
      delay: (baseIndex + idx) * 50,
      config: config.gentle,
    }))
  );

  return (
    <animated.div style={rowSpring}>
      <InfiniteSlider 
        gap={24} 
        reverse={rowIndex === 1} 
        speed={rowIndex === 1 ? 40 : 50}
        speedOnHover={15}
        className="py-2"
      >
        {rowSkills.map((skill, idx) => (
          <TechStackItem 
            key={skill.name} 
            skill={skill} 
            index={baseIndex + idx}
            style={itemSprings[idx]}
          />
        ))}
      </InfiniteSlider>
    </animated.div>
  );
});

// --- MAIN COMPONENT ---
export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const [activeCategory, setActiveCategory] = useState("all");
  const [expertiseCardsList, setExpertiseCardsList] = useState([]);
  const [techStackList, setTechStackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  // --- FETCH DATA ---
  useEffect(() => {
    const abortController = new AbortController();
    let isMounted = true;

    const fetchSkillsData = async () => {
      try {
        const [skillsSnapshot, techSnapshot] = await Promise.all([
          getDocs(query(collection(db, "skills"))),
          getDocs(query(collection(db, "tech_stack")))
        ]);

        if (!isMounted || abortController.signal.aborted) return;

        const skillsDataArr = skillsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const techDataArr = techSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        setExpertiseCardsList(skillsDataArr);
        setTechStackList(techDataArr);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching skills/tech stack data:", err);
        if (isMounted) setLoading(false);
      }
    };

    fetchSkillsData();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  // --- FILTERING ---
  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return techStackList;
    return techStackList.filter(skill => skill.category === activeCategory);
  }, [activeCategory, techStackList]);

  // --- ROW SLICING ---
  const rows = useMemo(() => {
    if (filteredSkills.length === 0) return [];
    const chunkSize = Math.ceil(filteredSkills.length / 3);
    const result = [];
    for (let i = 0; i < filteredSkills.length; i += chunkSize) {
      result.push(filteredSkills.slice(i, i + chunkSize));
    }
    return result;
  }, [filteredSkills]);

  // --- HANDLE CATEGORY CHANGE ---
  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  // --- SECTION ENTRANCE ANIMATION ---
  const sectionSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.gentle,
    delay: 200,
  });

  // --- CATEGORY BUTTONS TRANSITION ---
  const categoryTransition = useTransition(skillCategories, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
    config: config.spring,
    trail: 50,
  });

  return (
    <animated.section 
      ref={containerRef}
      style={sectionSpring}
      id="skills" 
      aria-label="Skills and Expertise" 
      className="py-24 relative overflow-hidden subpixel-antialiased"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          index="01"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        {loading || expertiseCardsList.length === 0 || techStackList.length === 0 ? (
          <SkillsSkeleton />
        ) : (
          <>
            {/* Orbital Expertise View */}
            <div className="mb-32">
              <OrbitalExpertise expertise={expertiseCardsList} />
            </div>

            {/* Tech Stack Header */}
            <div className="space-y-12 md:space-y-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8">
                <h3 className="text-lg md:text-xl font-bold text-white font-orbitron tracking-widest uppercase flex items-center gap-4">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  {t.techStack}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {categoryTransition((style, cat) => (
                    <animated.button
                      key={cat.id}
                      style={style}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`px-3 md:px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                        activeCategory === cat.id 
                        ? "bg-cyan-500 text-white border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
                        : "text-gray-500 border-white/10 hover:border-cyan-500/40 hover:text-cyan-400"
                      }`}
                    >
                      {cat.label}
                    </animated.button>
                  ))}
                </div>
              </div>

              {/* Sliding Tech Stack */}
              <div className="space-y-4 md:space-y-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                {rows.map((rowSkills, rowIndex) => {
                  if (rowSkills.length === 0) return null;
                  
                  // Hitung base index untuk stagger effect
                  const baseIndex = rows
                    .slice(0, rowIndex)
                    .reduce((acc, row) => acc + row.length, 0);
                  
                  return (
                    <TechStackRow
                      key={rowIndex}
                      rowSkills={rowSkills}
                      rowIndex={rowIndex}
                      baseIndex={baseIndex}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </animated.section>
  );
}