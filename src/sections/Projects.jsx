import { motion } from "framer-motion";
import { Github, ExternalLink, Play } from "lucide-react";
import Tilt from "react-parallax-tilt";
import SectionParticles from "../components/SectionParticles";

/* Project Data */
const projects = [
  {
    title: "WareFlow",
    accent: "primary",
    description:
      "Engineered an AI-powered logistics platform for smart shipment tracking, traffic and weather-aware rerouting, and RL-based warehouse navigation for flawless operations.",
    tech: ["Python", "PyTorch", "Stable Baselines3", "FastAPI", "React", "Three.js", "Firebase", "Google Cloud Platform"],
    image: "/wareflow.png",
    github: "https://github.com/vennelavarshini18/WareFlow",
    demo: "",
  },
  {
    title: "PrepRAG",
    accent: "secondary",
    description:
      "A sophisticated Retrieval-Augmented Generation (RAG) system engineered to deliver authoritative, context-aware interview preparation by grounding LLM responses in trusted data.",
    tech: ["LangChain", "FAISSStore", "SentenceTransformers", "Streamlit", "Generative AI"],
    image: "/preprag.png",
    github: "https://github.com/vennelavarshini18/PrepRAG",
    demo: "",
  },
  {
    title: "VibeTrack",
    accent: "primary",
    description:
      "An advanced deep learning system detecting subtle emotions from real-time audio with 99.1% accuracy, featuring a bespoke emotion-adaptive chatbot.",
    tech: ["TensorFlow", "Librosa", "Streamlit", "Plotly", "Sounddevice"],
    image: "/moodos.png",
    github: "https://github.com/vennelavarshini18/VibeTrack",
    demo: "",
  },
  {
    title: "GeoSense",
    accent: "secondary",
    description:
      "A visionary Web3 geospatial intelligence platform synergizing AI-based satellite segmentation and immutable blockchain land management.",
    tech: ["Solidity", "Hardhat", "Ethereum", "GeoJSON", "Flask", "HQ-SAM"],
    image: "/geosense.png",
    github: "https://github.com/vennelavarshini18/GeoSense-Somnia-AI-Hackathon",
    demo: "",
  },
    {
    title: "Aurora",
    accent: "primary",
    description:
      "A bespoke AI assistant translating and generating multifaceted content via a custom Transformer, seamlessly integrated with Gemini AI and LangChain.",
    tech: ["LangChain", "TensorFlow", "Keras", "Streamlit", "Generative AI"],
    image: "/aurora.png",
    github: "https://github.com/vennelavarshini18/AURORA",
    demo: "",
  },
  {
    title: "EduEase",
    accent: "secondary",
    description:
      "A premium, intelligent platform empowering educators to dynamically generate curricula, track metrics, and provide robust mental-wellness support.",
    tech: ["LangChain", "Streamlit", "Python-docx"],
    image: "/eduease.png",
    github: "https://github.com/vennelavarshini18/EduEase",
    demo: "",
  },
  {
    title: "Query Clone Detector",
    accent: "primary",
    description:
      "A highly optimized NLP architecture designed to detect duplicate inquiries, drastically reducing redundancy and elevating content quality.",
    tech: ["Scikit-learn", "NLTK", "FuzzyWuzzy", "Streamlit"],
    image: "/queryclone.png",
    github: "https://github.com/vennelavarshini18/QueryClone-Detector",
    demo: "",
  },
  {
    title: "ML Notes Helper",
    accent: "secondary",
    description:
      "An elegant interface powered by an LSTM language model, offering intelligent keystroke prediction and seamless note curation.",
    tech: ["TensorFlow", "Streamlit", "FPDF"],
    image: "/mlnoteshelper.png",
    github: "https://github.com/vennelavarshini18/ML_Notes_Helper",
    demo: "",
  },
];

/* Accent styles */
const accentStyles = {
  primary: {
    title: "text-[#A3A8A3]",
    border: "group-hover:border-secondary/50",
    shadow: "group-hover:shadow-[0_20px_50px_rgba(166,124,82,0.2)]",
    link: "hover:text-[#A3A8A3]",
  },
  secondary: {
    title: "text-secondaryLight",
    border: "group-hover:border-secondary/60",
    shadow: "group-hover:shadow-[0_20px_50px_rgba(77,87,78,0.3)]",
    link: "hover:text-secondaryLight",
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 bg-darkBase perspective-[1000px] overflow-hidden">
      <SectionParticles id="projects-particles" />
      
      {/* Background Grids (Dusty, muted feel) */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(rgba(166,124,82,0.25) 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
             WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
           }} 
      />
      <div className="absolute inset-0 -z-10 flex justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center mb-20 text-center">
        <span className="text-secondaryLight font-mono tracking-widest text-sm uppercase mb-3 block">03. Gallery</span>
        <h2 className="text-4xl md:text-5xl font-heading font-light text-[#D1D4D1]">
          Featured <span className="font-semibold text-[#A3A8A3]">Creations</span>
        </h2>
        <div className="w-12 h-1 bg-secondary mt-6 rounded-full opacity-80" />
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid max-w-6xl gap-10 px-6 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, index) => {
          const accent = accentStyles[project.accent] || accentStyles.primary;

          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={2500}
                className={`group h-full flex flex-col bg-darkSurfaceLighter/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 transition-all duration-700 overflow-hidden relative
                  ${accent.border}
                  ${accent.shadow}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Image */}
                <div className="relative w-full overflow-hidden aspect-[4/3] rounded-2xl bg-darkBase border border-darkBorder/50 z-10 mb-6 group-hover:shadow-xl transition-all duration-700" style={{ transform: "translateZ(30px)" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow z-10" style={{ transform: "translateZ(40px)" }}>
                  <h3 className={`text-2xl font-heading font-medium transition-colors ${accent.title}`}>
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-textBody font-light">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-mono text-textBody border border-darkBorder rounded bg-darkBase group-hover:border-secondary/30 transition-colors shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 mt-auto z-10 pt-4 border-t border-darkBorder/50" style={{ transform: "translateZ(20px)" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm text-textBody transition-colors ${accent.link}`}
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm text-textBody transition-colors ${accent.link}`}
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  )}
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
