import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleOutlined, SnippetsOutlined, HeartOutlined, CustomerServiceOutlined } from '@ant-design/icons';

const features = [
  {
    title: "Sleep Apnea Diagnostics",
    content: "Comprehensive diagnostic solutions for sleep apnea, including at-home sleep tests and consultations to ensure accurate diagnosis.",
    icon: <SnippetsOutlined />
  },
  {
    title: "Personalized Treatment Plans",
    content: "Individualized treatment approaches tailored to each patient's needs, leveraging the latest in CPAP technology and oral appliance therapy.",
    icon: <HeartOutlined />
  },
  {
    title: "Continuous Patient Support",
    content: "Ongoing support and education for patients to maximize treatment effectiveness and promote long-term health benefits.",
    icon: <CustomerServiceOutlined />
  },
  {
    title: "Streamlined Insurance Processing",
    content: "Expert handling of medical billing and insurance claims to facilitate access to necessary treatments with minimal patient hassle.",
    icon: <CheckCircleOutlined />
  },
];

const FeatureCard = ({ title, content, icon }) => {
  return (
    <motion.div
      className="flex flex-col justify-between p-6 rounded-lg shadow-lg text-white bg-gradient-to-br from-blue-700 to-blue-400 h-64"
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

const SleepApnea = () => {
  return (
    <div className=" px-4 bg-blue-50 py-[300px]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Sleep Apnea Treatment Services
        </h2>
        <p className="text-lg text-gray-600">
          Discover how our specialized services can enhance your sleep health journey from diagnosis to treatment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
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

export default SleepApnea;
