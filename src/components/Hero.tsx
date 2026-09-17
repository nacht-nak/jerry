import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Share2, 
  Target, 
  BarChart3, 
  Database, 
  Headset, 
  Sparkles,
  Download
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cyber-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-cyan-500/30 shadow-sm backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide font-mono">
                Available for Freelance Projects & Retainers
              </span>
              <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40">
                Freelancer
              </span>
            </motion.div>

            {/* Main Headlines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm <br />
              <span className="text-gradient-cyan">Jerry Valera</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-300 font-mono mb-6 flex items-center gap-2 flex-wrap">
              <span className="text-cyan-400">&gt;</span>
              <span>Social Media Manager & Virtual Assistant</span>
              <span className="inline-block w-2.5 h-5 bg-cyan-400 animate-pulse ml-1" />
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              A process and quality-oriented digital marketing specialist with a passion for helping businesses excel in social media growth, paid search advertising (Google & Bing Ads), web analytics, and executive virtual assistance.
            </p>

            {/* Focus Tag Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                'Social Media Marketing',
                'Paid Search & PPC Ads',
                'GA4 & GTM Tracking',
                'Virtual Assistance',
                'Certified Data Analyst'
              ].map((focus) => (
                <span 
                  key={focus} 
                  className="text-xs font-mono px-3 py-1 rounded-md bg-dark-800/80 text-cyan-300/90 border border-slate-700/60"
                >
                  #{focus}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-glow-cyan transition-all duration-300"
              >
                <span>View My Work & Designs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/80 hover:bg-dark-800 hover:text-white border border-slate-700 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Hire Me as a Freelancer</span>
              </a>

              <a
                href="/Jerry_Valera_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Portfolio PDF</span>
              </a>
            </div>

            {/* Quick Metrics ribbon */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-xl">
              <div>
                <div className="text-2xl font-extrabold text-white font-mono text-gradient-cyan">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Commitment to ROI</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-mono text-cyan-400">1+ Yrs</div>
                <div className="text-xs text-slate-400 mt-0.5">Digital Marketing</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-mono text-indigo-400">Google/Bing</div>
                <div className="text-xs text-slate-400 mt-0.5">Ads Campaigns</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-mono text-amber-400">Certified</div>
                <div className="text-xs text-slate-400 mt-0.5">Data Analyst</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Profile & Floating Tech Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Holographic Glowing Rings */}
            <div className="relative w-[320px] sm:w-[380px] h-[380px] sm:h-[420px] flex items-center justify-center">
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-indigo-600/20 blur-2xl animate-pulse-slow pointer-events-none" />

              {/* Orbital Ring 1 */}
              <div className="absolute inset-4 rounded-full border border-cyan-500/20 border-dashed animate-spin [animation-duration:40s] pointer-events-none" />
              
              {/* Orbital Ring 2 */}
              <div className="absolute inset-10 rounded-full border border-indigo-500/20 [animation-duration:25s] pointer-events-none" />

              {/* Avatar Frame Container */}
              <div className="relative z-10 w-64 sm:w-72 h-64 sm:h-72 rounded-3xl p-2 bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-indigo-600/30 shadow-2xl shadow-black/80 backdrop-blur-md">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-dark-900 border border-cyan-500/30 relative group">
                  <img
                    src={avatarError ? '/avatar.jpg' : '/jerry-valera.jpg'}
                    onError={() => setAvatarError(true)}
                    alt="Jerry Valera - Freelance Social Media Manager & Virtual Assistant"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle futuristic scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom Avatar Badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-dark-950/80 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-cyan-300 font-semibold">Jerry Valera</span>
                    <span className="text-slate-400">Freelancer</span>
                  </div>
                </div>
              </div>

              {/* Floating Freelance Badges (Around Profile) */}
              
              {/* 1. Social Media Icon */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 left-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-cyan-400/40 shadow-glow-cyan backdrop-blur-md"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute opacity-50" />
                <Share2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-cyan-200 font-mono">Social Media</span>
              </motion.div>

              {/* 2. Paid Ads Icon */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-16 -right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-blue-500/40 shadow-md backdrop-blur-md"
              >
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-blue-200 font-mono">Google Ads</span>
              </motion.div>

              {/* 3. Analytics Icon */}
              <motion.div
                animate={{ y: [-7, 9, -7] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute bottom-16 -left-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-indigo-500/40 shadow-md backdrop-blur-md"
              >
                <BarChart3 className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-indigo-200 font-mono">GA4 & GTM</span>
              </motion.div>

              {/* 4. SQL & Excel Icon */}
              <motion.div
                animate={{ y: [9, -9, 9] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -bottom-4 right-10 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-amber-500/40 shadow-glow-amber backdrop-blur-md"
              >
                <Database className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-amber-200 font-mono">SQL & Excel</span>
              </motion.div>

              {/* 5. Virtual Assistant Icon */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
                className="absolute top-1/2 -left-8 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-dark-900/90 border border-purple-400/40 shadow-glow-indigo backdrop-blur-md"
              >
                <Headset className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-semibold text-purple-200 font-mono">Virtual Assistant</span>
              </motion.div>

              {/* 6. Creative Sparkle Badge */}
              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-5 right-16 z-20 w-8 h-8 rounded-lg bg-dark-800/90 border border-slate-700 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
