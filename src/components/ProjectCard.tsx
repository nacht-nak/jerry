import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const [imageError, setImageError] = useState(false);

  const currentImageSrc = imageError 
    ? '/portfolio_assets/social-design-1.jpg'
    : project.image;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl bg-dark-900/70 border border-slate-800 hover:border-cyan-500/40 shadow-lg hover:shadow-glow-cyan/20 backdrop-blur-sm overflow-hidden flex flex-col transition-all duration-300 relative"
    >
      {/* Top Banner & Image */}
      <div 
        onClick={() => onSelect(project)}
        className="relative aspect-video w-full overflow-hidden bg-dark-950 cursor-pointer"
      >
        <img
          src={currentImageSrc}
          alt={project.title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-85" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-dark-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Highlight badge if any */}
        {project.highlight && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-950/70 text-amber-300 border border-amber-500/30 backdrop-blur-md">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              {project.highlight}
            </span>
          </div>
        )}

        {/* Overlay hover cue */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-dark-950/40 backdrop-blur-[2px] transition-opacity">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/90 text-dark-950 font-bold text-xs shadow-lg">
            <span>Explore Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="cursor-pointer" onClick={() => onSelect(project)}>
            <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1 line-clamp-1">
              {project.subtitle}
            </p>
            <p className="text-xs text-slate-300/80 mt-2.5 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-800 text-slate-400 border border-slate-800">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
          >
            <span>Learn More</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-800 transition-colors"
                title="View Source Code"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-dark-800 transition-colors"
                title="View Portfolio Document / Live Link"
                aria-label={`Open ${project.title} live link`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
