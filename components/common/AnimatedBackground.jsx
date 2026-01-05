// components/common/AnimatedBackground.jsx
'use client';

import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-950 to-black" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-[120px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[130px]"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 1.3, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-[550px] h-[550px] bg-teal-600/25 rounded-full blur-[140px]"
        animate={{
          x: [0, 90, -70, 0],
          y: [0, -90, 70, 0],
          scale: [1, 1.15, 1.25, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional ambient glow */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-teal-400/15 rounded-full blur-[100px]"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -40, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
    </div>
  );
};

export default AnimatedBackground;