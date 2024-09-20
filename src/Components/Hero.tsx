// Components/Hero.tsx
"use client";

import ParticleBackground from './Particles';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-white bg-home">
      <ParticleBackground />

      {/* Overlay for dark effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-primary">Valora Infotech</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We empower businesses with cutting-edge IT solutions tailored to your needs.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="/services" className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 transition-colors">
            Our Services
          </a>
          <a href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition-colors">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
