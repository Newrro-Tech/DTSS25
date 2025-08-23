'use client';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, type Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "#050713" } },
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      particles: {
        color: { value: "#00f6ff" },
        links: { color: "#00f6ff", distance: 150, enable: true, opacity: 0.2, width: 1 },
        move: { direction: "none", enable: true, outModes: { default: "out" }, random: false, speed: 0.5, straight: false },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }}
    />
  );
};

export default AnimatedBackground;