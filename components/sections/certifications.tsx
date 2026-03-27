'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { certificationsData } from '@/lib/portfolio-data';

const issuerColorMap: Record<string, { initials: string; color: string }> = {
  Oracle: { initials: 'OR', color: 'from-amber-500 to-orange-500' },
  'Amazon Web Services': { initials: 'AWS', color: 'from-orange-500 to-red-500' },
  'IBM / Coursera': { initials: 'IBM', color: 'from-teal-500 to-cyan-500' },
};

export function CertificationsSection() {
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

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="certifications" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white mb-2">
          Certifications
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certificationsData.map((cert, idx) => {
          const issuerInfo = issuerColorMap[cert.issuer] || { initials: 'C', color: 'from-blue-500 to-blue-600' };

          return (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all border-glow group"
            >
              {/* Issuer badge */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${issuerInfo.color} flex items-center justify-center mb-4 glow-amber group-hover:glow-blue transition-all`}>
                <span className="font-space-mono font-bold text-white text-xs">{issuerInfo.initials}</span>
              </div>

              {/* Certificate details */}
              <h3 className="font-semibold text-white mb-2 text-sm leading-tight">{cert.name}</h3>
              <p className="text-xs text-gray-400 mb-2">{cert.issuer}</p>
              <p className="text-xs text-gray-500 font-mono">{cert.date}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
