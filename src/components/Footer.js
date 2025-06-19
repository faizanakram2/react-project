import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../assets/cryptologo.svg';

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="relative z-10 pt-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">

          {/* Logo and Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 mb-14 xl:mb-20">
            <a href="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Logo" 
                className="block dark:hidden" 
                width="176" height="46"
              />
              <img 
                src={logo} 
                alt="Logo" 
                className="hidden dark:block" 
                width="176" height="46"
              />
            </a>
            <p className="mb-10 text-base font-medium text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae quam nec ante fringilla.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-primary hover:text-white">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-primary hover:text-white">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-primary hover:text-white">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white hover:bg-primary hover:text-white">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full px-4 sm:w-1/2 lg:w-4/12 xl:w-2/12 mb-14 xl:mb-20">
            <h4 className="mb-5 text-2xl font-bold text-black dark:text-white">Quick Links</h4>
            <ul className="space-y-3 text-base text-gray-600 dark:text-gray-300">
              <li><a href="#" className="hover:text-primary">What is ICO</a></li>
              <li><a href="#" className="hover:text-primary">Roadmap</a></li>
              <li><a href="#" className="hover:text-primary">Whitepaper</a></li>
              <li><a href="#" className="hover:text-primary">Social Network</a></li>
              <li><a href="#" className="hover:text-primary">Join Us Now</a></li>
            </ul>
          </div>

          {/* Supports */}
          <div className="w-full px-4 sm:w-1/2 lg:w-4/12 xl:w-2/12 mb-14 xl:mb-20">
            <h4 className="mb-5 text-2xl font-bold text-black dark:text-white">Supports</h4>
            <ul className="space-y-3 text-base text-gray-600 dark:text-gray-300">
              <li><a href="#" className="hover:text-primary">Setting & Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Help & Support</a></li>
              <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary">24/7 Supports</a></li>
              <li><a href="#" className="hover:text-primary">On Point FAQ</a></li>
            </ul>
          </div>

          {/* News & Posts */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-4/12 mb-14 xl:mb-20">
            <h4 className="mb-5 text-2xl font-bold text-black dark:text-white">News & Post</h4>
            <div className="space-y-3">
              <div className="flex">
                <div className="w-[75px] h-[75px] rounded-md overflow-hidden mr-5">
                  <a href="/blog/laboris-nisi-aliquip-dium-exiuliym-commo-cons">
                    <img 
                      src="https://cdn.sanity.io/images/d33zuypx/production/a0ca7f2ce7b15da5c3c4bb79e6856ab013fce446-970x430.jpg" 
                      alt="blog" 
                      className="object-cover w-full h-full"
                    />
                  </a>
                </div>
                <div>
                  <a href="/blog/laboris-nisi-aliquip-dium-exiuliym-commo-cons" className="block text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary">
                    Laboris nisi aliquip dium exiuliym commo cons
                  </a>
                </div>
              </div>
              {/* Add more posts similarly here */}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
