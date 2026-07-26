import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink, ShieldCheck, FileCheck } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-[#080B1A] border border-cyan-500/40 w-full max-w-5xl h-[88vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative text-slate-200"
        >
          {/* Top Modal Header */}
          <div className="px-6 py-4 bg-[#050814] border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono font-bold text-white text-sm sm:text-base block leading-tight">
                  Kanchan_Deshmukh_Official_Resume
                </span>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Verified Developer Document
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-rose-500/60 hover:bg-rose-500/10 transition-all focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Middle Content - Live Embedded Resume Viewer */}
          <div className="p-4 sm:p-6 flex-1 flex flex-col items-center justify-center overflow-hidden bg-[#0A0E22]">
            <div className="w-full h-full bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden relative shadow-inner flex flex-col">
              
              {/* Native Browser PDF Iframe Viewer */}
              <iframe
                src="/Kanchan_Deshmukh_Resume.pdf#view=FitH"
                className="w-full h-full border-none bg-slate-900"
                title="Kanchan Deshmukh Resume PDF Viewer"
              >
                <div className="flex flex-col items-center justify-center h-full p-6 text-center text-slate-400 space-y-4">
                  <FileText className="w-12 h-12 text-purple-400" />
                  <p className="text-sm">Your browser doesn't support built-in PDF rendering.</p>
                  <a
                    href="/Kanchan_Deshmukh_Resume.pdf"
                    download="Kanchan_Deshmukh_Resume.pdf"
                    className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm"
                  >
                    Download PDF Direct
                  </a>
                </div>
              </iframe>

            </div>
          </div>

          {/* Bottom Footer - Explicit Multi-Format Download Action Buttons */}
          <div className="px-6 py-4 bg-[#050814] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="text-xs font-mono text-slate-400 text-center sm:text-left">
              <span>Need offline format? Download in PDF or Word (.docx):</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs sm:text-sm font-medium transition-colors"
              >
                Close View
              </button>
              
              {/* Official DOCX Download */}
              <a
                href="/Kanchan_Deshmukh_Resume.docx"
                download="Kanchan_Deshmukh_Resume.docx"
                className="px-4.5 py-2.5 rounded-xl bg-slate-900 border border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-white text-xs sm:text-sm font-semibold hover:bg-blue-600/20 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Word (.docx)</span>
              </a>

              {/* Official PDF Download */}
              <a
                href="/Kanchan_Deshmukh_Resume.pdf"
                download="Kanchan_Deshmukh_Resume.pdf"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 animate-bounce" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
