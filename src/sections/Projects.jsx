import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

/* Project Data */
const projects = [
  {
    title: "Aurora",
    accent: "cyan",
    description:
      "An AI-driven assistant translating English to Hindi/Hinglish and generating 4+ content types via a custom Transformer, integrated with Gemini AI and 5+ LangChain connectors.",
    tech: ["LangChain", "TensorFlow", "Keras", "Streamlit", "Generative AI"],
    image: "/src/assets/projects/aurora.png",
    github: "https://github.com/vennelavarshini18/AURORA",
    demo: "",
  },
  {
    title: "VibeTrack",
    accent: "purple",
    description:
      "A deep learning system capable of detecting 6+ emotions from real-time or uploaded audio with 99.1% accuracy, featuring an emotion-adaptive chatbot and a mood analytics journal.",
    tech: ["TensorFlow", "Librosa", "Streamlit", "Plotly", "Sounddevice"],
    image: "/src/assets/projects/moodos.png",
    github: "http://github.com/vennelavarshini18/VibeTrack",
    demo: "",
  },
  {
    title: "GeoSense",
    accent: "teal",
    description:
      "A Web3-powered geospatial intelligence platform combining AI-based satellite segmentation and blockchain land management, analyzing 1,000+ parcels with real-time mapping.",
    tech: ["Solidity", "Hardhat", "Ethereum", "GeoJSON", "Flask", "HQ-SAM"],
    image: "/src/assets/projects/geosense.png",
    github: "https://github.com/vennelavarshini18/GeoSense-Somnia-AI-Hackathon",
    demo: "",
  },
  {
    title: "EduEase",
    accent: "cyan",
    description:
      "An intelligent platform for educators that generates quizzes, lesson plans, tracks student performance, and provides mental-wellness support.",
    tech: ["LangChain", "Streamlit", "Python-docx"],
    image: "/src/assets/projects/eduease.png",
    github: "https://github.com/vennelavarshini18/EduEase",
    demo: "",
  },
  {
    title: "Query Clone Detector",
    accent: "purple",
    description:
      "An NLP-based system to detect duplicate questions on Quora, reducing redundancy and improving content quality.",
    tech: ["Scikit-learn", "NLTK", "FuzzyWuzzy", "Streamlit"],
    image: "/src/assets/projects/queryclone.png",
    github: "https://github.com/vennelavarshini18/QueryClone-Detector",
    demo: "",
  },
  {
    title: "ML Notes Helper",
    accent: "teal",
    description:
      "A Streamlit app powered by an LSTM language model to intelligently suggest next words and manage/export notes.",
    tech: ["TensorFlow", "Streamlit", "FPDF"],
    image: "/src/assets/projects/mlnoteshelper.png",
    github: "https://github.com/vennelavarshini18/ML_Notes_Helper",
    demo: "",
  },
];

/* Accent styles */
const accentStyles = {
  cyan: {
    title: "text-cyan-400",
    border: "hover:border-cyan-400/40",
    shadow: "hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]",
    link: "hover:text-cyan-400",
  },
  purple: {
    title: "text-purple-400",
    border: "hover:border-purple-400/40",
    shadow: "hover:shadow-[0_0_45px_rgba(168,85,247,0.25)]",
    link: "hover:text-purple-400",
  },
  teal: {
    title: "text-teal-400",
    border: "hover:border-teal-400/40",
    shadow: "hover:shadow-[0_0_45px_rgba(45,212,191,0.25)]",
    link: "hover:text-teal-400",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[520px] h-[520px] bg-purple-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-white md:text-5xl font-heading">
        Featured <span className="text-purple-400">Projects</span>
      </h2>
      <div className="mt-4 mx-auto w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

      {/* Projects Grid */}
      <motion.div
        className="grid max-w-6xl gap-8 px-6 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((project, index) => {
          const accent = accentStyles[project.accent];

          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              className={`group bg-white/5 backdrop-blur-xl border border-white/10
                rounded-2xl p-5 transition
                ${accent.border}
                ${accent.shadow}`}
            >
              {/* Square Image */}
              <div className="relative w-full overflow-hidden aspect-square rounded-xl bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition opacity-0 bg-black/20 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <h3 className={`mt-5 text-xl font-semibold ${accent.title}`}>
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs text-gray-200 rounded-full bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm text-gray-300 transition ${accent.link}`}
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm text-gray-300 transition ${accent.link}`}
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
