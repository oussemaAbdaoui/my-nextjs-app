'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { educationData } from '@/lib/portfolio-data';

export function EducationSection() {
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
    <section className="py-20 px-4 max-w-6xl mx-auto" id="education" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white mb-2">
          Education
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="space-y-8"
      >
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="border-glow bg-white/[0.03] border border-white/10 rounded-xl p-8 hover:border-blue-400/50 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                <p className="text-blue-400 font-semibold mb-2">{edu.degree}</p>
                <p className="text-sm text-gray-400">{edu.period}</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs text-blue-300 font-semibold">
                  {edu.short}
                </span>
              </div>
            </div>

            {/* Skills acquired */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">Key Skills</p>
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/40 text-blue-300"
                  >
                    {skill}
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
