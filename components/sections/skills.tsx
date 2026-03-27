'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { skillsData } from '@/lib/portfolio-data';

const colorVariants = {
  amber: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
  blue: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
  teal: 'border-teal-500/40 text-teal-300 bg-teal-500/10',
  purple: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
  rose: 'border-rose-500/40 text-rose-300 bg-rose-500/10',
  green: 'border-green-500/40 text-green-300 bg-green-500/10',
  orange: 'border-orange-500/40 text-orange-300 bg-orange-500/10',
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white mb-2">
          Skills & Technologies
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillsData.map((category, idx) => {
          const colorClass = colorVariants[category.color as keyof typeof colorVariants];
          const categoryColorMap = {
            amber: 'text-amber-400',
            blue: 'text-blue-400',
            teal: 'text-teal-400',
            purple: 'text-purple-400',
            rose: 'text-rose-400',
            green: 'text-green-400',
            orange: 'text-orange-400',
          };

          return (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all hover:glow-blue"
            >
              <h3 className={`font-space-mono text-lg font-bold mb-4 ${categoryColorMap[category.color as keyof typeof categoryColorMap]}`}>
                {category.category}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={skillItem}
                    className={`px-3 py-1 rounded-full text-xs font-mono border ${colorClass} transition-all hover:scale-110`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
