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
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-slate-950 flex items-center justify-center">
        {/* Deep, highly saturated, large shapes to ensure visibility */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-[20%] w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob animation-delay-4000"></div>
        
        {/* Clear Perspective grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.2),rgba(15,23,42,1))]"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
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
