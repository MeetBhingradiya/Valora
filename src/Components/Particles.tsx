"use client";
import { useEffect } from "react";

const ParticlesBackground = () => {

    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS("particles", "assets/particles.json");
        }
    }, []);

    return <div id="particles" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />;
};

export default ParticlesBackground;
