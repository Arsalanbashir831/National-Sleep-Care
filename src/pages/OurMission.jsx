import React, { useEffect } from 'react';
import { EnvironmentOutlined, TrophyOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';


const Feature = ({ icon, title, children }) => {
  return (
    <Card className="text-center bg-white">
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p>{children}</p>
    </Card>
  );
};

const OurMission = () => {
  useEffect(() => {
    // Scroll to the top of the page whenever location changes
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="px-4  ">
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-4">Company Mission</h2>
        <p className="mb-8 text-lg w-[80%] m-auto ">
          All people deserve the highest level of sleep and wellness care available, AND at the lowest cost possible because sleep wellness is a right which belongs to everyone.
        </p>
       
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <Feature 
          icon={<EnvironmentOutlined style={{ fontSize: '24px', color: '#4a7cfd' }} />}
          title="Sustainable models"
        >
          We believe in sustainable models that promote informed consent and empower your practice to provide the best care possible to every single patient.
        </Feature>
        <Feature
          icon={<TrophyOutlined style={{ fontSize: '24px', color: '#4a7cfd' }} />}
          title="25+ Years of Experience"
        >
          Our 25+ years of experience in sleep medicine and practice administration will help your patients access the care they need.
        </Feature>
        <Feature
          icon={<TeamOutlined style={{ fontSize: '24px', color: '#4a7cfd' }} />}
          title="Large Network"
        >
          Our large networks of contracts and clinical and billing systems mean consolidated care for your patients – and a low-to-no-denial rate for you.
        </Feature>
      </div>
      <div className="flex justify-center space-x-5 mb-8 my-5">
          <Button type="primary">
            <Link to="/DSO">DSO</Link>
          </Button>
          <Button type="primary">
            <Link to="/DSO">Dental Clinic</Link>
          </Button>
        </div>
    </div>
  );
};

export default OurMission;
