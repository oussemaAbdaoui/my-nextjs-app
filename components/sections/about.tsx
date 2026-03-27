'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { GraduationCap, Code2, Award, Globe } from 'lucide-react';
import { aboutData } from '@/lib/portfolio-data';

const iconMap = {
  GraduationCap,
  Code2,
  Award,
  Globe,
};

export function AboutSection() {
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
    <section className="py-20 px-4 max-w-6xl mx-auto" id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white mb-2">
          About Me
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          variants={item}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="space-y-4"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            {aboutData.bio}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-2 gap-6"
        >
          {aboutData.stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all hover:glow-blue"
              >
                {Icon && <Icon className="w-6 h-6 text-blue-400 mb-3" />}
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
