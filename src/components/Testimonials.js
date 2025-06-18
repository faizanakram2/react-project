import React from 'react';
import testimonialShape from '../assets/testimonial-shape.svg';
import image01 from '../assets/image-01 (1).webp';
import image02 from '../assets/image-02 (1).webp';
import image03 from '../assets/image-03 (1).webp';
import image04 from '../assets/image-04 (1).webp';

const testimonials = [
    {
        id: 1,
        name: 'Jason Keys',
        role: 'CEO & Founder @ Dreampeet',
        image: image01,
        text: "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family."
    },
    {
        id: 2,
        name: 'Mariya Merry',
        role: 'CEO & Founder @ Betex',
        image: image02,
        text: "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family."
    },
    {
        id: 3,
        name: 'Andria Jolly',
        role: 'CEO & Founder @ CryptoX',
        image: image03,
        text: "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family."
    },
    {
        id: 4,
        name: 'Devid Willium',
        role: 'CEO & Founder @ Coinbase',
        image: image04,
        text: "I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family."
    }
];

const TestimonialCard = ({ testimonial }) => (
    <div className="w-full px-4 md:w-1/2">
        <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 sm:p-10 md:p-8 xl:p-10 dark:bg-[#131B4D]">
            <div className="absolute top-0 right-0 z-[-1]">
                <img src={testimonialShape} alt="shape" width={254} height={182} />
            </div>
            <div className="mb-8 flex items-center">
                <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-sm">
                    <img src={testimonial.image} alt={testimonial.name} className="h-full object-cover" width={80} height={80} />
                </div>
                <div className="w-full">
                    <h3 className="text-dark mb-1 text-lg font-semibold dark:text-white">{testimonial.name}</h3>
                    <p className="text-body-color-2 text-sm font-medium dark:text-white">{testimonial.role}</p>
                </div>
            </div>
            <p className="text-body-color-2 dark:text-body-color text-base leading-snug font-medium">
                “{testimonial.text}”
            </p>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
                <span className="text-primary mb-3 text-lg font-bold uppercase sm:text-xl">TESTIMONIALS</span>
                <h2 className="mb-3 text-3xl leading-tight font-bold text-black md:text-[45px] dark:text-white">
                    What Our Client Say's
                </h2>
                <p className="text-body-color-2 dark:text-body-color text-lg font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.
                </p>
            </div>

            <div className="-mx-4 flex flex-wrap">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
