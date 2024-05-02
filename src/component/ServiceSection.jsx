import React from 'react';
import { Card } from 'antd';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Telemedicine and Physician Support",
    content: "We eliminate the need to refer your patients out for medical diagnostics for SBD. You’ll receive the clinical support and oversight you need to provide comprehensive dental sleep care to all your patients, right within your own practice. We keep you in compliance.",
  },
  {
    title: "Virtual 'Back Office' Support",
    content: "Our secure, cloud-based portal offers you access to our services and customized medical records system, virtual coaching, and live support when you need it.",
  },
  {
    title: "Control Center Monitoring & Support",
    content: "As part of our comprehensive partnership, our control center will monitor your billing activities, preauthorizations, benefit checks, and direct payments.",
  },
  {
    title: "Specified patient records",
    content: "As you may know, auto-fill EHR’s tend to trigger more denials. Our time tested, proven systems guide you toward improved compliance. Whether they come in with a bundle of sleep-related diagnoses or present with a simple case, their chart will reflect every last detail of their ongoing care.",
  },
];

const FeatureCard = ({ title, content }) => {
  return (
    <Card
      className="feature-card"
      hoverable
      style={{ background: 'linear-gradient(to bottom right, #1976D2, #6e87f1)' }}
    >
      <Card.Meta
        title={<h3 className="card-title text-white">{title}</h3>}
        description={<p className="card-content text-white">{content}</p>}
      />
    </Card>
  );
};

const ServicesSection = () => {
  return (
    <div className="py-16 px-4">
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
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
