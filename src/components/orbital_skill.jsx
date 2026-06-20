"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { FaBrain, FaDesktop, FaChartBar } from "react-icons/fa";

const OrbitalExpertise = ({ expertise }) => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeId, setActiveId] = useState(null);
  
  // Auto-rotation effect
  React.useEffect(() => {
    if (isPaused || activeId !== null) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.4) % 360);
    }, 30);
    
    return () => clearInterval(interval);
  }, [isPaused, activeId]);

  const handleNodeClick = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setIsPaused(true);
    }
  };

  return (
    <div 
      className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center overflow-visible "
      
      onMouseLeave={() => {
        if (activeId === null) setIsPaused(false);
      }}
      onClick={() => {
        if (!event.target.closest('.expertise-node')) setActiveId(null);
      }}
    >
      {/* Central Core - High Tech Visual */}
      <div className="relative z-20 group/core">
        <div className="w-20 h-20 md:w-28 md:h-28 bg-gray-950 border border-cyan-500/40 flex flex-col items-center justify-center rounded-none shadow-[0_0_50px_rgba(34,211,238,0.15)] relative overflow-hidden">
          {/* Internal animations */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-cyan-500/[0.02] animate-pulse"></div>
          
          <div className="text-cyan-500 font-orbitron font-black text-xl md:text-2xl tracking-tighter z-10 uppercase">
            {activeId !== null ? "DATA" : isPaused ? "SCAN" : "SYS"}
          </div>
          <div className="text-[7px] font-mono text-cyan-500/50 tracking-[0.4em] uppercase z-10 mt-1">
            {activeId !== null ? "LOCKED" : isPaused ? "ACTIVE" : "ORBITAL"}
          </div>
          
          {/* Spinning interior ring */}
          <motion.div 
            className="absolute inset-2 border border-cyan-500/20 rounded-full border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>
        
        {/* Corner Brackets */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500/60"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500/60"></div>
      </div>

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none rounded-full border border-white/5 scale-110"></div>

      {/* Expertise Nodes */}
      {expertise.map((item, idx) => {
        const total = expertise.length;
        const angle = (idx * (360 / total) + rotation) % 360;
        const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 190;
        const radian = (angle * Math.PI) / 180;
        
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);
        
        const isFocused = activeId === item.id;

        return (
          <React.Fragment key={item.id}>
            <div 
              className="absolute border border-white/5 rounded-full pointer-events-none"
              style={{
                width: radius * 2,
                height: radius * 2,
              }}
            ></div>

            <motion.div 
              className="absolute h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent origin-left pointer-events-none"
              style={{
                width: radius,
                left: '50%',
                top: '50%',
                rotate: `${angle}deg`,
                opacity: (isPaused || activeId !== null) ? 0.6 : 0.1
              }}
            ></motion.div>

            {/* The Orbiting Node */}
            <motion.div
              className="absolute z-30 expertise-node"
              style={{ x, y }}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick(item.id);
              }}
              animate={{ 
                scale: isFocused ? 1.15 : 1,
              }}
            >
              <div className="relative group cursor-pointer text-center">
                {/* Node visual */}
                <div className={`
                  w-14 h-14 md:w-20 md:h-20 
                  ${isFocused ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]' : 'bg-gray-950 text-white border-white/10 hover:border-cyan-500/30'}
                  border backdrop-blur-xl transition-all duration-500 flex items-center justify-center relative
                `}>
                  <item.icon className={`text-xl md:text-3xl transition-colors duration-500 ${isFocused ? 'text-black' : 'text-gray-500 group-hover:text-cyan-400'}`} />
                  
                  {/* Tech Corner Marker */}
                  <div className={`absolute -top-1 -right-1 w-2 h-2 ${isFocused ? 'bg-black' : 'bg-cyan-500'} transition-colors`}></div>
                </div>

                {/* Persistent Title */}
                <div className={`
                  absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-[9px] md:text-[10px] font-orbitron font-bold tracking-[0.2em] uppercase
                  transition-colors duration-500
                  ${isFocused ? 'text-cyan-400' : 'text-white/60 group-hover:text-white'}
                `}>
                  {item.title}
                </div>

                {/* Detail Card (Visible only when focused) */}
                <motion.div 
                  className="absolute top-[calc(100%+35px)] left-1/2 -translate-x-1/2 pointer-events-none z-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isFocused ? 1 : 0,
                    y: isFocused ? 0 : 20
                  }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                >
                  <div className="w-64 bg-gray-950/98 border border-cyan-500/40 p-5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                      <span className="text-[7px] font-mono text-cyan-500 tracking-widest uppercase font-bold">NODE_REF_{item.role}</span>
                      <div className="flex items-center gap-1.5 text-green-500">
                         <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                         <span className="text-[7px] font-mono uppercase tracking-tighter">Secure</span>
                      </div>
                    </div>

                    <h4 className="text-sm font-orbitron font-bold text-white mb-2 tracking-wide uppercase">
                      {item.title}
                    </h4>
                    
                    <p className="text-[9px] text-gray-400 leading-relaxed mb-4 font-light italic">
                      "{item.desc}"
                    </p>

                    {/* Status/Energy Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[7px] font-mono uppercase tracking-widest text-cyan-500/60">
                        <span>Sync_Stability</span>
                        <span>{item.role === "AI" ? "98%" : item.role === "FD" ? "95%" : "92%"}</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                        <motion.div 
                          className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
                          initial={{ width: 0 }}
                          animate={{ width: isFocused ? (item.role === "AI" ? "98%" : item.role === "FD" ? "95%" : "92%") : 0 }}
                          transition={{ duration: 1.2, delay: 0.1 }}
                        ></motion.div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </React.Fragment>
        );
      })}

      {/* Decorative center lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white/5 pointer-events-none"></div>
    </div>
  );
};

export default OrbitalExpertise;
