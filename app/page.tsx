"use client";
import React, { useState } from "react";


import { motion } from "framer-motion";
import Link from "next/link";
import SpotlightCard from "../components/SpotlightCard";

export default function Home() {
  // Animation for scrolling into view
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };
  const [formStatus, setFormStatus] = useState("idle");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Replace 'YOUR_ACCESS_KEY_HERE' with the key you got from your email
    formData.append("access_key", "f721d691-76d4-40d6-8133-acc4d98643c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setFormStatus("success");
      (e.target as HTMLFormElement).reset(); // Clear the form
    } else {
      console.log("Error", data);
      setFormStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-emerald-500/30">
      
{/* --- ADD THESE TWO LINES FOR BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      {/* ------------------------------------------------ */}

      {/* 1. NAVBAR (Sticky Glassmorphism) */}
      {/* 1. NAVBAR (Sticky Glassmorphism - Larger Version) */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          {/* Larger Logo */}
          <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tighter">
            Sourav Gupta<span className="text-emerald-500">.</span>
          </span>

          {/* Larger Links */}
          <div className="hidden md:flex gap-10 text-base font-semibold text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-sm">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-sm">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-sm">Projects</a>
            <a href="#achievements" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-sm">Achievements</a>
          </div>

          {/* Larger Button */}
          <a href="#contact" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3 rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            Hire Me
          </a>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-4 md:px-8 pt-32 pb-20 space-y-32">
        
        {/* 2. HERO & ABOUT ME SECTION */}
        <section id="about" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <SpotlightCard className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 flex flex-col justify-end min-h-[400px]">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">digital</span> experiences.
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
                Hi, I'm Sourav. I'm a CSE Student and Frontend Engineer specializing in high-performance React applications, interactive UI, and deep learning integrations.
              </p>
            </SpotlightCard>

            <SpotlightCard className="md:col-span-1 rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3"><span className="text-emerald-400">🎓</span> B.Tech CSE Student</li>
                <li className="flex gap-3"><span className="text-emerald-400">📍</span> Based in Rajasthan, India</li>
                <li className="flex gap-3"><span className="text-emerald-400">🎬</span> Tech Content Creator</li>
                <li className="flex gap-3"><span className="text-emerald-400">🇯🇵</span> Learning Japanese</li>
              </ul>
            </SpotlightCard>

          </motion.div>
        </section>

        {/* 3. SKILLS & GITHUB STATS */}
        <section id="skills" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Core Stack */}
            <SpotlightCard className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Frontend & Architecture</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Git/GitHub'].map((tech) => (
                  <span key={tech} className="bg-slate-900 border border-slate-700 text-slate-300 px-5 py-2.5 rounded-xl text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-400 mt-8 mb-4 uppercase tracking-wider">Exploring</p>
              <div className="flex flex-wrap gap-3">
                {['Cloud Computing', 'DevOps', 'Game Theory', 'Machine Learning'].map((tech) => (
                  <span key={tech} className="bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 px-5 py-2.5 rounded-xl text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>

            {/* GitHub Stats Card */}
            <SpotlightCard className="md:col-span-1 rounded-3xl border border-white/10 bg-slate-900 p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-400">Total Commits</span>
                    <span className="text-white font-bold text-lg">450+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-400">Repositories</span>
                    <span className="text-white font-bold text-lg">15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Top Language</span>
                    <span className="text-indigo-400 font-bold">TypeScript</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full"></div>
            </SpotlightCard>
            
          </motion.div>
        </section>

        {/* 4. PROJECTS */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* AI Resume Analyzer */}
            <Link href="/project/resume-analyzer" className="block h-full md:col-span-2">
              <SpotlightCard className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/40 to-slate-900 p-8 md:p-10 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
                <div className="relative z-10 w-full md:w-2/3">
                  <p className="text-sm font-semibold text-indigo-400 mb-2 uppercase tracking-wider">Frontend Engineering</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Resume Analyzer</h3>
                  <p className="text-slate-300 mb-6 text-lg">A specialized tool built to parse, analyze, and grade resumes against modern Applicant Tracking System (ATS) standards.</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/5">React</span>
                    <span className="bg-white/10 px-4 py-1.5 rounded-full border border-white/5">TypeScript</span>
                  </div>
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:bg-white/20 transition-all z-10">
                  <span className="text-xl">→</span>
                </div>
              </SpotlightCard>
            </Link>

            {/* Pneumonia Detection */}
            <Link href="/project/pneumonia-detection" className="block">
            <SpotlightCard className="rounded-3xl border border-white/10 bg-white/5 p-8 group cursor-pointer hover:bg-white/10 transition-colors">
              <p className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wider">Deep Learning</p>
              <h3 className="text-2xl font-bold text-white mb-3">Pneumonia Detection</h3>
              <p className="text-slate-400 mb-6">A deep learning model trained to detect pneumonia from medical X-ray imaging datasets.</p>
              <div className="w-full h-32 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-center text-5xl">
                🫁
              </div>
            </SpotlightCard>
            </Link>

            {/* Autism Prediction */}
            <Link href="/project/autism-prediction" className="block">
              <SpotlightCard className="rounded-3xl border border-white/10 bg-white/5 p-8 group cursor-pointer hover:bg-white/10 transition-colors h-full">
                <p className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">Machine Learning</p>
                <h3 className="text-2xl font-bold text-white mb-3">Autism Prediction</h3>
                <p className="text-slate-400 mb-6">A machine learning model built to predict the likelihood of autism spectrum traits using behavioral and demographic datasets.</p>
                <div className="w-full h-32 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-center text-5xl">
                  🧠
                </div>
              </SpotlightCard>
            </Link>

          </motion.div>
        </section>

        {/* 5. ACHIEVEMENTS & CERTIFICATIONS */}
        <section id="achievements" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Milestones & Certs</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Certifications */}
            <SpotlightCard className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-amber-400">🏆</span> Certifications
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white">Meta React Native Developer</h4>
                  <p className="text-sm text-slate-400 mt-1">Coursera • 2025</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white">JavaScript Data Structures & Algorithms</h4>
                  <p className="text-sm text-slate-400 mt-1">freeCodeCamp • 2024</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Achievements */}
            <SpotlightCard className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-purple-400">⭐</span> Achievements
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-4">
                  <span className="text-white/20 mt-1">01</span>
                  <p>Built and launched an active YouTube channel creating animated tech & programming tutorials.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white/20 mt-1">02</span>
                  <p>Developed full-stack ML solutions covering both model training (Colab) and UI integration.</p>
                </li>
              </ul>
            </SpotlightCard>

          </motion.div>
        </section>

        {/* 6. CONTACT & FOOTER */}
        <section id="contact" className="scroll-mt-32 pb-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <SpotlightCard className="rounded-3xl border border-emerald-500/20 bg-emerald-900/10 p-8 md:p-12 flex flex-col items-center text-center">
              
              {/* Centered Text Section */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's build together.</h2>
              <p className="text-lg text-emerald-100/70 mb-8 max-w-2xl mx-auto">
                I'm currently looking for specialized frontend and machine learning internships. Drop me a message and I'll get back to you ASAP.
              </p>

              {/* Centered Form */}
              <div className="w-full max-w-xl bg-slate-950/50 p-6 md:p-8 rounded-2xl border border-white/10 text-left">
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-sm text-slate-400 font-medium">Name</label>
                    <input type="text" id="name" required placeholder="John Doe" className="bg-slate-900 border border-white/10 rounded-xl p-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors" />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm text-slate-400 font-medium">Email</label>
                    <input type="email" id="email" required placeholder="john@company.com" className="bg-slate-900 border border-white/10 rounded-xl p-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-sm text-slate-400 font-medium">Message</label>
                    <textarea id="message" required rows={4} placeholder="How can I help you?" className="bg-slate-900 border border-white/10 rounded-xl p-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus !== "idle"}
                    className="mt-2 bg-emerald-500 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed w-full"
                  >
                    {formStatus === "idle" && "Send Message"}
                    {formStatus === "submitting" && "Sending..."}
                    {formStatus === "success" && "Message Sent! ✓"}
                  </button>
                </form>
              </div>

              {/* Centered LinkedIn Link */}
              <div className="mt-8">
                <a href="https://www.linkedin.com/in/sourav-gupta-63b5b0280/" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors underline decoration-emerald-500/30 underline-offset-4">
                  Or connect with me on LinkedIn
                </a>
              </div>

            </SpotlightCard>
            
            {/* Footer */}
            <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
              <p>© 2026 Sourav Gupta. Built with Next.js & Framer Motion.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="https://github.com/souravg222551" target="_blank" rel="noreferrer" className="hover:text-slate-300">GitHub</a>
                <a href="https://www.youtube.com/@souravgupta4193" target="_blank" rel="noreferrer" className="hover:text-slate-300">
      YouTube
    </a>
              </div>
            </div>
          </motion.div>
        </section>
        </main>
    </div>
  );
}