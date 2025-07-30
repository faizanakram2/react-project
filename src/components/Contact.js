import React from 'react';
import Lottie from "lottie-react";
import animationData from '../assets/contact.json'; // Ensure this exists

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#0B4EA1] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 font-[Montserrat]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* LEFT: Contact Form */}
        <div className="w-full lg:w-6/12 bg-white text-gray-800 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Let's Talk</h3>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-semibold text-sm mb-1">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0B4EA1]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-sm mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="example@domain.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0B4EA1]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold text-sm mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0B4EA1]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#0B4EA1] text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: Lottie Animation */}
        <div className="w-full lg:w-5/12 flex justify-center items-center">
          <div className="w-full max-w-md">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
