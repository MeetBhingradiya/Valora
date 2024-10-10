"use client";
import { useEffect, useState } from "react";

const ParticlesBackground = () => {
  const [lastClick, setLastClick] = useState<{ x: number; y: number } | null>(null);

  const handleCanvasClick = (event: MouseEvent) => {
    const canvas = event.target as HTMLElement;
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    if (lastClick && Math.abs(clickX - lastClick.x) < 5 && Math.abs(clickY - lastClick.y) < 5) {
      // Ignore the click if it's within a 5-pixel radius of the last click
      console.log("Click at the same spot ignored");
      return;
    }

    // Update the last click coordinates
    setLastClick({ x: clickX, y: clickY });

    // Trigger the particle push on click
    if (window.pJSDom && window.pJSDom[0].pJS && window.pJSDom[0].pJS.interactivity.modes.push) {
      window.pJSDom[0].pJS.interactivity.modes.push.particles_nb = 4; // Push 4 particles on click
      window.pJSDom[0].pJS.fn.modes.pushParticles();
    }
  };

  useEffect(() => {
    const particleCanvas = document.getElementById("particles");

    if (particleCanvas) {
      particleCanvas.addEventListener("click", handleCanvasClick);
    }

    if (window.particlesJS) {
      window.particlesJS("particles", {
        particles: {
          number: {
            value: 140,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#44A5FF", "#0046ff"],
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
              enable: true,
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

    return () => {
      if (particleCanvas) {
        particleCanvas.removeEventListener("click", handleCanvasClick);
      }
    };
  }, [lastClick]);

  return <div id="particles" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />;
};

export default ParticlesBackground;
