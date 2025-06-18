import React from "react";

export default function ContactSection() {
  return (
    <section data-aos="fade-up" id="contact" className="py-20 bg-[#f6f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-10 justify-between">
          {/* LEFT COLUMN - Contact Info */}
          <div className="w-full lg:w-6/12 space-y-8">
            <div>
              <h3 className="text-blue-600 font-semibold uppercase text-sm">Contact Us</h3>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Let's talk about your problem.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Our Location</h4>
                <p>401 Broadway, 24th Floor,<br />Orchard Cloud View, London</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email Address</h4>
                <p>info@yourdomain.com<br />contact@yourdomain.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone Number</h4>
                <p>+990 846 73644<br />+550 9475 4543</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How Can We Help?</h4>
                <p>Tell us your problem we will get back to you ASAP.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div className="w-full lg:w-5/12 bg-white rounded-lg shadow p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name*</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address*</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message*</label>
                <textarea id="message" name="message" rows="5" placeholder="Type your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>
              <button type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
