/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const servicesData = [
  {
    title: 'Game Development',
    description: 'Creating immersive and interactive game experiences across platforms.',
    icon: 'assets/service-cards/game-development.png',
    moreInfo: 'We design and develop engaging games with captivating stories, stunning visuals, and smooth mechanics, delivering a rich user experience for both casual and hardcore gamers.',
    path: '/services/game-development',
  },
  {
    title: 'Web Development',
    description: 'We build fast, responsive, and SEO-optimized websites tailored to your business needs.',
    icon: 'assets/service-cards/web.png',
    moreInfo: 'Our team specializes in modern web technologies to create stunning websites, including responsive designs, custom functionalities, and efficient performance optimizations to ensure a seamless user experience across all devices.',
    path: '/services/web-development',
  },
  {
    title: 'Mobile App Development',
    description: 'Delivering custom mobile solutions for iOS and Android platforms.',
    icon: 'assets/service-cards/app.png',
    moreInfo: 'We develop apps that are user-friendly, scalable, and robust, focusing on intuitive UI/UX designs, integrating cutting-edge technology, and ensuring high performance to meet your business objectives.',
    path: '/services/mobile-development',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces to enhance customer experience.',
    icon: 'assets/service-cards/user-experience.png',
    moreInfo: 'We prioritize user experience in our designs, creating intuitive and visually appealing interfaces that engage users and drive conversions across all platforms.',
    path: '/services/ui-ux-design',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud solutions to streamline your operations and boost performance.',
    icon: 'assets/service-cards/cloud.png',
    moreInfo: 'We provide secure and efficient cloud-based services to help businesses manage their data, applications, and infrastructure seamlessly, ensuring high scalability and reduced operational costs.',
    path: '/services/cloud-solutions',
  },
  {
    title: 'Digital Marketing',
    description: 'Helping you reach a wider audience with effective digital marketing strategies.',
    icon: 'assets/service-cards/marketing.png',
    moreInfo: 'We implement data-driven digital marketing strategies, focusing on SEO, content marketing, and social media to increase your online visibility and drive targeted traffic to your site.',
    path: '/services/digital-marketing',
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
          className="text-4xl sm:text-2xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-primary">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <Link key={index} href={service.path} passHref>
              <div
                className="group relative w-full h-80 perspective cursor-pointer"
              >
                {/* Card */}
                <div className="card h-full">
                  <div className="card-inner h-full">
                    {/* Front Side */}
                    <div className="front flex flex-col items-center justify-center h-full p-6">
                      <motion.img
                        src={service.icon}
                        alt={service.title}
                        className="h-16 w-16 mx-auto mb-4 transition-transform duration-100 group-hover:scale-110"
                        width={64} // Set width for responsive images
                        height={64} // Set height for responsive images
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
