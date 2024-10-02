"use client";

import { motion } from 'framer-motion';

const testimonialsData = [
    {
        name: 'John Doe',
        position: 'CEO, TechCorp',
        feedback: 'Valora Infotech exceeded our expectations by delivering top-quality solutions on time. Their professionalism is unmatched!',
        image: '/testimonials/john-doe.jpg',
    },
    {
        name: 'Jane Smith',
        position: 'CTO, Innovate Inc.',
        feedback: 'The team at Valora Infotech was fantastic to work with. They provided excellent insights and a product we are truly proud of.',
        image: '/testimonials/jane-smith.jpg',
    },
    {
        name: 'Michael Johnson',
        position: 'Founder, StartUp Co.',
        feedback: 'Their expertise and customer service made our collaboration seamless. I highly recommend Valora Infotech for any IT needs.',
        image: '/testimonials/michael-johnson.jpg',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 z-0"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 text-center">
                {/* Title */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-12 text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    What Our <span className="text-primary">Clients </span> Say
                </motion.h2>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-16 w-16 rounded-full mx-auto mb-4"
                                width={64}
                                height={64}
                            /> */}
                            <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
                            <p className="text-lg text-gray-700 italic">&quot;{testimonial.feedback}&quot;</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
