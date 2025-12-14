import { motion } from "framer-motion";

const achievements = [
  {
    title: "AIR 6 - IIWCPC 2025",
    description: "Selected among the top 32 finalists nationwide and secured All India Rank 6 in the finals of the IIWCPC 2025 Track 1.",
    color: "cyan",
  },
  {
    title: "Google Girl Hackathon 2025",
    description: "Ranked in the top 2.5%, advancing to the Semifinals among 34,000+ applicants from 700+ universities.",
    color: "purple",
  },
  {
    title: "Reliance Foundation Scholar 2025",
    description: "Earned a merit-based Reliance Foundation scholarship, awarded to the top 5% of 100,000+ applicants.",
    color: "teal",
  },
  {
    title: "Competitive Programming",
    description: "Achieved 3 star on CodeChef and Pupil Rank on Codeforces through by solving over 400+ problems on various platforms.",
    color: "cyan",
  },
  {
    title: "NXP WIT 2025",
    description: "Stood among the top 175 semifinalists chosen over 15000+ applicants nationwide.",
    color: "purple",
  },
  {
    title: "FOSS Weekend",
    description: "Secured 3rd place among 240 in FOSS Weekend, IIIT Lucknow's flagship open-source competition.",
    color: "teal",
  },
  {
    title: "GSSoC 2025 & Kaggle Contributor",
    description: "Selected as a contributor for GSSoC 2025, actively contributed to data science repositories and achieved Contributor title by publishing high-quality notebooks and ML Insights on Kaggle.",
    color: "cyan",
  },
  {
    title: "JEE Main 2024",
    description: "Achieved top 1.7 percentile nationally in JEE Main 2024 among 1.6 million candidates.",
    color: "purple",
  },
];

const colorMap = {
  cyan: {
    border: "hover:border-cyan-400/40",
    glow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]",
    text: "text-cyan-400",
    bar: "bg-cyan-400",
  },
  purple: {
    border: "hover:border-purple-400/40",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]",
    text: "text-purple-400",
    bar: "bg-purple-400",
  },
  teal: {
    border: "hover:border-teal-400/40",
    glow: "hover:shadow-[0_0_40px_rgba(45,212,191,0.25)]",
    text: "text-teal-400",
    bar: "bg-teal-400",
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative max-w-6xl px-6 mx-auto py-28">
      
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[520px] h-[520px] bg-purple-500/10 rounded-full blur-[140px]"
        />
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-white md:text-5xl font-heading">
        Key <span className="text-purple-400">Achievements</span>
      </h2>
      <div className="mt-4 mx-auto w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

      {/* Achievements Grid */}
      <motion.div
        className="grid gap-8 mt-16 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {achievements.map((item, index) => {
          const theme = colorMap[item.color];

          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className={`relative overflow-hidden p-6 rounded-2xl
                          bg-white/5 backdrop-blur-xl border border-white/10
                          transition-all duration-300
                          ${theme.border} ${theme.glow} group`}
            >
              {/* Accent Bar */}
              <div
                className={`absolute left-0 top-0 h-full w-1
                            ${theme.bar} scale-y-0
                            group-hover:scale-y-100
                            transition-transform origin-top`}
              />

              <h3 className={`text-xl font-semibold ${theme.text}`}>
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
