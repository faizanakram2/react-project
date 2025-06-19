// src/components/TeamSection.jsx
import React from "react";
import image01 from "../assets/image-01.webp";
import image02 from "../assets/image-02 (1).webp";
import image04 from "../assets/image-04.webp";

const teamMembers = [
  {
    name: "Matheus Ferrero",
    role: "Marketing Expert",
    image: image01,
  },
  {
    name: "Eva Hudson",
    role: "Blockchain Developer",
    image: image02,
  },
  {
    name: "Jackie Sanders",
    role: "Creative Designer",
    image: image04,
  },
  {
    name: "Jackie Sanders",
    role: "SEO Expert",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
];

export default function TeamSection() {
  return (
    <section data-aos="fade-up" className="wow fadeInUp py-20 px-6 md:px-20 bg-white">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Our Team</p>
        <h2 className="text-4xl font-bold mt-2 mb-4">Meet out Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-blue-50 w-72 h-[360px] rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300 hover:border-b-4 hover:border-blue-600"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <div className="flex justify-center mt-3 space-x-4 text-gray-500 text-sm">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
