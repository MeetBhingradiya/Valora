/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const servicesData = [
  {
    title: 'Web Development',
    description: 'We build fast, responsive, and SEO-optimized websites tailored to your business needs.',
    icon: 'assets/service-cards/web.png',
    moreInfo: 'Our team specializes in modern web technologies to create stunning websites, including responsive designs, custom functionalities, and efficient performance optimizations to ensure a seamless user experience across all devices.',
  },
  {
    title: 'Mobile App Development',
    description: 'Delivering custom mobile solutions for iOS and Android platforms.',
    icon: 'assets/service-cards/app.png',
    moreInfo: 'We develop apps that are user-friendly, scalable, and robust, focusing on intuitive UI/UX designs, integrating cutting-edge technology, and ensuring high performance to meet your business objectives.',
  },
  {
    title: 'Cloud Solutions',
    description: 'Providing scalable and secure cloud services to help your business grow.',
    icon: 'assets/service-cards/cloud.png',
    moreInfo: 'Our cloud solutions offer flexible, secure, and scalable services, ensuring your business can adapt to changing needs while maintaining high availability and reliability.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces to enhance customer experience.',
    icon: 'assets/service-cards/user-experience.png',
    moreInfo: 'We prioritize user experience in our designs, creating intuitive and visually appealing interfaces that engage users and drive conversions across all platforms.',
  },
  {
    title: 'IT Consultancy',
    description: 'Offering expert advice and IT strategies to boost your business’s performance.',
    icon: 'assets/service-cards/consultancy.png',
    moreInfo: 'Our consultancy services provide strategic insights and IT solutions tailored to your specific business challenges, helping you leverage technology for optimal performance.',
  },
  {
    title: 'Digital Marketing',
    description: 'Helping you reach a wider audience with effective digital marketing strategies.',
    icon: 'assets/service-cards/marketing.png',
    moreInfo: 'We implement data-driven digital marketing strategies, focusing on SEO, content marketing, and social media to increase your online visibility and drive targeted traffic to your site.',
  },
];

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate background position based on scroll
  const backgroundPosition = `center ${scrollPosition * 0.5}px`;


  return (
    <section
      id="services"
      className="py-24 text-white relative select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/web-background.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: backgroundPosition,
        backgroundSize: 'cover',
      }}
    >
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center ">
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
              className="group relative w-full h-80 perspective"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Card */}
              <div className="card h-full">
                <div className="card-inner h-full">
                  {/* Front Side */}
                  <div className="front flex flex-col items-center justify-center h-full p-6">
                  <motion.img
                      src={service.icon}
                      alt={service.title}
                      className="h-16 w-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                    />
                    <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                    <p className="text-lg">{service.description}</p>
                  </div>
                  {/* Back Side */}
                  <div className="back flex items-center justify-center h-full p-6 bg-primary text-white rounded-lg">
                    <p className="text-xl justify-center text-white">{service.moreInfo}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
