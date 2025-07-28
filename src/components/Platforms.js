import React from 'react';
import Particles from 'react-tsparticles';
// import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const techStack = [
  { name: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Figma', url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { name: 'Python', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Docker', url: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
  { name: 'GitHub', url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { name: 'Azure', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  { name: 'TypeScript', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'PostgreSQL', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
];

const Platforms = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // loads basic version of tsparticles
  };

  return (
    <section className="relative py-24 bg-white font-[Montserrat] overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#ffffff" } },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#0B4EA1" },
            links: {
              enable: true,
              color: "#0B4EA1",
              distance: 120,
              opacity: 0.4,
              width: 1,
            },
          },
        }}
      />

      {/* Tech Stack Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Our Technology Stack
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Tools that empower us to build secure, scalable, and modern solutions — tailored for startups, enterprises, and everything in between.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300"
            >
              <img
                src={tech.url}
                alt={tech.name}
                title={tech.name}
                className="h-12 w-12 mx-auto mb-3 grayscale hover:grayscale-0 transition"
              />
              <span className="text-sm font-medium text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
