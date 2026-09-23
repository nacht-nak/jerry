import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileCode2, 
  Layers, 
  Palette, 
  Sparkles, 
  Terminal, 
  Boxes, 
  Database, 
  Zap, 
  ShieldCheck, 
  UserCheck,
  Share2,
  Video,
  Megaphone,
  Search,
  Layout,
  BarChart3,
  PhoneCall,
  SearchCheck,
  Table,
  FileSpreadsheet,
  LineChart,
  Headset,
  MessageSquare
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/skills';
import type { SkillCategory } from '../data/skills';
import { BrandIcon } from './BrandIcons';

// Map icon string to component
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Share2,
  Sparkles,
  Video,
  Megaphone,
  Palette,
  Zap,
  Search,
  Layers,
  Layout,
  BarChart3,
  Terminal,
  PhoneCall,
  SearchCheck,
  Database,
  Table,
  FileSpreadsheet,
  LineChart,
  FileCode2,
  Boxes,
  Code2,
  Headset,
  MessageSquare,
  UserCheck,
  ShieldCheck
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-dark-950">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>FREELANCE ARSENAL & TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Hands-on proficiencies in social media marketing, paid search campaigns, web analytics (GA4/GTM), SQL data modeling, and client support.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-dark-900/90 border border-slate-800 backdrop-blur-md max-w-3xl">
            {(['All', ...skillCategories] as const).map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-dark-800/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillCategoryPill"
                      className="absolute inset-0 rounded-xl bg-cyan-500/15 border border-cyan-500/40 shadow-glow-cyan/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-dark-900/70 border border-slate-800 hover:border-cyan-500/40 shadow-lg backdrop-blur-sm transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-dark-800/90 border border-slate-700/60 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all flex items-center justify-center p-2 shrink-0 shadow-inner">
                        <BrandIcon name={skill.name} className="w-6 h-6 shrink-0" fallbackIcon={IconComponent} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-wider block">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-slate-700/60">
                      {skill.experienceYears}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mt-2">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
                    <span className="text-slate-400">{skill.level}</span>
                    <span className="text-cyan-400 font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-dark-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
