"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimationFrame,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";
const OrbitNode = memo(function OrbitNode({
  item,
  idx,
  total,
  radius,
  rotation,
  isFocused,
  onNodeClick,
}) {
  const baseAngle = idx * (360 / total);
  const radian = (baseAngle * Math.PI) / 180;
  const x = radius * Math.cos(radian);
  const y = radius * Math.sin(radian);

  const counterRotate = useTransform(rotation, (r) => -r);

  return (
    <div
      className="absolute pointer-events-auto architecture-node-holder"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="absolute h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent origin-left pointer-events-none hidden lg:block"
        style={{
          width: radius,
          left: "50%",
          top: "50%",
          transform: `translate(-${x}px, -${y}px) rotate(${baseAngle}deg)`,
          opacity: isFocused ? 0.4 : 0.1,
          transformOrigin: "0% 50%",
          willChange: "opacity",
        }}
      />

      <motion.div
        className="expertise-node relative"
        onClick={(e) => {
          e.stopPropagation();
          onNodeClick(item.id, idx, total);
        }}
        animate={{ scale: isFocused ? 1.15 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <motion.div
          className="relative group cursor-pointer text-center flex flex-col items-center"
          style={{
            rotate: counterRotate,
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Node visual */}
          <div
            className={`
            w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20
            ${
              isFocused
                ? "bg-cyan-500 text-black border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                : "bg-gray-950/95 text-white border-white/10 hover:border-cyan-500/30"
            }
            border transition-colors duration-500 flex items-center justify-center relative
          `}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          >
            <Image
              src={item.icon}
              width={90}
              height={90}
              alt={item.title}
              className={
                isFocused
                  ? "brightness-0 transition-all duration-500 p-2 md:p-3"
                  : "text-gray-500 p-2 md:p-3"
              }
            />
            <div
              className={`absolute -top-1 -right-1 w-2 h-2 ${
                isFocused ? "bg-black" : "bg-cyan-500"
              } transition-colors`}
            />
          </div>

          {/* Persistent Title */}
          <div
            className={`
            absolute top-full mt-3 whitespace-nowrap
            text-[7px] sm:text-[8px] md:text-[10px] font-orbitron font-bold tracking-[0.2em] uppercase
            transition-colors duration-500
            ${isFocused ? "text-cyan-400" : "text-white/60 group-hover:text-white"}
          `}
          >
            {item.title}
          </div>
          <AnimatePresence>
            {isFocused && (
              <motion.div
                className="absolute top-[calc(100%+20px)] md:top-[calc(100%+35px)] left-1/2 -translate-x-1/2 pointer-events-none z-50 origin-top"
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 120, damping: 14 }}
              >
                <div className="w-[170px] sm:w-[210px] md:w-64 bg-gray-950/98 border border-cyan-500/40 p-3 md:p-5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative text-left">
                  <h4 className="text-xs md:text-sm font-orbitron font-bold text-white mb-2 tracking-wide uppercase">
                    {item.title}
                  </h4>

                  <p className="text-[8px] md:text-[9px] text-gray-400 leading-relaxed mb-4 font-light italic z-50">
                    &quot;{item.desc}&quot;
                  </p>

                  <div className="space-y-2">
                    <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                      />
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
});

const OrbitalExpertise = ({ expertise }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const rotation = useMotionValue(0);

  const isPausedRef = useRef(isPaused);
  const activeIdRef = useRef(activeId);
  const isVisibleRef = useRef(true);
  const containerRef = useRef(null);
  // Stays false until the browser has actually painted the initial,
  // static layout. Rotation only starts after that — so the heavy first
  // mount (all nodes + tooltips inserted into the DOM) isn't competing
  // with a spring/rAF loop for the same frame budget.
  const readyToSpinRef = useRef(false);
  const [readyToSpin, setReadyToSpin] = useState(false);
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);
  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);
  useEffect(() => {
    let raf1, raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        readyToSpinRef.current = true;
        setReadyToSpin(true);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);
 useEffect(() => {
    let resizeTimeout;
    const checkMobile = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(
        () => setIsMobile(window.innerWidth < 768),
        150
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Pause the rAF loop entirely when the tab is backgrounded or the widget
  // scrolls out of view — no point paying for a rotation nobody can see.
  useEffect(() => {
    const handleVisibility = () => {
      isVisibleRef.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let observer;
    if (containerRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisibleRef.current = entry.isIntersecting && !document.hidden;
        },
        { threshold: 0.01 }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      if (observer) observer.disconnect();
    };
  }, []);

  const orbitRadius = isMobile ? 130 : 190;

  useAnimationFrame((_t, delta) => {
    if (
      !readyToSpinRef.current ||
      isPausedRef.current ||
      activeIdRef.current !== null ||
      !isVisibleRef.current
    )
      return;
    // Cap delta so a dropped/backgrounded frame (e.g. tab switch) doesn't
    // cause a big visible jump when the loop resumes.
    const clampedDelta = Math.min(delta, 50);
    const speed = isMobile ? 0.22 : 0.4; // degrees per ~30ms (original tuning)
    const degreesPerMs = speed / 30;
    rotation.set((rotation.get() + degreesPerMs * clampedDelta) % 360);
  });

  const handleNodeClick = useCallback(
    (id, idx, total) => {
      if (activeIdRef.current === id) {
        setActiveId(null);
        setIsPaused(false);
        return;
      }

      setActiveId(id);
      setIsPaused(true);

      const baseAngle = idx * (360 / total);
      const targetRotation = -90 - baseAngle;
      animate(rotation, targetRotation, {
        type: "spring",
        stiffness: 60,
        damping: 15,
      });
    },
    [rotation]
  );

  const handleBackgroundClick = useCallback((event) => {
    if (!event.target.closest(".expertise-node")) {
      setActiveId(null);
      setIsPaused(false);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (activeIdRef.current === null) setIsPaused(false);
  }, []);

  const coreLabel = activeId !== null ? "DATA" : isPaused ? "SCAN" : "SYS";
  const coreSubLabel = activeId !== null ? "LOCKED" : isPaused ? "ACTIVE" : "ORBITAL";

  const total = expertise.length;

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[360px] md:max-w-[400px] mx-auto flex items-center justify-center overflow-visible"
      onMouseLeave={handleMouseLeave}
      onClick={handleBackgroundClick}
    >
      {/* Central Core */}
      <div className="relative group/core">
        <div className="w-16 h-16 md:w-28 md:h-28 bg-gray-950 border border-cyan-500/40 flex flex-col items-center justify-center rounded-none shadow-[0_0_50px_rgba(34,211,238,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-cyan-500/[0.02] animate-pulse" />

          <div className="text-cyan-500 font-orbitron font-black text-base md:text-2xl tracking-tighter uppercase">
            {coreLabel}
          </div>
          <div className="text-[7px] font-mono text-cyan-500/50 tracking-[0.4em] uppercase mt-1">
            {coreSubLabel}
          </div>

          <motion.div
            className="absolute inset-2 border border-cyan-500/20 rounded-full border-dashed"
            animate={readyToSpin ? { rotate: 360 } : { rotate: 0 }}
            transition={
              readyToSpin
                ? { duration: 10, repeat: Infinity, ease: "linear" }
                : { duration: 0 }
            }
          />
        </div>

        <div className="absolute -top-2 md:p-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500/60" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500/60" />
      </div>
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none rounded-full border border-white/5 scale-110" />
      <motion.div
        className="absolute w-full h-full flex items-center justify-center pointer-events-none scale-[0.82] sm:scale-[0.9] md:scale-100"
        style={{
          rotate: rotation,
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      >
        {expertise.map((item, idx) => (
          <OrbitNode
            key={item.id}
            item={item}
            idx={idx}
            total={total}
            radius={orbitRadius}
            rotation={rotation}
            isFocused={activeId === item.id}
            onNodeClick={handleNodeClick}
          />
        ))}
      </motion.div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 pointer-events-none z-10" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white/5 pointer-events-none z-10" />
    </div>
  );
};

export default OrbitalExpertise;