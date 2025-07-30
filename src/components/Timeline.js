import React from 'react';
import { motion } from 'framer-motion';
import {
  FaSearch,
  FaMapMarkedAlt,
  FaPaintBrush,
  FaLaptopCode,
  FaVial,
  FaRocket,
} from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch className="text-[#0B4EA1]" size={20} />,
    title: 'Discovery',
    desc: 'We start by understanding your business goals, challenges, and requirements.',
  },
  {
    icon: <FaMapMarkedAlt className="text-[#0B4EA1]" size={20} />,
    title: 'Planning',
    desc: 'We create a clear roadmap and define milestones for your project.',
  },
  {
    icon: <FaPaintBrush className="text-[#0B4EA1]" size={20} />,
    title: 'Design',
    desc: 'Our team crafts wireframes, prototypes, and user flows for a seamless experience.',
  },
  {
    icon: <FaLaptopCode className="text-[#0B4EA1]" size={20} />,
    title: 'Development',
    desc: 'We build robust, scalable, and secure software using the latest technologies.',
  },
  {
    icon: <FaVial className="text-[#0B4EA1]" size={20} />,
    title: 'Testing',
    desc: 'Comprehensive QA ensures your product is reliable and ready for launch.',
  },
  {
    icon: <FaRocket className="text-[#0B4EA1]" size={20} />,
    title: 'Launch & Support',
    desc: 'We deploy your solution and provide ongoing support for your success.',
  },
];

const Timeline = () => {
  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-black font-[Montserrat] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-black dark:text-white mb-4 sm:mb-6">
          Project Journey
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-700 dark:text-gray-300 mb-10 sm:mb-16">
          From concept to launch, we guide your software project every step of the way.
        </p>

        <div className="relative border-l-[3px] border-[#0B4EA1] ml-2 sm:ml-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-6 sm:pl-10 mb-12 sm:mb-16"
            >
              {/* Circle Indicator */}
              <div className="absolute left-[-10px] top-2 w-5 h-5 bg-white dark:bg-black border-4 border-[#0B4EA1] rounded-full shadow" />

              <div className="bg-[#F9FAFB] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow">
                    {step.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
