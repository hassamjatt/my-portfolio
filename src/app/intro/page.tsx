"use client"
import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';

const Introduction = () => {
  return ( 
    <><Navbar /><div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Container for animations */}
              <motion.div
                  className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 relative"
                  initial={{ y: -50, scale: 0.8 }}
                  animate={{ y: 0, scale: 1 }}
                  whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              >
                  <motion.img
                      src="hassam.jpg"
                      alt="Profile"
                      className="object-cover w-full h-full"
                      whileHover={{ opacity: 0.9 }} />
              </motion.div>

      <div className="relative text-center">
        {/* Name Section with Animation */}
        <h1 className="text-4xl md:text-6xl font-bold animate-bounce mb-4 text-red-600">
          Hassam Jatt
        </h1>

        {/* Work Title with Slide Animation */}
        <p className="text-xl md:text-2xl animate-slide-up">
          Web Developer
        </p>

        {/* Skills Section with Fade-In Animation */}
        <div className="mt-6 animate-fade-in">
          <p className="text-lg font-medium">
            Master in JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Next.js, React
          </p>
        </div>

        {/* Hobbies Section */}
        <p className="mt-6 text-lg animate-zoom-in">
          Hobbies: Coding
        </p>

        {/* Mother Tongue */}
        <p className="mt-4 text-lg animate-fade-in">
          Mother Tongue: Punjabi
        </p>
      </div>

      {/* Floating Animations */}
      <div className="absolute top-10 left-10 bg-purple-500 w-16 h-16 rounded-full animate-floating"></div>
      <div className="absolute bottom-10 right-10 bg-teal-500 w-12 h-12 rounded-full animate-floating-delay"></div>
      <Footer/>
    </div></>
  );
};

export default Introduction;
