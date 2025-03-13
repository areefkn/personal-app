"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row mx-5 h-auto md:h-[550px] mt-5 rounded-2xl items-center bg-white p-6 overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Hero section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <div className="max-w-xl">
          <motion.h1 
            className="font-bold text-3xl md:text-4xl"
            variants={itemVariants}
          >
            Hallo!, Saya{' '}
            <span className="block md:inline text-4xl md:text-5xl mt-2 md:mt-0 bg-gradient-to-br from-sky-500 to-purple-700 text-transparent bg-clip-text">
              Arif Kurniawan
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-sky-900 text-2xl md:text-3xl font-bold mt-3"
            variants={itemVariants}
          >
            <span className="inline-block animate-bounce">FullStack Developer</span>
          </motion.h2>
          
          <motion.div 
            className="mt-4"
            variants={itemVariants}
          >
            <p className="text-gray-700 text-base md:text-lg">
              Mengembangkan solusi digital yang efisien dan scalable,<br className="hidden md:block"/>
              mengintegrasikan frontend dan backend untuk pengalaman pengguna yang optimal
            </p>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start items-center mt-10 gap-4 md:gap-7"
            variants={itemVariants}
          >
            <motion.button 
              className="text-white bg-indigo-600 hover:bg-indigo-700 w-32 h-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              aria-label="View my projects"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View Project
            </motion.button>
            
            <motion.button 
              className="text-white bg-indigo-600 hover:bg-indigo-700 w-32 h-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              aria-label="Contact me"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Image section */}
      <motion.div 
        className="w-full md:w-1/2"
        variants={itemVariants}
      >
        <div className="relative flex justify-center items-center">
          <motion.span 
            className="absolute w-full h-full flex justify-center items-center" 
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path 
                fill="#3F51B5" 
                d="M60.9,-37.2C72.6,-14.9,71.4,12.8,59.1,33.4C46.7,54,23.4,67.5,-1.5,68.3C-26.3,69.2,-52.6,57.4,-66.4,35.9C-80.2,14.4,-81.5,-16.7,-68.4,-39.8C-55.2,-62.8,-27.6,-77.8,-1.5,-76.9C24.6,-76.1,49.3,-59.4,60.9,-37.2Z" 
                transform="translate(100 100)" 
              />
            </svg>
          </motion.span>
          
          <motion.img 
            src="Assets/removebg-preview-removebg-preview.png" 
            alt="Arif Kurniawan profile" 
            className="relative z-10 max-w-full mx-auto drop-shadow-2xl" 
            loading="eager"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
