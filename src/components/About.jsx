import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Users, Layout, FileText, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import developerAvatar from '../assets/developer_avatar.png';

const About = () => {
  const { aboutText } = portfolioData.personal;
  const { highlights } = portfolioData;

  const getIcon = (index) => {
    switch (index) {
      case 0: return <Code className="w-6 h-6 text-purple-400" />;
      case 1: return <Layers className="w-6 h-6 text-blue-400" />;
      case 2: return <Trophy className="w-6 h-6 text-cyan-300 animate-pulse" />; // SIH 2024 Finalist
      case 3: return <Users className="w-6 h-6 text-purple-400" />; // Team Leader
      case 4: return <Layout className="w-6 h-6 text-indigo-400" />;
      case 5: return <FileText className="w-6 h-6 text-blue-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 px-5 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          About Me
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Passionate About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Problem Solving</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#8B5CF6]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        {/* Avatar Placeholder / Art */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 opacity-75 blur-xl group-hover:opacity-100 transition duration-500 animate-pulse-slow" />
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#0D1224] border border-slate-700/80 p-2 shadow-2xl">
              <img
                src={developerAvatar}
                alt="Kanchan Deshmukh Developer Avatar"
                className="w-full h-full object-cover rounded-2xl filter transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1224] via-transparent to-transparent opacity-40 rounded-3xl" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-purple-500/30 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-300">STATUS</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Available for Internships
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Introduction Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="glass-card p-8 sm:p-10 border-purple-500/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-b from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-purple-400">#</span> Professional Introduction
            </h3>
            
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-normal mb-6">
              "{aboutText}"
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span className="text-slate-200 font-medium">Final-Year Computer Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-200 font-medium">SIH 2024 National Finalist</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Highlights Grid */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-slate-200 mb-8 text-center flex items-center justify-center gap-2">
          <span>Core Highlights & Capabilities</span>
        </h3>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item, idx) => {
            const isTrophyItem = idx === 2; // SIH 2024 National Finalist
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between relative group bg-[#0A0F22]/95 ${
                  isTrophyItem
                    ? 'border border-cyan-400/50 hover:border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:-translate-y-1'
                    : 'border border-slate-800/80 hover:border-purple-500/50 hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)] hover:-translate-y-1'
                }`}
              >
                <div className={`absolute -top-px left-10 right-10 h-[2px] bg-gradient-to-r from-transparent ${
                  isTrophyItem ? 'via-cyan-400' : 'via-purple-500/0 group-hover:via-purple-500'
                } to-transparent transition-all duration-500`} />
                
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 shadow-sm ${
                    isTrophyItem
                      ? 'bg-cyan-500/15 border border-cyan-400/50 group-hover:scale-110 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                      : 'bg-slate-900/90 border border-slate-800 group-hover:border-purple-500/50 group-hover:scale-110'
                  }`}>
                    {getIcon(idx)}
                  </div>
                  <h4 className={`text-lg font-bold text-white mb-2 transition-colors ${
                    isTrophyItem ? 'group-hover:text-cyan-300' : 'group-hover:text-purple-300'
                  }`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 flex justify-end">
                  <span className={`text-[11px] font-mono font-semibold uppercase tracking-widest transition-colors ${
                    isTrophyItem ? 'text-cyan-400/80 group-hover:text-cyan-300' : 'text-slate-500 group-hover:text-purple-400'
                  }`}>
                    {isTrophyItem ? '★ FINALIST //' : `0${idx + 1} //`}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
