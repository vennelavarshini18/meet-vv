import { motion } from "framer-motion";
import { workExperiences } from "../data/workExperience";
import Tilt from "react-parallax-tilt";
import SectionParticles from "../components/SectionParticles";

export default function WorkExperience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section
      id="work-experience"
      className="relative max-w-5xl px-6 mx-auto py-28 perspective-[1000px]"
    >
      <SectionParticles id="work-particles" />

      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-secondaryLight font-mono tracking-widest text-sm uppercase mb-3 block">04. Tenures</span>
        <h2 className="text-4xl md:text-5xl font-heading font-light text-[#D1D4D1]">
          Professional <span className="font-semibold text-[#A3A8A3]">Trajectory</span>
        </h2>
        <div className="w-12 h-1 bg-secondary mt-6 rounded-full opacity-80" />
      </div>

      {/* Experience List - Timeline Style */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-darkBorder before:to-transparent"
      >
        {workExperiences.map((exp, index) => (
          <motion.div
            variants={itemVariants}
            key={exp.id}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline Node */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBase bg-darkSurface shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-primary transition-colors duration-500 z-10">
              <div className="w-2 h-2 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors duration-500" />
            </div>
            
            {/* Content Card */}
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              scale={1.02}
              transitionSpeed={2500}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-3xl bg-darkSurfaceLighter/50 backdrop-blur-3xl border border-white/10 group-hover:border-secondary/50 transition-all duration-700 hover:shadow-[0_0_40px_rgba(166,124,82,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-heading font-medium text-[#D1D4D1] group-hover:text-[#A3A8A3] transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-mono text-secondaryLight bg-secondary/5 px-3 py-1 rounded-full border border-secondary/20 whitespace-nowrap shadow-sm">
                    {exp.duration}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-sm font-medium text-textBody mb-6">
                  <span className="text-secondaryLight">{exp.company}</span>
                  <span className="w-1 h-1 rounded-full bg-darkBorder" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-3 text-textBody font-light">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-secondaryLight mt-1.5 opacity-60">▹</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
