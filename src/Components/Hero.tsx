"use client";

import ParticlesBackground from "./Particles";
import React, { useEffect, useState } from "react";

const quotes: string[] = [
  "Innovative IT solutions for modern challenges.",
  "Tailored technology to accelerate your growth.",
  "Empowering your digital transformation journey.",
  "Bringing your vision to life with creativity and technology.",
  "Your partner in a connected future."
];

const Hero: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-white">
      <ParticlesBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>

      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-4xl font-bold leading-tight shadow-lg">
          Welcome to
          <div className="text-primary text-5xl md:text-6xl mt-2 font-extrabold select-none">Valora Infotech</div>
        </h1>
        <p className="mt-4 text-lg md:text-xl transition-opacity duration-500 ease-in-out text-zinc-300">
          {quotes[currentQuoteIndex]}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#services"
            className="bg-primary shining-button relative text-white text-lg py-2 px-4 rounded-lg cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_10px_#44A5FF,0_0_40px_#44A5FF]"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="bg-white relative text-lg px-4 cursor-pointer overflow-hidden text-gray-900 py-2 rounded-md shadow-md hover:bg-gray-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
