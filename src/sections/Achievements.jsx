import { motion } from "framer-motion";
import { Trophy, Star, Medal, Award, Globe, Code, Zap } from "lucide-react";
import Tilt from "react-parallax-tilt";
import SectionParticles from "../components/SectionParticles";

const majorAchievements = [
  {
    title: "Cisco CWIP 2026",
    description: "Selected as a Technical Intern I through the Cisco Women Internship Programme 2026.",
    color: "primary",
    icon: Star,
  },
  {
    title: "Google Summer of Code 2026",
    description: "Chosen as a contributor under HumanAI Foundation to work on the ISSR project for the TRIP Laboratory.",
    color: "secondary",
    icon: Code,
  },
  {
    title: "AIR 6 - IIWCPC 2025",
    description: "Selected among the top 32 finalists nationwide and secured All India Rank 6 in the finals of IIWCPC 2025 Track 1.",
    color: "primary",
    icon: Trophy,
  },
  {
    title: "Google Girl Hackathon 2025",
    description: "Ranked in the top 2.5%, advancing to the Semifinals among 34,000+ applicants from 700+ universities.",
    color: "secondary",
    icon: Zap,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Solved 550+ problems on LeetCode, strengthening algorithmic thinking, execution speed, and problem-solving skills.",
    color: "primary",
    icon: Code,
  },
  {
    title: "Flipkart Grid 8.0",
    description: "Advanced to the National Semifinals in the Software Development Track.",
    color: "secondary",
    icon: Medal,
  },
  {
    title: "Linux Foundation LiFT Scholarship",
    description: "Awarded global scholarship given to only 500 candidates worldwide.",
    color: "primary",
    icon: Globe,
  },
  {
    title: "Amazon ML Summer School 2026",
    description: "Selected for the elite cohort among the top 3,000 scholars out of 65,000+ applicants.",
    color: "secondary",
    icon: Award,
  },
];

const notableMentions = [
  {
    title: "Reliance Foundation Scholar",
    description: "Earned a merit-based scholarship, awarded to the top 5% of 100,000+ applicants.",
    color: "secondary",
  },
  {
    title: "Competitive Programming",
    description: "Achieved 3-star on CodeChef and earned Pupil rank on Codeforces.",
    color: "primary",
  },
  {
    title: "DevMatrix Hackathon",
    description: "Recognized as a First Runner-up for demonstrating technical excellence.",
    color: "secondary",
  },
  {
    title: "FOSS Weekend",
    description: "Secured 3rd place among 240 participants in IIITL's open-source competition.",
    color: "primary",
  },
  {
    title: "GSSoC 2025 & Kaggle",
    description: "Selected as a contributor for GSSoC and achieved Kaggle Contributor status.",
    color: "secondary",
  },
  {
    title: "JEE Main 2024",
    description: "Achieved top 1.7 percentile nationally among 1.6 million candidates.",
    color: "secondary",
  },
];

const colorMap = {
  primary: {
    border: "group-hover:border-primary/50",
    text: "text-primaryLight",
    bar: "from-primaryLight/20 via-primaryLight to-primaryLight/20",
    shadow: "hover:shadow-[0_0_40px_rgba(217,197,160,0.15)]",
    iconBg: "bg-primary/10 text-primaryLight",
  },
  secondary: {
    border: "group-hover:border-secondary/50",
    text: "text-secondaryLight",
    bar: "from-secondary/20 via-secondary to-secondary/20",
    shadow: "hover:shadow-[0_0_40px_rgba(77,87,78,0.2)]",
    iconBg: "bg-secondary/10 text-secondaryLight",
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28 bg-darkBase perspective-[1000px] overflow-hidden">
      <SectionParticles id="achievements-particles" />
      
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center mb-16 text-center relative z-10">
        <span className="text-secondaryLight font-mono tracking-widest text-sm uppercase mb-3 block">06. Accolades</span>
        <h2 className="text-4xl md:text-5xl font-heading font-light text-[#D1D4D1]">
          Key <span className="font-semibold text-[#A3A8A3]">Honors</span>
        </h2>
        <div className="w-12 h-1 bg-secondary mt-6 rounded-full opacity-80" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Tier 1: Major Achievements */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {majorAchievements.map((item, index) => {
            const theme = colorMap[item.color];
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                <Tilt
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                  glareEnable={true}
                  glareMaxOpacity={0.05}
                  glareColor="#ffffff"
                  glarePosition="all"
                  scale={1.01}
                  transitionSpeed={2000}
                  className={`relative overflow-hidden p-6 md:p-8 rounded-3xl
                              bg-darkSurfaceLighter/60 backdrop-blur-3xl border border-white/5
                              transition-all duration-500
                              ${theme.border} ${theme.shadow} group flex flex-col md:flex-row items-start md:items-center gap-6`}
                >
                  <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${theme.iconBg} border border-white/5`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl md:text-2xl font-heading font-medium transition-colors mb-2 ${theme.text}`}>
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-textBody font-light">
                      {item.description}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tier 2: Notable Mentions */}
        <div className="mt-24 mb-10 text-center">
          <h3 className="text-2xl font-heading font-medium text-textMuted inline-flex items-center gap-4">
            <span className="w-12 h-[1px] bg-darkBorder block" />
            Additional Highlights
            <span className="w-12 h-[1px] bg-darkBorder block" />
          </h3>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {notableMentions.map((item, index) => {
            const theme = colorMap[item.color];
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
              >
                <div className={`h-full p-6 rounded-2xl bg-darkSurface/40 border border-white/5 hover:bg-darkSurfaceLighter/50 transition-colors duration-300 group ${theme.border}`}>
                  <h4 className={`text-lg font-medium mb-2 ${theme.text}`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-textBody font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
