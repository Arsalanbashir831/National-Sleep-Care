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
      className="relative w-full h-[85vh] flex items-center justify-center"
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
        <Title className=" leading-tight mb-4  text-center" level={0} style={{ maxWidth: '90%',color:"white",fontSize:40 }}>National Sleep Care is a True Partner in Dental Sleep Care</Title>
        
        <div className='bg-blue-600 h-1 w-[50%] m-auto my-2'></div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-8 md:w-[80%] w-full text-center m-auto text-2xl "
        >
         Expand your dental practice with our telemed sleep apnea program, enabling your dental patients to receive treatment for their obstructive sleep apnea
        </motion.p>
        <div style={{display: 'flex',gap: 5}} className='text-center gap justify-center  ' whileHover="hover" whileTap="tap" variants={buttonVariants}>
          <Button type="primary" href="/mission" className="bg-blue-500 hover:bg-blue-700 w-[20%] text-white font-bold py-2 px-4  h-10 rounded">
          <Link to='/mission'>Our Mission</Link>  
          </Button>

        </div>
      </motion.div>

    </div>
  );
};

export default HeroSection;
