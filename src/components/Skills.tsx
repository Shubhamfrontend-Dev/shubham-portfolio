"use client";

import React from "react";
import Card from "./ui/Card";
import ScrollReveal from "./ui/ScrollReveal";

interface TechItem {
  name: string;
  category: string;
  color: string; // Tailwind class border/shadow glow color
  glowRgba: string; // Raw RGBA for dynamic card glow spotlight
  icon: React.ReactNode;
  level: string;
}

export default function Skills() {
  const technologies: TechItem[] = [
    {
      name: "HTML5",
      category: "Frontend",
      color: "text-orange-500 border-orange-500/20",
      glowRgba: "rgba(249, 115, 22, 0.15)",
      level: "Expert",
      icon: <img src="/html.png" alt="HTML5" className="h-10 w-10" />,
    },
    {
      name: "CSS3",
      category: "Frontend",
      color: "text-blue-500 border-blue-500/20",
      glowRgba: "rgba(59, 130, 246, 0.15)",
      level: "Expert",
      icon: <img src="/css-3.png" alt="CSS3" className="h-10 w-10" />,
    },
    {
      name: "JavaScript",
      category: "Programming",
      color: "text-yellow-500 border-yellow-500/20",
      glowRgba: "rgba(234, 179, 8, 0.15)",
      level: "Advanced",
      icon: <img src="/js.png" alt="JavaScript" className="h-10 w-10" />,
    },
    {
      name: "Figma",
      category: "UI Styling",
      color: "text-purple-500 border-purple-500/20",
      glowRgba: "rgba(168, 85, 247, 0.15)",
      level: "Expert",
      icon: <img src="/figma.png" alt="Figma" className="h-10 w-10" />,
    },
    {
      name: "ReactJS",
      category: "Frameworks",
      color: "text-cyan-400 border-cyan-400/20",
      glowRgba: "rgba(34, 211, 238, 0.15)",
      level: "Intermediate",
      icon: <img src="/atom.png" alt="ReactJS" className="h-10 w-10" />,
    },
    {
      name: "Next.js",
      category: "Frameworks",
      color: "text-white border-white/20",
      glowRgba: "rgba(255, 255, 255, 0.12)",
      level: "Intermediate",
      icon: <img src="/next.js.png" alt="Next.js" className="h-10 w-10" />,
    },
    {
      name: "React Query",
      category: "State Management",
      color: "text-rose-400 border-rose-400/20",
      glowRgba: "rgba(251, 113, 133, 0.15)",
      level: "Intermediate",
      icon: <img src="/reactquery.png" alt="Figma" className="h-10 w-10 " />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#05070f] py-20 px-6 md:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            Professional Toolbox
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            My Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400 text-sm font-light">
            Here are the primary technologies, design tools, and frameworks I leverage to create pixel-perfect, highly responsive web interfaces.
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-teal-400 to-emerald-400" />
        </ScrollReveal>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {technologies.map((tech, index) => (
            <ScrollReveal
              key={tech.name}
              direction="up"
              delay={index * 0.05}
              className="h-full"
            >
              <Card
                className={`p-5 flex flex-col items-center justify-between text-center h-full group hover:border-${tech.name === "Next.js" ? "white" : "teal-500"}/40 transition-colors`}
                glowColor={tech.glowRgba}
                enableTilt={true}
              >
                <div className={`p-3 rounded-xl bg-slate-900/60 border border-white/[0.03] ${tech.color} flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-900 transition-all duration-300`}>
                  {tech.icon}
                </div>
                
                <div className="mt-5">
                  <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-teal-300 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="mt-1.5 block text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                    {tech.level}
                  </span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
