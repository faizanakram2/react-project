import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/Devlayers logo (1).svg';

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="relative z-10 pt-16 pb-8 bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start max-w-xs">
            <a href="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Devlayers Logo"
                className="block dark:hidden h-12 w-auto"
              />
              <img
                src={logo}
                alt="Devlayers Logo"
                className="hidden dark:block h-12 w-auto"
              />
            </a>
            <p className="mb-4 text-base font-medium text-gray-600 dark:text-gray-300">
              Building robust web, mobile, and cloud solutions for businesses worldwide. Your trusted software development partner.
            </p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-blue-600 hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-blue-400 hover:text-white transition">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-blue-700 hover:text-white transition">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-red-600 hover:text-white transition">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-base text-gray-700 dark:text-gray-200">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h4>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600 dark:text-blue-400" />
              <a href="mailto:info@devlayers.com" className="hover:text-blue-600 transition">info@devlayers.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-600 dark:text-blue-400" />
              <a href="tel:+92 304 6193793" className="hover:text-blue-600 transition">+92 304 6193793</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Devlayers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
