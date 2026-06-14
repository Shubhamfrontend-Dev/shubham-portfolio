"use client";

import React from "react";
import ScrollReveal from "./ui/ScrollReveal";
import Card from "./ui/Card";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

interface TimelineItem {
  role: string;
  institution: string;
  period: string;
  details: string;
  tags?: string[];
}

export default function Timeline() {
  const experienceData: TimelineItem[] = [
      {
      role: "UI Developer",
      institution: "Qaafie Software ",
      period: "2026 - Present",
      details: "Frontend Developer specializing in React.js and Next.js, building responsive dashboards, CRM systems, and product interfaces with reusable components and REST API integrations.",
      tags: ["Figma", "React", "Next.js", "Tailwind CSS"],
    },
    {
      role: "UI Developer",
      institution: "Intecons Software Lab Private Limited",
      period: "04/2025 – 08/2025",
      details: "Developed responsive and interactive websites from Figma designs using React.js, JavaScript, HTML, and CSS. Focused on UI improvements, bug fixing, performance optimization, and maintaining clean, scalable code.",
      tags: ["Figma", "React", "JavaScript", "BootStrap"],
    },
    {
      role: "Frontend Developer",
      institution: "Krytons Consultancy pvt ltd",
      period: "02/2023 – 03/2025",
      details: "Designed and developed responsive user interfaces for React.js and PHP-based web applications, transforming design concepts into functional experiences. Built reusable components, integrated APIs, implemented interactive features, and ensured performance, scalability, and cross-browser compatibility.",
      tags: ["React.js", "Redux Toolkit", "JavaScript", "Tailwind CSS", "PHP","REST APIs"],
    },
    {
      role: "Junior UI Developer",
      institution: "Roton Consultancy pvt ltd",
      period: "07/2021 – 01/2023",
      details: "Developed responsive web interfaces using HTML, CSS, and JavaScript, converted wireframes into functional web pages, and supported website enhancements while collaborating with team members on frontend development tasks.",
      tags: ["HTML/CSS", "JavaScript", "UI Debugging"],
    },
  ];

  const educationData: TimelineItem[] = [
    {
      role: "B.Tech (Computer Science)",
      institution: "Vivekananda Institute of Technology (VIT) Jaipur",
      period: "08/2016 – 01/2020",
      details: "Completed coursework in computer science including data structures, object-oriented programming, database management, algorithms, and software engineering.",
      tags: ["Computer Science", "Algorithms", "Web Dev"],
    },
    {
      role: "Senior Secondary Education (12th)",
      institution: "BOARD OF SECONDARY EDUCATION, RAJASTHAN, AJMER",
      period: "Completed 2016",
      details: "Focus areas in Physics, Chemistry, Mathematics, and Computer Science.",
      tags: ["PCM", "High School"],
    },
    {
      role: "Secondary Education (10th)",
      institution: "BOARD OF SECONDARY EDUCATION, RAJASTHAN, AJMER",
      period: "Completed 2016",
      details: "Core high school curriculum covering sciences, social sciences, and mathematics.",
      tags: ["Maths", "English","Science", "Social Studies"],
    },
  ];

  return (
    <section
      id="timeline"
      className="relative bg-[#05070f] py-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            Journey
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Experience & Education
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-teal-400 to-emerald-400" />
        </ScrollReveal>

        {/* Dual Timelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Work Experience Timeline */}
          <div className="relative">
            {/* Timeline Title */}
            <div className="flex items-center gap-3 mb-10 pl-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Work Experience</h3>
            </div>

            {/* Vertical Line */}
            <div className="absolute left-9 top-20 bottom-0 w-[2px] bg-gradient-to-b from-teal-500/30 via-teal-500/10 to-transparent" />

            {/* Items */}
            <div className="space-y-10 pl-6">
              {experienceData.map((item, index) => (
                <ScrollReveal
                  key={item.role + index}
                  direction="left"
                  delay={index * 0.1}
                  className="relative pl-10"
                >
                  {/* Timeline Indicator Dot */}
                  <div className="absolute left-[-23px] top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-teal-400 shadow-[0_0_10px_rgba(0,245,180,0.5)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  </div>

                  <Card
                    className="p-6 hover:border-teal-500/30 transition-colors"
                    glowColor="rgba(0, 245, 180, 0.12)"
                    enableTilt={false}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-white tracking-wide group-hover:text-teal-300">
                        {item.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-400">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <span className="block text-sm font-semibold text-slate-400 mb-4">
                      {item.institution}
                    </span>

                    <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">
                      {item.details}
                    </p>

                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-white/[0.03] border border-white/[0.05] px-2.5 py-0.5 text-[10px] font-semibold text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Title */}
            <div className="flex items-center gap-3 mb-10 pl-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Education</h3>
            </div>

            {/* Vertical Line */}
            <div className="absolute left-9 top-20 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/30 via-indigo-500/10 to-transparent" />

            {/* Items */}
            <div className="space-y-10 pl-6">
              {educationData.map((item, index) => (
                <ScrollReveal
                  key={item.role + index}
                  direction="right"
                  delay={index * 0.1}
                  className="relative pl-10"
                >
                  {/* Timeline Indicator Dot */}
                  <div className="absolute left-[-23px] top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  </div>

                  <Card
                    className="p-6 hover:border-indigo-500/30 transition-colors"
                    glowColor="rgba(99, 102, 241, 0.12)"
                    enableTilt={false}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-white tracking-wide">
                        {item.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-400">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <span className="block text-sm font-semibold text-slate-400 mb-4">
                      {item.institution}
                    </span>

                    <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">
                      {item.details}
                    </p>

                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-white/[0.03] border border-white/[0.05] px-2.5 py-0.5 text-[10px] font-semibold text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
