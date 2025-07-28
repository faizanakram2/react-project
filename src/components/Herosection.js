import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl leading-tight mb-6 font-semibold">
          Empowering Your Business with{' '}
          <span className="text-[#0B4EA1]">Custom Software</span> Solutions
        </h1>

        <p className="text-lg md:text-xl text-white/90 font-light mb-8">
          We build modern web, mobile, and cloud apps that scale with your vision.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
