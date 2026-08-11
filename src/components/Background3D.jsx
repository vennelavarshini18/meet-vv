import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Generate random particles for the CSS starfield
const generateParticles = (count) => {
  return Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 3 + 1;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    // Determine random drift direction
    const endX = startX + (Math.random() * 40 - 20); 
    const endY = startY + (Math.random() * -40 - 10); // Mostly drift up

    return {
      id: i,
      startX,
      startY,
      endX,
      endY,
      size,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * -30,
      opacity: Math.random() * 0.4 + 0.1,
    };
  });
};

export default function Background3D() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Massively increase particle count to make it stunning, not minimal
    setParticles(generateParticles(150));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-darkBase">
      
      {/* 1. Global Soft Particles (Visible everywhere) */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primaryLight"
          style={{
            left: `${p.startX}vw`,
            top: `${p.startY}vh`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 3}px rgba(217,197,160,0.8)`, // Soft glowing effect
            filter: "blur(0.5px)",
          }}
          animate={{
            x: [`${p.startX}vw`, `${p.endX}vw`],
            y: [`${p.startY}vh`, `${p.endY}vh`],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* 2. Global Perspective Grid Floor (Moved slightly down and faded to blend better) */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] perspective-[1200px] origin-bottom opacity-40">
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 60px"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-t border-primary/20"
          style={{
            rotateX: 80,
            backgroundImage: `linear-gradient(to right, rgba(166,124,82,0.15) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(166,124,82,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          }}
        />
      </div>

    </div>
  );
}
