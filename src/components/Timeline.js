import React from 'react';
import bitcoin from '../assets/btc.webp';
import ethereum from '../assets/eth.png';
import chain from '../assets/chain.png';
import polygon from '../assets/polygon.png';

const Timeline = () => {
  const events = [
    {
      date: 'Feb 25, 2025',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel',
      logo: bitcoin,
      name: 'Bitcoin',
      growth: '4.5%',
      side: 'left',
    },
    {
      date: 'Jan 14, 2026',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel',
      logo: ethereum,
      name: 'Ethereum',
      growth: '2.5%',
      side: 'right',
    },
    {
      date: 'Mar 30, 2028',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel',
      logo: chain,
      name: 'Chainlink',
      growth: '4.5%',
      side: 'left',
    },
    {
      date: 'Dec 19, 2028',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel',
      logo: polygon,
      name: 'Polygon',
      growth: '2.5%',
      side: 'right',
    },
  ];

  return (
    <>
      <div className="bg-white dark:bg-gray-900 items-center justify-center text-center px-4 py-10">
        <span className="mb-3 text-lg font-bold uppercase text-blue-600 block">ROADMAP</span>
        <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl">
          The Timeline
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <section className="relative max-w-5xl mx-auto py-10 px-4">
        {/* vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />

        {/* timeline events */}
        <div className="flex flex-col space-y-10">
          {events.map((event, index) => {
            const isLeft = event.side === 'left';
            return (
              <div key={index} className="relative flex justify-between items-center w-full">
                {/* Timeline content */}
                <div className={`w-5/12 ${isLeft ? 'order-1 text-right' : 'order-3 text-left'}`}>
                  <div className="bg-[#f8f9fd] dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300">
                    <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">{event.date}</h4>
                    <p className="text-base font-medium text-gray-600 dark:text-gray-300">
                      {event.text}
                    </p>
                    <div className="inline-flex items-center rounded-full bg-white p-2 pr-3 mt-4">
                      <img src={event.logo} alt={event.name} className="mr-2 w-5 h-5" />
                      <span className="text-sm font-semibold text-blue-600">{event.name} {event.growth}</span>
                    </div>
                  </div>
                </div>

                {/* center dot */}
                <div className="z-10 flex items-center justify-center order-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900" />
                </div>

                {/* Remove this extra empty space div to avoid right side dots */}
                {/* <div className="w-5/12 order-1" /> */}
                {/* Keep the spacing proper by rendering empty div only for left side events */}
                {isLeft ? <div className="w-5/12 order-3" /> : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Timeline;
