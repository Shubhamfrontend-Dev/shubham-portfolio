"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#03050c] border-t border-white/[0.05] py-8 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative z-10">
        
        {/* Logo / Signature */}
        <div>
          <a
            href="#home"
            onClick={handleScrollTop}
            className="font-bold text-lg tracking-wide text-white"
          >
            <span className="text-teal-400 font-extrabold">Shubham</span>
            <span className="font-light text-slate-300">Mishra</span>
          </a>
          <p className="mt-1 text-slate-500 text-xs">
            Designing & developing functional interactive interfaces.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500 order-3 sm:order-2">
          &copy; {new Date().getFullYear()} Shubham Mishra. All rights reserved.
        </p>

        {/* Back to Top */}
        <div className="order-2 sm:order-3">
          <a
            href="#home"
            onClick={handleScrollTop}
            className="interactive flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-white/[0.05] text-slate-400 hover:text-white hover:border-white/20 transition-all shadow-md"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
