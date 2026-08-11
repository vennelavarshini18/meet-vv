import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

// Variants for staggered entrance animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, rotateX: 10, opacity: 0 },
  visible: {
    y: 0,
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
  },
};

const socialVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
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
      className="relative px-6 py-28 bg-darkBase overflow-hidden perspective-[1000px]"
    >
      {/* Background Grid & Glows */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: 'linear-gradient(#A67C52 1px, transparent 1px), linear-gradient(90deg, #A67C52 1px, transparent 1px)', 
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }} 
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-gradient-to-b from-darkBase to-transparent pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondaryLight/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Heading */}
      <div className="flex flex-col items-center mb-16 text-center relative z-10">
        <span className="text-secondaryLight font-mono tracking-widest text-sm uppercase mb-3 block">07. Connect</span>
        <h2 className="text-4xl md:text-5xl font-heading font-light text-[#D1D4D1]">
          Digital <span className="font-semibold text-secondaryLight">Footprint</span>
        </h2>
        <div className="w-12 h-1 bg-secondary mt-6 rounded-full opacity-80" />
        
        <p className="max-w-xl mx-auto mt-6 text-center text-textBody font-light">
          I am continually seeking sophisticated opportunities, collaborations, and intellectual challenges. 
          Establish a connection to explore synergy.
        </p>
      </div>

      {/* Main Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-12"
      >
        {/* Contact Info Cards */}
        <div className="grid w-full gap-6 md:grid-cols-3">
          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            style={{ transformStyle: "preserve-3d" }}
            className="group flex flex-col items-center p-8 bg-darkSurfaceLighter border border-darkBorder rounded-3xl hover:border-secondary/50 transition-all duration-700 text-center relative overflow-hidden hover:shadow-[0_0_40px_rgba(166,124,82,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primaryLight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="p-4 bg-darkBase border border-darkBorder rounded-2xl mb-4 group-hover:scale-110 group-hover:border-secondary/30 transition-all shadow-md">
              <Mail className="w-6 h-6 text-[#A3A8A3]" strokeWidth={1.5} />
            </div>
            <h4 className="text-sm font-mono text-secondaryLight uppercase tracking-wider mb-2">Electronic Mail</h4>
            <span className="text-[#D1D4D1] font-medium">vennelavarshini07@gmail.com</span>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={itemVariants}
            style={{ transformStyle: "preserve-3d" }}
            className="group flex flex-col items-center p-8 bg-darkSurfaceLighter border border-darkBorder rounded-3xl hover:border-secondary/50 transition-all duration-700 text-center relative overflow-hidden hover:shadow-[0_0_40px_rgba(77,87,78,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="p-4 bg-darkBase border border-darkBorder rounded-2xl mb-4 group-hover:scale-110 group-hover:border-secondary/30 transition-all shadow-md">
              <Phone className="w-6 h-6 text-secondaryLight" strokeWidth={1.5} />
            </div>
            <h4 className="text-sm font-mono text-secondaryLight uppercase tracking-wider mb-2">Direct Line</h4>
            <span className="text-[#D1D4D1] font-medium">+91 90303 27207</span>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            style={{ transformStyle: "preserve-3d" }}
            className="group flex flex-col items-center p-8 bg-darkSurfaceLighter border border-darkBorder rounded-3xl hover:border-secondary/50 transition-all duration-700 text-center relative overflow-hidden hover:shadow-[0_0_40px_rgba(166,124,82,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primaryLight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="p-4 bg-darkBase border border-darkBorder rounded-2xl mb-4 group-hover:scale-110 group-hover:border-secondary/30 transition-all shadow-md">
              <MapPin className="w-6 h-6 text-[#A3A8A3]" strokeWidth={1.5} />
            </div>
            <h4 className="text-sm font-mono text-secondaryLight uppercase tracking-wider mb-2">Coordinates</h4>
            <span className="text-[#D1D4D1] font-medium">Telangana, India</span>
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.div variants={itemVariants} className="pt-8" style={{ transformStyle: "preserve-3d" }}>
          <a
            href="mailto:vennelavarshini07@gmail.com"
            className="inline-flex items-center justify-center px-10 py-4 font-medium text-darkBase bg-gradient-to-r from-primaryLight to-primary rounded-full hover:shadow-[0_0_30px_rgba(217,197,160,0.3)] transition-all group hover:scale-[1.02] active:scale-95"
          >
            <span>Initiate Correspondence</span>
            <Mail className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Social Icons */}
        <div className="pt-16 w-full flex flex-col items-center">
          <motion.div
            variants={containerVariants}
            className="flex items-center gap-6"
          >
            <motion.a
              variants={socialVariants}
              href="https://github.com/vennelavarshini18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-textBody transition border rounded-xl border-darkBorder bg-darkSurfaceLighter hover:border-primary hover:text-[#A3A8A3] hover:scale-110 active:scale-95 shadow-sm"
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.a
              variants={socialVariants}
              href="https://www.linkedin.com/in/vennela-varshini-anasoori/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-textBody transition border rounded-xl border-darkBorder bg-darkSurfaceLighter hover:border-secondary hover:text-secondaryLight hover:scale-110 active:scale-95 shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
          
          <motion.p variants={itemVariants} className="mt-8 text-sm text-textBody font-mono text-center opacity-60">
            Built by Vennela Varshini
            <br />
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}