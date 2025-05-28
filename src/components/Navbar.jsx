import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
    { title: "Major Projects", href: "/major-projects", isRoute: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-opacity-80 backdrop-blur-lg bg-[#0f172a] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <h1
              onClick={() => navigate("/")}
              className="cursor-pointer text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text hover:from-purple-600 hover:to-blue-400 transition-all duration-300"
            >
              Nisarg Patel
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <React.Fragment key={item.title}>
                {item.isRoute ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(item.href)}
                    className="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {item.title}
                  </motion.button>
                ) : (
                  <AnchorLink href={item.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                    >
                      {item.title}
                    </motion.button>
                  </AnchorLink>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShow(!show)}
              className="text-gray-300 hover:text-white p-2"
            >
              {show ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <HiMenuAlt4 className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`${
          show ? "block" : "hidden"
        } md:hidden bg-[#0f172a] bg-opacity-95 backdrop-blur-lg`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.title} className="block">
              {item.isRoute ? (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate(item.href);
                    setShow(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  {item.title}
                </motion.button>
              ) : (
                <AnchorLink href={item.href} onClick={() => setShow(false)}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    {item.title}
                  </motion.button>
                </AnchorLink>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
