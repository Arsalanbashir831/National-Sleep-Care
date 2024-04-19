import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleOutlined } from '@ant-design/icons';

const features = [
  {
    title: "Telemedicine and Physician Support",
    content: "We eliminate the need to refer your patients out for medical diagnostics for SBD. You’ll receive the clinical support and oversight you need to provide comprehensive dental sleep care to all your patients, right within your own practice. We keep you in compliance.",
    icon: <CheckCircleOutlined />
  },
  {
    title: "Virtual 'Back Office' Support",
    content: "Our secure, cloud-based portal offers you access to our services and customized medical records system, virtual coaching, and live support when you need it.",
    icon: <CheckCircleOutlined />
  },
  {
    title: "Control Center Monitoring & Support",
    content: "As part of our comprehensive partnership, our control center will monitor your billing activities, preauthorizations, benefit checks, and direct payments.",
    icon: <CheckCircleOutlined />
  },
  {
    title: "Specified patient records",
    content: "As you may know, auto-fill EHR’s tend to trigger more denials. Our time tested, proven systems guide you toward improved compliance. Whether they come in with a bundle of sleep-related diagnoses or present with a simple case, their chart will reflect every last detail of their ongoing care.",
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
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="flex-1">{content}</p>
      <div className="self-end justify-self-end">{icon}</div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-r from-blue-100 to-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Corporate, "grandfathered in" rates are just the beginning of what you get with National Sleep Care.
        </h2>
        <p className="text-lg text-gray-600">
          All of our consolidated systems launch on day one of our partnership, and include:
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

export default ServicesSection;
