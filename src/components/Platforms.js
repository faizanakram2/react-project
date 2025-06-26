import React from 'react';

const techStack = [
  {
    name: 'React',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Node.js',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'AWS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    name: 'Figma',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
  {
    name: 'Python',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
  },
  {
    name: 'GitHub',
    url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  {
    name: 'Azure',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
  },
  {
    name: 'TypeScript',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  {
    name: 'PostgreSQL',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
  },
];

const Platforms = () => {
  return (
    <section data-aos="fade-up" className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Our Technology Stack
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          We leverage the latest technologies and tools to deliver high-quality, scalable, and secure software solutions for our clients.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-5 transition transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-700 group"
            >
              <img
                src={tech.url}
                alt={tech.name}
                title={tech.name}
                className="h-14 w-14 object-contain mb-2 grayscale group-hover:grayscale-0 transition duration-300 drop-shadow"
              />
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 mt-2 tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
