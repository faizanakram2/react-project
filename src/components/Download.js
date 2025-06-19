import React from 'react';
import appImage from '../assets/app-image.webp';

export default function Downloads() {
  return (
    <section data-aos="fade-up" id="download" className="py-24">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center">
          {/* Left Section */}
          <div className="w-full px-4 lg:w-1/2 flex justify-center">
            <div>
              <div className="mb-12 max-w-[500px] lg:mb-0">
                <span className="text-primary mb-3 text-lg font-bold uppercase sm:text-xl">
                  Download Our App
                </span>
                <h2 className="mb-3 text-3xl leading-tight font-bold text-black md:text-[45px] dark:text-white">
                  The choice is yours, we've got you covered
                </h2>
                <p className="text-body-color-2 dark:text-body-color mb-10 text-lg font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>

                {/* App Store & Play Store Buttons */}
                <div className="-mx-3 flex items-center">
                  <div className="px-3">
                    <a
                      className="flex items-center justify-center rounded-full border border-[#2D2947] bg-[#2D2947] p-2.5 pr-5 text-base font-semibold text-white hover:bg-[#2D2947]/90"
                      href="#"
                    >
                      <span className="bg-primary mr-3 flex h-10 w-10 items-center justify-center rounded-full text-white">
                        {/* Apple Icon */}
                      </span>
                      App Store
                    </a>
                  </div>
                  <div className="px-3">
                    <a
                      className="flex items-center justify-center rounded-full border border-[#2D2947] bg-transparent p-[10px] pr-5 text-base font-semibold hover:bg-[#2D294710]"
                      href="#"
                    >
                      <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full text-white bg-white">
                        {/* Play Icon */}
                      </span>
                      Play Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full px-4 lg:w-1/2 flex justify-center">
            <div className="text-center relative z-10">
              <img
                alt="app image"
                loading="lazy"
                width="504"
                height="546"
                className="mx-auto"
                src={appImage}
              />
              <span
                className="absolute bottom-0 right-0 -z-10 h-[320px] w-[320px] rounded-full"
                style={{ filter: 'blur(100px)' }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
