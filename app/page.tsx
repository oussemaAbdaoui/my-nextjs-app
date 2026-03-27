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
      {/* Beautiful Animated Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-slate-950">
        {/* Animated glowing orbs */}
        <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-[30%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
        
        {/* Perspective grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

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
