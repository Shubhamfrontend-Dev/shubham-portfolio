import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Floating navigation header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        {/* Section 1: Hero landing */}
        <Hero />

        {/* Section 2: About Bento Grid */}
        <About />

        {/* Section 3: Tech Stack Showcase */}
        <Skills />

        {/* Section 4: Projects Showroom */}
        <Projects />

        {/* Section 5: Experience & Education timelines */}
        <Timeline />

        {/* Section 6: Contact form & details */}
        <Contact />
      </main>

      {/* Footer signature */}
      <Footer />
    </>
  );
}
