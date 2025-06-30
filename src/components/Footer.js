import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/Group 15 (2).png';

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="relative z-10 pt-14 pb-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-10 md:gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left w-full md:w-auto">
            <a href="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Devlayers Logo"
                className="block dark:hidden h-12 w-auto mx-auto md:mx-0"
              />
              <img
                src={logo}
                alt="Devlayers Logo"
                className="hidden dark:block h-12 w-auto mx-auto md:mx-0"
              />
              <h1 classname ></h1>
            </a>
            <p className="mb-4 text-base font-medium text-gray-600 dark:text-gray-300">
              Building robust web, mobile, and cloud solutions for businesses worldwide. Your trusted software development partner.
            </p>
            <div className="flex space-x-3 mt-2 justify-center md:justify-start">
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-blue-600 hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-blue-700 hover:text-white transition">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 text-base text-gray-700 dark:text-gray-200 items-center md:items-end w-full md:w-auto">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h4>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 text-white">
                <FaEnvelope size={16} />
              </span>
              <a href="mailto:devlayers.official@gmail.com" className="hover:text-blue-600 transition">devlayers.official@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-600 dark:text-blue-400" />
              <a href="tel:+92 304 6193793" className="hover:text-blue-600 transition">+92 304 6193793</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Devlayers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
