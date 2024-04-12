import React from 'react';
import HeroSection from '../component/Header';
import { HomeOutlined, SmileOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import CardComponent from '../component/Card';
import RiskAssessmentSection from '../component/RiskAssesmentSection';
import ContentSection from '../component/ContentSection';
import ServicesSection from '../component/ServiceSection';
import Footer from '../component/Footer';
import FAQSection from './FAQ';
import OurMission from './OurMission';

const cardData = [
  {
    icon: <HomeOutlined className="text-blue-500" style={{ fontSize: '24px' }} />,
    title: 'Home Sleep Test',
    description: "Take an easy home sleep test that's covered by insurance.",
  },
  {
    icon: <SmileOutlined className="text-blue-500" style={{ fontSize: '24px' }} />,
    title: 'Customer Satisfaction',
    description: "Our first priority is the customer satisfaction",
  },
  {
    icon: <SafetyCertificateOutlined className="text-blue-500" style={{ fontSize: '24px' }} />,
    title: 'Verified Company',
    description: "Discover the Confidence of Working with a Verified Company",
  },
];

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className='flex justify-center flex-wrap gap-10 bg-gradient-to-r from-blue-100 to-white py-10'>
        {cardData.map((card, index) => (
          <CardComponent 
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <RiskAssessmentSection></RiskAssessmentSection>
      <ContentSection/>
      <ServicesSection></ServicesSection>
      <OurMission/>
     <FAQSection/>
    </>
  )
}

export default Home;
