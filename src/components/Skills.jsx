import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Check, Terminal, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { programming, database, webDevelopment } = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 px-5 max-w-6xl mx-auto relative z-10">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-radial-purple pointer-events-none opacity-40 blur-3xl" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          Technical Toolkit
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#3B82F6]" />
        <p className="text-slate-400 mt-4 text-base">
          Programming languages, database architecture, and full-stack web development competencies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Programming Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 border-purple-500/20 bg-[#0A0F24]/90 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden flex flex-col"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/40 flex items-center justify-center mb-6 shadow-sm">
            <Terminal className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Programming</h3>
          <p className="text-slate-400 text-sm mb-6 pb-4 border-b border-slate-800/80">
            Core general-purpose script development, problem solving, and markup structure.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {programming.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants} className="w-full">
                <div className="px-4 py-3 rounded-xl bg-[#11172F] border border-slate-700/80 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-indigo-900/30 flex items-center justify-between group transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#8B5CF6]" />
                    <span className="font-semibold text-slate-100 group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Proficient
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Web Development Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 border-blue-500/20 bg-[#0B1228]/90 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden flex flex-col"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 flex items-center justify-center mb-6 shadow-sm">
            <Globe className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Web Development</h3>
          <p className="text-slate-400 text-sm mb-6 pb-4 border-b border-slate-800/80">
            Modern MERN stack frontend & backend technologies and industry-standard version control.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {webDevelopment.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants} className="w-full">
                <div className="px-4 py-3 rounded-xl bg-[#11172F] border border-slate-700/80 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 flex items-center justify-between group transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#3B82F6]" />
                    <span className="font-semibold text-slate-100 group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    MERN Stack
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Database Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 border-cyan-500/20 bg-[#0A1125]/90 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden flex flex-col"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center mb-6 shadow-sm">
            <Database className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Database Architecture</h3>
          <p className="text-slate-400 text-sm mb-6 pb-4 border-b border-slate-800/80">
            Relational SQL & NoSQL data modeling and efficient querying for dynamic applications.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {database.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants} className="w-full">
                <div className="px-4 py-3 rounded-xl bg-[#11172F] border border-slate-700/80 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-gradient-to-r hover:from-cyan-900/30 hover:to-blue-900/30 flex items-center justify-between group transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4]" />
                    <span className="font-semibold text-slate-100 group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {skill.name === 'SQL' ? 'Relational DB' : 'NoSQL'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
