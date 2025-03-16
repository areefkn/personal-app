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
      className="flex flex-col md:flex-row mx-0 h-auto md:h-[550px] mt-5 rounded-2xl items-center bg-gray-50 p-6 overflow-hidden"
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
  <motion.a 
    href="https://www.linkedin.com/in/areefkn" 
    target="_blank" 
    rel="noopener noreferrer"
    className=" hover:text-indigo-700 w-10 h-10 flex justify-center items-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
    aria-label="LinkedIn"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.5c.69-.69 1.6-1.5 2.5-1.5 1.933 0 3.5 1.567 3.5 3.5v6.5z"/>
    </svg>
  </motion.a>
  
  <motion.a 
    href="https://github.com/areefkn" 
    target="_blank" 
    rel="noopener noreferrer"
    className="  hover:text-indigo-700 w-10 h-10 flex justify-center items-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
    aria-label="GitHub"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576 4.765-1.585 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z"/>
    </svg>
  </motion.a>

  <motion.a 
    href="https://www.instagram.com/areefkn" 
    target="_blank" 
    rel="noopener noreferrer"
    className=" hover:text-indigo-700 w-10 h-10 flex justify-center items-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
    aria-label="Instagram"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.071-1.281.059-2.563.334-3.507 1.278-.944.944-1.219 2.226-1.278 3.507-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.059 1.281.334 2.563 1.278 3.507.944.944 2.226 1.219 3.507 1.278 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.281-.059 2.563-.334 3.507-1.278.944-.944 1.219-2.226 1.278-3.507.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.059-1.281-.334-2.563-1.278-3.507-.944-.944-2.226-1.219-3.507-1.278-1.28-.059-1.688-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.293 0-4.162-1.869-4.162-4.162s1.869-4.162 4.162-4.162 4.162 1.869 4.162 4.162-1.869 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
    </svg>
  </motion.a>
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
