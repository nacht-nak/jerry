import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center p-1">
                {/* Brand icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#22d3ee" strokeWidth="1.5" />
                  <path d="M8 12h8M12 8v8" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Jerry <span className="text-cyan-400">Valera</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              "Dedicated to helping businesses excel in social media marketing and bring their brand to life."
            </p>
            <p className="text-[11px] font-mono text-cyan-400/80 mt-1">
              Freelance Social Media Manager & Virtual Assistant
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jerryvalera"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
                <path d="M7.5 10v6.5M7.5 7.5v.01" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M10.5 16.5V12.5C10.5 11.1 11.6 10 13 10C14.4 10 15.5 11.1 15.5 12.5V16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            {/* Email / Gmail */}
            <a
              href="mailto:jerryvalera0823@gmail.com"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 transition-all"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="3" fill="#4285F4" />
                <path d="M2 7l10 6 10-6" stroke="white" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
              </svg>
            </a>
            {/* Phone / WhatsApp */}
            <a
              href="tel:+639162212837"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 transition-all"
              aria-label="Phone"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <circle cx="12" cy="12" r="10" fill="#25D366" />
                <path d="M8.5 7.5C8 7.5 7.5 8 7.5 8.5C7.5 13 11 16.5 15.5 16.5C16 16.5 16.5 16 16.5 15.5V14.2L14.5 13.2L13.5 14C12.2 13.3 10.7 11.8 10 10.5L10.8 9.5L9.8 7.5H8.5Z" fill="white" />
              </svg>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:shadow-glow-cyan/50 transition-all"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack Ribbon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Jerry Valera. All rights reserved.
          </p>

          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span>Social Media Manager • Paid Search Analyst • Virtual Assistant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
