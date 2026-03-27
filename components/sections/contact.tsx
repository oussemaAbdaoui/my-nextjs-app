'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { contactData } from '@/lib/portfolio-data';

export function ContactSection() {
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
    <section className="py-20 px-4 bg-white/[0.02] border-t border-white/10" id="contact" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="font-space-mono text-3xl md:text-5xl font-bold text-white mb-4 glow-text"
        >
          {contactData.headline}
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          Available for internships and collaborations. Based in Tunisia, open to France + remote.
        </motion.p>

        {/* Contact grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {/* Email */}
          <motion.a
            variants={item}
            href={`mailto:${contactData.email}`}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all border-glow group"
          >
            <Mail className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <p className="text-sm text-gray-400 mb-2">Email</p>
            <p className="text-white font-mono text-sm break-all">{contactData.email}</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            variants={item}
            href={`tel:${contactData.phone}`}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all border-glow group"
          >
            <Phone className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <p className="text-sm text-gray-400 mb-2">Phone</p>
            <p className="text-white font-mono text-sm">{contactData.phone}</p>
          </motion.a>

          {/* Location */}
          <motion.div
            variants={item}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all border-glow"
          >
            <MapPin className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
            <p className="text-sm text-gray-400 mb-2">Location</p>
            <p className="text-white font-mono text-sm">{contactData.location}</p>
          </motion.div>

          {/* LinkedIn */}
          <motion.a
            variants={item}
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all border-glow group"
          >
            <Linkedin className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <p className="text-sm text-gray-400 mb-2">LinkedIn</p>
            <p className="text-white font-mono text-sm">LinkedIn Profile</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            variants={item}
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all border-glow group"
          >
            <Github className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <p className="text-sm text-gray-400 mb-2">GitHub</p>
            <p className="text-white font-mono text-sm">@oussemaAbdaoui</p>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-8 border-t border-white/10"
        >
          <p className="text-gray-600 text-xs font-mono">
            Built by Oussema Abdaoui · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
