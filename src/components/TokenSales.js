import React from 'react';

const steps = [
  {
    icon: '🔍',
    title: 'Discovery',
    desc: 'We start by understanding your business goals, challenges, and requirements.'
  },
  {
    icon: '📝',
    title: 'Design',
    desc: 'Our team creates wireframes, prototypes, and user flows for a seamless experience.'
  },
  {
    icon: '💻',
    title: 'Development',
    desc: 'We build robust, scalable, and secure software using the latest technologies.'
  },
  {
    icon: '🧪',
    title: 'Testing',
    desc: 'Comprehensive QA ensures your product is reliable and ready for launch.'
  },
  {
    icon: '🚀',
    title: 'Launch & Support',
    desc: 'We deploy your solution and provide ongoing support for your success.'
  },
];

const TokenSales = () => {
  return (
    <section data-aos="fade-up" className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-700 dark:text-blue-300 font-semibold shadow">
          How We Work
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Our Process
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-14 max-w-2xl mx-auto">
          We follow a proven process to deliver high-quality software solutions tailored to your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 transition transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="mb-6 text-4xl flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg relative animate-pulse group-hover:animate-none">
                <span className="absolute inset-0 rounded-full border-4 border-blue-400/30 group-hover:border-indigo-400/50 animate-glow" />
                <span className="relative z-10">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Custom CSS for animated gradient and glow */}
      <style>{`
        @keyframes gradientBG {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientBG 8s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3), 0 0 0 0 rgba(99,102,241,0.2); }
          50% { box-shadow: 0 0 24px 8px rgba(59,130,246,0.4), 0 0 32px 16px rgba(99,102,241,0.3); }
        }
        .animate-glow {
          animation: glow 2.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default TokenSales;
