import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProfessionalValue } from './components/ProfessionalValue';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { InternationalExperience } from './components/InternationalExperience';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Intersection Observer for active navigation highlighting
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'education',
      'experience',
      'research',
      'skills',
      'achievements',
      'international',
      'languages',
      'contact'
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenCVModal={() => setCvModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCVModal={() => setCvModalOpen(true)}
        />

        {/* About Me Section */}
        <About />

        {/* Professional Value Pillars ("What I Bring") */}
        <ProfessionalValue />

        {/* Education Timeline */}
        <Education />

        {/* Leadership & Project Coordination Experience */}
        <Experience />

        {/* Research & Publications (Visually Highlighted) */}
        <Research />

        {/* Core Skills (Categorized, clean tags) */}
        <Skills />

        {/* Achievements & Awards */}
        <Achievements />

        {/* International Experience */}
        <InternationalExperience />

        {/* Languages */}
        <Languages />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive CV Modal & Document Exporter */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

    </div>
  );
}
