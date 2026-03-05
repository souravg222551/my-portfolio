"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PneumoniaDetectionProject() {
  return (
    <main className="min-h-screen bg-slate-950 p-4 md:p-12 font-sans text-slate-200">
      <div className="mx-auto max-w-4xl">
        
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 mb-8 w-fit transition-colors">
            ← Back to Portfolio
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="border-b border-white/10 pb-10 mb-10"
        >
          <div className="flex gap-3 mb-4">
            <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">Deep Learning</span>
            <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">Python</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Pneumonia Detection</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            A deep learning model trained to detect pneumonia from medical X-ray imaging datasets.
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
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-slate-400 leading-relaxed">
                Medical imaging requires high accuracy and fast processing. The goal was to build a reliable model capable of assisting in diagnosing pneumonia from chest X-rays efficiently.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
              <p className="text-slate-400 leading-relaxed">
                Trained a convolutional neural network (CNN) on a large dataset of X-ray images, optimizing the model for accuracy and validating it against test datasets to ensure reliable predictions.
              </p>
            </section>
          </div>

          {/* Right Column: Links */}
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Project Links</h3>
              
              <a href="https://colab.research.google.com/drive/11c8e2UoXpYLEbQFahLJR6FCGnAhw7nUq?usp=sharing" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium transition-colors mb-3">
                View Source Code
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}