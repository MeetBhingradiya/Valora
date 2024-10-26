"use client";
import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles", {
        particles: {
          number: {
            value: 170,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: [
              "#44A5FF",
              "#0046ff"
            ],
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 6,
            },
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 0.5,
              },
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return <div id="particles" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />;
};

export default ParticlesBackground;

// "use client";
// import { useEffect, useState } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"; // For loading tsParticles full bundle

// const ParticlesBackground = () => {
//   const [particlesConfig, setParticlesConfig] = useState(null);

//   useEffect(() => {
//     const fetchParticlesConfig = async () => {
//       const response = await fetch("/particles.json");
//       const config = await response.json();
//       setParticlesConfig(config);
//     };

//     fetchParticlesConfig();
//   }, []);

//   const particlesInit = async (main: any) => {
//     // Load tsparticles full bundle
//     await loadFull(main);
//   };

//   return (
//     <>        
//       {particlesConfig && (
//         <Particles
//           id="tsparticles"
//           init={particlesInit}
//           options={particlesConfig}
//           style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//         />
//       )}
//     </>
//   );
// };

// export default ParticlesBackground;
