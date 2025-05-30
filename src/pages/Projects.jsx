import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaArrowLeftLong, FaGithub } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { projectData } from '../data';

const MajorProjects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };              

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors mb-16"
        >
          <FaArrowLeftLong />
          <span>Back to Home</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              My Projects
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my work that showcases my skills and passion for building
            modern web applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            All Projects
          </button>
         
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-card group relative overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-sm font-medium text-gray-300 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.id}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    <span>Source Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiExternalLink className="text-lg" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MajorProjects;