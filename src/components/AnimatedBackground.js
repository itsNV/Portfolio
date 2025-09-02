import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: Add any post-loading logic here
  }, []);

  const particlesOptions = {
    fullScreen: true,
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.9,
        },
        attract: {
          distance: 120,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#00e0ff", "#00ffff", "#0ff", "#00bfff", "#007bff"],
      },
      links: {
        color: "#00bfff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: isMobile ? 100 : 200,
      },
      opacity: {
        value: 0.7,
        random: true,
        animation: {
          enable: true,
          speed: 1.5,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 6 },
        random: true,
        animation: {
          enable: true,
          speed: 2.5,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  // Enhanced blob variants with more variety
  const blobVariants = {
    animate: {
      scale: [1, 1.2, 0.8, 1.1, 1],
      x: [0, 25, -20, 15, 0],
      y: [0, -30, 25, -15, 0],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const blobVariants2 = {
    animate: {
      scale: [1, 0.7, 1.4, 0.9, 1],
      x: [0, -35, 30, -25, 0],
      y: [0, 35, -25, 20, 0],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5,
      },
    },
  };

  const blobVariants3 = {
    animate: {
      scale: [1, 1.5, 0.6, 1.3, 1],
      x: [0, 40, -35, 30, 0],
      y: [0, -20, 30, -25, 0],
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 10,
      },
    },
  };

  const blobVariants4 = {
    animate: {
      scale: [1, 0.8, 1.3, 0.9, 1],
      x: [0, -30, 25, -20, 0],
      y: [0, 25, -30, 20, 0],
      transition: {
        duration: 28,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 15,
      },
    },
  };

  const blobVariants5 = {
    animate: {
      scale: [1, 1.4, 0.7, 1.2, 1],
      x: [0, 35, -30, 25, 0],
      y: [0, -25, 20, -30, 0],
      transition: {
        duration: 32,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 20,
      },
    },
  };

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1a] via-[#0d1117] to-[#0b0f1a]" />
      
      {/* Animated glowing blobs - increased to 5 blobs */}
      <motion.div
        className="absolute top-1/5 left-1/5 w-72 h-72 rounded-full bg-gradient-radial from-[#007bff]/25 via-[#00bfff]/20 to-transparent blur-2xl"
        variants={blobVariants}
        animate="animate"
      />
      
      <motion.div
        className="absolute top-2/3 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-[#00bfff]/25 via-[#00e0ff]/20 to-transparent blur-2xl"
        variants={blobVariants2}
        animate="animate"
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-radial from-[#00e0ff]/25 via-[#0ff]/20 to-transparent blur-2xl"
        variants={blobVariants3}
        animate="animate"
      />
      
      <motion.div
        className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-gradient-radial from-[#007bff]/20 via-[#00e0ff]/15 to-transparent blur-2xl"
        variants={blobVariants4}
        animate="animate"
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-88 h-88 rounded-full bg-gradient-radial from-[#00e0ff]/20 via-[#0ff]/15 to-transparent blur-2xl"
        variants={blobVariants5}
        animate="animate"
      />
      
      {/* Faint gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a]/60 via-transparent to-[#0b0f1a]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f1a]/50 via-transparent to-[#0b0f1a]/50" />
      
      {/* Interactive particles */}
      <div className="absolute inset-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
      </div>
      
      {/* Soft dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
};

export default AnimatedBackground;


