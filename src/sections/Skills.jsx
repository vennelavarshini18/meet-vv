// Removed: import { motion } from "framer-motion";

const skills = {
  ProgrammingData: ["C++", "Python", "NumPy", "Pandas", "Scikit-learn", "SQL"],
  AIMLFrameworks: ["TensorFlow", "Keras", "PyTorch", "LangChain"],
  WebDevTools: ["Streamlit", "Flask", "FastAPI", "Git", "MySQL"],
};

export default function Skills() {
  const getDisplayTitle = (key) => {
    switch (key) {
      case "ProgrammingData":
        // Use HTML entity &amp; for correct rendering
        return "Programming &amp; Data"; 
      case "AIMLFrameworks":
        return "AI &amp; ML Frameworks";
      case "WebDevTools":
        return "Web &amp; Dev Tools";
      default:
        return key;
    }
  };

  // Array of class strings for different colors/transitions
  const cardStyles = [
    // Cyan Theme (Default for the first box)
    {
      borderColor: "hover:border-cyan-400/40",
      titleColor: "text-cyan-400",
      shadow: "hover:shadow-cyan-500/20",
    },
    // Purple Theme
    {
      borderColor: "hover:border-purple-400/40",
      titleColor: "text-purple-400",
      shadow: "hover:shadow-purple-500/20",
    },
    // Emerald/Green Theme
    {
      borderColor: "hover:border-teal-400/40",
      titleColor: "text-teal-400",
      shadow: "hover:shadow-teal-500/20",
    },
  ];

  return (
    <section id="skills" className="relative px-6 py-28">
      
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl font-heading">
          Technical <span className="text-purple-400">Skills</span>
        </h2>

        <div className="mt-4 mx-auto w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
      </div>

      {/* Skill Cards */}
      <div className="grid max-w-6xl gap-8 mx-auto mt-16 md:grid-cols-3">
        {Object.entries(skills).map(([title, items], idx) => {
          const style = cardStyles[idx % cardStyles.length]; // Cycle through colors
          
          return (
            <div
              key={title}
              // Added professional transition, lift animation, and color classes
              className={`group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 
                         transition duration-300 ease-in-out
                         ${style.borderColor} 
                         hover:-translate-y-2 
                         ${style.shadow} 
                         shadow-xl`}
            >
              <h3 
                className={`text-xl font-semibold ${style.titleColor}`}
                // Use dangerouslySetInnerHTML to render the '&' correctly
                dangerouslySetInnerHTML={{ __html: getDisplayTitle(title) }}
              />

              <div className="flex flex-wrap gap-2 mt-5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium
                              bg-white/10 text-gray-200
                              group-hover:bg-white/15 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}