import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import logo from '../assets/Group 15 (2).png';

const Footer = () => {
  return (
    <footer className="text-white py-16 px-4 sm:px-6 bg-gradient-to-br from-black via-black to-[#0B4EA1] font-[Montserrat]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 border-b border-white/20 pb-12">
        
        {/* Logo and Tagline */}
        <div className="space-y-4">
          <img src={logo} alt="DevLayers Logo" className="h-10 w-auto" />
          <p className="text-sm text-white/80 leading-relaxed">
            Building robust web, mobile, and cloud solutions. Your trusted software development partner.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com/people/Dev-Layers/61577244716890/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-blue-600 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/dev-layers/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-blue-700 transition"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://www.instagram.com/dev_layers?igsh=aWJieGNvZ2lueDdx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-pink-500 transition"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-white/80 space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-white transition">Home</a></li>
            <li><a href="#features" className="hover:text-white transition">About Us</a></li>
            <li><a href="#platform" className="hover:text-white transition">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>Software Development</li>
            <li>Digital Marketing</li>
            <li>Graphic Designing</li>
            <li>UX/UI Designing</li>
            <li>App Development</li>
            <li>Website Development</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-white mt-1" />
            <a href="mailto:info@devlayers.org" className="text-sm text-white/80 hover:text-white transition">
              info@devlayers.org
            </a>
          </div>
          <div className="flex items-start gap-3">
            <FaPhone className="text-white mt-1" />
            <a href="tel:+923046193793" className="text-sm text-white/80 hover:text-white transition">
              +92 304 6193793
            </a>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-white mt-1" />
            <span className="text-sm text-white/80">
              Canal Avenue, Abbasia Town, near Cafe Asia, Rahim Yar Khan
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-white/70 text-xs tracking-wide">
        © {new Date().getFullYear()} Devlayers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
