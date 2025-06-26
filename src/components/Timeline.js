import React from 'react';

const steps = [
  {
    icon: '🔍',
    title: 'Discovery',
    desc: 'We start by understanding your business goals, challenges, and requirements.'
  },
  {
    icon: '🗺️',
    title: 'Planning',
    desc: 'We create a clear roadmap and define milestones for your project.'
  },
  {
    icon: '🎨',
    title: 'Design',
    desc: 'Our team crafts wireframes, prototypes, and user flows for a seamless experience.'
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

const Timeline = () => {
  return (
    <section data-aos="fade-up" className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-700 dark:text-blue-300 font-semibold shadow">
          Project Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          How Your Project Comes to Life
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-14 max-w-2xl mx-auto">
          From discovery to launch, we guide you through every step of your software project with clarity and care.
        </p>
        <div className="flex flex-col gap-12 relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-300 via-indigo-300 to-transparent dark:from-blue-900 dark:via-indigo-900 dark:to-transparent -translate-x-1/2 z-0" />
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                className={`relative flex flex-col md:flex-row items-center z-10 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'} w-full flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 max-w-md w-full text-left">
                    <div className="mb-4 text-3xl flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg animate-pulse">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base">{step.desc}</p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg animate-glow" />
                </div>
              </div>
            );
          })}
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

export default Timeline;
