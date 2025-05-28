import { motion } from 'framer-motion';
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: '2025',
      title: 'MERN Stack Developer Intern',
      company: 'AlpsLogic It Solutions Company',
      type: 'Professional',
      highlights: [
        'Built responsive web applications using React.js',
        'Developed RESTful APIs with Node.js and Express',
        'Implemented database solutions with MongoDB',
      ],
      color: 'from-blue-400/20 to-blue-600/20',
      dotColor: 'bg-blue-400',
    },
    {
      period: '2025',
      title: 'Full-Stack Projects',
      company: 'Personal & Academic Development',
      type: 'Projects',
      highlights: [
        'Created e-commerce platform with payment integration',
        'Built social media dashboard with real-time features',
        'Developed task management application',
      ],
      color: 'from-green-400/20 to-green-600/20',
      dotColor: 'bg-green-400',
    },
    {
      period: '2025',
      title: 'MERN Stack Learning',
      company: 'Intensive Skill Development',
      type: 'Education',
      highlights: [
        'Completed comprehensive MERN stack course',
        'Built 15+ practice projects and applications',
        'Mastered modern JavaScript and React concepts',
      ],
      color: 'from-purple-400/20 to-purple-600/20',
      dotColor: 'bg-purple-400',
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional journey and hands-on development experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-[2px] bg-gray-700/30" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between md:justify-normal gap-x-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-[20px] h-[20px] rounded-full border-4 border-[#0f172a] bg-blue-400" />

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] glass-card p-6 bg-gradient-to-br ${exp.color}`}>
                  <div className="flex items-center gap-x-4 mb-4">
                    <span className={`w-3 h-3 rounded-full ${exp.dotColor}`} />
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{exp.company}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="mr-2 mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 