const reasons = [
  { icon: '⚡', title: 'Agile & Transparent', desc: 'We keep you in the loop at every stage.' },
  { icon: '🛠️', title: 'Custom Solutions', desc: 'Every project is tailored to your needs.' },
  { icon: '🤝', title: 'Long-Term Partners', desc: 'We build relationships, not just software.' },
  { icon: '📈', title: 'Proven Results', desc: '100+ successful projects delivered.' },
  { icon: '🧑‍💻', title: 'Expert Team', desc: 'Certified developers and project managers.' },
  { icon: '🌐', title: 'Modern Tech', desc: 'We use the latest frameworks and tools.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-700 dark:text-blue-300 font-semibold shadow">
          Why Choose Us
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          What Sets Us Apart
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-14 max-w-2xl mx-auto">
          Discover the reasons clients trust us with their most important software projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 text-5xl flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes gradientBG {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientBG 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}