"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, LayoutGrid } from "lucide-react";
import Card from "./ui/Card";
import ScrollReveal from "./ui/ScrollReveal";



interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  techs: string[];
  category: "all" | "react" | "html-css";
  liveUrl: string;
  accent: string; // Gradient color for borders or mockups
  mockupSrc?: string;
  mockupSvg?: React.ReactNode;
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "react" | "html-css">("all");

  const projectsData: ProjectItem[] = [
    {
      id: "lifrica-web",
      title: "LIfrica (Multi-Service Global Platform)",
      desc: "Built responsive landing pages, membership modules, chat interfaces, and authentication flows using Next.js and Tailwind CSS, with a focus on pixel-perfect UI and scalable component architecture.",
      techs: ["React JS", "Tailwind CSS", "Next Js", "Framer Motion"],
      category: "nextjs",
      liveUrl: "https://lifrica.com/",
      accent: "from-cyan-400 to-blue-500",
      mockupSrc: "/lifrica-light.png",
    },
    {
      id: "lifrica-mgt",
      title: "Lifrica Super Admin Dashboard",
      desc: "Designed and developed the Lifrica Super Admin Dashboard with modules for application, membership, and admin management. Built dynamic data tables, audit logs, and CRUD workflows with REST API integration, focusing on reusable components, scalable architecture, and a clean, consistent user interface.",
      techs: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
      category: "nextjs",
      liveUrl: "https://lifrica.com/",
      accent: "from-teal-400 to-indigo-500",
      mockupSvg: (
        <svg className="w-full h-full object-cover" viewBox="0 0 100 60" fill="none">
          <rect width="100" height="60" fill="#0b1726" />
          <rect x="5" y="6" width="90" height="14" rx="3" fill="#0f172a" />
          <circle cx="16" cy="13" r="2" fill="#22c55e" />
          <circle cx="24" cy="13" r="2" fill="#38bdf8" />
          <circle cx="32" cy="13" r="2" fill="#a855f7" />
          <rect x="7" y="26" width="86" height="10" rx="2" fill="#111827" />
          <rect x="7" y="38" width="58" height="8" rx="2" fill="#1e293b" />
          <rect x="68" y="38" width="22" height="8" rx="2" fill="#2563eb" />
          <rect x="10" y="31" width="18" height="2" rx="1" fill="#94a3b8" />
          <rect x="10" y="35" width="12" height="2" rx="1" fill="#94a3b8" />
          <rect x="10" y="39" width="22" height="2" rx="1" fill="#cbd5e1" />
        </svg>
      ),
    },
    {
      id: "smart-clinic",
      title: "Sharva Clinic",
      desc: "Developed a responsive clinic website using React-Bootstrap with appointment booking, secure payment integration, and dynamic FAQs. Focused on intuitive UI, performance optimization, and seamless deployment to deliver a fast and user-friendly healthcare experience.",
      techs: ["React", "React-Bootstrap", "Git", "JavaScript"],
      category: "react",
      liveUrl: "https://sharvaclinique.com/",
      accent: "from-emerald-400 to-cyan-500",
      mockupSrc: "/sharvaclinic.png",
    },
    {
      id: "lifrica-user",
      title: "Lifrica User Dashboard",
      desc: "Developed responsive Advisor, Client, Fundraising, and Investor portals from Figma designs with pixel-perfect UI implementation and REST API integration. Focused on dynamic data handling, optimized performance, cross-browser compatibility, and seamless collaboration with backend teams to deliver a scalable user experience.",
      techs: ["React", "Tailwind CSS", "Next.js", "context API"],
      category: "react",
      liveUrl: "",
      accent: "from-blue-400 to-teal-400",
      mockupSrc: "/lifrica-member-dark.png",
    },
    {
      id: "advisor-client-portal",
      title: "Advisor/Client/Fundraising/Investor Portals",
      desc: "Developed responsive Advisor, Client, Fundraising, and Investor portals from Figma designs with pixel-perfect UI implementation and REST API integration. Focused on dynamic data handling, optimized performance, cross-browser compatibility, and seamless collaboration with backend teams to deliver a scalable user experience.",
      techs: ["React", "Context API", "Tailwind CSS", "Bootstrap"],
      category: "html-css",
      liveUrl: "",
      accent: "from-yellow-400 to-orange-500",
      mockupSvg: (
        <svg className="w-full h-full object-cover" viewBox="0 0 100 60" fill="none">
          <rect width="100" height="60" fill="#0b1726" />
          <rect x="5" y="6" width="90" height="14" rx="3" fill="#0f172a" />
          <circle cx="16" cy="13" r="2" fill="#22c55e" />
          <circle cx="24" cy="13" r="2" fill="#38bdf8" />
          <circle cx="32" cy="13" r="2" fill="#a855f7" />
          <rect x="7" y="26" width="86" height="10" rx="2" fill="#111827" />
          <rect x="7" y="38" width="58" height="8" rx="2" fill="#1e293b" />
          <rect x="68" y="38" width="22" height="8" rx="2" fill="#2563eb" />
          <rect x="10" y="31" width="18" height="2" rx="1" fill="#94a3b8" />
          <rect x="10" y="35" width="12" height="2" rx="1" fill="#94a3b8" />
          <rect x="10" y="39" width="22" height="2" rx="1" fill="#cbd5e1" />
        </svg>
      ),
    },
    // {
    //   id: "blog-portal",
    //   title: "A-Blog Portal",
    //   desc: "Built a fully styled multi-category blog site template allowing users to search topics, view comment structures, and read articles under responsive layouts.",
    //   techs: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    //   category: "html-css",
    //   liveUrl: "https://google.com/",
    //   accent: "from-indigo-400 to-rose-400",
    //   mockupSrc: "/my-image.jpeg",
    // },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      className="relative bg-[#05070f] py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            Showcase
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            My Creative Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-teal-400 to-emerald-400" />
        </ScrollReveal>

        {/* Filter Navigation */}
        <ScrollReveal direction="up" delay={0.1} className="flex justify-center mb-16">
          <div className="inline-flex rounded-xl bg-slate-950/60 p-1.5 border border-white/[0.05] backdrop-blur-md">
            {[
              { id: "all", label: "All Work", icon: <LayoutGrid className="h-4 w-4" /> },
              { id: "react", label: "React / Next.js", icon: <Layers className="h-4 w-4" /> },
              { id: "html-css", label: "HTML / CSS", icon: <ExternalLink className="h-4 w-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold tracking-wide transition-all uppercase duration-200 ${
                  filter === tab.id ? "text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                {filter === tab.id && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 to-emerald-400"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 18 }}
                className="h-full"
              >
                <Card
                  className="p-4 flex flex-col justify-between h-full group hover:border-white/[0.12]"
                  glowColor="rgba(0, 245, 180, 0.18)"
                  enableTilt={true}
                >
                  <div>
                    {/* Mockup Preview container */}
                    <div className="relative aspect-[1.6/1] w-full overflow-hidden rounded-xl border border-white/[0.05] bg-slate-950">
                      
                      {/* Brand accent gradient border */}
                      <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Scaling mockup wrapper */}
                      <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105">
                        {project.mockupSvg ? (
                          project.mockupSvg
                        ) : (
                          <img
                            src={project.mockupSrc}
                            alt={`${project.title} screenshot`}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Floating Category tag */}
                      <span className="absolute right-3 top-3 rounded-md bg-slate-900/80 border border-white/[0.08] backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest text-teal-400">
                        {project.category === "react" ? "React App" : "Static Web"}
                      </span>
                    </div>

                    {/* Metadata */}
                    <h3 className="mt-5 text-xl font-bold text-white tracking-wide group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="mt-2.5 text-slate-400 text-sm font-light leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech Tags & CTAs */}
                  <div className="mt-6">
                    {/* Tech List */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techs.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 text-[10px] font-mono text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 border-t border-white/[0.05] pt-4">
                      {/* <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="interactive inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Code Repository
                      </a> */}
                      <span className="text-slate-700">|</span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="interactive inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
