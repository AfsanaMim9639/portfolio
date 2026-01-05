// hooks/useSmoothScroll.js
'use client';

import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    let rafId;
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    
    const lerp = (start, end, factor) => start + (end - start) * factor;
    
    const updateScroll = () => {
      currentScroll = lerp(currentScroll, targetScroll, 0.1);
      window.scrollTo(0, currentScroll);
      
      if (Math.abs(targetScroll - currentScroll) > 0.01) {
        rafId = requestAnimationFrame(updateScroll);
      }
    };
    
    const handleScroll = () => {
      targetScroll = window.scrollY;
      if (!rafId) {
        rafId = requestAnimationFrame(updateScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
};

export default useSmoothScroll;