import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaPalette,
  FaShieldAlt,
  FaHandsHelping,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaCode size={26} />,
    title: 'Web Development',
    desc: 'Robust and scalable websites tailored to your business needs.',
  },
  {
    icon: <FaMobileAlt size={26} />,
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile apps with seamless user experience.',
  },
  {
    icon: <FaCloud size={26} />,
    title: 'Cloud Services',
    desc: 'Reliable AWS & cloud-based infrastructure solutions.',
  },
  {
    icon: <FaPalette size={26} />,
    title: 'UI/UX Design',
    desc: 'Modern, user-centered design built for usability and beauty.',
  },
  {
    icon: <FaShieldAlt size={26} />,
    title: 'Cybersecurity',
    desc: 'Protecting your systems and users with advanced security.',
  },
  {
    icon: <FaHandsHelping size={26} />,
    title: 'Consulting',
    desc: 'Guiding your tech decisions with expert strategies and planning.',
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-white text-center"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#0B4EA1] font-semibold uppercase tracking-wider text-sm mb-2">
          Our Services
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-14">
          We empower your business with complete end-to-end digital services, from design to deployment and beyond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#0B4EA1]/10 text-[#0B4EA1]">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
