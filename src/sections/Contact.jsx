import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"; // Imported Github and Linkedin

// Variants for staggered entrance animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Variants for the social icons (separate for distinct motion)
const socialVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative max-w-6xl px-6 mx-auto text-white py-28"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-[140px]"
        />
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center md:text-5xl font-heading">
        Let’s <span className="text-purple-400">Connect</span>
      </h2>
      <div className="mt-4 mx-auto w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
      <p className="max-w-2xl mx-auto mt-4 text-center text-gray-400">
        I'm always open to discussing new opportunities, collaborations and exciting hackathons or competitions.
      </p>

      {/* Main Content Area - Center Contact Info and Follow Me */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center mt-16 space-y-10 md:mt-20"
      >
        {/* --- 1. GET IN TOUCH (Contact Info Cards) --- */}
        <div className="w-full max-w-xl">
          <h3 className="mb-5 text-2xl font-bold text-center text-gray-100">
            Get in Touch
          </h3>
          <div className="space-y-5">
            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 p-5 transition bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              <Mail className="text-cyan-400" />
              <span className="text-gray-300">vennelavarshini07@gmail.com</span>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 p-5 transition bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
            >
              <Phone className="text-purple-400" />
              <span className="text-gray-300">+91 90303 27207</span>
            </motion.div>

            {/* Location Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 p-5 transition bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-teal-400/40 hover:shadow-[0_0_40px_rgba(45,212,191,0.25)]"
            >
              <MapPin className="text-teal-400" />
              <span className="text-gray-300">Karimnagar-505001, Telangana, India</span>
            </motion.div>
          </div>
        </div>

        {/* --- 2. FOLLOW ME (Social Icons) --- */}
        <div className="w-full max-w-xl pt-6">
          <h3 className="mb-5 text-2xl font-bold text-center text-gray-100">
            Follow Me
          </h3>
          <motion.div
            variants={socialVariants}
            className="flex items-center justify-center gap-6"
          >
            {/* GitHub */}
            <motion.a
              href="https://github.com/vennelavarshini18"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 text-white transition border rounded-full border-white/20 hover:border-cyan-400 hover:text-cyan-400"
            >
              <Github className="w-8 h-8" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/vennela-varshini-anasoori/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 text-white transition border rounded-full border-white/20 hover:border-purple-400 hover:text-purple-400"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            
            {/* Placeholder for another social icon (e.g., LeetCode/Twitter/Portfolio) */}
            <motion.a
              href="#" // Add your social link here
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 text-white transition border rounded-full border-white/20 hover:border-teal-400 hover:text-teal-400"
            >
              {/* Using Mail for placeholder, replace with a relevant icon (e.g., X, Globe, Code) */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.302 17.597c-.368.106-.757.175-1.162.203-1.07.075-2.09-.168-3.048-.718-.54-.31-1.01-.722-1.428-1.22-.385-.453-.717-.962-.977-1.517-.26-.555-.45-1.16-.56-1.792-.095-.55-.06-1.127.106-1.708.165-.58.423-1.14.77-1.68.347-.54.79-1.05 1.32-1.52.53-.47 1.15-.89 1.86-1.25.71-.36 1.48-.62 2.31-.77.83-.15 1.68-.13 2.5.06.82.19 1.58.54 2.27 1.05.69.51 1.3 1.15 1.77 1.9.47.75.76 1.6.86 2.5.09 1.37-.28 2.68-1.1 3.8-.82 1.12-1.95 2.01-3.32 2.62-1.37.61-2.91.89-4.52.83-1.61-.06-3.17-.45-4.56-1.15zM12 21.6c-5.353 0-9.697-4.344-9.697-9.697C2.303 6.55 6.647 2.207 12 2.207c5.353 0 9.697 4.344 9.697 9.697 0 5.353-4.344 9.697-9.697 9.697z"/></svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}