import { motion } from "framer-motion";
import { GraduationCap, FileText, ArrowRight, PenTool } from "lucide-react";
import Tilt from "react-parallax-tilt";
import SectionParticles from "../components/SectionParticles";

const tiltVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <section id="about" className="relative flex justify-center px-6 overflow-hidden py-28 bg-darkBase perspective-[1000px]">
      <SectionParticles id="about-particles" />
      
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[800px] h-[400px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none mt-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-secondary font-mono tracking-widest text-sm uppercase mb-3">01. Genesis</span>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-[#D1D4D1]">
            About <span className="font-semibold text-[#A3A8A3]">Me</span>
          </h2>
          <div className="w-12 h-1 bg-secondary mt-6 rounded-full opacity-80" />
        </div>

        {/* About Text */}
        <Tilt
          tiltMaxAngleX={2}
          tiltMaxAngleY={2}
          scale={1.01}
          transitionSpeed={2500}
          glareEnable={true}
          glareMaxOpacity={0.05}
          glareColor="#ffffff"
          glarePosition="all"
          className="max-w-4xl mx-auto p-8 md:p-12 bg-darkSurfaceLighter/50 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(166,124,82,0.1)] group"
        >
          {/* Subtle grid in card */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#A67C52 1px, transparent 1px), linear-gradient(90deg, #A67C52 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <p className="relative z-10 text-lg md:text-xl leading-relaxed text-textBody font-light" style={{ transform: "translateZ(20px)" }}>
            I am a Junior pursuing <span className="font-medium text-[#D1D4D1]">Computer Science and Business</span> at
            <span className="font-medium text-[#D1D4D1]"> IIIT Lucknow</span>. I thrive on solving complex logic problems and am deeply focused on mastering Data Structures and Algorithms.
            <br /><br />
            Alongside this, I build intelligent systems leveraging
            <span className="text-secondary"> Artificial Intelligence and Machine Learning</span>. My goal is to translate raw data and complex models into clean software solutions.
            <br /><br />
            I am deeply committed to open-source development and technical communities. I'm constantly experimenting, learning new tech stacks, and collaborating to build impactful tools.
          </p>
        </Tilt>

        {/* Education & Resume Cards */}
        <motion.div
          className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mt-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Education Card */}
          <motion.div variants={tiltVariants} className="h-full">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2500}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              className="h-full group bg-darkSurfaceLighter/50 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:border-secondary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                {/* Score Badge */}
                <div className="absolute top-0 right-0 flex flex-col items-center justify-center p-2 border border-darkBorder bg-darkBase rounded-xl shadow-lg">
                  <span className="text-xl font-bold tracking-tight text-secondary">9.616</span>
                  <span className="text-[10px] uppercase tracking-widest text-textBody">CGPA</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-darkBase border border-darkBorder rounded-xl text-secondary group-hover:scale-110 transition-transform shadow-md">
                    <GraduationCap className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-heading font-medium text-[#D1D4D1]">Academic Rigor</h3>
                </div>

                <p className="pr-16 mt-2 text-lg font-medium text-[#D1D4D1] leading-snug">
                  Bachelor of Technology in Computer Science & Business
                </p>

                <p className="mt-3 text-sm text-secondary">
                  Indian Institute of Information Technology, Lucknow
                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-textBody font-mono">
                  <span>Aug 2024 – Jun 2028</span>
                  <span>Lucknow, IN</span>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Resume Card */}
          <motion.div variants={tiltVariants} className="h-full">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2500}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              className="h-full group bg-darkSurfaceLighter/50 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:border-secondary/50 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-grow" style={{ transform: "translateZ(30px)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-darkBase border border-darkBorder rounded-xl text-secondary group-hover:scale-110 transition-transform shadow-md">
                    <FileText className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-heading font-medium text-[#D1D4D1]">Dossier</h3>
                </div>

                <p className="mt-2 text-lg font-medium text-[#D1D4D1]">
                  Curriculum Vitae
                </p>

                <p className="mt-3 text-sm text-textBody leading-relaxed">
                  Everything about my technical work, featured builds, and academic background in one place.
                </p>
              </div>

              <div className="relative z-10 mt-8" style={{ transform: "translateZ(20px)" }}>
                <a
                  href="https://drive.google.com/file/d/1veKBKm8ab9fQyE4EXbLP3qANIM-8tdN8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4 rounded-xl bg-darkBase border border-darkBorder text-[#D1D4D1] group-hover:border-secondary transition-colors shadow-lg"
                >
                  <span className="font-medium text-sm">View & Download</span>
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Tilt>
          </motion.div>

          {/* Blog Card */}
          <motion.div variants={tiltVariants} className="h-full md:col-span-2">
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              scale={1.01}
              transitionSpeed={2500}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              className="h-full group bg-darkSurfaceLighter/50 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:border-secondary/50 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-grow" style={{ transform: "translateZ(30px)" }}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-darkBase border border-darkBorder rounded-xl text-secondary group-hover:scale-110 transition-transform shadow-md">
                    <PenTool className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-medium text-[#D1D4D1]">Writing</h3>
                    <p className="text-sm font-medium text-secondary">Medium Publications</p>
                  </div>
                </div>

                <p className="mt-2 text-sm text-textBody leading-relaxed max-w-xl">
                  Have a look at my blogs! I write about technical deep-dives, my dev journey, and architectural insights.
                </p>
              </div>

              <div className="relative z-10 shrink-0" style={{ transform: "translateZ(20px)" }}>
                <a
                  href="https://medium.com/@vennelavarshini07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 px-8 py-4 rounded-xl bg-darkBase border border-darkBorder text-[#D1D4D1] group-hover:border-secondary transition-colors shadow-lg whitespace-nowrap"
                >
                  <span className="font-medium text-sm">Read Articles</span>
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
