"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-900 text-white' : 'bg-transparent text-white'}`}>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">
          Valora Infotech
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center" onClick={handleToggleMenu}>
          <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>

        {/* Menu for Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link href="/#about" onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link href="/#services" onClick={handleLinkClick}>Services</Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={handleLinkClick}>Portfolio</Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col items-center space-y-6 bg-gray-900 text-white py-8">
          <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/#about" onClick={handleLinkClick}>About</Link></li>
          <li><Link href="/#services" onClick={handleLinkClick}>Services</Link></li>
          <li><Link href="/portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
          <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
