import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import logo from '../assets/cryptologo.svg';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) return storedTheme;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between transition-all duration-300
        ${scrolled ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-300 dark:border-gray-700' : 'bg-transparent border-transparent'}`}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Crypto Logo" className="h-8 w-auto" />
      </div>

      {/* Center: Links */}
      <ul className="hidden md:flex gap-6 font-medium relative">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Features</li>
        <li className="hover:text-blue-600 cursor-pointer">Roadmap</li>
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
        {/* Search Section */}
        <div className="relative">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border"
            onClick={handleSearchIconClick}
          >
            <FaSearch className="text-black dark:text-white" />
          </button>
          {showSearch && (
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="absolute right-0 top-12 w-48 px-4 py-2 bg-white dark:bg-gray-800 border rounded shadow focus:outline-none"
            />
          )}
        </div>

        {/* Theme Toggle Switch */}
        <div
          className="w-20 h-9 bg-white dark:bg-gray-800 rounded-full flex items-center px-1 cursor-pointer border relative transition-all duration-300"
          onClick={toggleTheme}
        >
          <div
            className={`absolute top-1 left-1 w-7 h-7 bg-blue-600 rounded-full transition-all duration-300 transform
              ${theme === 'dark' ? 'translate-x-10' : 'translate-x-0'}`}
          ></div>
          <BsSun className="text-yellow-500 z-10 ml-1" />
          <BsMoon className="text-gray-500 z-10 ml-auto mr-1" />
        </div>

        {/* Sign In Button */}
        <button className="border px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
