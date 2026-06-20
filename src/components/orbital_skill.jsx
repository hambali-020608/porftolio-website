"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Diubah ke import standar framer-motion untuk kompatibilitas spring terbaik
import { FaBrain, FaDesktop, FaChartBar } from "react-icons/fa";
import Image from "next/image";

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

  const handleNodeClick = (id, idx, total) => {
    if (activeId === id) {
      setActiveId(null);
      setIsPaused(false);
    } else {
      setActiveId(id);
      setIsPaused(true);

      // Hitung sudut penyeimbang agar node yang dipilih tepat berputar menuju arah jam 12 (-90 derajat)
      const baseAngle = idx * (360 / total);
      const targetRotation = -90 - baseAngle;
      setRotation(targetRotation);
    }
  };

  return (
    <div 
      className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center overflow-visible"
      onMouseLeave={() => {
        if (activeId === null) setIsPaused(false);
      }}
      onClick={(event) => {
        if (!event.target.closest('.expertise-node')) {
          setActiveId(null);
          setIsPaused(false);
        }
      }}
    >
      {/* Central Core - High Tech Visual */}
      <div className="relative group/core">
        <div className="w-20 h-20 md:w-28 md:h-28 bg-gray-950 border border-cyan-500/40 flex flex-col items-center justify-center rounded-none shadow-[0_0_50px_rgba(34,211,238,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-cyan-500/[0.02] animate-pulse"></div>
          
          <div className="text-cyan-500 font-orbitron font-black text-xl md:text-2xl tracking-tighter  uppercase">
            {activeId !== null ? "DATA" : isPaused ? "SCAN" : "SYS"}
          </div>
          <div className="text-[7px] font-mono text-cyan-500/50 tracking-[0.4em] uppercase  mt-1">
            {activeId !== null ? "LOCKED" : isPaused ? "ACTIVE" : "ORBITAL"}
          </div>
          
          <motion.div 
            className="absolute inset-2 border border-cyan-500/20 rounded-full border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>
        
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500/60"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500/60"></div>
      </div>

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none rounded-full border border-white/5 scale-110"></div>

      {/* CONTAINER ORBIT UTAMA: Berputar secara dinamis menggunakan akselerasi pegas Framer Motion */}
      <motion.div 
        className="absolute w-full h-full flex items-center justify-center pointer-events-none "
        animate={{ rotate: rotation }}
        transition={
          activeId !== null 
            ? { type: "spring", stiffness: 60, damping: 15 } // Efek pegas lentur saat diklik
            : { type: "tween", ease: "linear", duration: 0 } // Transisi mulus instan saat auto-rotate berjalan
        }
      >
        {expertise.map((item, idx) => {
          const total = expertise.length;
          // Distribusi posisi melingkar statis 
          const baseAngle = idx * (360 / total);
          const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 190;
          const radian = (baseAngle * Math.PI) / 180;
          
          const x = radius * Math.cos(radian);
          const y = radius * Math.sin(radian);
          
          const isFocused = activeId === item.id;

          return (
            <div
              key={item.id}
              className="absolute pointer-events-auto architecture-node-holder"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)"
              }}
            >
              {/* Node Garis Penghubung Sektoral */}
              <div 
                className="absolute h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent origin-left pointer-events-none hidden md:block"
                style={{
                  width: radius,
                  left: "50%",
                  top: "50%",
                  transform: `translate(-${x}px, -${y}px) rotate(${baseAngle}deg)`,
                  opacity: activeId !== null ? 0.4 : 0.1,
                  transformOrigin: "0% 50%"
                }}
              ></div>

              {/* The Orbiting Node Element */}
              <motion.div
                className="expertise-node relative"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick(item.id, idx, total);
                }}
                animate={{ 
                  scale: isFocused ? 1.15 : 1,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                  <motion.div
                  className="relative group cursor-pointer text-center flex flex-col items-center"
                  animate={{ rotate: -rotation }}
                  transition={
                    activeId !== null 
                      ? { type: "spring", stiffness: 60, damping: 15 }
                      : { type: "tween", ease: "linear", duration: 0 }
                  }
                >
                  {/* Node visual */}
                  <div className={`
                    w-14 h-14 md:w-20 md:h-20 
                    ${isFocused ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]' : 'bg-gray-950 text-white border-white/10 hover:border-cyan-500/30'}
                    border backdrop-blur-xl transition-all duration-500 flex items-center justify-center relative
                  `}>
                    <Image src={item.icon}
                      width={90}
                      height={90}
                      alt={item.title}
                      className={isFocused ? "brightness-0 transition-all duration-500 p-3" : "text-gray-500 p-3"}
                    />
                    <div className={`absolute -top-1 -right-1 w-2 h-2 ${isFocused ? 'bg-black' : 'bg-cyan-500'} transition-colors`}></div>
                  </div>

                  {/* Persistent Title */}
                  <div className={`
                    absolute top-full mt-3 whitespace-nowrap
                    text-[9px] md:text-[10px] font-orbitron font-bold tracking-[0.2em] uppercase
                    transition-colors duration-500
                    ${isFocused ? 'text-cyan-400' : 'text-white/60 group-hover:text-white'}
                  `}>
                    {item.title}
                  </div>

                  {/* Detail Card (Visible only when focused) */}
                  <motion.div 
                    className="absolute top-[calc(100%+35px)] pointer-events-none z-50 origin-top"
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ 
                      opacity: isFocused ? 1 : 0,
                      y: isFocused ? 0 : 15,
                      scale: isFocused ? 1 : 0.9
                    }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 120, damping: 14 }}
                  >
                    <div className="w-64 bg-gray-950/98 border border-cyan-500/40 p-5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative text-left">
                     

                      <h4 className="text-sm font-orbitron font-bold text-white mb-2 tracking-wide uppercase">
                        {item.title}
                      </h4>
                      
                      <p className="text-[9px] text-gray-400 leading-relaxed mb-4 font-light italic">
                        "{item.desc}"
                      </p>

                      {/* Status/Energy Bar */}
                      <div className="space-y-2">
                     
                        <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                          <motion.div 
                            className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
                            initial={{ width: 0 }}
                            animate={{ width: '100%'}}
                            transition={{ duration: 1.2, delay: 0.1 }}
                          ></motion.div>
                        </div>
                      </div>

                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Decorative center lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 pointer-events-none z-10"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white/5 pointer-events-none z-10"></div>
    </div>
  );
};

export default OrbitalExpertise;