"use client";

import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Web Development',
    description: 'We build fast, responsive, and SEO-optimized websites tailored to your business needs.',
    icon: '/icons/web-development.svg', // Replace with your icon image path
  },
  {
    title: 'Mobile App Development',
    description: 'Delivering custom mobile solutions for iOS and Android platforms.',
    icon: '/icons/mobile-app.svg', // Replace with your icon image path
  },
  {
    title: 'Cloud Solutions',
    description: 'Providing scalable and secure cloud services to help your business grow.',
    icon: '/icons/cloud.svg', // Replace with your icon image path
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces to enhance customer experience.',
    icon: '/icons/ui-ux.svg', // Replace with your icon image path
  },
  {
    title: 'IT Consultancy',
    description: 'Offering expert advice and IT strategies to boost your business’s performance.',
    icon: '/icons/consultancy.svg', // Replace with your icon image path
  },
  {
    title: 'Digital Marketing',
    description: 'Helping you reach a wider audience with effective digital marketing strategies.',
    icon: '/icons/marketing.svg', // Replace with your icon image path
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Title Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-primary">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white text-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={service.icon} alt={service.title} className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
