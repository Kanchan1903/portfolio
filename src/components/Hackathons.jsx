import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, Users2, Rocket, Sparkles, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hackathons = () => {
  const { hackathons } = portfolioData;

  return (
    <section id="hackathons" className="py-20 px-5 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          Innovation & Team Collaboration
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Hackathon <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#06B6D4]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {hackathons.map((hack, index) => {
          const isFinalist = hack.isFinalist;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass-card p-6 bg-[#0B1024]/90 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${
                isFinalist 
                  ? 'border border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]' 
                  : 'border border-purple-500/40 hover:border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
              }`}
            >
              {/* Glowing Top Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                isFinalist 
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_12px_#06B6D4]' 
                  : 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-[0_0_12px_#8B5CF6]'
              }`} />

              <div>
                {/* Header title & icon */}
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-md shrink-0 ${
                      isFinalist 
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-400/60 text-cyan-300 group-hover:scale-105' 
                        : 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border-purple-500/50 text-purple-300 group-hover:scale-105'
                    } transition-all duration-300`}>
                      {isFinalist ? <Trophy className="w-5 h-5" /> : <Rocket className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                        National Level Competition
                      </span>
                      <h3 className={`text-xl font-extrabold text-white transition-colors mt-0.5 ${
                        isFinalist ? 'group-hover:text-cyan-300' : 'group-hover:text-purple-300'
                      }`}>
                        {hack.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Sleek Status Badge */}
                <div className="mb-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold border ${
                    isFinalist
                      ? 'bg-gradient-to-r from-cyan-950/80 via-blue-950/80 to-indigo-950/80 text-cyan-300 border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      : 'bg-gradient-to-r from-purple-950/80 via-indigo-950/80 to-slate-950/80 text-purple-300 border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                  }`}>
                    {isFinalist ? (
                      <>
                        <Trophy className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                        <span className="tracking-tight">{hack.statusBadge}</span>
                        <Star className="w-3 h-3 fill-cyan-400 text-cyan-400 animate-pulse" />
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                        <span className="tracking-tight">{hack.statusBadge}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Problem Statement Focus Box */}
                <div className="mb-4 bg-[#0E1530]/90 border border-slate-800 rounded-xl p-3.5 shadow-inner">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Problem Statement Focus
                    </span>
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                      isFinalist 
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' 
                        : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                    }`}>
                      {hack.role}
                    </span>
                  </div>
                  <p className="text-slate-100 font-bold text-sm">
                    {hack.statement}
                  </p>
                </div>

                {/* Contributions List */}
                <div>
                  <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                    <Users2 className={`w-3.5 h-3.5 ${isFinalist ? 'text-cyan-400' : 'text-purple-400'}`} />
                    <span>Key Individual Contributions:</span>
                  </h4>
                  <ul className="space-y-2">
                    {hack.contributions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          isFinalist ? 'text-cyan-400' : 'text-purple-400'
                        }`} />
                        <span className="font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Hackathons;
