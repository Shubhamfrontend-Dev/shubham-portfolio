"use client";

import React from "react";
import Card from "./ui/Card";
import ScrollReveal from "./ui/ScrollReveal";
import { Award, Compass, Layout, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#05070f] py-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            About Me
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            A Glimpse Into My World
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-teal-400 to-emerald-400" />
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1: Large Bio Card (Spans 2 columns on desktop) */}
          <ScrollReveal direction="up" className="md:col-span-2" delay={0.1}>
            <Card
              className="p-8 h-full flex flex-col justify-between"
              glowColor="rgba(0, 245, 180, 0.15)"
            >
              <div>
                <div className="flex items-center gap-3 text-teal-400 mb-6">
                  <Compass className="h-6 w-6" />
                  <h3 className="text-xl font-bold text-white">Who I Am</h3>
                </div>
                <p className="text-slate-300 leading-relaxed font-light text-base">
                  I’m a passionate Frontend Developer & UI Developer with 3+
                  years of professional experience specializing in building
                  modern, scalable, and visually engaging web applications. My
                  expertise lies in transforming complex ideas and Figma designs
                  into pixel-perfect, high-performance user interfaces that
                  deliver seamless user experiences.
                </p>
                <p className="mt-4 text-slate-300 leading-relaxed font-light text-base">
                  I have hands-on experience with React.js, Next.js, JavaScript
                  (ES6+), Tailwind CSS, React Query, and REST APIs. I focus on
                  writing clean, reusable, and maintainable code while ensuring
                  responsiveness, accessibility, and performance across all
                  devices.
                </p>
                <p className="mt-4 text-slate-300 leading-relaxed font-light text-base">
                  Over the years, I have worked on CRM Dashboards, Admin Panels,
                  Clinical Applications, AI-based platforms, and Enterprise Web
                  Applications, where I collaborated closely with designers and
                  backend teams to deliver production-ready solutions.
                </p>
                <p className="mt-4 text-slate-300 leading-relaxed font-light text-base">
                  Beyond development, I have a strong passion for UI/UX design,
                  modern animations, and creating premium digital experiences
                  that combine aesthetics with functionality. My goal is to
                  build products that are not only visually impressive but also
                  intuitive, fast, and user-centric.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-slate-400 text-sm italic border-t border-white/[0.05] pt-4">
                <Sparkles className="h-4 w-4 text-teal-400" />
                <span>
                  Creating pixel-perfect layouts is not just my job, it's my
                  passion.
                </span>
              </div>
            </Card>
          </ScrollReveal>

          {/* Box 2: Stats Card */}
          <ScrollReveal direction="up" className="md:col-span-1" delay={0.2}>
            <Card
              className="p-8 h-full flex flex-col justify-between"
              glowColor="rgba(99, 102, 241, 0.15)"
            >
              <div>
                <div className="flex items-center gap-3 text-indigo-400 mb-6">
                  <Award className="h-6 w-6" />
                  <h3 className="text-xl font-bold text-white">Key Stats</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="block text-4xl font-extrabold text-white">
                      3+
                    </span>
                    <span className="text-sm text-slate-400 tracking-wider">
                      Years of Experience
                    </span>
                  </div>
                  <hr className="border-white/[0.05]" />
                  <div>
                    <span className="block text-4xl font-extrabold text-white">
                      100%
                    </span>
                    <span className="text-sm text-slate-400 tracking-wider">
                      Pixel-Perfect Devoted
                    </span>
                  </div>
                  <hr className="border-white/[0.05]" />
                  <div>
                    <span className="block text-4xl font-extrabold text-white">
                      10+
                    </span>
                    <span className="text-sm text-slate-400 tracking-wider">
                      Projects Completed
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Box 3: Design Mindset Card */}
          <ScrollReveal direction="up" className="md:col-span-1" delay={0.3}>
            <Card
              className="p-8 h-full flex flex-col justify-between"
              glowColor="rgba(99, 102, 241, 0.15)"
            >
              <div>
                <div className="flex items-center gap-3 text-indigo-400 mb-4">
                  <Sparkles className="h-6 w-6" />
                  <h3 className="text-lg font-bold text-white">My Approach</h3>
                </div>
                <p className="text-slate-300 leading-relaxed font-light text-sm">
                  I specialize in transforming Figma designs into scalable, production-ready web applications. Every interface is built with pixel-perfect precision, responsive layouts, and optimized performance to deliver a seamless experience across all devices.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* Box 4: Figma to Code Card (Spans 2 columns on desktop) */}
          <ScrollReveal direction="up" className="md:col-span-2" delay={0.4}>
            <Card
              className="p-8 h-full flex flex-col justify-between"
              glowColor="rgba(0, 245, 180, 0.15)"
            >
              <div>
                <div className="flex items-center gap-3 text-teal-400 mb-4">
                  <Layout className="h-6 w-6" />
                  <h3 className="text-lg font-bold text-white">
                    Design-to-Code Excellence
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed font-light text-sm">
                  I turn modern UI designs into pixel-perfect, high-performance
                  web experiences using React.js and Next.js. From responsive
                  grids and reusable components to smooth interactions and
                  optimized layouts, every detail is implemented with precision
                  to deliver a seamless and production-ready user experience.
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
