// import Navbar from '@/Components/Navbar';
// import Footer from '@/Components/Footer';

// export default function Contact() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-gray-900 text-white min-h-screen p-10 space-y-10">
//         <h1 className="text-5xl font-bold">Contact Me</h1>
//         <p className="text-lg">I'd love to hear from you! Feel free to reach out using the form below.</p>
//         <form className="space-y-5 max-w-xl mx-auto">
//           <input type="text" placeholder="Name" className="block w-full p-3 bg-gray-800 text-white rounded-md" />
//           <input type="email" placeholder="Email" className="block w-full p-3 bg-gray-800 text-white rounded-md" />
//           <textarea placeholder="Message" className="block w-full p-3 bg-gray-800 text-white rounded-md h-32"></textarea>
//           <button className="bg-blue-600 px-5 py-3 text-white font-bold rounded-full">Send</button>
//         </form>
//         <Footer/>
//       </main>
      
//     </>
//   );
// }
// components/ContactForm.jsx
"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: 'hassam jatt',
    email: 'jatthassam41@gmail.com',
    message: 'hello',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <><Navbar />
    <motion.section
      className="bg-gray-900 text-white py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <motion.div
            className="mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required />
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required />
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </motion.div>
        </form>
        <Footer/>
      </div>
    </motion.section></>
  );
};

export default ContactForm;
