// app/page.js
'use client';

import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import CustomCursor from '@/components/common/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';

export default function Home() {
  useSmoothScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <div className="relative min-h-screen text-white">
      <AnimatedBackground />
      <CustomCursor />
      <Navbar 
        navItems={navItems} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection 
        selectedProject={selectedProject} 
        setSelectedProject={setSelectedProject} 
      />
      <ContactSection />
      <Footer />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}