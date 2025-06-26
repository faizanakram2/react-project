// src/components/TeamSection.jsx
import React from "react";

const values = [
  {
    icon: '🤝',
    title: 'Client Collaboration',
    desc: 'We work closely with our clients, ensuring transparency and partnership at every stage.'
  },
  {
    icon: '🚀',
    title: 'Innovation',
    desc: 'We embrace new technologies and creative solutions to deliver cutting-edge software.'
  },
  {
    icon: '🔒',
    title: 'Security First',
    desc: 'Your data and business are protected with industry-leading security practices.'
  },
  {
    icon: '⚡',
    title: 'Agile Delivery',
    desc: 'We use agile methodologies to deliver results quickly and adapt to your needs.'
  },
  {
    icon: '🌍',
    title: 'Global Perspective',
    desc: 'Our diverse team brings global experience and best practices to every project.'
  },
  {
    icon: '💡',
    title: 'Continuous Learning',
    desc: 'We invest in ongoing learning to stay ahead in a fast-changing tech landscape.'
  },
];

export default function TeamSection() {
  return (
    <section data-aos="fade-up" className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <p className="text-2xl font-semibold text-indigo-600 uppercase mb-2 tracking-wider">Why Choose Us</p>
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Our Company Values</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-14 max-w-2xl mx-auto">
          We believe in building more than just software. Our values drive us to deliver exceptional results and lasting partnerships.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, idx) => (
            <div
              key={value.title}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 text-5xl flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Custom CSS for animated gradient */}
      <style>{`
        @keyframes gradientBG {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientBG 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
