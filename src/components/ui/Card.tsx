"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g., "rgba(0, 245, 180, 0.15)"
  enableTilt?: boolean;
}

export default function Card({
  children,
  className = "",
  glowColor = "rgba(0, 245, 180, 0.15)",
  enableTilt = true,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse positions relative to card center (-0.5 to 0.5)
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);

  // Smooth springs for tilt
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(rotateXValue, springConfig);
  const rotateY = useSpring(rotateYValue, springConfig);

  // Spotlight position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card boundaries
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Set values for background light reflection
    mouseX.set(clientX);
    mouseY.set(clientY);

    if (enableTilt) {
      // Calculate rotation based on cursor distance from center
      const xPercent = (clientX / width) - 0.5;
      const yPercent = (clientY / height) - 0.5;

      // Rotate around X axis based on Y position (moving mouse UP rotates card UP, i.e., positive rotation)
      // Rotate around Y axis based on X position (moving mouse RIGHT rotates card RIGHT)
      rotateXValue.set(-yPercent * 15); // max 15deg tilt
      rotateYValue.set(xPercent * 15);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/40 backdrop-blur-md transition-shadow duration-300 ${
        isHovered ? "shadow-2xl shadow-slate-950/50 border-white/[0.15]" : ""
      } ${className}`}
    >
      {/* Background Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(400px circle at ${x}px ${y}px, ${glowColor}, transparent 80%)`
          ),
        }}
      />

      {/* Thin border glow reflection */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.5 : 0,
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(120px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.12), transparent 80%)`
          ),
        }}
      />

      {/* Children content wrapper with slight transform depth */}
      <div style={{ transform: "translateZ(10px)" }} className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
