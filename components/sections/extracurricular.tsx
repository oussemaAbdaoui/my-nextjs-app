'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Trophy, Cpu, Gamepad2 } from 'lucide-react';
import { extracurricularData } from '@/lib/portfolio-data';

const iconMap = {
  Trophy,
  Cpu,
  Gamepad2,
};

export function ExtracurricularSection() {
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
    <section className="py-20 px-4 max-w-6xl mx-auto" id="extracurricular" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white mb-2">
          Beyond the Code
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {extracurricularData.map((item, idx) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center hover:border-blue-400/50 transition-all border-glow"
            >
              {Icon && (
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-blue-400" />
                </div>
              )}
              <h3 className="font-semibold text-white mb-2 text-lg">{item.label}</h3>
              <p className="text-sm text-gray-400">{item.detail}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
