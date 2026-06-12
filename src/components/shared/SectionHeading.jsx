"use client";

import React from 'react';

const SectionHeading = ({ title, subtitle, badge, index }) => {
  return (  
    <div className="text-center mb-16 md:mb-24 relative">
      <div className="flex flex-col items-center justify-center gap-4">
        {index && (
          <span 
            data-aos="fade-down"
            className="font-mono text-[10px] tracking-[0.4em] text-cyan-500/60 uppercase"
          >
            [{index}]
          </span>
        )}
        
        {badge && (
          <span 
            data-aos="fade-down"
            data-aos-delay="100"
            className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
          >
            {badge}
          </span>
        )}
      </div>

      <h2 
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-6 text-3xl md:text-5xl font-black text-white font-orbitron tracking-tighter"
      >
        {title}
      </h2>

      {subtitle && (
        <p 
          data-aos="fade-up"
          data-aos-delay="300"
          className="max-w-xl mx-auto mt-6 text-sm md:text-base text-gray-400 leading-relaxed font-light tracking-wide"
        >
          {subtitle}
        </p>
      )}

      <div 
        data-aos="zoom-in"
        data-aos-delay="400"
        className="flex flex-col items-center justify-center mt-12"
      >
        {/* Horizontal Divider with center connection */}
        <div className="flex items-center justify-center gap-4 relative">
          <div className="h-[1px] w-12 bg-gray-800"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.6)] z-10"></div>
          <div className="h-[1px] w-12 bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
