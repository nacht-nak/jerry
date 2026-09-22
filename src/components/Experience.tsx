import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-dark-900/60 bg-cyber-grid">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK & CLIENT MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient-cyan">Track Record</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Proven contributions across paid search analysis, commercial data analytics, international web development, and Tier 2 customer advocacy.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Connecting Glowing Line */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-indigo-500/50 to-slate-800" />
          
          {/* Mobile connecting line on left */}
          <div className="block sm:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500/50 to-slate-800" />

          <div className="space-y-12 sm:space-y-16">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-glow-cyan/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute opacity-40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-300" />
                  </div>

                  {/* Left Column (on desktop, switches side) */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12 sm:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-dark-900/85 border border-slate-800 hover:border-cyan-500/40 shadow-xl backdrop-blur-md transition-all group"
                    >
                      {/* Top Badges */}
                      <div className={`flex items-center gap-2 mb-3 flex-wrap ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        {item.current && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Present Role
                          </span>
                        )}
                        <span className="text-[10px] font-mono font-bold uppercase text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                          {item.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-cyan-400/90 font-mono mt-0.5">
                        {item.company}
                      </h4>

                      {/* Meta (Period & Location) */}
                      <div className={`flex items-center gap-3 text-xs text-slate-400 mt-2 mb-4 font-mono flex-wrap ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.period}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed mb-4 text-left">
                        {item.description}
                      </p>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-5 text-left">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300/90 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                  {/* Empty side for layout balance on desktop */}
                  <div className={`hidden sm:block sm:w-1/2 ${isEven ? 'sm:order-2' : 'sm:order-1'}`} />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
