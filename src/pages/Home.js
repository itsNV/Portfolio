import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({setNavState}) => {
 

  const handleContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section id='intro' className="min-h-screen flex items-center justify-center px-4 relative">
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-primary">
            Hi, I am Nisarg Patel
            </h1>
            <p className="text-xl md:text-2xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Aspiring Data Analyst with hands-on MERN stack skills and 4 months of internship experience in building modern web applications. Passionate about turning data into actionable insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
              className="btn-primary flex items-center gap-2"
            >
              <a href='/Nisarg_Patel_CV.pdf' download="My_Resume.pdf">Download CV</a>
              
              
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContact}
              className="btn-secondary flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className="py-20  px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient-primary">About Me</h2>
            <p className="section-subtitle">
            Passionate fresher with a strong focus on data analysis and a foundational knowledge of MERN stack development. Committed to extracting meaningful insights from raw data while supporting projects through scalable web application development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card group"
            > 
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary-light group-hover:to-primary-bright transition-all duration-300 shadow-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Analysis</h3>
                <p className="text-text-light mb-6">
                  Proficient in data cleaning, visualization, and statistical analysis using Python, SQL, and modern BI tools.
                </p>
                <button
                  onClick={() => setNavState('data-analyst')}
                >

                <Link
                  to="/data-analyst"
                  
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300 glow-text"
                >
                  Explore Data Analysis
                  <ArrowRight size={16} />
                </Link>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary-light group-hover:to-primary-bright transition-all duration-300 shadow-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">MERN Stack</h3>
                <p className="text-text-light mb-6">
                  Full-stack development with MongoDB, Express.js, React.js, and Node.js for scalable web applications.
                </p>

                <button
                  onClick={() => setNavState('mern-stack')}
                >
                   <Link
                  to="/mern-stack"
                 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300 glow-text"
                >
                  Explore MERN Stack
                  <ArrowRight size={16} />
                </Link>

                </button>
               
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient-primary">Get In Touch</h2>
            <p className="section-subtitle">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </motion.div>

          <div className="flex  justify-center items-center ">

            {/* conatct information is pending */}
            
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Form</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="input-field w-full resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8 w-[50%]"
            >
              <div>
                <h3 className="text-2xl font-bold text-white text-center mb-6">Connect With Me</h3>
                <p className="text-text-light mb-8 text-center ">
                  Feel free to reach out through any of these platforms. I'm always excited to connect with fellow developers and data enthusiasts.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.05, x: 10 }}
                  href="https://www.linkedin.com/in/nisarg-patel-865aa9287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-card-hover transition-all duration-300 group shadow-md hover:shadow-glow border border-border hover:border-primary"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center group-hover:from-primary-light group-hover:to-primary-bright transition-all duration-300 shadow-glow">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">LinkedIn</h4>
                    <p className="text-text-light text-sm">Connect professionally</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, x: 10 }}
                  href="https://github.com/itsNV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-card-hover transition-all duration-300 group shadow-md hover:shadow-glow border border-border hover:border-primary"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center group-hover:from-primary-light group-hover:to-primary-bright transition-all duration-300 shadow-glow">
                    <Github size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">GitHub</h4>
                    <p className="text-text-light text-sm">View my projects</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
