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
            className="font-bold text-3xl md:text-4xl text-black"
            variants={itemVariants}
          >
            Hallo, Saya{' '}
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
            <div className='flex flex-row ml-auto mr-auto mt-4 justify-center items-center gap-6'>
            <motion.a 
              href="https://www.linkedin.com/in/areefkn" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" w-12 h-12 flex justify-center items-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </motion.a>
            
            <motion.a 
              href="https://github.com/areefkn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[60px] h-12 flex justify-center items-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 72 72">
              <path d="M 36 12 C 22.745 12 12 22.745 12 36 C 12 49.255 22.745 60 36 60 C 49.255 60 60 49.255 60 36 C 60 22.745 49.255 12 36 12 z M 36 20 C 44.837 20 52 27.163 52 36 C 52 43.284178 47.128298 49.420174 40.46875 51.355469 C 40.198559 51.103128 39.941627 50.74363 39.953125 50.285156 C 39.980125 49.233156 39.953125 46.778953 39.953125 45.876953 C 39.953125 44.328953 38.972656 43.230469 38.972656 43.230469 C 38.972656 43.230469 46.654297 43.316141 46.654297 35.119141 C 46.654297 31.957141 45.003906 30.310547 45.003906 30.310547 C 45.003906 30.310547 45.872125 26.933953 44.703125 25.501953 C 43.393125 25.359953 41.046922 26.753297 40.044922 27.404297 C 40.044922 27.404297 38.457406 26.753906 35.816406 26.753906 C 33.175406 26.753906 31.587891 27.404297 31.587891 27.404297 C 30.586891 26.753297 28.239687 25.360953 26.929688 25.501953 C 25.760688 26.933953 26.628906 30.310547 26.628906 30.310547 C 26.628906 30.310547 24.974609 31.956141 24.974609 35.119141 C 24.974609 43.316141 32.65625 43.230469 32.65625 43.230469 C 32.65625 43.230469 31.782197 44.226723 31.693359 45.652344 C 31.180078 45.833418 30.48023 46.048828 29.8125 46.048828 C 28.2025 46.048828 26.978297 44.483766 26.529297 43.759766 C 26.086297 43.045766 25.178031 42.447266 24.332031 42.447266 C 23.775031 42.447266 23.503906 42.726922 23.503906 43.044922 C 23.503906 43.362922 24.285781 43.585781 24.800781 44.175781 C 25.887781 45.420781 25.866281 48.21875 29.738281 48.21875 C 30.196553 48.21875 31.021102 48.11542 31.677734 48.025391 C 31.674106 48.90409 31.663893 49.74536 31.677734 50.285156 C 31.688158 50.700354 31.476914 51.032045 31.236328 51.279297 C 24.726159 49.25177 20 43.177886 20 36 C 20 27.163 27.163 20 36 20 z"></path>
              </svg>
            </motion.a>

            <motion.a 
              href="https://www.instagram.com/areefkn" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" w-12 h-12 flex justify-center items-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              aria-label="Instagram"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
            </svg>
            </motion.a>
              </div>
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
