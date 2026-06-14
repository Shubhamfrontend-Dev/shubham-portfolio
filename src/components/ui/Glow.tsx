"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowProps {
  color?: string; // e.g., "bg-cyan-500" or "bg-emerald-500"
  size?: string;  // e.g., "w-96 h-96"
  className?: string;
  delay?: number;
  duration?: number;
}

export default function Glow({
  color = "bg-teal-500",
  size = "w-[400px] h-[400px]",
  className = "",
  delay = 0,
  duration = 8,
}: GlowProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.15 }}
      animate={{
        scale: [0.8, 1.1, 0.9, 1.05, 0.8],
        x: [0, 30, -20, 15, 0],
        y: [0, -40, 20, -15, 0],
        opacity: [0.15, 0.22, 0.12, 0.18, 0.15],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen filter ${color} ${size} ${className}`}
    />
  );
}
