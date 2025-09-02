    import { motion } from 'framer-motion'; 
import React from 'react';

const SkillCards = ({ skills, title, subtitle }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient-primary">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card ">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500  rounded-full flex items-center justify-center mx-auto mb-4  transition-colors duration-300">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{skillGroup.title}</h3>
                  <p className="text-pale">{skillGroup.description}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center  gap-4 p-3 rounded-lg hover:bg-black/10 transition-all duration-300 group/item"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-primary  to-primary-light group-hover/item:from-primary-light group-hover/item:to-primary-bright rounded-full flex items-center justify-center  transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold group-hover/item:text-primary transition-colors duration-300">
                          {skill.name}
                        </h4>
                        {/* {skill.description && (
                          <p className="text-pale text-sm">{skill.description}</p>
                        )} */}
                      </div>
                        {/* {skill.level && (
                            <div className="text-right">
                            <span className="text-accent-yellow font-semibold text-sm">{skill.level}%</span>
                            </div>
                        )} */}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCards;
