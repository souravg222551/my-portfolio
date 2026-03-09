"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrustMeshSentinelProject() {
  return (
    <main className="min-h-screen bg-slate-950 p-4 md:p-12 font-sans text-slate-200">
      <div className="mx-auto max-w-4xl">
        
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/#projects" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 mb-8 w-fit transition-colors">
            ← Back to Portfolio
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="border-b border-white/10 pb-10 mb-10"
        >
          <div className="flex flex-wrap gap-3 mb-4">
            {['Next.js', 'TypeScript', 'Supabase', 'Clerk Auth', 'Chrome API'].map((tech) => (
              <span key={tech} className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">TrustMesh Sentinel</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            A dual-layered verification platform consisting of a Next.js web portal and a Chrome Extension for real-time automated web scanning to detect AI-generated imagery.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Left Column: Details */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Architecture & AI Detection</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Integrated the <strong>Sightengine API</strong> to detect AI-generated imagery and provide detailed reasoning for synthetic content. Built a custom certification engine that generates unique hashes for images, storing them securely in <strong>Supabase</strong> to create permanent "Digital Birth Certificates."
              </p>
              <p className="text-slate-400 leading-relaxed">
                The frontend operates as an <strong>Automated Browser Sentinel</strong>. I engineered a JavaScript-based content script utilizing DOM manipulation and setInterval polling to automatically scan and badge images on any active webpage.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Technical Highlights</h2>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3"><span className="text-emerald-400">🛡️</span> <strong>Security:</strong> Implemented enterprise-grade auth using Clerk and managed secure deployment via Vercel, protecting sensitive credentials with strict Git practices.</li>
                <li className="flex gap-3"><span className="text-emerald-400">📈</span> <strong>Scalability:</strong> Successfully transitioned the project from localhost to a live production environment.</li>
                <li className="flex gap-3"><span className="text-emerald-400">✨</span> <strong>User Experience:</strong> Designed a high-end "Dark Mode" UI with glass-morphism and CSS animations to create a professional security-tool aesthetic.</li>
              </ul>
            </section>
          </div>

          {/* Right Column: Links */}
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Project Links</h3>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-medium transition-colors mb-3">
                View Live Extension
              </a>
              <a href="https://github.com/souravg222551" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-medium transition-colors">
                View Source Code
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}