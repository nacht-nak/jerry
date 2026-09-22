import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FileText, Download } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import type { ProjectCategory, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory || project.tags.includes(selectedCategory);
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-dark-900/60 bg-dots-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Work & Samples</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Commercial social media graphics, Facebook Reels, paid search advertising funnels, analytics tracking, and data dashboards.
          </p>

          {/* Download Portfolio Banner */}
          <div className="mt-6 inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-dark-950/90 border border-cyan-500/30 shadow-lg">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
              <FileText className="w-3.5 h-3.5" />
              11-Page PDF Available
            </span>
            <a
              href="/Jerry_Valera_Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-200 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
            >
              <span>Download Official Portfolio</span>
              <Download className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-6" />
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-dark-950/80 border border-slate-800 backdrop-blur-md max-w-3xl">
            {projectCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-dark-800/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
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

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </motion.div>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-dark-950/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm font-mono">No sample items found for the selected filter category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-3 px-4 py-2 rounded-lg text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30"
            >
              Reset to All Work
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
