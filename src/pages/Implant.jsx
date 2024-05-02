import React from 'react';
import { motion } from 'framer-motion';
import { ToolOutlined, SmileOutlined, DollarCircleOutlined, SyncOutlined } from '@ant-design/icons';

const implantFeatures = [
  {
    title: "Advanced Implant Technology",
    content: "Utilizing state-of-the-art dental implant technology to restore smiles with precision and durability.",
    icon: <ToolOutlined />
  },
  {
    title: "Cosmetic Excellence",
    content: "Crafting perfect smiles with cosmetic implant solutions that look and feel natural.",
    icon: <SmileOutlined />
  },
  {
    title: "Affordable Payment Options",
    content: "Making dental health accessible with flexible payment plans and transparent pricing for all implant procedures.",
    icon: <DollarCircleOutlined />
  },
  {
    title: "Seamless Treatment Coordination",
    content: "Our team ensures a smooth experience from initial consultation to final placement, all under one roof.",
    icon: <SyncOutlined />
  },
];

const FeatureCard = ({ title, content, icon }) => {
    return (
      <motion.div
        className="flex flex-col justify-between p-6 rounded-lg shadow-lg text-white bg-gradient-to-br from-blue-700 to-blue-400 h-44"
        whileHover={{ translateY: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center text-white mb-2">
          {icon}
          <h3 className="text-xl font-semibold ml-2">{title}</h3>
        </div>
        <p className="flex-1 text-white">{content}</p>
      </motion.div>
    );
  };
// Reuse the FeatureCard component from the previous example
// ...

const Implant = () => {
  return (
    <div className="py-5 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Comprehensive Implant Services
        </h2>
        <p className="text-lg text-gray-600">
          Explore our implant services designed to provide you with the best in dental care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {implantFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            content={feature.content}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Implant;
