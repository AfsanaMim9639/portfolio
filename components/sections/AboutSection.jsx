// components/sections/AboutSection.jsx
'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Database } from 'lucide-react';
import Card3D from '../common/Card3D';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <Card3D>
          <motion.div
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-teal-500/30 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hello! I'm a passionate Full Stack Developer with a keen interest in Data Science and AI/ML. 
                My journey in programming began with curiosity about how websites work, and it has evolved 
                into a deep love for creating elegant solutions to complex problems.
              </p>
              <p>
                I specialize in building modern web applications using the MERN stack, Next.js, and various 
                cutting-edge technologies. What excites me most is the intersection of web development and 
                artificial intelligence – leveraging machine learning to create smarter, more intuitive 
                applications that provide real value to users.
              </p>
              <p>
                I enjoy working on projects that challenge me to think creatively and push the boundaries 
                of what's possible. Whether it's implementing complex animations with GSAP, building scalable 
                backends with Node.js, or training ML models with TensorFlow, I'm always eager to learn and 
                grow as a developer.
              </p>
              <p>
                Outside of coding, I love exploring new technologies, contributing to open-source projects, 
                and staying up-to-date with the latest trends in web development and data science. I believe 
                in writing clean, maintainable code and following best practices to deliver high-quality 
                solutions.
              </p>
            </div>

            <motion.div
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: Code, label: "5+ Projects", desc: "Completed" },
                { icon: Brain, label: "AI/ML", desc: "Enthusiast" },
                { icon: Database, label: "Full Stack", desc: "Developer" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-800/50 p-4 rounded-xl text-center border border-teal-500/20"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(20, 184, 166, 0.5)' }}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-teal-400" />
                  <div className="text-xl font-bold text-teal-400">{item.label}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Card3D>
      </div>
    </section>
  );
};

export default AboutSection;