import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between
        bg-white/40 dark:bg-gray-900/30
        backdrop-blur-xs border-b border-white/30 dark:border-gray-700
        text-black dark:text-white transition-all duration-300"
    >
      {/* Left: Logo */}
      <div className="text-2xl font-bold">Crypto</div>

      {/* Center: Links */}
      <ul className="hidden md:flex gap-6 font-medium relative">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Features</li>
        <li className="hover:text-blue-600 cursor-pointer">Roadmap</li>

        {/* Dropdown under Pages */}
        <li
          className="relative cursor-pointer hover:text-blue-600"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Pages
          {showDropdown && (
            <ul className="absolute top-full left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded p-2 space-y-2 z-30">
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">About</li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">Team</li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">Blog</li>
            </ul>
          )}
        </li>

        <li className="hover:text-blue-600 cursor-pointer">Support</li>
      </ul>

      {/* Right: Search, Theme Toggle, Sign In */}
      <div className="flex items-center gap-4">
        <button className="text-xl">
          <FaSearch />
        </button>
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full flex items-center justify-center text-xl border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme === 'dark' ? '🌙' : '🌞'}
        </button>
        <button className="border px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
