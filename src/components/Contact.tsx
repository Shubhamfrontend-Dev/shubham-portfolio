"use client";

import React, { useState } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import Card from "./ui/Card";
import { CheckCircle2, Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("loading");

    // Simulate sending email
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Reset back to idle after 4 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative bg-[#05070f] py-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let's Start A Conversation
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-teal-400 to-emerald-400" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - Contact Details */}
          <ScrollReveal direction="left" className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-wide mb-6">Let's talk</h3>
              <p className="text-slate-400 font-light leading-relaxed mb-10 text-base">
                I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the form, or through my social channels.
              </p>

              {/* Info Items List */}
              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex items-center gap-5 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-white/[0.05] text-teal-400 group-hover:border-teal-500/30 group-hover:bg-slate-950 transition-all duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold tracking-wider text-slate-500">Location</span>
                    <span className="text-sm font-semibold text-slate-200">Lucknow, India</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-5 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-white/[0.05] text-teal-400 group-hover:border-teal-500/30 group-hover:bg-slate-950 transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold tracking-wider text-slate-500">Email</span>
                    <a
                      href="mailto:mishra.shubham25@outlook.com"
                      className="text-sm font-semibold text-slate-200 hover:text-teal-400 transition-colors"
                    >
                      mishra.shubham25@outlook.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-5 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-white/[0.05] text-teal-400 group-hover:border-teal-500/30 group-hover:bg-slate-950 transition-all duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold tracking-wider text-slate-500">Phone</span>
                    <a
                      href="tel:+917905391515"
                      className="text-sm font-semibold text-slate-200 hover:text-teal-400 transition-colors"
                    >
                      +91 7905391515
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Socials Connection */}
            <div className="mt-12 lg:mt-0 pt-8 border-t border-white/[0.05]">
              <span className="block text-xs uppercase font-bold tracking-widest text-slate-500 mb-4">Connect with me</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="interactive flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-white/[0.05] text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="interactive flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-white/[0.05] text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Form Card */}
          <ScrollReveal direction="right" className="lg:col-span-7">
            <Card className="p-8 h-full" glowColor="rgba(0, 245, 180, 0.15)">
              {status === "success" ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-teal-400 animate-bounce mb-6" />
                  <h3 className="text-2xl font-bold text-white tracking-wide mb-2">Message Sent!</h3>
                  <p className="text-slate-400 font-light max-w-sm">
                    Thank you for reaching out, Shubham. Your message has been received, and I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative group/field">
                      <label
                        htmlFor="name"
                        className={`absolute left-4 top-4 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-all pointer-events-none group-focus-within/field:-translate-y-2.5 group-focus-within/field:text-[10px] group-focus-within/field:text-teal-400 ${
                          formState.name ? "-translate-y-2.5 text-[10px] text-teal-400" : ""
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-white/[0.05] bg-slate-950/60 p-4 pt-6 text-sm text-white placeholder-transparent outline-none focus:border-teal-400/40 focus:bg-slate-950 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group/field">
                      <label
                        htmlFor="email"
                        className={`absolute left-4 top-4 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-all pointer-events-none group-focus-within/field:-translate-y-2.5 group-focus-within/field:text-[10px] group-focus-within/field:text-teal-400 ${
                          formState.email ? "-translate-y-2.5 text-[10px] text-teal-400" : ""
                        }`}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-white/[0.05] bg-slate-950/60 p-4 pt-6 text-sm text-white placeholder-transparent outline-none focus:border-teal-400/40 focus:bg-slate-950 transition-all duration-300"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div className="relative group/field">
                    <label
                      htmlFor="subject"
                      className={`absolute left-4 top-4 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-all pointer-events-none group-focus-within/field:-translate-y-2.5 group-focus-within/field:text-[10px] group-focus-within/field:text-teal-400 ${
                        formState.subject ? "-translate-y-2.5 text-[10px] text-teal-400" : ""
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/[0.05] bg-slate-950/60 p-4 pt-6 text-sm text-white placeholder-transparent outline-none focus:border-teal-400/40 focus:bg-slate-950 transition-all duration-300"
                      placeholder="Subject"
                    />
                  </div>

                  {/* Row 3: Message */}
                  <div className="relative group/field">
                    <label
                      htmlFor="message"
                      className={`absolute left-4 top-4 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-all pointer-events-none group-focus-within/field:-translate-y-2.5 group-focus-within/field:text-[10px] group-focus-within/field:text-teal-400 ${
                        formState.message ? "-translate-y-2.5 text-[10px] text-teal-400" : ""
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/[0.05] bg-slate-950/60 p-4 pt-6 text-sm text-white placeholder-transparent outline-none focus:border-teal-400/40 focus:bg-slate-950 transition-all duration-300 resize-none"
                      placeholder="Message"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="interactive group relative w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 py-4 font-semibold text-slate-950 transition-all hover:shadow-[0_0_20px_rgba(0,245,180,0.4)] disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </Card>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
