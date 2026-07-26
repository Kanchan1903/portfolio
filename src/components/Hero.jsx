import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, FileText, Sparkles, Eye } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  const { name, title, seeking, contact } = portfolioData.personal;

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-5 z-10 overflow-hidden">
      
      {/* Subtle ambient lighting backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-gradient-to-tr from-purple-600/15 via-blue-600/15 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Unified Main Heading with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
            Hi, I'm {name}
          </span>
          <span className="text-cyan-400">.</span>
        </motion.h1>

        {/* Clean Static Professional Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-bold text-slate-300 tracking-tight mb-3 max-w-2xl mx-auto"
        >
          {title}
        </motion.h2>

        {/* Seeking Goal & Elevator Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal"
        >
          {seeking} with a strong focus on Python programming, full-stack MERN web applications, and collaborative real-world problem solving.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-10"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-semibold text-xs sm:text-sm shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:bg-slate-800/80 hover:border-cyan-400 hover:text-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <Eye className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>View Resume</span>
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900/70 border border-slate-700 hover:border-purple-500/50 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm hover:bg-slate-800/80 active:scale-95 transition-all flex items-center justify-center"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 text-slate-400"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Connect:</span>
          
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
