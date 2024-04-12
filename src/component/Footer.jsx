import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

// Define an array for quick links
const quickLinks = [
  { name: "Home", url: "#home" },
  { name: "Our Mission", url: "mission" },
  { name: "FAQs", url: "faq" },
  { name: "Contact", url: "contact" },
];

// Define an array for social media links
const socialMediaLinks = [
  { name: "Facebook", icon: <FacebookOutlined />, url: "https://www.facebook.com" },
  { name: "Twitter", icon: <TwitterOutlined />, url: "https://www.twitter.com" },
  { name: "Instagram", icon: <InstagramOutlined />, url: "https://www.instagram.com" },
  { name: "LinkedIn", icon: <LinkedinOutlined />, url: "https://www.linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.name}>
                <a href={link.url} className="text-gray-300 hover:text-blue-400 transition-colors">{link.name}</a>
              </li>
            ))}
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
            {socialMediaLinks.map(link => (
              <a key={link.name} href={link.url} className="text-gray-400 hover:text-blue-400 transition-colors" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
