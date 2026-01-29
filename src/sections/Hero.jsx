import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

/* Motion helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden font-body"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/3 w-[520px] h-[520px] bg-purple-500/20 rounded-full blur-[140px]" />
      </motion.div>

      {/* Hero Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="relative bg-white/5 backdrop-blur-2xl border border-white/10 
                   rounded-3xl px-10 py-12 text-center max-w-3xl
                   shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                   hover:shadow-[0_0_80px_rgba(99,102,241,0.25)]
                   transition-shadow duration-500"
      >
        {/* Glow Ring */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-white/10" />

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl font-heading font-bold tracking-tight 
                     bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 
                     bg-[length:200%_200%] bg-clip-text text-transparent
                     animate-[gradient_6s_ease_infinite]"
        >
          Vennela Varshini Anasoori
        </motion.h1>

        {/* Subtle underline accent */}
        <div className="mx-auto mt-3 h-[2px] w-28 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70" />

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-5 text-2xl font-semibold tracking-wide text-gray-100"
        >
          BTech Student · AI/ML Architect · DSA Enthusiast
        </motion.p>

        {/* Contact */}
        <motion.p
          variants={fadeUp}
          className="mt-3 text-base text-gray-400"
        >
          Telangana, India <span className="font-bold text-gray-500">·</span>{" "}
          vennelavarshini07@gmail.com
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-6 mt-8"
        >
          {/* Resume */}
          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="https://drive.google.com/file/d/1Huyc5VwCDkGciSOoF9cRTHhzf1S5NvWf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative py-3 overflow-hidden font-semibold shadow-lg px-7 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
          >
            <span className="relative z-10">View Resume</span>
            {/* sheen */}
            <span className="absolute inset-0 transition-transform duration-700 -translate-x-full skew-x-12 bg-white/20 hover:translate-x-full" />
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/vennelavarshini18"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-white transition border rounded-full border-white/20
                       hover:border-cyan-400 hover:text-cyan-400
                       hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          >
            <Github className="w-6 h-6" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/vennela-varshini-anasoori/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-white transition border rounded-full border-white/20
                       hover:border-purple-400 hover:text-purple-400
                       hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Gradient animation keyframes */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
}
