import { motion } from 'framer-motion';
import React from 'react';

const Stepper = ({ steps, title, subtitle }) => {
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

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-text-light/30 hidden md:block"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step number and icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center border-4 border-background z-10 shadow-lg">
                        
                </div>

                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} mt-8 md:mt-0`}>
                  <div className="card">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-pale">{step.description}</p>
                    </div>

                    {/* Skills/Tools Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {step.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 + itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-primary to-primary-light rounded-lg p-3 text-center hover:from-primary-light hover:to-primary-bright transition-colors duration-300 group"
                        >
                          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary transition-colors duration-300">
                            {item.icon}
                          </div>
                          <span className="text-white text-sm font-medium group-hover:text-accent-yellow transition-colors duration-300">
                            {item.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Additional details */}
                    {step.details && (
                      <div className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + detailIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-pale"
                          >
                            <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                            <span className="text-sm">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
