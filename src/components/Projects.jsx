import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Layers, Shield, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { portfolioData } from '../data/portfolioData';
import dashboardImage from '../assets/attendance_dashboard.png';

const Projects = () => {
  const { title, description, technologies, features, githubUrl, liveDemoUrl } = portfolioData.project;

  return (
    <section id="projects" className="py-24 px-5 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          Featured Engineering Work
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Signature <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Project</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#8B5CF6]" />
        <p className="text-slate-400 mt-4 text-base">
          A comprehensive full-stack MERN web application engineered to solve digital classroom attendance workflows.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card p-6 sm:p-10 border-slate-800 bg-[#0B0F22]/95 shadow-[0_0_50px_rgba(139,92,246,0.1)] hover:border-purple-500/40 transition-all duration-500 relative overflow-hidden group"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-600/15 to-blue-600/15 rounded-full blur-3xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-500" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Project Mockup / Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group/img bg-[#070A17]">
              <div className="h-9 bg-slate-900 border-b border-slate-800 px-4 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-3 bg-slate-800/80 px-3 py-0.5 rounded-md text-ellipsis overflow-hidden whitespace-nowrap max-w-[240px]">
                  attendance-system-mern.vercel.app
                </span>
              </div>
              <div className="relative overflow-hidden max-h-[380px]">
                <img
                  src={dashboardImage}
                  alt="Google Classroom Attendance System Dashboard"
                  className="w-full h-auto object-cover transform group-hover/img:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F22]/90 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-purple-500/30">
                  <span className="text-xs font-mono font-semibold text-purple-300 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> MERN Stack Application
                  </span>
                  <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                    Live Production
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-400 mb-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Featured Capstone & Portfolio Work</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight group-hover:text-purple-300 transition-colors">
                {title}
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {description}
              </p>

              {/* Technologies list */}
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 block mb-2.5 uppercase font-semibold tracking-wider">
                  Tech Stack Utilized:
                </span>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#141A35] border border-slate-700 text-purple-300 text-xs font-medium font-mono hover:border-purple-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features list */}
              <div className="mb-8">
                <span className="text-xs font-mono text-slate-400 block mb-3 uppercase font-semibold tracking-wider">
                  Key Implemented Features:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions / Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2.5 text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              
              <a
                href={liveDemoUrl || "https://attendance-system-mern-32iyxfuh5.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105 transition-all duration-300 flex items-center gap-2.5 text-sm group/demo"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
                <ExternalLink className="w-4 h-4 text-white group-hover/demo:scale-110 transition-transform" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
