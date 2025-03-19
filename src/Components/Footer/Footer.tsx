"use client"

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white  mt-2 rounded-sm p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand/Logo */}
        <div className="text-xl font-bold mb-4 md:mb-0">
          AreefKn
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-gray-400 transition-colors duration-300">Home</a>
          <a href="#project" className="hover:text-gray-400 transition-colors duration-300">Project</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors duration-300">Contact Me</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.5c.69-.69 1.631-1.5 2.5-1.5 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.005.404 2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.815 1.102.815 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.218.694.825.576 4.765-1.585 8.2-6.082 8.2-11.384 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.281.059-2.563.334-3.535 1.306-.972.972-1.247 2.254-1.306 3.535-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.059 1.281.334 2.563 1.306 3.535.972.972 2.254 1.247 3.535 1.306 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.281-.059 2.563-.334 3.535-1.306.972-.972 1.247-2.254 1.306-3.535.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.059-1.281-.334-2.563-1.306-3.535-.972-.972-2.254-1.247-3.535-1.306-1.28-.058-1.688-.07-4.947-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162s1.866-4.162 4.162-4.162 4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="text-center mt-6 text-sm text-gray-400">
        Lampung, Indonesia
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-4 text-xs text-gray-500">
        © {new Date().getFullYear()} AreefKn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;