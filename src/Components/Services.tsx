"use client";

import Link from 'next/link';
import { useState } from 'react';

const DetailedServices = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: 'Game Development', path: '/services/game-development' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Application Development', path: '/services/mobile-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { name: 'Artificial Intelligence and Machine Learning', path: '/services/ai-ml' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button 
        className="bg-primary text-white px-6 py-3 rounded-md shadow-md" 
        onClick={toggleMenu}
      >
        Services
      </button>

      {isMenuOpen && (
        <div className="absolute mt-2 bg-white border rounded-md shadow-lg">
          <ul className="py-2">
            {services.map((service) => (
              <li key={service.name}>
                <Link href={service.path}>
                  <a className="block px-6 py-2 text-gray-700 hover:bg-gray-100">{service.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailedServices;
