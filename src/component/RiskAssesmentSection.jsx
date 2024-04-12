import React from 'react';
import { Button } from 'antd';
import { TagOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RiskAssessmentSection = () => {
  return (
    <motion.div 
      className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-white py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[400px] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between p-10 lg:p-12 gap-8">
          {/* Tags Column */}
          <div className="flex flex-col gap-5">
            {[
              { icon: <TagOutlined />, text: 'Obstructive Sleep Apnea', subtext: 'High Risk', iconBg: 'bg-red-100', iconColor: 'text-red-500' },
              { icon: <SafetyCertificateOutlined />, text: 'Insomnia', subtext: 'Moderate Level', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-500' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${item.iconBg} flex items-center justify-center`}>
                  {React.cloneElement(item.icon, { className: `text-2xl ${item.iconColor}` })}
                </div>
                <div>
                  <div className="text-lg text-gray-800">{item.text}</div>
                  <div className="text-sm text-gray-600">{item.subtext}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Column */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              What's your risk of having Sleep Apnea or Insomnia?
            </h2>
            <p className="text-gray-600 mb-8">
             
Unlock the secrets to better sleep with our exclusive Sleep Assessment. This quick, complimentary tool will reveal if you're facing hidden sleep challenges that could be impacting your life.

Gain access to personalized insights and expert recommendations tailored just for you. Take the first step towards rejuvenating rest and wake up feeling refreshed every day.

Don't settle for restless nights. Take our exclusive Sleep Assessment now and discover the path to your best sleep yet.
            </p>
            <Button type="primary" size="large" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             <Link to='/contact'>Take Free Sleep Screener</Link> 
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RiskAssessmentSection;
