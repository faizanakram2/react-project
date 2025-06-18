import React from 'react';
import bitcoin from '../assets/btc.webp'; 
import ethereum from '../assets/eth.png'
import chain from '../assets/chain.png';
import polygon from '../assets/polygon.png';
const HeroSection = () => {
  return (
    <section data-aos="fade-up" className="text-center py-20 px-4 pt-40 pb-20 px-4 ">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Next.js Template and Boilerplate <br /> for Crypto, ICO and Web3
      </h1>
      <p className="text-xl mt-6 pt-5 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        A Next.js website template for Crypto Currency, Blockchain, ICO, and Web3, meticulously styled with Tailwind CSS.
        This boilerplate includes essential integrations, UI components, pages, and enabling you to launch a 
        comprehensive website or landing page for anything related to Crypto, Blockchain, and Web3.
      </p>
      <div className="flex pt-10 justify-center items-center gap-4 mt-6">
        <img src={bitcoin} alt="bitcoin" className="w-10 h-10" />
        <img src={ethereum} alt="ethereum" className="w-10 h-10" />
        <img src={chain} alt="ethereum" className="w-10 h-10" />
        <img src={polygon} alt="ethereum" className="w-10 h-10 rounded-full" />
        {/* Add more icons as needed */}
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
        Buy Tokens 47% Off
      </button>
    </section>
  );
};

export default HeroSection;