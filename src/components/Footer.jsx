import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#04060C] border-t border-slate-800/80 py-10 px-5 relative z-10 text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-[0_0_12px_rgba(139,92,246,0.3)]">
            <div className="w-full h-full bg-[#080B1A] rounded-[10px] flex items-center justify-center font-mono font-extrabold text-white text-base">
              K
            </div>
          </div>
          <span className="font-extrabold text-xl text-white tracking-tight">
            Kanchan<span className="text-cyan-400">.</span>
          </span>
        </div>

        {/* Copyright */}
        <div className="text-center sm:text-right text-xs">
          <p className="text-slate-400 font-medium">
            © {currentYear} Kanchan Deshmukh. Built with React, Vite & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
