import React from "react";
import { FaEnvelope, FaPhone, FaRegCommentDots } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section data-aos="fade-up" id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Light Effect */}
      <div className="pointer-events-none select-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] z-0 animate-lightfade" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.10) 60%, transparent 100%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap gap-10 justify-between items-center">
          {/* LEFT COLUMN - Contact Info */}
          <div className="w-full px-4 lg:w-1/2 space-y-8">
            <div data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-blue-600 font-semibold uppercase text-sm tracking-widest">Contact Us</h3>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Let's talk about your project</h2>
              <p className="text-gray-600 text-lg mb-6">Ready to build something amazing? Reach out and our team will get back to you within 24 hours.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl shadow-xl border border-white/40 dark:border-gray-800/40 p-6 flex items-start gap-3 backdrop-blur-md hover:shadow-2xl transition animate-fadein" data-aos="fade-up" data-aos-delay="300">
  <span className="flex items-center justify-center w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 text-white shadow-lg">
    <FaEnvelope className="text-xl" />
  </span>
  <div className="w-full">
    <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Email</h4>
    <a href="mailto:devlayers.official@gmail.com" className="text-blue-600 hover:underline break-words">
    info@devlayers.org
    </a>
  </div>
</div>
              <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl shadow-xl border border-white/40 dark:border-gray-800/40 p-6 flex items-center gap-4 backdrop-blur-md hover:shadow-2xl transition animate-fadein" data-aos="fade-up" data-aos-delay="300">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white text-2xl shadow-lg p-2">
                  <FaPhone className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Phone</h4>
                  <a href="tel:+92 304 6193793" className="text-blue-600 hover:underline">+92 304 6193793</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div className="w-full lg:w-5/12 bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-2xl p-10 relative group border border-white/40 dark:border-gray-800/40 backdrop-blur-md transition-all duration-300 animate-fadein" data-aos="fade-left" data-aos-delay="300">
            <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500 pointer-events-none z-0" />
            <h3 className="text-2xl font-bold mb-6 relative z-10 text-gray-900 dark:text-white">Send us a Message</h3>
            <form className="space-y-5 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Full Name*</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition bg-white/80 dark:bg-gray-800/80" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email Address*</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition bg-white/80 dark:bg-gray-800/80" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message*</label>
                <textarea id="message" name="message" rows="5" placeholder="Type your message"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition bg-white/80 dark:bg-gray-800/80"></textarea>
              </div>
              <button type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-full shadow-lg transition duration-300 animate-glow">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes lightfade {
          0%, 100% { opacity: 0.7; filter: blur(0px); }
          50% { opacity: 1; filter: blur(2px); }
        }
        .animate-lightfade {
          animation: lightfade 6s ease-in-out infinite;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.15), 0 0 0 0 rgba(99,102,241,0.10); }
          50% { box-shadow: 0 0 24px 8px rgba(59,130,246,0.18), 0 0 32px 16px rgba(99,102,241,0.12); }
        }
        .animate-glow {
          animation: glow 2.5s infinite;
        }
      `}</style>
    </section>
  );
}
