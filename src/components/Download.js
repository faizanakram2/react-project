import React, { useState, useEffect, useRef } from 'react';
import {
  DiCode,
  DiFirebase,
  DiGit,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
} from 'react-icons/di';

// Custom hook for scroll animation
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// Features data
const features = [
  {
    icon: <DiCode size={36} className="text-[#0B4EA1]" />,
    title: "Expert Development",
    description: "Our team of certified developers delivers cutting-edge solutions using the latest technologies.",
  },
  {
    icon: <DiGit size={36} className="text-[#F05032]" />,
    title: "On-Time Delivery",
    description: "We respect your deadlines and ensure timely project completion with our efficient processes.",
  },
  {
    icon: <DiFirebase size={36} className="text-[#FFCA28]" />,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control at every stage to deliver flawless software solutions.",
  },
  {
    icon: <DiReact size={36} className="text-[#61DBFB]" />,
    title: "Client Collaboration",
    description: "Transparent communication and active involvement throughout the development lifecycle.",
  },
  {
    icon: <DiJavascript1 size={36} className="text-[#F7DF1E]" />,
    title: "Secure Solutions",
    description: "Industry-standard security practices to protect your data and applications.",
  },
  {
    icon: <DiNodejsSmall size={36} className="text-[#3C873A]" />,
    title: "Performance Optimized",
    description: "High-performance applications that scale with your business growth.",
  },
];

export default function WhyChooseUs() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (visible) setAnimate(true);
  }, [visible]);

  return (
    <section ref={ref} className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <h2 className="text-4xl font-extrabold text-[#0B4EA1] mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical excellence with creative problem-solving to deliver exceptional software solutions.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm transition duration-700 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gray-100 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className={`text-center mt-16 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <button className="bg-[#0B4EA1] hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition">
            Get Started Today
          </button>
        </div> */}
      </div>
    </section>
  );
}
