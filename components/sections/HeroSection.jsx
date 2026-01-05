// components/sections/HeroSection.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Database, Server, Brain, Cloud, 
  TrendingUp, Cpu, Sparkles, Github, Linkedin, 
  Mail, MessageCircle, Download 
} from 'lucide-react';
import * as THREE from 'three';

const roles = [
  {
    title: "Full Stack Developer",
    description: "Building scalable web applications",
    icons: [Code2, Database, Server],
    color: "#14b8a6"
  },
  {
    title: "Data Science Enthusiast",
    description: "ML/DL/AI & Cloud Solutions",
    icons: [Brain, Cpu, Cloud],
    color: "#8b5cf6"
  },
  {
    title: "Future Tech Leader",
    description: "Innovating for tomorrow",
    icons: [TrendingUp, Sparkles, Brain],
    color: "#f59e0b"
  }
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#14b8a6',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Three.js Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-teal-500/30 shadow-2xl">
                <img
                  src="/images/image3.jpg"
                  alt="Professional portrait"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-teal-500/90 backdrop-blur-md px-4 py-2 rounded-full border border-teal-400"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white font-semibold">Available for Work</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hi, I'm
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-purple-500 bg-clip-text text-transparent">
                  Afsana Mim
                </span>
              </motion.h1>
            </motion.div>

            {/* Animated Role Switcher */}
            <div className="h-64 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -50, rotateX: 90 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <div 
                    className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50"
                    style={{ borderColor: roles[currentRole].color + '40' }}
                  >
                    <h2 
                      className="text-3xl md:text-4xl font-bold mb-3"
                      style={{ color: roles[currentRole].color }}
                    >
                      {roles[currentRole].title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                      {roles[currentRole].description}
                    </p>
                    
                    {/* Animated Icons */}
                    <div className="flex gap-4">
                      {roles[currentRole].icons.map((Icon, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-md border flex items-center justify-center"
                          style={{ borderColor: roles[currentRole].color + '40' }}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                        >
                          <Icon size={32} style={{ color: roles[currentRole].color }} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-teal-500/50"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(20, 184, 166, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-md text-white rounded-full font-semibold border border-teal-500/30 hover:bg-teal-500/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: Github, href: "https://github.com/AfsanaMim9639", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/afsana-mim-878638193/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:afsanamim813@gmail.com", label: "Email" },
                { icon: MessageCircle, href: "https://wa.me/8801949009639", label: "Chat" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-md rounded-full flex items-center justify-center text-teal-400 border border-teal-500/30 hover:bg-teal-500/20"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-teal-500 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;