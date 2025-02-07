// pages/profile.tsx
"use client"
import { motion } from 'framer-motion';
import React from 'react';
 import Navbar from '@/Components/Navbar';
 import Footer from '@/Components/Footer';



const Profile = () => {
  return (
    <><Navbar /><div
          className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col justify-center items-center text-white">
          {/* Profile Section */}
          <motion.div
              className="text-center p-8 rounded-lg shadow-xl bg-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
          >
              {/* Profile Image with Hover Effect */}
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
                      whileHover={{ opacity: 0.8 }} />
              </motion.div>

              {/* Name with Color Change Animation */}
              <motion.h2
                  className="text-4xl font-bold mb-4"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ color: '#f0a500' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                  hassam jatt
              </motion.h2>

              {/* Description */}
              <motion.p
                  className="text-lg text-gray-300 mb-6 px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
              >
                  I am a passionate software developer with expertise in web development. I specialize in creating responsive and interactive websites and applications. With a strong foundation in frontend technologies such as HTML, CSS, JavaScript, and TypeScript, I aim to deliver intuitive and visually appealing experiences. I am always excited to learn new technologies and work on innovative projects.
              </motion.p>

              {/* Skills Section */}
              <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
              >
                  <motion.div
                      className="text-center"
                      whileHover={{
                          scale: 1.1,
                          backgroundColor: '#f0a500',
                          transition: { duration: 0.3 },
                      }}
                  >
                      <div className="text-3xl mb-2">💻</div>
                      <p className="text-lg">Web Development</p>
                  </motion.div>
                  <motion.div
                      className="text-center"
                      whileHover={{
                          scale: 1.1,
                          backgroundColor: '#f0a500',
                          transition: { duration: 0.3 },
                      }}
                  >
                      <div className="text-3xl mb-2">⚡</div>
                      <p className="text-lg">Frontend Technologies</p>
                  </motion.div>
                  <motion.div
                      className="text-center"
                      whileHover={{
                          scale: 1.1,
                          backgroundColor: '#f0a500',
                          transition: { duration: 0.3 },
                      }}
                  >
                      <div className="text-3xl mb-2">🖥️</div>
                      <p className="text-lg">Backend Development</p>
                  </motion.div>
                  <motion.div
                      className="text-center"
                      whileHover={{
                          scale: 1.1,
                          backgroundColor: '#f0a500',
                          transition: { duration: 0.3 },
                      }}
                  >
                      <div className="text-3xl mb-2">🚀</div>
                      <p className="text-lg">Full-Stack Projects</p>
                  </motion.div>
              </motion.div>

              {/* About Me Section */}
              <motion.div
                  className="px-8 py-6 bg-gray-800 rounded-lg shadow-lg mb-8"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
              >
                  <motion.h3
                      className="text-2xl font-semibold text-gray-100 mb-4"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                  >
                      About Me
                  </motion.h3>
                  <motion.p
                      className="text-lg text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                  >
                      I have a strong background in both front-end and back-end development. I'm proficient in building modern, scalable web applications and focusing on performance and usability. I love problem-solving and writing clean, maintainable code. In addition to development, I'm always striving to learn new technologies and improve my skills.
                  </motion.p>
              </motion.div>

              {/* Social Media Links with Hover Animation */}
              <motion.div
                  className="flex justify-center space-x-8 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
              >
                  <a
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition duration-300"
                  >
                      LinkedIn
                  </a>
                  <a
                      href="https://github.com/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400 transition duration-300"
                  >
                      GitHub
                  </a>
                  <a
                      href="https://twitter.com/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition duration-300"
                  >
                      Twitter
                  </a>
              </motion.div>
              <Footer/>
          </motion.div>
          
      </div></>
  );
};

export default Profile;
