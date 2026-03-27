'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { projectsData } from '@/lib/portfolio-data';

const categoryColorMap = {
  amber: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  teal: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
  rose: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  green: 'bg-green-500/20 text-green-300 border-green-500/40',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
};

export function ProjectsSection() {
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
    <section className="py-20 px-4 max-w-7xl mx-auto" id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white mb-2">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded" />
      </motion.div>

      {/* Featured projects - bento grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {projectsData.featured.map((project, idx) => {
          const colorClass = categoryColorMap[project.categoryColor as keyof typeof categoryColorMap];
          const isLarge = idx < 2;

          return (
            <motion.div
              key={idx}
              variants={item}
              className={`group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 hover:translate-y-[-4px] transition-all cursor-pointer overflow-hidden ${
                isLarge ? 'md:col-span-1 lg:row-span-2' : ''
              } ${project.highlight ? 'ring-2 ring-blue-500/30' : ''}`}
            >
              {/* Top accent line for highlight projects */}
              {project.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-transparent" />
              )}

              <div className="space-y-4">
                {/* Category badge */}
                <div className={`inline-block px-3 py-1 rounded-lg text-xs font-mono border ${colorClass}`}>
                  {project.category}
                </div>

                {/* Title and description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="space-y-2 py-4 border-t border-white/10">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 rounded text-xs font-mono bg-blue-500/10 border border-blue-500/40 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Additional projects */}
      {projectsData.additional.length > 0 && (
        <div>
          <h3 className="font-space-mono text-xl font-bold text-white mb-6">Other Notable Projects</h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {projectsData.additional.map((project, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-blue-400/50 transition-all"
              >
                <h4 className="font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-xs text-gray-400 mb-3">{project.category}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 rounded text-xs font-mono bg-blue-500/10 border border-blue-500/40 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
