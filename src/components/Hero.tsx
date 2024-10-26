"use client";

import React, { useEffect, useState } from "react";
import ParticlesBackground from "./Particles";
import Link from "next/link";

const quotes: string[] = [
  "Innovative IT solutions for modern growth.",
  "Tailored tech to boost your company growth.",
  "Empowering your digital journey with technology.",
  "Bringing your vision to life with technology.",
  "Your partner for success in the digital world."
];

const Hero: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>("fadeIn");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("fadeOut");
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setAnimationClass("fadeIn");
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-white">
      <ParticlesBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>

      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-4xl font-bold leading-tight shadow-lg">
          Welcome to
          <div className="text-primary text-5xl md:text-6xl mt-2 font-extrabold select-none">Valora Infotech</div>
        </h1>
        <p className={`mt-4 text-lg md:text-xl text-zinc-300 ${animationClass}`}>
          {quotes[currentQuoteIndex]}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="#services"
            className="bg-primary shining-button relative text-white text-lg py-2 px-4 rounded-lg cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_10px_#44A5FF,0_0_40px_#44A5FF]"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-white glow-button relative text-lg px-4 cursor-pointer overflow-hidden text-gray-900 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_10px_#ffffff,0_0_40px_#ffffff]"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-10 z-10 flex flex-col items-center">
        <span onClick={scrollToNextSection} className="scroll-button cursor-pointer text-white">
          <span></span>
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;
