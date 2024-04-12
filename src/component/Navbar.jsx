import React, { useState } from 'react';
import { Menu, Typography } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const { Title } = Typography;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      children: [
        { name: 'Implants', href: '/services/implants' },
        { name: 'Sleep Apnea', href: '/services/SleepApnea' },
      ],
    },
    { name: 'Our Mission', href: '/mission' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const sidebarVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between flex-wrap bg-white p-6 shadow-md z-50">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        {/* <Title level={4} className="text-blue-500 m-0">NationalSleepCare</Title> */}
        <img src={logo} className='w-[100px] h-[80px]'/>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setVisible(!visible)} className="text-blue-500 focus:outline-none">
          {!visible ? <MenuOutlined /> : <CloseOutlined />}
        </button>
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            transition={{ duration: 0.5 }}
            className="lg:hidden absolute top-0 left-0 w-full bg-white z-10"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setVisible(false)} className="text-blue-500 focus:outline-none">
                <CloseOutlined />
              </button>
            </div>
            <Menu mode="inline" theme="light">
              {navLinks.map((link) =>
                link.children ? (
                  <Menu.SubMenu key={link.name} title={link.name}>
                    {link.children.map((subLink) => (
                      <Menu.Item key={subLink.name}>
                        <a href={subLink.href}>{subLink.name}</a>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={link.name}>
                    <Link to={link.href}>{link.name}</Link>
                  </Menu.Item>
                )
              )}
            </Menu>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full flex-grow  lg:items-center lg:w-auto hidden lg:block">
        <Menu mode="horizontal" className="flex-grow">
          {navLinks.map((link) =>
            link.children ? (
              <Menu.SubMenu key={link.name} title={link.name}>
                {link.children.map((subLink) => (
                  <Menu.Item key={subLink.name}>
                    <Link to={subLink.href}>{subLink.name}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={link.name}>
                <Link to={link.href}>{link.name}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
