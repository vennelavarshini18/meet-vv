import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function SectionParticles({ id }) {
  const particlesInit = useCallback(async (engine) => {
    // This is crucial: loads the slim version of the tsparticles engine
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
      options={{
        fullScreen: { enable: false }, // VERY IMPORTANT: disables fullscreen so it stays inside the section
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          color: { value: ["#A67C52", "#D9C5A0"] },
          links: {
            color: "#A67C52",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 50,
          },
          opacity: {
            value: { min: 0.1, max: 0.4 },
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
