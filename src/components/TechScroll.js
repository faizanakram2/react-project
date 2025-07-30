import React from 'react';

const items = ['Strategy', 'Execution', 'Acceleration'];

const TechScroll = () => {
  return (
    <section className="w-full bg-white py-6 overflow-x-hidden border-t border-gray-200">
      <div className="w-full">
        <div className="marquee-track flex gap-10 sm:gap-20 md:gap-40 whitespace-nowrap animate-marquee px-4 sm:px-6 lg:px-8">
          {items.concat(items).map((item, index) => (
            <span
              key={index}
              className="text-[#0B4EA1] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[200] font-[Poppins] tracking-widest uppercase px-6"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechScroll;
