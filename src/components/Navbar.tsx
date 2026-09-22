import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-dark-950/80 backdrop-blur-md border-b border-cyan-500/15 shadow-lg shadow-black/40' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a 
            href="#home" 
            className="group flex items-center gap-3 text-slate-100 hover:text-cyan-400 transition-colors"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-indigo-600/20 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all duration-300">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="absolute -inset-0.5 rounded-xl bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                Jerry<span className="text-cyan-400"> Valera</span>
              </span>
              <span className="text-[10px] text-cyan-400/80 font-mono tracking-wider uppercase -mt-1">
                Freelance Marketer & VA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-glow-cyan transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-6 transition-transform" />
              <span>Resume</span>
              <Sparkles className="w-3 h-3 text-cyan-400 opacity-60 group-hover:opacity-100" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-glow-cyan transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 text-xs font-medium"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-dark-800 border border-slate-700/80 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-cyan-500/20 overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/25"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
