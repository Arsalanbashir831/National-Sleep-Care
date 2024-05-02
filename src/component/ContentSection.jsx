import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleOutlined, SmileOutlined } from '@ant-design/icons';
import SleepPartnerImage from '../assets/partner.jpg'; // Import your image file

const ContentSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className=" py-2 px-4 lg:px-8 missionsection" // Adjusted padding for responsiveness
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column with Bullet Points */}
        <div className="w-full lg:w-1/2 px-4 lg:px-10 py-6 lg:py-12 text-gray-800 bg-white"> {/* Adjusted padding for responsiveness */}
          <div className="space-y-4">
            <div className="flex items-start"> {/* Updated alignment for bullet points */}
              <CheckCircleOutlined className="text-green-500 mt-1 mr-3 text-xl" /> {/* Adjusted margin for vertical alignment */}
              <p className="text-base lg:text-lg"> {/* Adjusted text size for responsiveness */}
                Without National Sleep Care, dental practices have limited legal and clinical scope for OSA screenings and treatment.
              </p>
            </div>
            <div className="flex items-start"> {/* Updated alignment for bullet points */}
              <CheckCircleOutlined className="text-green-500 mt-1 mr-3 text-xl" /> {/* Adjusted margin for vertical alignment */}
              <p className="text-base lg:text-lg"> {/* Adjusted text size for responsiveness */}
                Keep patients within your existing practice, rather than referring to a different provider.
              </p>
            </div>
            <div className="flex items-start"> {/* Updated alignment for bullet points */}
              <SmileOutlined className="text-yellow-500 mt-1 mr-3 text-xl" /> {/* Adjusted margin for vertical alignment */}
              <p className="text-base lg:text-lg"> {/* Adjusted text size for responsiveness */}
                As your dental sleep partner, your needs are our needs...
              </p>
            </div>
            <div className="flex items-start"> {/* Updated alignment for bullet points */}
              <SmileOutlined className="text-yellow-500 mt-1 mr-3 text-xl" /> {/* Adjusted margin for vertical alignment */}
              <p className="text-base lg:text-lg"> {/* Adjusted text size for responsiveness */}
                Our proven systems make sure you see higher rates of patient retention...
              </p>
            </div>
          </div>
        </div>

        {/* Right Column with Image (Visible on Large Screens) */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0"> {/* Adjusted width and margin for responsiveness */}
          <img src={SleepPartnerImage} alt="Sleep Partner" className="object-cover h-auto w-full rounded-lg shadow-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default ContentSection;
