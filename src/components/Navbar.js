import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useLocation,useNavigate } from 'react-router-dom';

const Navbar = ({ navState }) => {
  
  const [navstate, setNavState] = useState({navState});
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()


  const handleClickNisarg = () =>{
    navigate('/')
    setNavState('homepage')
  }

  useEffect(() => {
    setNavState(navState);
    console.log('navstate', navstate);
    console.log('Isopen', isOpen);
  }, [navState,isOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemshomepage = [
    { name: 'Intro', path: '#intro' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  const navItemsDA = [
    { name: 'Intro', path: '#intro' },
    { name: 'Experience', path: '#experience' },
    { name: 'Certification', path: '#certification' },
    { name: 'Skills', path: '#skills' },
  ];

  const navItemshMS = [
    { name: 'Intro', path: '#intro' },
    { name: 'Experience', path: '#experience' },
    { name: 'Skills', path: '#skills' },
    { name: 'Dev-Approach', path: '#dev-approach' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-glow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <button
              onClick={handleClickNisarg}
              className="text-2xl font-bold text-gradient-primary">
              Nisarg Patel
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">

              {/* homepage navigation */}
              { (navstate == 'homepage') && navItemshomepage.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnchorLink
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/20'
                        : 'text-white hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.name}
                  </AnchorLink>
                </motion.div>
              ))}

              {/* data analyst page navigation */}
{ (navstate == 'data-analyst') && navItemsDA.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnchorLink
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/20'
                        : 'text-white hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.name}
                  </AnchorLink>
                </motion.div>
))}
              {/* mern stack page navigation */}
              { (navstate == 'mern-stack') && navItemshMS.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnchorLink
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/20'
                        : 'text-white hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.name}
                  </AnchorLink>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-light hover:text-primary focus:outline-none focus:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { display: 'none' },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden sm:hidden  bg-card/95 backdrop-blur-md border-t border-border"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

          {/* Mobile homepage navigation */}
          { (navstate == 'homepage') && navItemshomepage.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ x: 10 }}
              whiletap={{ scale: 0.95 }}
            >
             
              <AnchorLink
                href={item.path}
                className={` block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/20'
                    : 'text-text-light hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.name}
              </AnchorLink>
             
            </motion.div>
          ))}

          {/* Mobile data analyst page navigation */}
          { (navstate == 'data-analyst') && navItemsDA.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnchorLink
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/20'
                    : 'text-text-light hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.name}
              </AnchorLink>
            </motion.div>
          ))}


          {/* Mobile mern stack page navigation */}
          { (navstate == 'mern-stack') && navItemshMS.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnchorLink
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/20'
                    : 'text-text-light hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.name}
              </AnchorLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
