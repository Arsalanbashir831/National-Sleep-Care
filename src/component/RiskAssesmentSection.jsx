import React from 'react';
import { Button } from 'antd';
import { TagOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SleepCareImageLeft from '../assets/testsect.jpg';
import SleepCareImageRight from '../assets/testsect.jpg';

const RiskAssessmentSection = () => {
  return (
    <motion.div 
      className="min-h-screen flex justify-center items-center  bg-blue-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden lg:flex lg:justify-between h-auto w-full max-w-6xl">
        {/* Left Image Column */}
        <div className="hidden lg:block lg:w-1/2">
          <img src={SleepCareImageLeft} alt="Sleep Care Image" className="object-cover h-full w-full" />
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-center lg:w-1/2 p-10 lg:p-12">
          <h2 className="text-4xl lg:text-2xl font-bold text-gray-800 mb-6 leading-tight">
            See the first step in the patient treatment process.
          </h2>
          <p className="text-gray-600 mb-8">
            We use both the Epworth Sleepiness Scale and the STOP Bang Questionnaire as initial screening questionnaires for patients. Both screening questionnaires are approved by the American Academy of Dental Sleep Medicine (AADSM).
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Start your journey towards better sleep and overall health with our free sleep screener test. Identifying sleep disorders early can lead to effective treatments and improved quality of life.
          </p>
          <Button type="primary" size="large" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6">
            <Link to='/DSO'>Take Free Sleep Screener</Link> 
          </Button>

          {/* Right Image (Mobile View) */}
          <div className="lg:hidden">
            <img src={SleepCareImageRight} alt="Sleep Care Image" className="object-cover h-64 w-full mb-6" />
          </div>
        </div>

      
      </div>
    </motion.div>
  );
};

export default RiskAssessmentSection;
