// import React from 'react';

// const testimonials = [
//     {
//         name: 'Sarah Williams',
//         role: 'CTO, FinTech Startup',
//         text: "The team delivered our web application on time and exceeded our expectations. Their technical expertise and communication were outstanding!"
//     },
//     {
//         name: 'Michael Chen',
//         role: 'Product Manager, HealthTech Co.',
//         text: "Excellent collaboration and attention to detail. Our mobile app launch was a huge success thanks to their dedication."
//     },
//     {
//         name: 'Priya Patel',
//         role: 'CEO, SaaS Platform',
//         text: "They provided valuable insights and delivered a robust cloud solution for our business. Highly recommended for any software project."
//     },
//     {
//         name: 'David Kim',
//         role: 'Founder, E-commerce Brand',
//         text: "Professional, reliable, and creative. The UI/UX design and development process was smooth from start to finish."
//     },
//     {
//         name: 'Emily Brown',
//         role: 'COO, Logistics Company',
//         text: "Their agile approach and ongoing support made our digital transformation seamless and stress-free."
//     },
// ];

// export default function Testimonials() {
//     return (
//         <section data-aos="fade-up" className="relative py-20 overflow-hidden">
//             {/* Animated gradient background */}
//             <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-100 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
//             <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
//                 <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-700 dark:text-blue-300 font-semibold shadow">
//                     Testimonials
//                 </span>
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
//                     What Our Clients Say
//                 </h2>
//                 <p className="text-lg text-gray-700 dark:text-gray-300 mb-14 max-w-2xl mx-auto">
//                     Hear from our clients about their experience working with our software development team.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {testimonials.map((testimonial, idx) => (
//                         <div
//                             key={testimonial.name}
//                             data-aos="zoom-in-up"
//                             data-aos-delay={idx * 120}
//                             className="relative bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 transition transform hover:-translate-y-2 hover:shadow-2xl"
//                         >
//                             {/* Quote icon background */}
//                             <span className="absolute top-6 left-6 text-5xl text-blue-100 dark:text-indigo-900 opacity-40 pointer-events-none select-none">“</span>
//                             {/* Avatar initials */}
//                             <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-3xl font-bold shadow-lg animate-bounce-slow">
//                                 {testimonial.name.split(' ').map(n => n[0]).join('')}
//                             </div>
//                             <p className="text-gray-700 dark:text-gray-200 text-lg italic mb-6 relative z-10">{testimonial.text}</p>
//                             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 tracking-wide">{testimonial.name}</h3>
//                             <p className="text-indigo-600 dark:text-indigo-300 font-medium">{testimonial.role}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/* Custom CSS for animated gradient and bounce */}
//             <style>{`
//         @keyframes gradientBG {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradientBG 8s ease-in-out infinite;
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-12px); }
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 2.5s infinite;
//         }
//       `}</style>
//         </section>
//     );
// }
