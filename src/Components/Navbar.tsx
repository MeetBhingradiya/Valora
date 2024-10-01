"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [State, setState] = useState({
        isScrolled: false,
        isMenuOpen: false,
        isServicesOpen: false
    });
    const servicesMenuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setState({ ...State, isScrolled: window.scrollY > 50 });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
                setState({ ...State, isServicesOpen: false });
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggleMenu = () => {
        setState({ ...State, isServicesOpen: !State.isServicesOpen, isMenuOpen: !State.isMenuOpen });
    };

    const handleLinkClick = () => {
        setState({
            ...State,
            isServicesOpen: false,
            isMenuOpen: false
        });

        // ? Smooth Scroll to the clicked section
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleServicesMenu = () => {
        setState({
            ...State,
            isServicesOpen: State.isServicesOpen ? false : true
        });
    };

    useEffect(() => {
        // if (window.ScrollReveal) {

        //     for (let i = 1; i <= 5; i++) {

        //         // ? Duration of each element
        //         var Duration = 2000;
        //         if (i >= 2) {
        //             Duration = Duration + 500 * (i - 1);
        //         }

        //         const Sr = window.ScrollReveal({
        //             origin: 'top',
        //             distance: `80px`,
        //             duration: Duration,
        //             reset: true
        //         });

        //         Sr.reveal(`#Nav-Links-${i}`, { interval: 200 });
        //     }
        // }
    }, []);

    return (
        <nav id={"Nav"} className={`fixed w-full top-0 z-50 transition-all duration-500 ${State.isScrolled ? 'bg-[#171713] text-white' : 'bg-[#171713] text-white'}`}>
            <div className="flex justify-between items-center px-6 py-4">
                <div className="text-3xl font-bold">
                    Valora Infotech
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex flex-col justify-between h-6 w-6 cursor-pointer" onClick={handleToggleMenu}>
                    <div className={`h-0.5 w-full bg-primary transition-all duration-300 ${State.isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                    <div className={`h-0.5 w-full bg-primary transition-all duration-300 ${State.isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`h-0.5 w-full bg-primary transition-all duration-300 ${State.isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
                </div>

                {/* Menu for Desktop */}
                <ul className="hidden md:flex space-x-8 text-base">
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link href="/" onClick={handleLinkClick}>Home</Link>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/#about" onClick={handleLinkClick}>About</Link>
                    </motion.li>

                    {/* Services Dropdown */}
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <button
                            onClick={toggleServicesMenu}
                            className="focus:outline-none"
                        >
                            Services
                        </button>

                        {/* Dropdown Menu */}
                        {State.isServicesOpen && (
                            <ul ref={servicesMenuRef} className="absolute left-0 mt-2 w-48 bg-[#e7e4db] text-black border rounded-md shadow-lg">
                                <li>
                                    <Link href="/services/web-development" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10">Web Development</span>
                                        <span className="absolute left-1/2 bottom-0 w-10/12 h-[2px] bg-black transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-development" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10">Mobile Application Development</span>
                                        <span className="absolute left-1/2 bottom-0 w-10/12 h-[2px] bg-black transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ui-ux-design" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10">UI/UX Design</span>
                                        <span className="absolute left-1/2 bottom-0 w-10/12 h-[2px] bg-black transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/cloud-solutions" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10">Cloud Solutions</span>
                                        <span className="absolute left-1/2 bottom-0 w-10/12 h-[2px] bg-black transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ai-ml" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10">Artificial Intelligence & ML</span>
                                        <span className="absolute left-1/2 bottom-0 w-10/12 h-[2px] bg-black transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/digital-marketing" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10">Digital Marketing</span>
                                        <span className="absolute left-1/2 bottom-0 w-10/12 h-[2px] bg-black transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link href="#portfolio" onClick={handleLinkClick}>Portfolio</Link>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
                    </motion.li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${State.isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-gray-900 text-white`}>
                <ul className="flex flex-col items-center space-y-6 py-8">
                    <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link href="/#about" onClick={handleLinkClick}>About</Link></li>

                    {/* Services Dropdown for Mobile */}
                    <li>
                        <button onClick={toggleServicesMenu} className="focus:outline-none">Services</button>
                        {State.isServicesOpen && (
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
