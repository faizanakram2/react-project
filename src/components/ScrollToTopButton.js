import React, { useState, useEffect } from 'react';
import { SlArrowUp } from 'react-icons/sl';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-6 z-50 p-3 rounded-full bg-white text-[#0B4EA1] shadow-md hover:bg-[#0B4EA1] hover:text-white transition-all"
        aria-label="Scroll to top"
      >
        <SlArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
