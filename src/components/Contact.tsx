import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  Clock,
<<<<<<< HEAD
  Phone,
  FileText,
=======
>>>>>>> 884248561d217239184c3d1f04129fcab9aa5c17
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  AlertCircle,
<<<<<<< HEAD
=======
  Phone,
  FileText,
>>>>>>> 884248561d217239184c3d1f04129fcab9aa5c17
  Download
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Social Media Management & Reels',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailAddress = 'jerryvalera0823@gmail.com';
  const phoneNumber = '+63 916 221 2837';
  const linkedInUrl = 'https://www.linkedin.com/in/jerryvalera';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+639162212837');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate real-time submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#38bdf8', '#6366f1', '#f59e0b']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 1200);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || `Freelance Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(`Hi Jerry,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService Interested: ${formData.service}\n\nProject Details:\n${formData.message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-dark-900/60 bg-dots-pattern">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S WORK TOGETHER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hire Me as Your <span className="text-gradient-cyan">Freelancer</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Looking for a dedicated Social Media Manager, Paid Search Specialist, or Virtual Assistant? Let's discuss your project goals today.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Contact Info & Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-950/80 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2">
                Direct Contact Details
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I typically reply within 24 hours.
              </p>

              <div className="space-y-4 text-xs font-mono">
                {/* Email Item with copy */}
                <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Email Address</span>
                      <a href={`mailto:${emailAddress}`} className="text-slate-200 font-semibold hover:text-cyan-300 transition-colors">
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-slate-300 hover:text-cyan-300 border border-slate-700 transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone Item with copy */}
                <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/20">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Phone / Mobile</span>
                      <a href="tel:+639162212837" className="text-slate-200 font-semibold hover:text-emerald-300 transition-colors">
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-slate-300 hover:text-emerald-300 border border-slate-700 transition-colors"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-500/20">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">LinkedIn Profile</span>
                      <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 font-semibold hover:underline"
                      >
                        linkedin.com/in/jerryvalera
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Location</span>
                    <span className="text-slate-200 font-semibold">Hinoba-an / Bacolod City, Philippines (Remote)</span>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-900/40 text-emerald-400 border border-emerald-500/40">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 font-bold block">Current Status</span>
                    <span className="text-slate-200 font-semibold">Open for Freelance Projects & Retainers</span>
                  </div>
                </div>
              </div>

              {/* PDF Documents Download */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-2">
                <a
                  href="/Jerry_Valera_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-dark-900 hover:bg-dark-800 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span>Download Official Portfolio PDF (11 Pages)</span>
                  </div>
                  <Download className="w-4 h-4" />
                </a>

                <a
                  href="/Jerry_Valera_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-dark-900 hover:bg-dark-800 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-400" />
                    <span>Download Curriculum Vitae (Resume)</span>
                  </div>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Freelance Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-950/80 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Project Proposal or Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the details below, and let's turn your vision into measurable results.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 text-center space-y-4 my-6"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You for Reaching Out!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been staged! You can also click below to open your default email client with your message prefilled.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleMailtoDirect}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25"
                    >
                      Open in Email App
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-dark-800 hover:bg-dark-700 border border-slate-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                      >
                        <option value="Social Media Management & Reels">Social Media Management & Reels</option>
                        <option value="Google & Bing Ads Campaigns (PPC)">Google & Bing Ads Campaigns (PPC)</option>
                        <option value="GA4, GTM & Web Tracking">GA4, GTM & Web Tracking</option>
                        <option value="Landing Pages & Website Content">Landing Pages & Website Content</option>
                        <option value="Data Analytics & Excel/SQL Dashboards">Data Analytics & Excel/SQL Dashboards</option>
                        <option value="Virtual Assistance & Customer Support">Virtual Assistance & Customer Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Timeline / Inquiry"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your business, current marketing challenges, or goals..."
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 custom-scrollbar"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-glow-cyan transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Freelance Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleMailtoDirect}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Or open email client directly &rarr;
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
