// components/layout/Footer.jsx
'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-teal-500/20 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2026 Full Stack Developer Portfolio. Built with Next.js, Three.js, GSAP & Framer Motion.
        </motion.p>
        <motion.p
          className="text-gray-500 text-sm mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Designed with passion and creativity
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;