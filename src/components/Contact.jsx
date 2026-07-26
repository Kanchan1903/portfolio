import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, MessageSquare, User, AtSign } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData.personal;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);

    // Open email client with pre-filled inquiry
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Kanchan,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:kanchan.dd2005@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 7000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 px-5 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Let's <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#8B5CF6]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Quick Contact Links Box */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col h-full"
        >
          <div className="glass-card p-6 sm:p-7 border-purple-500/20 bg-[#0C1226]/90 relative overflow-hidden flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-extrabold text-white mb-2">Contact Information</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Whether you have an internship opportunity or a project query, feel free to reach out!
              </p>

              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center gap-3.5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">LinkedIn</span>
                    <span className="text-white font-semibold group-hover:text-blue-400 transition-colors text-xs sm:text-sm">
                      Connect on LinkedIn
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] flex items-center gap-3.5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">GitHub</span>
                    <span className="text-white font-semibold group-hover:text-purple-400 transition-colors text-xs sm:text-sm">
                      Kanchan1903
                    </span>
                  </div>
                </a>

                {/* Email - Directly opens mailto */}
                <a
                  href="mailto:kanchan.dd2005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center gap-3.5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Email</span>
                    <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                      kanchan.dd2005@gmail.com
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Box - Compact & Matched Height */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col h-full"
        >
          <div className="glass-card p-6 sm:p-7 border-slate-800 bg-[#0B1024]/95 shadow-2xl relative flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-5">
                Fill out this quick form below and your inquiry will reach my personal inbox.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3 my-auto"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-6 h-6 animate-bounce" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                  <p className="text-slate-300 text-xs max-w-md mx-auto">
                    Your mail client has been opened to complete your message to kanchan.dd2005@gmail.com.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 px-5 py-1.5 rounded-full bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/50 transition-all text-xs font-mono uppercase font-bold"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      <span>Your Name <span className="text-rose-400">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#070A17] border border-slate-800 focus:border-purple-500 focus:outline-none text-white text-sm placeholder-slate-600 transition-colors shadow-inner"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <AtSign className="w-3.5 h-3.5 text-blue-400" />
                      <span>Email Address <span className="text-rose-400">*</span></span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#070A17] border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-600 transition-colors shadow-inner"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Message <span className="text-rose-400">*</span></span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#070A17] border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-slate-600 transition-colors shadow-inner resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Direct Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
