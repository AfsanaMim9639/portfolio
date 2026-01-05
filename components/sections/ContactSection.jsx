// components/sections/ContactSection.jsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, Linkedin } from 'lucide-react';
import Card3D from '../common/Card3D';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <Card3D>
          <motion.div
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-teal-500/30 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-center mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                href="mailto:afsanamim813@gmail.com"
                className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl border border-teal-500/30 hover:border-teal-500/60 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-lg font-bold text-teal-400 mb-2">Email</h3>
                <p className="text-gray-300 text-sm text-center">afsanamim813@gmail.com</p>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl border border-teal-500/30 hover:border-teal-500/60 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-lg font-bold text-teal-400 mb-2">Phone</h3>
                <p className="text-gray-300 text-sm text-center">+8801794554180</p>
              </motion.a>

              <motion.a
                href="https://wa.me/8801949009639"
                className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl border border-teal-500/30 hover:border-teal-500/60 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-lg font-bold text-teal-400 mb-2">WhatsApp</h3>
                <p className="text-gray-300 text-sm text-center">+8801949009639</p>
              </motion.a>
            </div>

            <motion.div
              className="mt-8 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: Github, href: "https://github.com/AfsanaMim9639" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/afsana-mim-878638193/" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-800/50 rounded-full flex items-center justify-center text-teal-400 border border-teal-500/30 hover:bg-teal-500/20 transition-all"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </Card3D>
      </div>
    </section>
  );
};

export default ContactSection;