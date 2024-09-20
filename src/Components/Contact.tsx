"use client";

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact <span className="text-primary">Us</span></h2>
        <p className="mb-12 text-lg">We'd love to hear from you! Please fill out the form below or reach out to us directly.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
              />
            </div>
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors">
              Send Message
            </button>
          </form>

          {/* Company Details */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Contact Information</h3>
            <p className="mb-2"><strong>Email:</strong> info@valorainfotech.com</p>
            <p className="mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p className="mb-4"><strong>Address:</strong> 123 Tech Lane, Suite 456, Silicon Valley, CA</p>

            {/* Map Section */}
            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-2">Find Us Here</h4>
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567891234!2d-122.12345678901234!3d37.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f1f23456789ab%3A0x1234567890abcdef!2sValora%20Infotech!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="250"
                className="rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
