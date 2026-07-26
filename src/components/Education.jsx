import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 px-5 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          Academic Foundation
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
          My <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#8B5CF6]" />
      </div>

      {/* Modern Glowing Timeline */}
      <div className="relative max-w-3xl mx-auto pl-6 sm:pl-10 border-l-2 border-purple-500/40 pb-4">
        {education.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 last:mb-0"
          >
            {/* Timeline Glowing Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#0D1328] border-2 border-purple-500 text-purple-400 flex items-center justify-center shadow-[0_0_20px_#8B5CF6] group">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300 animate-pulse" />
            </div>

            {/* Content Card */}
            <div className="glass-card p-7 sm:p-9 border-purple-500/20 bg-[#0B1025]/95 hover:border-purple-500/50 transition-all duration-500 shadow-xl group hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] ml-4 sm:ml-2">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 border border-purple-500/40 shadow-sm flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.year} Status</span>
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-semibold">
                  Currently Pursuing
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {item.degree}
              </h3>

              <h4 className="text-lg sm:text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <span>{item.major}</span>
              </h4>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {item.description}
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Database Systems (NoSQL/SQL)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Software Engineering Principles</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
