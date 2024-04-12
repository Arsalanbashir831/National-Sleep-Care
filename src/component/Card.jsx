import { Card } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const CardComponent = ({ icon, title, description }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { delay: 0.1 } },
    hover: { scale: 1.03, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.div
      className="w-80 h-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transform transition duration-500"
      initial="initial"
      animate="enter"
      whileHover="hover"
      variants={cardVariants}
    >
      <Card bordered={false} className="h-full flex flex-col justify-between p-2 items-center">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-500">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xl font-semibold text-gray-900 mb-1">
              {title}
            </p>
            <p className="text-sm text-gray-500">
              {description}
            </p>
          </div>
        </div>
      
      </Card>
    </motion.div>
  );
};

export default CardComponent;
