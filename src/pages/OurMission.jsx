import React from 'react';
import { EnvironmentOutlined, TrophyOutlined, TeamOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

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
const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};
const OurMission = () => {
  return (
    <div className=" px-4 bg-blue-50 py-[200px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Company Mission</h2>
        <p className="mb-8 text-lg">
          All people deserve the highest level of sleep and wellness care available, AND at the lowest cost possible because sleep wellness is a right which belongs to everyone.
        </p>
        <div  className='flex justify-center py-5 gap-5' whileHover="hover" whileTap="tap" variants={buttonVariants}>
          <Button type="primary"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[10%] h-10 rounded">
          <Link to='/DSO'>DSO</Link>  
          </Button>
          <Button type="primary"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[10%]  h-10 rounded">
          <Link to='/DSO'>Dental Clinic</Link>  
          

          </Button>
        </div>
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
