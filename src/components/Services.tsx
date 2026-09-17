import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Layout, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Wrench,
  Share2,
  Target,
  BarChart3,
  Database,
  Headset
} from 'lucide-react';
import { servicesData } from '../data/services';

const serviceIcons: Record<string, React.FC<{ className?: string }>> = {
  Share2,
  Target,
  BarChart3,
  Layout,
  Database,
  Headset,
  Globe,
  Layers,
  Sparkles
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-dark-950">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>WHAT DO I OFFER?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Freelance <span className="text-gradient-cyan">Services</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Tailored digital marketing, social media growth, paid search advertising, and analytical solutions designed to scale your business.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 sm:p-8 rounded-2xl bg-dark-900/75 border border-slate-800 hover:border-cyan-500/40 shadow-xl hover:shadow-glow-cyan/15 backdrop-blur-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Gradient background card flair */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-bl-full blur-2xl group-hover:scale-110 transition-transform pointer-events-none`} />

                <div>
                  <div className="p-3.5 rounded-2xl bg-dark-800 text-cyan-400 border border-slate-700/60 w-fit mb-6 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-medium mb-3">
                    {service.shortDesc}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Request this service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
