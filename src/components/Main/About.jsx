import { motion } from 'framer-motion';
import React from 'react';
import { FaBolt } from 'react-icons/fa6';
import { GoCodeReview } from 'react-icons/go';
import { HiUserGroup } from 'react-icons/hi';
import { images } from '../../utils/downloadImages';

const About = () => {
  const stats = [
    { number: '4+', label: 'Months Experience' },
    { number: '10+', label: 'Projects Built' },
  ];

  const expertise = [
    { label: 'React Development', color: 'text-green-400' },
    { label: 'MongoDB', color: 'text-green-400' },
    { label: 'Node.js & Express', color: 'text-blue-400' },
    { label: 'RESTful APIs', color: 'text-blue-400' },
  ];

  const qualities = [
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400'
    },
    {
      icon: <GoCodeReview className="w-8 h-8" />,
      title: 'Quality Focused',
      description: 'Committed to writing clean, maintainable code',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-400'
    },
    {
      icon: <HiUserGroup className="w-8 h-8" />,
      title: 'Team Player',
      description: 'Collaborative approach to problem solving',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400'
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              About
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Building Tomorrow's Web Today
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>
                Fresh graduate with hands-on experience in full-stack development. Completed 4-month intensive internship building real-world applications.
              </p>
              <p>
                Specialized in MERN stack with passion for creating seamless user experiences and scalable backend solutions.
              </p>
            </div>

            <div className="flex gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                    {stat.number}
                  </h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Let's Work Together →
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {/* Main Image */}
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden glass-card relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 to-transparent" />
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent" />
              </div>
              <img
                src={images[0].url}
                alt="Professional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Images Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* First Small Image */}
              <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden glass-card relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 to-transparent" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent" />
                </div>
                <img
                  src={images[1].url}
                  alt="Coding"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Second Small Image */}
              <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden glass-card relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 to-transparent" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent" />
                </div>
                <img
                  src={images[2].url}
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${quality.iconBg} ${quality.iconColor} flex items-center justify-center`}>
                {quality.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{quality.title}</h3>
              <p className="text-gray-400">{quality.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 