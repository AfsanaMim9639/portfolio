// components/layout/Navbar.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import gsap from 'gsap';
import { X } from 'lucide-react';

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const flowerGroupRef = useRef(null);
  const animationRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'];

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(100, 100);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x2dd4bf, 1.5, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Create flower group
    const flowerGroup = new THREE.Group();
    flowerGroupRef.current = flowerGroup;
    scene.add(flowerGroup);

    // Create flower petals (20 petals in a spiral pattern)
    const petalCount = 20;
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * Math.PI * 2;
      const radius = 1.5;
      
      // Petal geometry - ellipse shape
      const petalGeometry = new THREE.SphereGeometry(0.4, 16, 16);
      petalGeometry.scale(1.5, 0.8, 0.3);
      
      const petalMaterial = new THREE.MeshPhongMaterial({
        color: 0x14b8a6,
        shininess: 100,
        specular: 0x2dd4bf,
      });
      
      const petal = new THREE.Mesh(petalGeometry, petalMaterial);
      
      // Position petals in spiral
      const spiralRadius = radius * (1 - i / petalCount * 0.3);
      petal.position.x = Math.cos(angle) * spiralRadius;
      petal.position.y = Math.sin(angle) * spiralRadius;
      petal.position.z = -i * 0.05;
      
      // Rotate petal to face outward
      petal.rotation.z = angle;
      petal.rotation.x = Math.PI / 6;
      
      petals.push(petal);
      flowerGroup.add(petal);
    }

    // Center sphere
    const centerGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const centerMaterial = new THREE.MeshPhongMaterial({
      color: 0x2dd4bf,
      emissive: 0x14b8a6,
      emissiveIntensity: 0.5,
      shininess: 100,
    });
    const center = new THREE.Mesh(centerGeometry, centerMaterial);
    flowerGroup.add(center);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Continuous rotation
      flowerGroup.rotation.z += 0.01;
      
      // Wave effect on petals
      petals.forEach((petal, i) => {
        const time = Date.now() * 0.001;
        petal.position.z = -i * 0.05 + Math.sin(time + i * 0.3) * 0.1;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Color change animation on hover
    const handleMouseEnter = () => {
      gsap.to(petals.map(p => p.material.color), {
        r: 0.18,
        g: 0.85,
        b: 0.76,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(flowerGroup.rotation, {
        z: flowerGroup.rotation.z + Math.PI * 2,
        duration: 1,
        ease: 'power2.inOut',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(petals.map(p => p.material.color), {
        r: 0.08,
        g: 0.72,
        b: 0.65,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      renderer.dispose();
      petals.forEach(petal => {
        petal.geometry.dispose();
        petal.material.dispose();
      });
      centerGeometry.dispose();
      centerMaterial.dispose();
    };
  }, []);

  const handleFlowerClick = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Animate flower on click
    if (flowerGroupRef.current) {
      gsap.to(flowerGroupRef.current.rotation, {
        z: flowerGroupRef.current.rotation.z + Math.PI * 4,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.to(flowerGroupRef.current.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
      });
    }
  };

  return (
    <>
      {/* 3D Flower Menu Button - Fixed in top right corner */}
      <motion.div
        className="fixed top-6 right-6 z-50 cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={handleFlowerClick}
      >
        <div
          ref={containerRef}
          className="relative w-[100px] h-[100px] flex items-center justify-center"
        />
        
        {/* Active menu indicator */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-teal-400 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              MENU
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Side Menu Panel - Slides from right */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900/95 via-teal-950/95 to-gray-900/95 backdrop-blur-xl border-l border-teal-500/30 shadow-2xl z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-teal-400 transition-colors"
              >
                <X size={28} />
              </button>

              {/* Menu content */}
              <div className="flex flex-col justify-center h-full px-12 space-y-8">
                <motion.h2
                  className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent mb-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Navigation
                </motion.h2>

                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-2xl font-semibold text-gray-300 hover:text-teal-400 transition-all duration-300 group"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="relative z-10">{item}</span>
                    
                    {/* Hover line effect */}
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredItem === item ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Number indicator */}
                    <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-xs text-teal-500/50 font-mono">
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}

                {/* Decorative element */}
                <motion.div
                  className="absolute bottom-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </div>

              {/* Animated background particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-teal-500/20 rounded-full blur-sm"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Brand Logo - Top Left */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;