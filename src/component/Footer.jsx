import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Products</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-400">
            Dedicated to providing the best in class services and support. Learn more about our story and how we strive to serve our customers.
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FacebookOutlined style={{ fontSize: '24px' }} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <TwitterOutlined style={{ fontSize: '24px' }} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <InstagramOutlined style={{ fontSize: '24px' }} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <LinkedinOutlined style={{ fontSize: '24px' }} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
