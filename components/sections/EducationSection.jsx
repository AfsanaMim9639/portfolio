// components/sections/EducationSection.jsx
'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import Card3D from '../common/Card3D';
import { education } from '@/data/education';

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Educational Qualifications
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card3D key={edu.id}>
              <motion.div
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-2xl border border-teal-500/30 overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Header Section */}
                <div className="bg-gradient-to-r from-teal-900/40 to-gray-900/40 p-6 border-b border-teal-500/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <GraduationCap className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-teal-400 mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-xl text-gray-300 font-semibold">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-3 ml-9">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="px-4 py-2 bg-teal-500/20 rounded-lg border border-teal-500/40">
                        <p className="text-teal-400 font-bold text-lg">{edu.grade}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Section */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-teal-400" />
                        <h4 className="text-lg font-semibold text-teal-400">
                          Achievements
                        </h4>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {edu.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            className="text-gray-300 flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <span className="text-teal-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Relevant Coursework */}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 text-teal-400" />
                        <h4 className="text-lg font-semibold text-teal-400">
                          Relevant Coursework
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-7">
                        {edu.coursework.map((course, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full text-sm border border-teal-500/20 hover:border-teal-500/40 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * idx }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;