import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Map, Marker } from "pigeon-maps"
const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Our Mission", url: "mission" },
  { name: "FAQs", url: "faq" },
  { name: "Contact", url: "contact" },
];

const contactInfo = {
  email: "michael.davidian@nationalsleepcare.com",
  address: "301 Carnegie Center Drive, Suite 100, Princeton, NJ 08540",
  phoneNumber: "(609) 250-5761",
  googleMapsUrl: "https://www.google.com/maps?q=301+Carnegie+Center+Drive,+Suite+100,+Princeton,+NJ+08540",
};

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

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Contact Us</h2>
          <div className="mb-4 flex items-center space-x-2 text-gray-400">
            <MailOutlined />
            <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors">{contactInfo.email}</a>
          </div>
          <div className="mb-4 flex items-center space-x-2 text-gray-400">
            <EnvironmentOutlined />
            <a href={contactInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{contactInfo.address}</a>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <PhoneOutlined />
            <span>{contactInfo.phoneNumber}</span>
          </div>
          <Map height={300} defaultCenter={[40.3180882, -74.6552268]} defaultZoom={17}>
      <Marker width={50} anchor={[40.3180882, -74.6552268]} />
    </Map>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
