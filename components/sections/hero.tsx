'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { heroData } from '@/lib/portfolio-data';

export function HeroSection() {
  const [displayedName, setDisplayedName] = useState('');
  const [isNameComplete, setIsNameComplete] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');

  const name = heroData.name;
  const titles = heroData.titles;

  // Typewriter effect for name
  useEffect(() => {
    if (displayedName.length < name.length) {
      const timer = setTimeout(() => {
        setDisplayedName(name.slice(0, displayedName.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsNameComplete(true);
    }
  }, [displayedName, name]);

  // Cycling titles
  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      setDisplayedTitle('');
    }, 2500);
    return () => clearInterval(cycleTimer);
  }, [titles.length]);

  // Typewriter for current title
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    if (displayedTitle.length < currentTitle.length) {
      const timer = setTimeout(() => {
        setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1));
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [displayedTitle, currentTitleIndex, titles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden" id="hero">
      {/* Ambient code background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <pre className="font-space-mono text-sm text-blue-400 select-none whitespace-pre">
          {`const navigate = async (sensors) => {
  const map = buildSpatialMap(sensors);
  const plan = await llm.reason({ map, target });
  return plan.nextAction;
};

pipeline.add([
  embeddings.multilingual(),
  vectorStore.faiss({ dims: 1536 }),
  reranker.crossEncoder(),
]);`}
        </pre>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Name with typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h1 className="font-space-mono text-4xl md:text-6xl font-bold text-white mb-2">
            {displayedName}
            {!isNameComplete && <span className="animate-pulse">_</span>}
          </h1>
        </motion.div>

        {/* Cycling titles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="h-12 md:h-16 mb-8"
        >
          <h2 className="font-space-mono text-xl md:text-3xl text-blue-400 glow-text">
            {displayedTitle}
            <span className="animate-pulse">|</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {heroData.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold glow-blue transition-all">
            {heroData.cta.primary}
          </button>
          <button className="px-8 py-3 border border-blue-500/40 hover:border-blue-400 text-blue-300 rounded-lg font-semibold transition-all hover:bg-blue-500/10">
            {heroData.cta.secondary}
          </button>
        </motion.div>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex gap-6 justify-center"
        >
          <a
            href={`mailto:${heroData.contact.email}`}
            className="p-3 bg-white/[0.05] border border-white/10 rounded-full hover:border-blue-400 hover:glow-blue transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-blue-400" />
          </a>
          <a
            href={heroData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/[0.05] border border-white/10 rounded-full hover:border-blue-400 hover:glow-blue transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-blue-400" />
          </a>
          <a
            href={heroData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/[0.05] border border-white/10 rounded-full hover:border-blue-400 hover:glow-blue transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-blue-400" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-blue-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
