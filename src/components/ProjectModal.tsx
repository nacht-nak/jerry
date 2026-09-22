import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Sparkles, Tag, FileText } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentImageSrc = imageError 
    ? '/portfolio_assets/social-design-1.jpg'
    : project.image;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-md">
        
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-dark-900 border border-cyan-500/25 rounded-2xl shadow-2xl shadow-cyan-950/80 z-10 custom-scrollbar"
        >
          {/* Top Bar with Category & Close button */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-950/90 backdrop-blur-md border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              {project.highlight && (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-950/40 px-2.5 py-0.5 rounded border border-amber-500/20">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {project.highlight}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Hero Image Section */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-dark-950 border border-slate-800 shadow-lg">
              <img
                src={currentImageSrc}
                alt={project.title}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-cyan-400 font-mono text-sm mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Full Narrative Description */}
            <div className="p-4 rounded-xl bg-dark-950/60 border border-slate-800/80">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono mb-2 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Project Case Study & Scope</span>
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Deliverables & Features */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Key Deliverables & Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-dark-800/40 border border-slate-800 text-xs text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tools & Platforms Applied</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-dark-800 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-glow-cyan transition-all"
                  >
                    <span>View Showcase / Portfolio PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href="/Jerry_Valera_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-dark-800 hover:bg-dark-700 border border-slate-700 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download Full 11-Page PDF</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-dark-800/60 hover:bg-dark-800 border border-slate-800 transition-colors ml-auto"
              >
                Close Window
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
