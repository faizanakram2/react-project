import React, { useEffect, useState } from 'react';
import logo from '../assets/Group 15 (2).png';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center z-20">
          <img src={logo} alt="DevLayers" className="h-10 w-auto" />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-20">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu size={28} className="text-black" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-black font-light italic font-mono">
          <a href="#home" className="hover:text-[#0B4EA1] transition">Home</a>
          <a href="#features" className="hover:text-[#0B4EA1] transition">Services</a>
          <div
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex items-center gap-1 hover:text-[#0B4EA1] cursor-pointer transition">
              About Us <ChevronDown size={16} />
            </div>
            {showDropdown && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg p-3 z-30 border">
                <li className="hover:bg-blue-50 p-2 rounded-md text-gray-700 hover:text-[#0B4EA1]">Our Story</li>
                <li className="hover:bg-blue-50 p-2 rounded-md text-gray-700 hover:text-[#0B4EA1]">Team</li>
                <li className="hover:bg-blue-50 p-2 rounded-md text-gray-700 hover:text-[#0B4EA1]">Values</li>
              </ul>
            )}
          </div>
          <a href="#contact" className="hover:text-[#0B4EA1] transition">Contact</a>
        </div>

        {/* Desktop CTA */}
        <div className={`hidden md:block z-20 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <a
            href="#contact"
            className="bg-[#0B4EA1] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-start p-6 pt-24 space-y-4 font-mono text-black">
          <a href="#home" className="text-lg hover:text-[#0B4EA1]" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#features" className="text-lg hover:text-[#0B4EA1]" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <div className="w-full">
            <div
              className="flex items-center justify-between text-lg cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              About Us <ChevronDown size={16} />
            </div>
            {showDropdown && (
              <ul className="mt-2 pl-4 space-y-1">
                <li className="hover:text-[#0B4EA1]">Our Story</li>
                <li className="hover:text-[#0B4EA1]">Team</li>
                <li className="hover:text-[#0B4EA1]">Values</li>
              </ul>
            )}
          </div>
          <a href="#contact" className="text-lg hover:text-[#0B4EA1]" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a
            href="#contact"
            className="mt-4 bg-[#0B4EA1] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
