// components/sections/ExperienceSection.jsx
'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import Card3D from '../common/Card3D';

const experience = [
  {
    id: 1,
    title: 'Billing Engineer',
    company: 'Race Online Ltd.',
    duration: 'August 2023 – January 2025',
    location: 'Dhaka, Bangladesh',
    department: 'Billing & ERP Department',
    description: 'Led billing system design and automation initiatives, optimizing processes for enhanced accuracy and operational efficiency.',
    responsibilities: [
      'Designed billing logic and automation workflows',
      'Optimized billing processes for accuracy and efficiency',
      'Ensured billing data accuracy and supported payment system integrations'
    ]
  },
  {
    id: 2,
    title: 'Junior Billing Engineer',
    company: 'Race Online Ltd.',
    duration: 'May 2022 – July 2023',
    location: 'Dhaka, Bangladesh',
    department: 'Billing & ERP Department',
    description: 'Managed billing configurations and system operations, ensuring seamless billing cycles and comprehensive reporting.',
    responsibilities: [
      'Configured customer packages and service plans',
      'Managed billing cycles and system configurations',
      'Monitored automated billing processes and prepared billing reports'
    ]
  },
  {
    id: 3,
    title: 'Billing Executive',
    company: 'Race Online Ltd.',
    duration: 'March 2021 – April 2022',
    location: 'Dhaka, Bangladesh',
    department: 'Billing & ERP Department',
    description: 'Executed core billing operations using ERP systems, maintaining accurate records and providing exceptional customer support.',
    responsibilities: [
      'Generated customer bills using the ERP system',
      'Maintained billing and payment records',
      'Handled billing-related customer queries and due adjustments'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        {/* Company Info Banner */}
        <motion.div
          className="mb-8 p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-2xl border border-teal-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="w-6 h-6 text-teal-400" />
            <h3 className="text-xl font-bold text-teal-400">Race Online Ltd.</h3>
          </div>
          <p className="text-gray-300 ml-9">
            9th Floor, Khawaja Tower, Mohakhali C/A, Dhaka – 1212
          </p>
          <p className="text-gray-400 text-sm ml-9 mt-1">
            Website: <a href="https://www.race.net.bd/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">www.race.net.bd</a> | Phone: 09643-000222
          </p>
          <div className="mt-4 ml-9 px-4 py-2 bg-teal-500/20 rounded-lg border border-teal-500/40 inline-block">
            <p className="text-teal-400 font-semibold">Total Experience: 3+ Years</p>
          </div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card3D key={exp.id}>
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
                        <Briefcase className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-teal-400 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-gray-300 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-3 ml-9">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="px-4 py-2 bg-teal-500/20 rounded-lg border border-teal-500/40">
                        <p className="text-teal-400 font-semibold text-sm">{exp.department}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Section */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-teal-400" />
                        <h4 className="text-lg font-semibold text-teal-400">
                          Key Responsibilities
                        </h4>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            className="text-gray-300 flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <span className="text-teal-400 mt-1">•</span>
                            <span>{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
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

export default ExperienceSection;