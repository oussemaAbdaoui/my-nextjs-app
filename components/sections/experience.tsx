'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { experienceData } from '@/lib/portfolio-data';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="experience" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white mb-2">
          Experience
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="relative space-y-8 md:space-y-12"
      >
        {/* Timeline line */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-600/20" />

        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="relative md:ml-24 group"
          >
            {/* Timeline dot */}
            <div className={`hidden md:block absolute -left-16 top-2 w-4 h-4 rounded-full border-4 border-slate-950 ${
              exp.current ? 'bg-blue-500 animate-pulse glow-blue' : 'bg-blue-600'
            }`} />

            {/* Card */}
            <div className="border-glow bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:translate-y-[-4px] transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-semibold">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 font-mono">{exp.period}</p>
                  {exp.current && (
                    <span className="inline-block mt-1 px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs text-blue-300 font-semibold">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4">{exp.location}</p>

              <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="text-gray-300 text-sm flex gap-3">
                    <span className="text-blue-400 font-bold mt-0.5">→</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/40 text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
