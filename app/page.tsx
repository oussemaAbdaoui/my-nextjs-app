'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ExperienceSection } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { CertificationsSection } from '@/components/sections/certifications';
import { EducationSection } from '@/components/sections/education';
import { ExtracurricularSection } from '@/components/sections/extracurricular';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* Background dot grid */}
      <div className="fixed inset-0 -z-10 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ExtracurricularSection />
        <ContactSection />
      </main>
    </div>
  );
}
