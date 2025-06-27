import React, { useEffect, useState } from 'react';
import logo from '../assets/Devlayers logo (1).svg';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between transition-all duration-300
        ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg' : 'bg-transparent border-transparent'}`}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Devlayers" className="h-10 w-auto" />
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 font-semibold">Home</li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 font-semibold">Services</li>
        <li
          className="relative cursor-pointer hover:text-blue-600 transition-colors duration-200 font-semibold"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          About
          {showDropdown && (
            <ul className="absolute top-full left-0 mt-3 w-48 bg-white shadow-xl rounded-lg p-3 space-y-2 z-30 border border-gray-100">
              <li className="hover:bg-blue-50 p-2 rounded-md transition-colors duration-200 text-gray-700 hover:text-blue-600">Our Story</li>
              <li className="hover:bg-blue-50 p-2 rounded-md transition-colors duration-200 text-gray-700 hover:text-blue-600">Team</li>
              <li className="hover:bg-blue-50 p-2 rounded-md transition-colors duration-200 text-gray-700 hover:text-blue-600">Values</li>
            </ul>
          )}
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 font-semibold">Contact</li>
      </ul>

      {/* Right: CTA Button */}
      <div className="flex items-center">
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
