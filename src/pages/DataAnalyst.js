import { motion } from 'framer-motion';
import { ArrowBigLeft, ArrowRight, Award, BarChart3, Code, Database, TrendingUp } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SkillCards from '../components/SkillCards';
import Stepper from '../components/Stepper';
import { skillGroups,journeySteps,certifications } from '../assets/Data_Analyst_Data/DData';


const DataAnalyst = ({setNavState}) => {

  const navigate = useNavigate()

  const handleViewProjects = () => {
    navigate('/data-analyst/projects')
    setNavState('')
    
  }

  const handleBack = () => {
    navigate('/')
    setNavState('homepage')
}
  
 
  return (
    <div className="min-h-screen pt-16">


      
      {/* Intro Section */}
      <section id='intro' className="py-20 px-4 relative"> 
        <button type="button" onClick={handleBack} className='flex items-center gap-3 hover:text-primary-light mb-10 relative z-10 transition-colors duration-300'>
                  <ArrowBigLeft/>
          Back to Home</button>

        <div className="max-w-4xl mx-auto text-center mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Data Analyst Journey
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed mb-8">
              Transforming raw data into actionable insights through advanced analytics, 
              statistical modeling, and compelling visualizations that drive business decisions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewProjects}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              <ArrowRight size={20} />
              View Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Experience Stepper */}
      <section id='experience'>
      <Stepper 
        steps={journeySteps}
        title="Experience"
        subtitle="My progression from learning fundamentals to advanced data analysis"
      />
    </section>

      {/* certification Section */}
      <section id='certification' className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient-primary">Certifications & Education</h2>
            <p className="section-subtitle">
              Continuous learning and hands-on experience in data analysis tools and methodologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center group-hover:from-primary-light group-hover:to-primary-bright transition-all duration-300 flex-shrink-0 shadow-glow">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-primary font-semibold mb-2">{cert.issuer} • {cert.date}</p>
                    <p className="text-text-light text-sm">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills'>
      <SkillCards 
        skills={skillGroups}
        title="Skills"
        subtitle="Proficiency in data analysis tools and programming languages for comprehensive data insights"
      />
      </section>

     
    </div>
  );
};

export default DataAnalyst;
