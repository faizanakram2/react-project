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
      {/* Animated Light Effect */}
      <div className="pointer-events-none select-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] z-0 animate-lightfade" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(99,102,241,0.16) 0%, rgba(59,130,246,0.10) 60%, transparent 100%)' }} />
      {/* Illustrator full background */}
      <div
        className="absolute inset-0 -z-30 bg-no-repeat bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${illustrator})` }}
        aria-hidden="true"
      />
      {/* Lighter gradient overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-blue-100 to-blue-200 opacity-70" />
      <div className="max-w-3xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-700 dark:text-blue-300 font-semibold shadow animate-fadein" data-aos="fade-down" data-aos-delay="100">
          Your Trusted Software Development Partner
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight animate-fadein" data-aos="fade-up" data-aos-delay="200">
          Empowering Your Business with <span className="text-blue-600">Custom Software</span> Solutions
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fadein" data-aos="fade-up" data-aos-delay="300">
          We build robust web, mobile, and cloud applications tailored to your business needs. From startups to enterprises, our expert team delivers scalable, secure, and innovative digital products.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition mb-6 animate-glow"
          data-aos="zoom-in" data-aos-delay="400"
        >
          Get a Free Consultation
        </a>
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {techLogos.map((logo, idx) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                title={logo.name}
                className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300 animate-float"
                style={{ animationDelay: `${idx * 0.2 + 1}s` }}
              />
            ))}
          </div>
          <span className="mt-4 text-gray-500 text-sm animate-fadein" data-aos="fade-in" data-aos-delay="600">We work with the latest technologies</span>
        </div>
      </div>
      {/* Custom Animations */}
      <style>{`
        @keyframes lightfade {
          0%, 100% { opacity: 0.7; filter: blur(0px); }
          50% { opacity: 1; filter: blur(2px); }
        }
        .animate-lightfade {
          animation: lightfade 7s ease-in-out infinite;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.15), 0 0 0 0 rgba(99,102,241,0.10); }
          50% { box-shadow: 0 0 32px 12px rgba(59,130,246,0.18), 0 0 48px 24px rgba(99,102,241,0.12); }
        }
        .animate-glow {
          animation: glow 2.5s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px) scale(1.05); }
        }
        .animate-float {
          animation: float 3.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;