"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Position coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for trailing cursor ring
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop screens without touch interface
    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia("(pointer: coarse)").matches)
      );
    };

    if (isTouchDevice()) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Interactive trailing ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-400 opacity-60 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: hovered ? 1.6 : 1,
          backgroundColor: hovered ? "rgba(0, 245, 180, 0.15)" : "transparent",
          borderColor: hovered ? "rgb(0, 245, 180)" : "rgb(45, 212, 191)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
      {/* Core pointer dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
}
