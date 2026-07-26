import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-[#11172F]/90 backdrop-blur-md border border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-1 transition-all duration-300 focus:outline-none animate-in fade-in"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
