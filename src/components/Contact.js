import React from "react";

export default function ContactSection() {
  return (
    <section data-aos="fade-up" id="contact" className="relative py-20 bg-[#f6f9ff] overflow-hidden">
      {/* Animated Light Effect */}
      <div className="pointer-events-none select-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] z-0 animate-lightfade" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.10) 60%, transparent 100%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap gap-10 justify-between">
          {/* LEFT COLUMN - Contact Info */}
          <div className="w-full px-4 lg:w-1/2 space-y-8">
            <div data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-blue-600 font-semibold uppercase text-sm">Contact Us</h3>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Let's talk about your problem.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-700">
              <div className="bg-white/80 rounded-xl shadow p-5 border border-gray-100 animate-fadein" data-aos="fade-up" data-aos-delay="200">
                <h4 className="font-semibold mb-2">Our Location</h4>
                <p>401 Broadway, 24th Floor,<br />Orchard Cloud View, London</p>
              </div>
              <div className="bg-white/80 rounded-xl shadow p-5 border border-gray-100 animate-fadein" data-aos="fade-up" data-aos-delay="300">
                <h4 className="font-semibold mb-2">Email Address</h4>
                <p>info@yourdomain.com<br />contact@yourdomain.com</p>
              </div>
              <div className="bg-white/80 rounded-xl shadow p-5 border border-gray-100 animate-fadein" data-aos="fade-up" data-aos-delay="400">
                <h4 className="font-semibold mb-2">Phone Number</h4>
                <p><br />+92 316 8555118</p>
              </div>
              <div className="bg-white/80 rounded-xl shadow p-5 border border-gray-100 animate-fadein" data-aos="fade-up" data-aos-delay="500">
                <h4 className="font-semibold mb-2">How Can We Help?</h4>
                <p>Tell us your problem we will get back to you ASAP.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div className="w-full lg:w-5/12 bg-white rounded-lg shadow p-8 relative group border border-gray-100 transition-all duration-300 animate-fadein" data-aos="fade-left" data-aos-delay="300">
            <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500 pointer-events-none z-0" />
            <h3 className="text-2xl font-bold mb-6 relative z-10">Send us a Message</h3>
            <form className="space-y-5 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name*</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address*</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message*</label>
                <textarea id="message" name="message" rows="5" placeholder="Type your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
              </div>
              <button type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-full shadow-lg transition duration-300 animate-glow">
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
