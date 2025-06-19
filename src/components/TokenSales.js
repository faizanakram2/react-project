import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import tokenSaleShape from '../assets/token-sale-shape.svg';

const TokenSaleSection = () => {
  // Log on tooltip hover
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const activeTooltip = document.querySelector('.apexcharts-tooltip.apexcharts-tooltip-active');
      if (activeTooltip) {
        console.log('Tooltip Active: ', activeTooltip.textContent);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  const chartOptions = {
    chart: { type: 'donut' },
    labels: ['Financial Overhead', 'Bonus & Found', 'IT Infrastructure', 'Gift Code Inventory'],
    colors: ['#3B82F6', '#1E40AF', '#93C5FD', '#6B7280'],
    legend: { show: false },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(1)}%`,
      style: { colors: ['#fff'], fontWeight: 'bold' },
    },
    tooltip: { enabled: true },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
        },
      },
    },
  };

  const chartSeries = [29.6, 39.2, 10.8, 20.4];

  return (
    <div data-aos="fade-up" className="bg-white pt-0 pb-24 relative overflow-hidden">
      <section className="rounded-lg bg-[#f5f8ff] dark:bg-[#14102C] px-8 py-12 sm:px-14 sm:py-16 lg:px-8 xl:px-14 max-w-full mx-auto w-[1400px] relative z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left: Donut Chart */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mx-auto mb-12 flex items-center justify-center sm:h-[390px] sm:w-[390px] lg:mb-0">
              <Chart options={chartOptions} series={chartSeries} type="donut" height={350} />
            </div>
          </div>

          {/* Right: Token Info */}
          <div className="w-full px-4 lg:w-1/2">
            <span className="text-xl text-blue-600 font-semibold uppercase">Token</span>
            <h2 className="text-5xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white">Token Sale</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              condimentum tellus at lectus pulvinar, id auctor felis iaculis. In
              vestibulum neque sem, at dapibus justo facilisis in.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
                <span className="text-gray-700 dark:text-gray-300">73% Financial Overhead</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-900 rounded-full inline-block"></span>
                <span className="text-gray-700 dark:text-gray-300">55% Bonus & found</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-300 rounded-full inline-block"></span>
                <span className="text-gray-700 dark:text-gray-300">38% IT infrastructure</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-gray-500 rounded-full inline-block"></span>
                <span className="text-gray-700 dark:text-gray-300">20.93% Gift Code Inventory</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Right-side background image */}
      <img
        src={tokenSaleShape}
        alt="Background"
        className="absolute top-0 right-0 h-full object-contain z-0 pointer-events-none"
        style={{ maxWidth: '50%', minWidth: '200px' }}
        aria-hidden="true"
      />
    </div>
  );
};

export default TokenSaleSection;
