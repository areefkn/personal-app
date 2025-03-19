"use client"

import Link from "next/link";
import { useState } from "react";

export default function NavbarComponents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md rounded-3xl sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-sans text-indigo-700">AreefKn.</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 h-[50px] items-center mr-[30px] text-xl">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            Home
          </Link>
          <Link href="/myproject" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            Project
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            Contact Me
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 py-3 px-4 bg-indigo-50 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center space-y-4 mb-2">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2">
              Home
            </Link>
            <Link href="/myproject" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2">
              Project
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2">
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
