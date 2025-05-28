import { motion } from 'framer-motion';
import React from 'react';
import {
  DiAws,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiMysql
} from 'react-icons/di';
import {
  SiExpress,
  SiGithub,
  SiGraphql,
  SiNextdotjs,
  SiNpm,
  SiOpenai,
  SiPostman,
  SiRedux,
  SiTypescript
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', icon: <DiReact className="text-4xl" /> },
    { name: 'JavaScript', icon: <DiJavascript1 className="text-4xl" /> },
    { name: 'HTML/CSS', icon: <DiHtml5 className="text-4xl" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <DiNodejs className="text-4xl" /> },
    { name: 'Express.js', icon: <SiExpress className="text-4xl" /> },
    { name: 'RESTful APIs', icon: <DiGit className="text-4xl" /> },
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: <DiMongodb className="text-4xl" /> },
    { name: 'MySQL', icon: <DiMysql className="text-4xl" /> },
    { name: 'Mongoose', icon: <SiGraphql className="text-4xl" /> },
  ];

  const tools = [
    { name: 'Git & GitHub', icon: <SiGithub />, color: 'text-orange-400' },
    { name: 'VS Code', icon: <VscCode />, color: 'text-blue-400' },
    { name: 'Postman', icon: <SiPostman />, color: 'text-green-400' },
    { name: 'Cursor AI', icon: <SiOpenai />, color: 'text-purple-400' },
    { name: 'npm', icon: <SiNpm />, color: 'text-red-400' },
    { name: 'Redux', icon: <SiRedux />, color: 'text-indigo-400' },
  ];

  const softSkills = [
    { name: 'Problem Solving', rating: 4 },
    { name: 'Team Collaboration', rating: 5 },
    { name: 'Communication', rating: 4 },
    { name: 'Adaptability', rating: 5 },
    { name: 'Time Management', rating: 4 },
  ];

  const learningSkills = [
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-green-400' },
    { name: 'GraphQL', icon: <SiGraphql />, color: 'text-purple-400' },
    { name: 'AWS', icon: <DiAws />, color: 'text-yellow-400' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical expertise in modern web development technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4">
                <DiReact className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Frontend</h3>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center text-gray-300">
                  <span className="mr-3 text-blue-400">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mr-4">
                <DiNodejs className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Backend</h3>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center text-gray-300">
                  <span className="mr-3 text-green-400">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Database Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mr-4">
                <DiMongodb className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Database</h3>
            </div>
            <div className="space-y-4">
              {databaseSkills.map((skill) => (
                <div key={skill.name} className="flex items-center text-gray-300">
                  <span className="mr-3 text-purple-400">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools & Technologies and Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center space-x-3">
                  <div className={`text-xl ${tool.color}`}>{tool.icon}</div>
                  <span className="text-gray-300 text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-gray-300">{skill.name}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < skill.rating ? 'bg-blue-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Currently Learning</h3>
          <div className="flex justify-center flex-wrap gap-4">
            {learningSkills.map((skill) => (
              <div
                key={skill.name}
                className="px-4 py-2 rounded-full glass-card flex items-center space-x-2"
              >
                <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                <span className="text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
