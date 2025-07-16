import { MdDevices } from 'react-icons/md';
import { TbPencilCode } from 'react-icons/tb';
import { HiOutlineCloud } from 'react-icons/hi';
import { RiTestTubeLine } from 'react-icons/ri';
import { FaRegLightbulb } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';

const features = [
  {
    icon: <MdDevices size={36} />,
    title: 'Web & Mobile Development',
    desc: 'Custom web and mobile applications built with the latest technologies for your business needs.'
  },
  {
    icon: <TbPencilCode size={36} />,
    title: 'UI/UX Design',
    desc: 'Intuitive, engaging, and user-centered design for delightful digital experiences.'
  },
  {    
    icon: <HiOutlineCloud size={36} />,
    title: 'Cloud Solutions',
    desc: 'Scalable and secure cloud infrastructure, DevOps, and deployment services.'
  },
  {
    icon: <RiTestTubeLine size={36} />,
    title: 'QA & Testing',
    desc: 'Comprehensive quality assurance and testing to ensure reliability and performance.'
  },
  {
    icon: <FaRegLightbulb size={36} />,
    title: 'IT Consulting',
    desc: 'Expert advice to help you choose the right technology and strategy for your goals.'
  },
  {
    icon: <BiSupport size={36} />,
    title: 'Ongoing Support',
    desc: 'Reliable maintenance and support to keep your software running smoothly.'
  },
];

const Features = () => {
  return (
    <section data-aos="fade-up" className="relative py-20 overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <p className="text-2xl font-semibold text-indigo-600 uppercase mb-2 tracking-wider">Our Services</p>
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">What We Offer</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-14 max-w-2xl mx-auto">
          We provide end-to-end software development services to help your business grow, innovate, and succeed in the digital world.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 transition transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="mb-6 text-5xl flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg relative animate-pulse group-hover:animate-none">
                <span className="absolute inset-0 rounded-full border-4 border-blue-400/30 group-hover:border-indigo-400/50 animate-glow" />
                <span className="relative z-10">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Custom CSS for animated gradient and glow */}
      <style>{`
        @keyframes gradientBG {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientBG 8s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3), 0 0 0 0 rgba(99,102,241,0.2); }
          50% { box-shadow: 0 0 24px 8px rgba(59,130,246,0.4), 0 0 32px 16px rgba(99,102,241,0.3); }
        }
        .animate-glow {
          animation: glow 2.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;