"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Handle scrolling event to change the Navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white opacity-50'}`}>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-3xl font-bold">
          Valora Infotech
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex flex-col justify-between h-6 w-6 cursor-pointer" onClick={handleToggleMenu}>
          {/* These are the three lines of the hamburger icon */}
          <div className={`h-0.5 w-full bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`h-0.5 w-full bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`h-0.5 w-full bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </div>

        {/* Menu for Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link href="/" onClick={handleLinkClick}>Home</Link>
          </li> 
          <li>
            <Link href="/#about" onClick={handleLinkClick}>About</Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <button 
              onClick={toggleServicesMenu} 
              className="focus:outline-none"
            >
              Services
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-900 border rounded-md shadow-lg">
                <li>
                  <Link href="/services/web-development" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-700">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-development" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-700">
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-700">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud-solutions" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-700">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-ml" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-700">
                    Artificial Intelligence & ML
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-700">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="#portfolio" onClick={handleLinkClick}>Portfolio</Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-gray-900 text-white`}>
        <ul className="flex flex-col items-center space-y-6 py-8">
          <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/#about" onClick={handleLinkClick}>About</Link></li>
          
          {/* Services Dropdown for Mobile */}
          <li>
            <button onClick={toggleServicesMenu} className="focus:outline-none">Services</button>
            {isServicesOpen && (
              <ul className="flex flex-col items-center mt-2 space-y-4">
                <li><Link href="/services/web-development" onClick={handleLinkClick}>Web Development</Link></li>
                <li><Link href="/services/mobile-development" onClick={handleLinkClick}>Mobile Application Development</Link></li>
                <li><Link href="/services/ui-ux-design" onClick={handleLinkClick}>UI/UX Design</Link></li>
                <li><Link href="/services/cloud-solutions" onClick={handleLinkClick}>Cloud Solutions</Link></li>
                <li><Link href="/services/ai-ml" onClick={handleLinkClick}>AI & ML</Link></li>
                <li><Link href="/services/digital-marketing" onClick={handleLinkClick}>Digital Marketing</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="#portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
          <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
