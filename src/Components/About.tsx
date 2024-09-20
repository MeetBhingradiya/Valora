const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-primary">Valora Infotech</span>
        </h2>

        {/* Description Section */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
          At Valora Infotech, we are committed to delivering top-tier IT solutions
          tailored to empower your business. Our team of experienced professionals
          offers innovative and customized services that drive success in an ever-evolving
          digital landscape.
        </p>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-lg">
              Our mission is to provide innovative and robust IT solutions that solve
              real-world problems and help businesses grow in a competitive market.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
            <p className="text-lg">
              Our vision is to be a leader in the IT services industry, creating cutting-edge
              technologies that drive innovation and growth for our clients worldwide.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Value 1 */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Integrity</h4>
            <p className="text-lg">
              We uphold the highest standards of integrity and transparency in all our
              dealings, ensuring trust and accountability with our clients.
            </p>
          </div>

          {/* Value 2 */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Innovation</h4>
            <p className="text-lg">
              Innovation is at the core of our solutions. We embrace creativity and
              forward-thinking to deliver cutting-edge technologies.
            </p>
          </div>

          {/* Value 3 */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Customer-Centric</h4>
            <p className="text-lg">
              Our customers are at the heart of everything we do. We strive to exceed
              expectations by providing tailored solutions to meet their needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
