"use client";
import { useEffect, useState } from "react";

const ParticlesBackground = () => {
  const [clickCount, setClickCount] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [disabled, setDisabled] = useState(false);
  let disabledTimeout: NodeJS.Timeout;

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles", {
        particles: {
          number: {
            value: 120,
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
              enable: !disabled, // Enable or disable based on click limit
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
  }, [disabled]);

  // Function to handle click events and apply the limit
  const handleCanvasClick = () => {
    const currentTime = new Date().getTime();

    // Start timer on the first click
    if (clickCount === 0) {
      setStartTime(currentTime);
    }

    setClickCount((prevCount) => prevCount + 1);

    // If 5 seconds have passed, reset the click count
    if (currentTime - startTime > 5000) {
      setClickCount(1); // Reset click count and start time
      setStartTime(currentTime);
    }

    // Disable click if the user clicks more than 10 times in 5 seconds
    if (clickCount >= 10) {
      disableInteraction();
    }
  };

  // Disable interaction for 5 seconds
  const disableInteraction = () => {
    setDisabled(true);

    // Re-enable the interaction after 5 seconds
    disabledTimeout = setTimeout(() => {
      setDisabled(false);
      setClickCount(0); // Reset the click count when re-enabled
    }, 5000);
  };

  return (
    <div
      id="particles"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      onClick={disabled ? undefined : handleCanvasClick} // Disable click handler if limit reached
    />
  );
};

export default ParticlesBackground;
