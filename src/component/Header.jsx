import React, { useState, useEffect } from 'react';
import { Typography, Button } from 'antd';
import { motion } from 'framer-motion';
import herosection from '../assets/header.jpg';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${herosection})`,
        backgroundPosition: `center ${offsetY * 0.5}px`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <motion.div
        className="text-center text-white z-10 p-4 w-full mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title className=" leading-tight mb-4 md:w-[50%] text-left" level={1} style={{ maxWidth: '90%',color:"white" }}>Dedicated Sleep is a True Partner in Dental Sleep Care</Title>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-8 md:w-[50%] w-full text-left"
        >
         Embark on the pathway to enhanced productivity and well-being with our dedicated sleep solutions for businesses. Unlock the potential of better rest for your team, today
        </motion.p>
        <div style={{display: 'flex',gap: 5}} className='text-left gap' whileHover="hover" whileTap="tap" variants={buttonVariants}>
          <Button type="primary" href="/about-us" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  h-10 rounded">
          <Link to='/DSO'>DSO</Link>  
          </Button>
          <Button type="primary" href="/about-us" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  h-10 rounded">
          <Link to='/mission'>Dental Clinic</Link>  
          

          </Button>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroSection;
