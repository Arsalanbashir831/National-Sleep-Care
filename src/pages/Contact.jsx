import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { app } from '../firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Map, Marker } from "pigeon-maps"

const Contact = () => {
  useEffect(() => {
    // Scroll to the top of the page whenever location changes
    window.scrollTo(0, 0);
  },[]);
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

  // Define contact information object
  const contactInfo = {
    email: "michael.davidian@nationalsleepcare.com",
    address: "301 Carnegie Center Drive, Suite 100, Princeton, NJ 08540",
    phoneNumber: "(609) 250-5761"
  };

  return (
    <motion.div className="bg-gray-100 px-4 py-10" initial="hidden" animate="visible" variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }} transition={{ duration: 0.5 }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-3">
        {/* Contact Information Column */}
        <div className="md:col-span-1 bg-white p-6 rounded shadow">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold">Email:</p>
              <p className="text-gray-600">{contactInfo.email}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Address:</p>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Phone Number:</p>
              <p className="text-gray-600">{contactInfo.phoneNumber}</p>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="md:col-span-1 bg-white p-6 rounded shadow">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Form</h2>
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
        </div>

        {/* Map Column */}
        <div className="md:col-span-1 bg-white p-6 rounded shadow">
          
          <div style={{ height: '300px' }}>
            {/* Replace with your map component */}
            <Map height={300} defaultCenter={[40.3182990, -74.6522268]} defaultZoom={17}>
      <Marker width={50} anchor={[40.3182990, -74.6522268]} />
    </Map>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
