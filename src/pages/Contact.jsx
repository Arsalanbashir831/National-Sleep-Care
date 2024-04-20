import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { app } from '../firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const db = getFirestore(app);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date()
      });
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error sending message.');
    }
  };

  return (
    <motion.div className="bg-gray-100 px-4 py-[300px]" initial="hidden" animate="visible" variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }} transition={{ duration: 0.5 }}>
      <motion.div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm font-semibold">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded mt-1" value={formData.name} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded mt-1" value={formData.email} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded mt-1" value={formData.message} onChange={handleInputChange}></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">Send Message</button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
