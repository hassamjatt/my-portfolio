// import Footer from "@/Components/Footer";
// import Navbar from "@/Components/Navbar";
// // components/Skills.tsx


// const skills = [
//     {name: "HTML", level: 90, color: 'bg-blue-500' },
//     { name: "CSS", level: 85, color: 'bg-indigo-500' },
//     { name: "JavaScript", level: 80, color: 'bg-yellow-500' },
//     { name: "React", level: 75, color: 'bg-teal-500' },
//     { name: "Node.js", level: 70, color: 'bg-green-500' },
//   ]; 
  
//   <Navbar/>
//   const Skills = () => {
//     return (
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             {skills.map((skill) => (
//               <div key={skill.name} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center">
//                     <div className={`text-3xl mr-3 ${skill.color}`}>{skill.name}</div>
//                   </div>
//                   <span className="text-lg">{skill.level}%</span>
//                 </div>
//                 <div className="h-2 bg-gray-600 rounded-full">
//                   <div className={`h-2 rounded-full ${skill.color} w-[${skill.level}%]`}></div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <Footer/>
//         </div>
//       </section>
//     );
//   };
  
//   export default Skills;
  "use client";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
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
      <Navbar />
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
       <Footer/>
      </section>
      
    </>
  );
};

export default Home;
