"use client";

import { motion } from "framer-motion";

const Summary = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">Summary</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            I am a passionate and dedicated developer with a strong background in web development.
          </p>
        </motion.div>

        {/* Animated Key Points */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Card 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300"
            whileHover={{ backgroundColor: "#4A90E2", color: "#fff" }} // Blue background on hover
          >
            <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
            <p className="text-gray-400">Proficient in HTML, CSS, JavaScript, React, and Next.js.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300"
            whileHover={{ backgroundColor: "#50E3C2", color: "#fff" }} // Green background on hover
          >
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <p className="text-gray-400">Over 3 years of experience developing dynamic websites.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300"
            whileHover={{ backgroundColor: "#E94E77", color: "#fff" }} // Pink background on hover
          >
            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-400">Committed to creating innovative solutions.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
