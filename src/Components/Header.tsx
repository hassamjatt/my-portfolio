"use client";

import { motion } from "framer-motion";

const HeaderAnimation = () => {
  return (
    <header className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">

        {/* Developer Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50, scale: 0.2 }}
          animate={{ opacity: 100, y: 0, scale: 1, color: "#E94E77" }}
          transition={{ duration: 1 }}
        >
          Developer
        </motion.h1>


                <motion.h3
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            color: ["#F5A623", "#4A90E2", "#E94E77", "#50E3C2","#f87171","#eab308","#bbf7d0"],
          }}
          transition={{
            delay: 1,
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        > lets doooooooooo
          
        </motion.h3>

        {/* Hassam Jatt Animation */}
        <motion.h3
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            color: ["#F5A623", "#4A90E2", "#E94E77", "#50E3C2","#F5A623", "#4A90E2", "#E94E77", "#50E3C2","#f87171","#eab308","#bbf7d0"],
          }}
          transition={{
            delay: 3,
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Hassam Jatt
        </motion.h3>
      </div>
    </header>
  );
};

export default HeaderAnimation;
