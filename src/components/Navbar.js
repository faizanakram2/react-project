import React, { useEffect, useState } from 'react';
import logo from '../assets/Group 15 (2).png';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Left: Logo (Always visible) */}
      <div className="flex items-center z-20">
        <img src={logo} alt="DevLayers" className="h-10 w-auto" />
      </div>

      {/* Center: Navigation Links (Always in center, only fade in on scroll) */}
      <ul
        className={`absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-black font-light italic font-mono transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <li><a href="#home" className="hover:text-[#0B4EA1] transition">Home</a></li>
        <li><a href="#features" className="hover:text-[#0B4EA1] transition">Services</a></li>
        <li
          className="relative group"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="flex items-center gap-1 hover:text-[#0B4EA1] transition cursor-pointer">
            About Us <ChevronDown size={16} />
          </div>
          {showDropdown && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg p-3 z-30 border">
              <li className="hover:bg-blue-50 p-2 rounded-md text-gray-700 hover:text-[#0B4EA1]">Our Story</li>
              <li className="hover:bg-blue-50 p-2 rounded-md text-gray-700 hover:text-[#0B4EA1]">Team</li>
              <li className="hover:bg-blue-50 p-2 rounded-md text-gray-700 hover:text-[#0B4EA1]">Values</li>
            </ul>
          )}
        </li>
        <li><a href="#contact" className="hover:text-[#0B4EA1] transition">Contact</a></li>
      </ul>

      {/* Right: CTA Button */}
      <div className={`z-20 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <a
          href="#contact"
          className="bg-[#0B4EA1] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
