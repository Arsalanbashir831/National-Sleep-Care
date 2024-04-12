import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-gray-100  px-4 py-[300px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-2xl mx-auto bg-white p-6 rounded shadow"
        variants={containerVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Contact Us
        </motion.h2>
        <motion.form
          className="space-y-4"
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <label htmlFor="name" className="text-sm font-semibold">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
            variants={containerVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        <motion.div
          className="mt-8"
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl mb-3">Other ways to reach us:</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 1234 Street, City, State, Country</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
