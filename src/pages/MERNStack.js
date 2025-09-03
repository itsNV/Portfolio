import { motion } from 'framer-motion';
import { ArrowBigLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { experiences, skillGroups } from '../assets/Mern_Stack_Data/MData';
import SkillCards from '../components/SkillCards';
import Timeline from '../components/Timeline';

const MERNStack = ({setNavState}) => {

  const navigate = useNavigate()

  const handleViewProjects = () => {
    navigate('/mern-stack/projects')
    setNavState('')
    
  }

  const handleBack = () => {
    navigate('/')
    setNavState('homepage')
}
  


  return (
    <div className="min-h-screen pt-16">
     
      
      {/* Intro Section */}
      <section id='intro' className="min-h-screen py-20 px-4 relative">
        <button type="button" onClick={handleBack} className='flex items-center gap-3 hover:text-primary-light mb-10 relative z-10 transition-colors duration-300'>
                  <ArrowBigLeft/>
          Back to Home</button>
        
        <div className="max-w-4xl mx-auto text-center mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              MERN Developer Path
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed mb-20">
              Building scalable, modern web applications with the MERN stack. 
              From concept to deployment, creating robust full-stack solutions that deliver exceptional user experiences.
            </p>
            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewProjects}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              <ArrowRight size={20} />
              View Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id='experience' className='min-h-screen py-20'>
      <Timeline 
        experiences={experiences}
        title="Experience"
        subtitle="My journey in full-stack development and web technologies"
      />
    </section>

    

      {/* Skills Section */}
      <section id='skills' className='min-h-screen py-20'>
        <SkillCards
          skills={skillGroups}
          title="Skills & Technologies"
          subtitle="A comprehensive overview of the tools and technologies I leverage to build robust and scalable web applications."
        />
      </section>

      

      {/* Development Process Section */}
      <section id='dev-approach' className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient-primary">Development Approach</h2>
            <p className="section-subtitle">
              Following best practices and modern development methodologies for robust applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Planning",
                description: "Requirements gathering, architecture design, and project planning",
                icon: "📋"
              },
              {
                title: "Development",
                description: "Agile development with clean code practices and regular commits",
                icon: "💻"
              },
              {
                title: "Testing",
                description: "Unit testing, integration testing, and user acceptance testing",
                icon: "🧪"
              },
              {
                title: "Deployment",
                description: "CI/CD pipeline, cloud deployment, and monitoring setup",
                icon: "🚀"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center card"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-glow">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-text-light text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MERNStack;
