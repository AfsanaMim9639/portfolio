// components/projects/ProjectCard.jsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Card3D from '../common/Card3D';

const ProjectCard = ({ project, index, onSelect }) => {
  // Truncate description to 3-4 lines (approximately 120-150 characters)
  const truncateText = (text, maxLength = 130) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <Card3D>
      <motion.div
        className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden border border-teal-500/30 shadow-2xl h-full flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold text-teal-400 mb-2 line-clamp-1">
            {project.name}
          </h3>

          {/* Description - Truncated to 3-4 lines */}
          <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
            {truncateText(project.shortDesc)}
          </p>

          {/* Tech Stack - Show only first 3 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs border border-teal-500/30"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs border border-gray-600/30">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>

          {/* View Details Button */}
          <motion.button
            onClick={() => onSelect(project)}
            className="w-full py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 mt-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
            <ExternalLink size={16} />
          </motion.button>
        </div>
      </motion.div>
    </Card3D>
  );
};

export default ProjectCard;