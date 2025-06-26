import React from "react";

export default function Newsletter() {
  return (
    <section data-aos="fade-up" className="relative z-10">
      <div className="bg-[#0c145a] text-white rounded-md max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between p-8 space-y-6 lg:space-y-0 lg:space-x-6 shadow-lg">

        {/* Left Side Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Newsletter</h2>
          <p className="text-sm text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Nam vitae quam nec ante aliquet fringilla vel at erat.
          </p>
        </div>

        {/* Right Side Form */}
        <form className="lg:w-1/2 w-full max-w-xl flex items-center bg-white rounded-full overflow-hidden px-4 py-2">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-grow text-sm px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full"
          >
            Submit &gt;
          </button>
        </form>
      </div>
    </section>
  );
}
