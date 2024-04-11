import React from 'react';
import { Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={imageUrl} className="object-cover h-48 w-full" />}
      className="m-4 rounded-lg shadow-lg bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <Meta
        title={<div className="font-semibold text-lg">{title}</div>}
        description={
          <div className="text-gray-600 text-sm">
            {description}
            <CheckCircleOutlined className="text-green-500 ml-2" />
          </div>
        }
      />
    </Card>
  );
};

export default ServiceCard;
