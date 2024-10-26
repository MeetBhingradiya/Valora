"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';

// Paths for images in the `public` directory
const client1 = "/assets/clients/client-1.png";
const client2 = "/assets/clients/client-2.png";
const client3 = "/assets/clients/client-3.png";
const client4 = "/assets/clients/client-4.png";
const client5 = "/assets/clients/client-5.png";
const client6 = "/assets/clients/client-6.png";

const OurClient: React.FC = () => {
    const [gradientWidth, setGradientWidth] = useState<number>(700);

    useEffect(() => {
        const updateGradientWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 900 && screenWidth > 400) {
                setGradientWidth(150);
            } else if (screenWidth <= 400) {
                setGradientWidth(100);
            } else {
                setGradientWidth(700);
            }
        };

        updateGradientWidth(); // Set initially
        window.addEventListener("resize", updateGradientWidth);
        return () => window.removeEventListener("resize", updateGradientWidth);
    }, []);

    return (
        <div className="py-16 bg-light dark:bg-dark text-lightText dark:text-darkText">
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-12 text-center  decoration-primary decoration-2"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Our <span className="text-primary">Clients</span>
            </motion.h2>
            <Marquee 
                className="overflow-hidden h-52 mb-16 bg-light dark:bg-dark"
                autoFill={true}
            >
                {[client1, client2, client3, client4, client5, client6].map(
                    (client, index) => (
                        <div key={index} className="mx-6">
                            <Image
                                src={client}
                                alt={`Client ${index + 1}`}
                                className=""
                                height={150}
                                width={150}
                                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 150px"
                                priority
                            />
                        </div>
                    )
                )}
            </Marquee>
        </div>
    );
};

export default OurClient;
