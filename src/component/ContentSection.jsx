import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleOutlined, SmileOutlined } from '@ant-design/icons';

const ContentSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="py-20 px-8 bg-gradient-to-r from-blue-100 to-white"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          variants={sectionVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-start justify-between px-10 lg:px-16 py-12 lg:py-16 gap-10 text-gray-800">
            {/* Left Column */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold mb-6">
                Your patients can now access their medical benefits for <span className="text-blue-600">OSA & SDB</span> treatments right in your dental office from start to finish.
              </h1>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-3 text-xl" />
                  <p className="text-lg">
                    Without National Sleep Care, dental practices have limited legal and clinical scope for OSA screenings and treatment.
                  </p>
                </div>
                <div className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-3 text-xl" />
                  <p className="text-lg">
                  Keep patients within your existing practice, rather than referring to a different provider.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <SmileOutlined className="text-yellow-500 mr-3 text-xl" />
                  <p className="text-lg">
                    As your dental sleep partner, your needs are our needs...
                  </p>
                </div>
                <div className="flex items-center">
                  <SmileOutlined className="text-yellow-500 mr-3 text-xl" />
                  <p className="text-lg">
                    Our proven systems make sure you see higher rates of patient retention...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContentSection;
