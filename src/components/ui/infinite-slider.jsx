"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import { cn } from "../../lib/utils";

export function InfiniteSlider({
  children,
  gap = 40,
  reverse = false,
  speed = 50,
  speedOnHover,
  className,
}) {
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, [children]);

  useEffect(() => {
    if (contentWidth > 0) {
      const duration = contentWidth / (isHovered && speedOnHover ? speedOnHover : speed);
      
      controls.start({
        x: reverse ? [0, -contentWidth - gap] : [-contentWidth - gap, 0],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [contentWidth, speed, speedOnHover, isHovered, reverse, gap, controls]);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden flex", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        className="flex"
        style={{ gap: `${gap}px` }}
      >
        <div ref={contentRef} className="flex" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex" style={{ gap: `${gap}px` }} aria-hidden="true">
          {children}
        </div>
        <div className="flex" style={{ gap: `${gap}px` }} aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
