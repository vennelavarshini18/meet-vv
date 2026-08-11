import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt";

/* Motion helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const text3DVariants = {
  hidden: { opacity: 0, rotateX: -20, y: 50 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden font-body perspective-[1000px]"
    >
      
      {/* Sleek Sci-Fi Rings (Hero Only) */}
      <div 
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-0"
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' 
        }}
      >
        {/* Core Glow */}
        <div className="absolute w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px]" />
        
        {/* Outer Ring 1 */}
        <motion.div
          animate={{ rotateX: [60, 60], rotateY: [0, 360], rotateZ: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] rounded-full border border-primary/40 shadow-[0_0_50px_rgba(166,124,82,0.1)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glowing node on ring */}
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-primaryLight rounded-full shadow-[0_0_30px_#D9C5A0]" />
        </motion.div>

        {/* Outer Ring 2 (Counter rotating) */}
        <motion.div
          animate={{ rotateX: [70, 70], rotateY: [360, 0], rotateZ: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] rounded-full border border-secondary/50 shadow-[0_0_40px_rgba(77,87,78,0.2)]"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Inner Ring */}
        <motion.div
          animate={{ rotateX: [50, 50], rotateY: [0, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] rounded-full border-2 border-primary/20 border-t-primary/60 border-b-primary/60 shadow-[0_0_30px_rgba(166,124,82,0.2)]"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center mt-20"
      >
        <Tilt
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          scale={1.02}
          transitionSpeed={2500}
          glareEnable={false}
          className="flex flex-col items-center w-full"
        >
          {/* Title with 3D Effect */}
          <motion.div variants={text3DVariants} style={{ transformStyle: "preserve-3d" }} className="flex flex-col items-center">
            <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-heading font-light tracking-tight text-textMain leading-tight" style={{ transform: "translateZ(40px)" }}>
              Vennela Varshini
              <br />
              Anasoori
            </h1>
            
            {/* 3 Tags */}
            <div 
              className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-6 text-base md:text-lg lg:text-xl font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primaryLight via-primary to-primaryLight font-medium animate-shimmer"
              style={{ transform: "translateZ(30px)" }}
            >
              <span>BTech Student</span>
              <span className="text-primary/50 text-sm md:text-base">●</span>
              <span>AI/ML Developer</span>
              <span className="text-primary/50 text-sm md:text-base">●</span>
              <span>DSA Enthusiast</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            style={{ transform: "translateZ(20px)" }}
            className="max-w-2xl mt-8 text-lg md:text-xl font-light text-textMuted leading-relaxed"
          >
            Endlessly Curious 
            <span className="text-secondaryLight/40 mx-3 font-mono">/</span> 
            Relentlessly Learning
          </motion.p>
        </Tilt>

        {/* Actions */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-6 mt-12 z-20 relative"
        >
          {/* Primary Action */}
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden font-medium text-darkBase bg-gradient-to-r from-primaryLight to-primary transition-all rounded-full hover:shadow-[0_0_30px_rgba(217,197,160,0.3)] hover:scale-[1.02] active:scale-95"
          >
            <span className="relative z-10">Explore My Work</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary Action */}
          <a
            href="https://drive.google.com/file/d/1veKBKm8ab9fQyE4EXbLP3qANIM-8tdN8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 font-medium text-textMain transition-all border border-darkBorder rounded-full hover:border-primary hover:text-primaryLight hover:bg-darkSurface"
          >
            View Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeUp} className="flex items-center gap-6 mt-16 pt-8 w-full max-w-md justify-center z-20 relative">
          <a
            href="https://github.com/vennelavarshini18"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-14 h-14 rounded-full border border-darkBorder bg-darkBase text-[#D1D4D1] hover:text-primaryLight hover:border-primary/50 hover:bg-darkSurfaceLighter transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(217,197,160,0.2)]"
          >
            <Github className="w-7 h-7" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/vennela-varshini-anasoori/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-14 h-14 rounded-full border border-darkBorder bg-darkBase text-[#D1D4D1] hover:text-primaryLight hover:border-primary/50 hover:bg-darkSurfaceLighter transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(217,197,160,0.2)]"
          >
            <Linkedin className="w-7 h-7" strokeWidth={1.5} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

