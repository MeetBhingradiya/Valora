// Components/Particles.tsx
"use client";

import { useEffect } from 'react';
import Particles from 'particles.js';

const ParticleBackground = () => {
  useEffect(() => {
    Particles.init({
      selector: '.particles-js',
      maxParticles: 100,
      sizeVariations: 3,
      color: '#ffffff',
      connectParticles: true,
      speed: 1,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 50,
            connectParticles: false,
          },
        },
      ],
    });

    return () => {
      Particles.destroy();
    };
  }, []);

  return <div className="particles-js" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default ParticleBackground;
