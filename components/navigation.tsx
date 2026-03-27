'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'extracurricular', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection Observer for active section
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('hero')}
          className="font-space-mono text-lg font-bold text-white hover:text-blue-400 transition-colors"
        >
          <span className="text-blue-400">OA_</span>
          <span className="animate-pulse">|</span>
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-4 py-2 rounded-lg text-sm font-space-mono font-semibold tracking-wider transition-all ${
                activeSection === id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {sections.map(({ id, label }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-space-mono font-semibold transition-all ${
                    activeSection === id
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-400/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
