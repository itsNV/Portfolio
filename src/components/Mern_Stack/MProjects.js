
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowBigLeft, FilterIcon } from 'lucide-react'
import { GitBranch, ExternalLink } from 'lucide-react'
import { projects } from '../../assets/Mern_Stack_Data/MData'  

const MProjects = ({setNavState}) => {

  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const navigate = useNavigate()
  
  const handleFilter = (filter) => { 
    setSelectedFilter(filter)
    if (filter === 'all') { 
      setFilteredProjects(projects)
    }
    else {
      
    setFilteredProjects(projects.filter(project => project.catagory === filter))
    }
  }

    const handleBack = () => {
      navigate('/mern-stack')
      setNavState('mern-stack')
    }

    
    
  return (
    <div className="min-h-screen pt-16">
    {/* <section className="py-20 bg-secondary px-4">
        <button type="button" onClick={handleBack} className='flex items-center gap-3 hover:text-yellow-500 mb-10'>
            <ArrowBigLeft/>
            Back to Data Analyst</button>
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        Real-world data analysis projects demonstrating analytical thinking and technical skills.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Sales Performance Analysis",
          description: "Analyzed quarterly sales data to identify trends and optimize revenue strategies.",
          tools: ["Python", "Pandas", "Matplotlib"]
        },
        {
          title: "Customer Segmentation",
          description: "Used clustering algorithms to segment customers for targeted marketing campaigns.",
          tools: ["Python", "Scikit-learn", "Tableau"]
        },
        {
          title: "Inventory Optimization",
          description: "Developed predictive models to optimize inventory levels and reduce costs.",
          tools: ["SQL", "Python", "Power BI"]
        }
      ].map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="card group"
        >
          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-pale mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, toolIndex) => (
              <span
                key={toolIndex}
                className="px-3 py-1 bg-text-light/20 text-accent-yellow text-sm rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section> */}
    
    <section className="py-20 px-4">
    <button type="button" onClick={handleBack} className='flex items-center gap-3 hover:text-yellow-500 mb-10'>
            <ArrowBigLeft/>
            Back to Mern Stack</button>
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="section-title text-gradient-primary">Projects & Coursework</h2>
      <p className="section-subtitle">
        Hands-on experience building full-stack applications with modern web technologies.
      </p>
    </motion.div>

          <motion.div className="flex gap-4 mb-14 justify-center">
            <button
              onClick={()=> handleFilter('all')}
              className={ `text-white px-4 py-2 rounded-md ${selectedFilter === 'all' ? 'bg-gradient-to-r from-primary to-primary-light' : 'bg-background'}`}>
             All
            </button>
            <button
              onClick={()=> handleFilter('frontend')}
              className={ `text-white px-4 py-2 rounded-md ${selectedFilter === 'frontend' ? 'bg-gradient-to-r from-primary to-primary-light' : 'bg-background'}`}>
             Frontend
            </button>
            <button
              onClick={()=> handleFilter('fullstack')}
              className={ `text-white px-4   rounded-md ${selectedFilter === 'fullstack' ? 'bg-gradient-to-r from-primary to-primary-light' : 'bg-background'}`}>
             Fullstack
            </button>
          </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="card group"
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-pale text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-primary text-accent-yellow text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              className="flex-1 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary-bright text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <GitBranch size={16} />
              Code
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              className="flex-1 bg-transparent border-2 border-text-light text-text-light hover:bg-yellow-400 hover:text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              Live
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
</div>
  )
}

export default MProjects