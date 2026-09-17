import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, MapPin, Briefcase, GraduationCap, CheckCircle2, Phone, Download, FileText, Share2 } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { experienceData, educationData } from '../data/experience';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-900 border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-950/50 z-10 custom-scrollbar"
        >
          {/* Header Actions */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-950/90 backdrop-blur-md border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <h3 className="text-sm font-semibold text-cyan-300 font-mono tracking-wider">
                CURRICULUM VITAE // JERRY VALERA
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/Jerry_Valera_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-sm transition-all"
                title="Download 11-Page PDF Portfolio"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Portfolio PDF</span>
              </a>

              <a
                href="/Jerry_Valera_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-dark-800 hover:bg-dark-700 hover:text-white border border-slate-700 transition-colors"
                title="Download Resume"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Resume PDF</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-dark-800 hover:bg-dark-700 hover:text-white border border-slate-700 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-8 space-y-8 print:p-0">
            {/* Profile Overview */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-800">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Jerry Valera
                </h1>
                <p className="text-cyan-400 font-medium text-base mt-1">
                  Social Media Manager • Paid Search Analyst • Virtual Assistant
                </p>
                <p className="text-slate-400 text-xs mt-2 max-w-xl leading-relaxed">
                  A process and quality-oriented Social Media Marketing specialist with extensive experience in digital marketing, e-marketing, paid search campaigns, and commercial data analysis. Goal-oriented, great team player with an unwavering dedication to exceeding business expectations.
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-slate-300 bg-dark-800/80 p-3.5 rounded-xl border border-slate-700/60 font-mono w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>(63) 916 221 2837</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>jerryvalera0823@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>linkedin.com/in/jerryvalera</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Philippines (Remote Worldwide)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Available for Freelance Contracts</span>
                </div>
              </div>
            </div>

            {/* Core Skills Matrix */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-100 uppercase tracking-wider mb-3">
                <Share2 className="w-4 h-4 text-cyan-400" />
                <span>Core Competencies & Key Skills</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-dark-800/60 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">Social Media & Creative</span>
                  <p className="text-slate-400">Content curation & creation, Facebook Reels, short-form video editing, Canva graphics, audience outreach & engagement.</p>
                </div>
                <div className="p-3 rounded-lg bg-dark-800/60 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">Paid Ads & Tracking</span>
                  <p className="text-slate-400">Google & Bing Ads campaigns, remarketing funnels, GA4 setup, Google Tag Manager (GTM), CallRail call tracking, Search Console.</p>
                </div>
                <div className="p-3 rounded-lg bg-dark-800/60 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">Data Analysis & SQL</span>
                  <p className="text-slate-400">SQL database querying, advanced Microsoft Excel (pivot tables, statistical analysis, data cleaning), dashboards & sales forecasting.</p>
                </div>
                <div className="p-3 rounded-lg bg-dark-800/60 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">Web & Landing Pages</span>
                  <p className="text-slate-400">Figma to responsive web, HubSpot CMS modules, landing page editing & creation, blog posting, HTML5/CSS3/JavaScript.</p>
                </div>
                <div className="p-3 rounded-lg bg-dark-800/60 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">Tier 2 Customer Service</span>
                  <p className="text-slate-400">Supervisor calls, billing dispute mediation, refund processing, WFM coordination, Verizon/AT&T telecom support.</p>
                </div>
                <div className="p-3 rounded-lg bg-dark-800/60 border border-slate-800">
                  <span className="font-bold text-cyan-300 block mb-1">Communication & Teamwork</span>
                  <p className="text-slate-400">Stakeholder reporting, cross-functional collaboration, positive attitude, exceptional service, and thriving under pressure.</p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-100 uppercase tracking-wider mb-4">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Professional Work Experience</span>
              </div>
              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="relative pl-5 border-l-2 border-slate-800 space-y-1.5">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dark-900 border-2 border-cyan-400" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-white text-base">
                        {exp.role} <span className="text-cyan-400 font-normal">@ {exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-400 bg-dark-800 px-2.5 py-0.5 rounded border border-slate-700/60 w-fit">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 italic pt-0.5">
                      {exp.description}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 mt-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="leading-relaxed">{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-100 uppercase tracking-wider mb-4">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Education & Certifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationData.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl bg-dark-800/60 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-100 text-xs sm:text-sm">{edu.degree}</h4>
                      <span className="text-[11px] font-mono text-cyan-400">{edu.period}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{edu.institution}</p>
                    <p className="text-[11px] text-slate-400">{edu.focus}</p>
                    {edu.honors && (
                      <p className="text-[11px] text-emerald-400 font-semibold pt-1">★ {edu.honors}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
