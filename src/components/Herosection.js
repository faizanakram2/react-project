import React from 'react';
import illustrator from '../assets/illustrator.png';

const techLogos = [
  {
    name: 'React',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Node.js',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'AWS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    name: 'Figma',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
  {
    name: 'Python',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
];

const HeroSection = () => {
  return (
    <section data-aos="fade-up" className="relative text-center py-32 px-4 overflow-hidden">
      {/* Illustrator full background */}
      <div
        className="absolute inset-0 -z-30 bg-no-repeat bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${illustrator})` }}
        aria-hidden="true"
      />
      {/* Lighter gradient overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-blue-100 to-blue-200 opacity-70" />
      <div className="max-w-3xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-700 dark:text-blue-300 font-semibold shadow">
          Your Trusted Software Development Partner
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Empowering Your Business with <span className="text-blue-600">Custom Software</span> Solutions
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          We build robust web, mobile, and cloud applications tailored to your business needs. From startups to enterprises, our expert team delivers scalable, secure, and innovative digital products.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition mb-6"
        >
          Get a Free Consultation
        </a>
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {techLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                title={logo.name}
                className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
          <span className="mt-4 text-gray-500 text-sm">We work with the latest technologies</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;