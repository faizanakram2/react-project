import React, { useState } from 'react';
import faqShape1 from '../assets/faq-shape-1.svg';
import faqShape2 from '../assets/faq-shape-2.svg';

const faqs = [
  { question: 'How can I participate in the ICO Token sale?', answer: 'You can participate by registering on our platform and following the purchase process.' },
  { question: 'What is ICO Crypto?', answer: 'ICO Crypto is a decentralized cryptocurrency used for secure transactions and investments.' },
  { question: 'How do I benefit from the ICO Token?', answer: 'Holders of ICO Tokens gain access to premium features and possible future profits.' },
  { question: 'How can I purchase bitcoin?', answer: 'You can purchase Bitcoin on major exchanges like Binance, Coinbase, or Kraken using fiat or other crypto.' },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-10 bg-light-bg py-24 dark:bg-[#14102C]">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-[630px] text-center md:mb-20">
          <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">FAQ</span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[590px] text-lg font-medium text-body-color-2 dark:text-body-color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-9/12 xl:w-8/12">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-10 rounded-lg bg-white px-7 py-6 dark:bg-dark md:px-10 md:py-8">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="mr-2 text-base font-bold text-dark dark:text-white sm:text-lg md:text-xl">
                    {faq.question}
                  </h3>
                  <span className="icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded-sm bg-body-color-2 text-lg font-semibold text-white dark:bg-body-color dark:text-black">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L0 3.08978L4.99951 8.08978L10 3.08979L8.82033 1.91065Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="mt-4 text-body-color dark:text-body-color-2 text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute -bottom-36 left-0 -z-10">
        <img src={faqShape1} alt="shape" width={206} height={637} />
      </div>
      <div className="absolute -top-36 right-0 -z-10">
        <img src={faqShape2} alt="shape" width={172} height={517} />
      </div>
    </section>
  );
};

export default FAQ;
