import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-200 relative selection:bg-purple-500 selection:text-white font-sans overflow-x-hidden">
      {/* Scroll progress indicator at top */}
      <ScrollProgress />

      {/* Subtle animated particles background */}
      <ParticleBackground />

      {/* Navigation bar */}
      <Navbar />

      {/* Main page sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top floating button */}
      <BackToTop />

      {/* Recruiter interactive resume modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
