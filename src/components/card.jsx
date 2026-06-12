"use client";

import * as React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../constants/translations";

// Simple utility for merging classes
const cn = (...classes) => classes.filter(Boolean).join(" ");

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  id: projectId,
}) {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = (e) => {
    // Prevent flip if clicking on links inside the card (back side)
    if (e.target.closest('a')) return;
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={cn("group/flipping-card [perspective:1200px] h-[450px] w-full cursor-pointer", className)}
      onClick={handleFlip}
    >
      <div
        className={cn(
          "relative h-full w-full transition-all duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : "group-hover/flipping-card:[transform:rotateY(180deg)]"
        )}
      >
        {/* Front Face: Visual Preview */}
        <div className="absolute inset-0 h-full w-full bg-gray-950 border border-white/10 [transform-style:preserve-3d] [backface-visibility:hidden] overflow-hidden">
          {/* Decorative Brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20 z-20"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/20 z-20"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/20 z-20"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20 z-20"></div>

          <div className="relative h-full w-full flex flex-col [transform:translateZ(50px)]">
            <div className="relative flex-1 overflow-hidden">
              <img 
                src={src} 
                alt={title} 
                className="w-full h-full object-cover group-hover/flipping-card:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-3 left-3 px-2 py-1 bg-gray-900/90 border border-white/10 text-[8px] font-mono text-gray-500 tracking-widest uppercase">
                ID_{projectId || "00"}
              </div>
            </div>

            <div className="p-6 bg-gray-950 border-t border-white/5 space-y-4">
              <div className="space-y-1">
                <p className="text-[9px] font-mono text-cyan-500/60 tracking-widest uppercase">
                  {description}
                </p>
                <h3 className="text-xl font-bold text-white font-orbitron group-hover/flipping-card:text-cyan-400 transition-colors">
                  {title}
                </h3>
              </div>
              
              <button 
                className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-[8px] font-mono text-gray-400 hover:text-cyan-400 uppercase tracking-[0.2em] transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                {t.viewDetail || "View Details"}
              </button>
            </div>
          </div>
          
          {/* Interior Scanline Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent -translate-y-full group-hover/flipping-card:animate-[scanline_4s_linear_infinite] pointer-events-none"></div>
        </div>

        {/* Back Face: Technical Details */}
        <div className="absolute inset-0 h-full w-full bg-gray-950 border border-cyan-500/30 [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden shadow-[inset_0_0_40px_rgba(6,182,212,0.05)]">
          {/* Active Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/40 z-20"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/40 z-20"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/40 z-20"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/40 z-20"></div>

          <div className="[transform:translateZ(80px)] h-full w-full p-8 md:p-10 flex flex-col justify-center">
            {/* Close button for mobile back face */}
            <button 
              className="absolute top-4 right-4 text-cyan-500/50 hover:text-cyan-400 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              <div className="text-[10px] font-mono">CLOSE_X</div>
            </button>

            {/* Terminal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/40"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron tracking-tighter">
                {title}
              </h3>
              
              <div className="custom-scrollbar overflow-y-auto max-h-[220px] pr-2">
                {children}
              </div>
            </div>
          </div>
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
