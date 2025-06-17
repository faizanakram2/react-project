import React from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 bg-blue-100 dark:bg-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="wow fadeInUp mb-16 max-w-[350px]" data-wow-delay="0s">
                        <span className="text-primary mb-3 text-lg font-bold uppercase sm:text-xl">Contact Us</span>
                        <h2 className="mb-3 text-3xl leading-tight font-bold text-black md:text-[45px] dark:text-white">Let's talk about your problem.</h2>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 sm:w-1/2">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div className="wow fadeInUp mb-11 max-w-[250px]" data-wow-delay="0s">
                                <h3 className="text-dark mb-4 text-lg font-semibold dark:text-white">Our Location</h3>
                                <p className="text-body-color-2 dark:text-body-color text-base leading-loose font-medium">401 Broadway, 24th Floor, Orchard Cloud View, London</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div className="wow fadeInUp mb-11 max-w-[250px]" data-wow-delay="0s">
                                <h3 className="text-dark mb-4 text-lg font-semibold dark:text-white">Email Address</h3>
                                <p className="text-body-color-2 dark:text-body-color text-base leading-loose font-medium">info@yourdomain.com</p>
                                <p className="text-body-color-2 dark:text-body-color text-base leading-loose font-medium">contact@yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div className="wow fadeInUp mb-11 max-w-[250px]" data-wow-delay="0s">
                                <h3 className="text-dark mb-4 text-lg font-semibold dark:text-white">Phone Number</h3>
                                <p className="text-body-color-2 dark:text-body-color text-base leading-loose font-medium">+990 846 73644</p>
                                <p className="text-body-color-2 dark:text-body-color text-base leading-loose font-medium">+550 9475 4543</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2">
                        <div style={{ opacity: 1, transform: "none" }}>
                            <div className="wow fadeInUp mb-11 max-w-[250px]" data-wow-delay="0s">
                                <h3 className="text-dark mb-4 text-lg font-semibold dark:text-white">How Can We Help?</h3>
                                <p className="text-body-color-2 dark:text-body-color text-base leading-loose font-medium">Tell us your problem we will get back to you ASAP.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-5/12">
                    <div style={{ opacity: 1, transform: "none" }}>
                        <div className="sm:14 wow fadeInUp dark:bg-dark rounded-md bg-white px-8 py-12" data-wow-delay="0s">
                            <h3 className="text-dark mb-8 text-2xl font-bold sm:text-[34px] lg:text-2xl xl:text-[34px] dark:text-white">Send us a Message</h3>
                            <form>
                                <div className="mb-5">
                                    <label htmlFor="name" className="text-dark mb-2 block text-sm font-medium dark:text-white">Full Name*</label>
                                    <input id="name" placeholder="Enter your full name" className="text-body-color focus:border-primary w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-hidden dark:border-[#E9E9E9]/20 dark:bg-white/5" type="text" name="name" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="text-dark mb-2 block text-sm font-medium dark:text-white">Email Address*</label>
                                    <input id="email" placeholder="Enter your email address" className="text-body-color focus:border-primary w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-hidden dark:border-[#E9E9E9]/20 dark:bg-white/5" type="email" name="email" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="message" className="text-dark mb-2 block text-sm font-medium dark:text-white">Message*</label>
                                    <textarea name="message" rows="6" id="message" placeholder="Type your message" className="text-body-color focus:border-primary w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-hidden dark:border-[#E9E9E9]/20 dark:bg-white/5"></textarea>
                                </div>
                                <button className="bg-primary hover:bg-primary/90 w-full rounded-full p-3 text-center text-base font-semibold text-white dark:bg-white dark:text-black dark:hover:bg-white/90">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}