import { motion } from "framer-motion";
import { BrainCircuit, Code2, Database, LayoutTemplate, Settings, Network, Cpu, Users } from "lucide-react";
import Tilt from "react-parallax-tilt";
import SectionParticles from "../components/SectionParticles";

const skillCategories = [
  {
    title: "Machine Learning & Deep Learning",
    icon: <BrainCircuit className="w-6 h-6" strokeWidth={1.5} />,
    color: "primary",
    skills: ["PyTorch", "TensorFlow", "GenAI", "Agentic AI", "LangChain", "Scikit-Learn", "Keras", "NLP", "Computer Vision"]
  },
  {
    title: "Specialized AI & Audio Engineering",
    icon: <Database className="w-6 h-6" strokeWidth={1.5} />,
    color: "secondary",
    skills: ["Pyannote", "WhisperX", "Audio Signal Processing", "Vector Databases", "FAISS", "Pinecone", "Reinforcement Learning"]
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" strokeWidth={1.5} />,
    color: "primary",
    skills: ["Go", "Python", "C", "C++", "SQL", "Bash", "Java"]
  },
  {
    title: "Web & Backend Systems",
    icon: <LayoutTemplate className="w-6 h-6" strokeWidth={1.5} />,
    color: "secondary",
    skills: ["FastAPI", "Flask", "React.js", "Streamlit", "REST APIs"]
  },
  {
    title: "Cloud, Infrastructure & Telecom",
    icon: <Network className="w-6 h-6" strokeWidth={1.5} />,
    color: "primary",
    skills: ["5G Core", "SBI Protocols", "GCP", "Firebase", "Prometheus", "pyATS", "Linux", "Git", "GitHub"]
  },
  {
    title: "Computer Science Fundamentals",
    icon: <Cpu className="w-6 h-6" strokeWidth={1.5} />,
    color: "secondary",
    skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOP"]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 bg-darkBase perspective-[1000px] overflow-hidden">
      <SectionParticles id="skills-particles" />
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-secondaryLight font-mono tracking-widest text-sm uppercase mb-3 block">02. Arsenal</span>
        <h2 className="text-4xl md:text-5xl font-heading font-light text-[#D1D4D1]">
          Technical <span className="font-semibold text-[#A3A8A3]">Mastery</span>
        </h2>
        <div className="w-12 h-1 bg-secondary mt-6 rounded-full opacity-80" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-16"
      >
        {skillCategories.map((category, index) => {
          const isPrimary = category.color === "primary";
          const themeColor = isPrimary ? "primary" : "secondary";
          const hoverBorder = isPrimary ? "hover:border-secondary/50" : "hover:border-secondary/50";
          const hoverShadowClass = isPrimary ? "hover:shadow-[0_0_40px_rgba(166,124,82,0.15)]" : "hover:shadow-[0_0_40px_rgba(77,87,78,0.2)]";
          const barGradient = isPrimary 
            ? "from-primaryLight/20 via-primaryLight to-primaryLight/20" 
            : "from-secondary/30 via-secondary to-secondary/30";

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.03}
                transitionSpeed={2500}
                className={`relative overflow-hidden h-full p-8 rounded-3xl
                            bg-darkSurfaceLighter/50 backdrop-blur-3xl border border-white/10
                            transition-all duration-700
                            ${hoverBorder} group shadow-lg ${hoverShadowClass}`}
              >
                {/* Accent Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Left Hover Accent Bar */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${barGradient} transition-transform origin-top scale-y-0 group-hover:scale-y-100 duration-700`} />

                <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-darkBase border border-darkBorder text-${themeColor} group-hover:scale-110 group-hover:border-${themeColor}/30 transition-all duration-500 shadow-md`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-xl font-heading font-medium text-[#D1D4D1] group-hover:text-${isPrimary ? 'primaryLight' : 'secondary'} transition-colors duration-300`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 text-sm font-light rounded-full
                                   bg-darkBase border border-darkBorder text-textBody
                                   transition-all duration-300
                                   hover:text-[#D1D4D1] hover:border-${themeColor}/50 shadow-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}