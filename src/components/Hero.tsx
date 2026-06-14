"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Download, Paintbrush, Terminal } from "lucide-react";
import Image from "next/image";
import Card from "./ui/Card";
import Glow from "./ui/Glow";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#05070f] pt-24 px-6 md:px-10"
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1020_1px,transparent_1px),linear-gradient(to_bottom,#0c1020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      {/* Floating Ambient Glows */}
      <Glow color="bg-teal-500/20" size="w-[500px] h-[500px]" className="-left-40 top-10" delay={0} />
      <Glow color="bg-indigo-600/15" size="w-[600px] h-[600px]" className="-right-40 bottom-10" delay={2} />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-12 md:flex-row md:gap-6 py-12 md:py-20">
        
        {/* Left Content - Intro Texts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-start text-left max-w-xl md:w-3/5"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-400 uppercase mb-5"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Hello, I am</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Shubham Mishra
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-3 text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent sm:text-2xl"
          >
            Frontend Developer & UI Developer
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="mt-2 text-md font-medium text-slate-400"
          >
            Turning Designs into Functional Code
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base leading-relaxed text-slate-300 font-light"
          >
            I am a passionate Frontend Developer & UI Developer with 3+ years of experience building 
            pixel-perfect, responsive, and highly interactive templates and web applications. 
            Specialized in crafting clean user interfaces using React.js, Next.js, JavaScript, and Tailwind CSS.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            {/* <a
              href="#contact"
              onClick={handleScrollToContact}
              className="group interactive relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-3 font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(0,245,180,0.4)] hover:brightness-105"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a> */}

            <a
              href="/Resume.pdf"
              download
              className="group interactive relative flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Picture Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:w-2/5"
        >
          <div className="relative group">
            {/* Background glowing rings */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-teal-500 to-indigo-600 opacity-30 blur-lg transition-all group-hover:opacity-45 group-hover:scale-105 duration-500" />
            
            <Card
              className="w-72 h-80 sm:w-80 sm:h-96 p-3 flex flex-col justify-between"
              glowColor="rgba(0, 245, 180, 0.25)"
              enableTilt={true}
            >
              {/* Profile Image Wrap */}
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.05] bg-slate-900 flex items-center justify-center">
                {/* Fallback geometric design representing a front-end UI Developer */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-[#0a0f24] to-[#040816] overflow-hidden">
                  
                  {/* Cyber Grid Circle */}
                  <div className="absolute w-48 h-48 rounded-full border border-teal-500/10 flex items-center justify-center animate-spin" style={{ animationDuration: "25s" }}>
                    <div className="w-40 h-40 rounded-full border border-dashed border-teal-500/20" />
                  </div>

                  <div className="absolute w-36 h-36 rounded-full border border-indigo-500/10 flex items-center justify-center animate-reverse-spin" style={{ animationDuration: "15s" }}>
                    <div className="w-28 h-28 rounded-full border border-dotted border-indigo-500/20" />
                  </div>

                  {/* Gradient Avatar */}
                  <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-teal-400 via-cyan-400 to-indigo-500 p-1 shadow-xl shadow-teal-950/40">
                    <div className="w-full h-full rounded-full bg-[#050811] flex items-center justify-center overflow-hidden">
                      {/* Interactive placeholder initials or icon */}
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        SM
                      </span>
                    </div>
                  </div>
                  
                  <span className="relative z-10 mt-6 font-semibold text-slate-200 text-sm tracking-wide uppercase">
                    Shubham Mishra
                  </span>
                  <span className="relative z-10 mt-1 text-slate-500 text-xs tracking-wider">
                    Creative Frontend Dev
                  </span>

                  {/* HTML/CSS tags floating in avatar background */}
                  <span className="absolute left-6 top-10 text-[10px] font-mono text-teal-500/30 select-none">{`<div>`}</span>
                  <span className="absolute right-6 top-14 text-[10px] font-mono text-indigo-500/30 select-none">{`const App = () =>`}</span>
                  <span className="absolute left-8 bottom-12 text-[10px] font-mono text-cyan-500/30 select-none">{`flex-row`}</span>
                  <span className="absolute right-10 bottom-8 text-[10px] font-mono text-emerald-500/30 select-none">{`</html>`}</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="absolute bottom-6 flex flex-col items-center gap-1 cursor-pointer select-none"
        onClick={() => {
          const aboutSec = document.getElementById("about");
          if (aboutSec) aboutSec.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-slate-500 text-[10px] font-semibold tracking-widest uppercase">Scroll Down</span>
        <div className="h-6 w-3.5 rounded-full border-2 border-slate-500 flex justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-teal-400 animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}
