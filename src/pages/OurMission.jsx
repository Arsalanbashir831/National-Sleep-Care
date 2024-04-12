import React from 'react';
import { EnvironmentOutlined, TrophyOutlined, TeamOutlined } from '@ant-design/icons';

const Feature = ({ icon, title, children }) => {
  return (
    <div className="flex items-start space-x-2">
      {icon}
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

const OurMission = () => {
  return (
    <div className=" px-4 bg-blue-50 py-[200px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Company Mission</h2>
        <p className="mb-8 text-lg">
          All people deserve the highest level of sleep and wellness care available, AND at the lowest cost possible because sleep wellness is a right which belongs to everyone.
        </p>
        <button className="mb-10 bg-blue-600 text-white py-2 px-8 rounded hover:bg-blue-700 transition-colors">
          Become a Partner Now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        <Feature icon={<EnvironmentOutlined style={{ fontSize: '24px', color: '#4a7cfd' }} />} title="Sustainable models">
          We believe in sustainable models that promote informed consent and empower your practice to provide the best care possible to every single patient.
        </Feature>
        <Feature icon={<TrophyOutlined style={{ fontSize: '24px', color: '#4a7cfd' }} />} title="25+ Years of Experience">
          Our 25+ years of experience in sleep medicine and practice administration will help your patients access the care they need.
        </Feature>
        <Feature icon={<TeamOutlined style={{ fontSize: '24px', color: '#4a7cfd' }} />} title="Large Network">
          Our large networks of contracts and clinical and billing systems mean consolidated care for your patients – and a low-to-no-denial rate for you.
        </Feature>
      </div>
    </div>
  );
};

export default OurMission;
