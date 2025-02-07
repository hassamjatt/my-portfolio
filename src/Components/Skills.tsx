"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#38B2AC" },
  { name: "Next.js", color: "#000000" },
];

const Home = () => {
  return (
    <>
      
      <section id="skills" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: skill.color,
                  color: "#ffffff",
                }}
              >
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
