import ParticlesBackground from "./Particles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-white">
      <ParticlesBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-primary">Valora Infotech</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          We empower businesses with cutting-edge IT solutions tailored to your needs.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#services" className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-yellow-500">
            Our Services
          </a>
          <a href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
