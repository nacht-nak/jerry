import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Share2, 
  Target, 
  BarChart3, 
  Award, 
  GraduationCap,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Download
} from 'lucide-react';
import { educationData } from '../data/experience';

export const About: React.FC = () => {
  const [avatarError, setAvatarError] = useState(false);

  const stats = [
    { label: 'Client Focus & Dedication', value: '100%', icon: HeartHandshake, color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { label: 'Digital Marketing & Ads', value: '1+ Yr', icon: Target, color: 'text-indigo-400', border: 'border-indigo-500/30' },
    { label: 'Multi-Channel Analytics', value: 'GA4/GTM', icon: BarChart3, color: 'text-blue-400', border: 'border-blue-500/30' },
    { label: 'Certified Data Analyst', value: '2023', icon: Award, color: 'text-amber-400', border: 'border-amber-500/30' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-dark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Jerry Valera</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Freelance Social Media Manager, Paid Search Analyst, and Certified Data Analyst dedicated to growing brands through quality-oriented execution.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-2xl bg-dark-900/80 border ${stat.border} shadow-lg backdrop-blur-md relative overflow-hidden group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${stat.color}`}>
                    {stat.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-dark-800 text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-slate-300">
                  {stat.label}
                </h3>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid: Interactive Bio Card + Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Animated Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-3xl p-6 bg-gradient-to-b from-dark-900 via-dark-900/90 to-dark-950 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            {/* Hologram aesthetic accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-dark-800 border-2 border-cyan-500/40 p-0.5 relative">
                <img
                  src={avatarError ? '/avatar.jpg' : '/jerry-valera.jpg'}
                  onError={() => setAvatarError(true)}
                  alt="Jerry Valera"
                  className="w-full h-full object-cover object-top rounded-[14px]"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Jerry Valera</h3>
                <p className="text-xs text-cyan-400 font-mono">Social Media Manager & VA</p>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Freelance Contracts</span>
                </div>
              </div>
            </div>

            {/* Quick Specs table */}
            <div className="py-4 space-y-2.5 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800/60 font-mono">
                <span className="text-slate-400">Specialization</span>
                <span className="text-cyan-300 font-semibold">Social Media & Paid Ads</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60 font-mono">
                <span className="text-slate-400">Core Tools</span>
                <span className="text-slate-200 font-semibold">Google Ads, GA4, GTM, Canva</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60 font-mono">
                <span className="text-slate-400">Data Rigor</span>
                <span className="text-indigo-300 font-semibold">SQL Queries & Advanced Excel</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60 font-mono">
                <span className="text-slate-400">Customer Support</span>
                <span className="text-amber-300 font-semibold">Tier 2 Dispute Resolution</span>
              </div>
              <div className="flex justify-between py-1.5 font-mono">
                <span className="text-slate-400">Location</span>
                <span className="text-slate-200 font-semibold">Philippines (Remote Worldwide)</span>
              </div>
            </div>

            {/* Micro quote badge */}
            <div className="mt-4 p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200/90 leading-relaxed font-mono">
              "I am passionate and professional about helping businesses excel in their digital marketing, bring their brand to life, and turn leads into sales."
            </div>

            {/* Direct PDF Download Links */}
            <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="/Jerry_Valera_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official Portfolio PDF (11 Pages)</span>
              </a>
              <a
                href="/Jerry_Valera_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-medium text-slate-300 bg-dark-800 hover:bg-dark-700 hover:text-white border border-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume (CV)</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Detailed Narrative & Why Choose Me */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Why Choose Me Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/60 border border-slate-800/80 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>WHY CHOOSE ME AS YOUR FREELANCER?</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Results-Driven Marketing with Analytical Precision
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a highly motivated and results-driven professional with experience across digital marketing, paid advertising, and commercial data analysis. My unique combination of creative content curation and analytical precision sets me apart and allows me to consistently deliver high-quality, measurable results.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Known for a strong work ethic, positive attitude, and ability to thrive under pressure, I provide business owners with exceptional service, transparent communication, timely delivery, and an unwavering commitment to exceed expectations.
              </p>

              {/* Freelance Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-dark-800/50 border border-slate-800">
                  <Target className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-100">Revenue-Focused Campaigns</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">High-intent Google & Bing ads structured for customer acquisition and positive ROAS.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-dark-800/50 border border-slate-800">
                  <Share2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-100">Brand Growth & Engagement</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Eye-catching social graphics, viral Facebook Reels, and proactive community outreach.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-dark-800/50 border border-slate-800">
                  <BarChart3 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-100">Clean Data & Attribution</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">GTM tracking, GA4 events, CallRail attribution, and SQL/Excel dashboards with zero guesswork.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-dark-800/50 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-100">Reliable Client Support</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Tier 2 telecom customer service background handling escalations and rapid communication.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Certification Highlight Card */}
            <div className="p-6 rounded-3xl bg-dark-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Training, Certifications & Education</span>
              </div>
              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div key={edu.id} className="pb-3 border-b border-slate-800/60 last:border-0 last:pb-0 space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-bold text-slate-100 text-sm sm:text-base">{edu.degree}</h4>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/20 w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {edu.institution} — <span className="text-slate-300">{edu.focus}</span>
                    </p>
                    {edu.honors && (
                      <p className="text-xs text-emerald-400 font-medium">★ {edu.honors}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
