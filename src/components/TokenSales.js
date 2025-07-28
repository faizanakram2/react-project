import React, { useEffect, useRef } from 'react';
import {
  SiProcessingfoundation,
  SiAdobe,
  SiDocker,
  SiTestinglibrary,
  SiCloudflare,
} from 'react-icons/si';

const steps = [
  {
    icon: <SiProcessingfoundation size={28} />,
    title: 'Discovery',
    desc: 'We understand your business goals and challenges before we begin.',
    side: 'left',
  },
  {
    icon: <SiAdobe size={28} />,
    title: 'Design',
    desc: 'Wireframes and prototypes to visualize seamless user experiences.',
    side: 'right',
  },
  {
    icon: <SiDocker size={28} />,
    title: 'Development',
    desc: 'Clean, scalable code with the latest technologies.',
    side: 'left',
  },
  {
    icon: <SiTestinglibrary size={28} />,
    title: 'Testing',
    desc: 'Rigorous QA to ensure top-notch performance and reliability.',
    side: 'right',
  },
  {
    icon: <SiCloudflare size={28} />,
    title: 'Launch & Support',
    desc: 'Smooth launch and ongoing optimization support.',
    side: 'center',
  },
];

const Card = ({ title, desc, icon, side }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-x-0");
          el.classList.remove(
            "opacity-0",
            side === "left" ? "-translate-x-24" : "translate-x-24"
          );
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [side]);

  return (
    <div
      ref={ref}
      className={`
        w-full sm:w-[46%] lg:w-[30%] p-6 rounded-3xl shadow-xl border border-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out
        bg-white/5 hover:bg-white/10
        opacity-0 text-left
        ${side === 'left' ? '-translate-x-24' : side === 'right' ? 'translate-x-24' : ''}
      `}
    >
      <div className="text-[#0B4EA1] bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mb-5 shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

const TokenSales = () => {
  return (
    <section id="process" className="py-24 px-6 bg-gradient-to-br from-black via-black to-[#0B4EA1]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-5 font-montserrat">
          How We Work
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-14 text-base font-light">
          We follow a structured and collaborative approach to turn your ideas into powerful digital products.
        </p>
        <div className="flex flex-wrap gap-8 justify-center items-stretch">
          {steps.map((step, index) => (
            <Card key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenSales;
