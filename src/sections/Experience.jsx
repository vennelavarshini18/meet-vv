import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SectionParticles from "../components/SectionParticles";
import { Network, Code, Music } from "lucide-react";

const experienceData = [
  {
    name: "Axios, The Technical Society, IIITL",
    icon: Network,
    roles: [
      {
        title: "Coordinator - Machine Learning Wing",
        duration: "Aug 2026 – Present",
        description: "Spearheaded the Machine Learning division, mentoring 200+ students through technical masterclasses and organizing competitive hackathons.",
      },
      {
        title: "Member - Machine Learning Wing",
        duration: "Sep 2025 – Aug 2026",
        description: "Architected and delivered algorithmic masterclasses and machine learning competitions for junior cohorts.",
        isSubRole: true,
      },
      {
        title: "Senior Member - FOSS Wing",
        duration: "Aug 2026 – Present",
        description: "Directed workshops and interactive sessions on Git, GitHub, and Open Source workflows for over 200 aspiring developers.",
      },
      {
        title: "Member - Women in Tech",
        duration: "Feb 2026 – Present",
        description: "Cultivated a collaborative and empowering community dedicated to supporting women navigating technology domains.",
      },
    ]
  },
  {
    name: "Google Developers Group, IIITL",
    icon: Code,
    roles: [
      {
        title: "Member - FOSS Wing",
        duration: "Sep 2025 – Present",
        description: "Facilitated technical seminars on Open Source contribution and version control for the campus developer community.",
      }
    ]
  },
  {
    name: "The Music Society, IIITL",
    icon: Music,
    roles: [
      {
        title: "Member - Estrella",
        duration: "Oct 2024 – Present",
        description: "Curated engaging digital content and orchestrated performances for prestigious cultural symposia.",
      }
    ]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="relative px-6 py-28 bg-darkBase perspective-[1000px] overflow-hidden">
      <SectionParticles id="experience-particles" />
      
      {/* Background Grids */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(rgba(166,124,82,0.25) 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
             WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
           }} 
      />
      <div className="absolute inset-0 -z-10 flex justify-center overflow-hidden">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center mb-20 text-center max-w-5xl mx-auto relative z-10">
        <span className="text-secondaryLight font-mono tracking-widest text-sm uppercase mb-3 block">05. Stewardship</span>
        <h2 className="text-4xl md:text-5xl font-heading font-light text-[#D1D4D1]">
          Community <span className="font-semibold text-[#A3A8A3]">Leadership</span>
        </h2>
        <div className="w-12 h-1 bg-secondary mt-6 rounded-full opacity-80" />
      </div>

      {/* Connected Timeline */}
      <div className="max-w-4xl mx-auto w-full relative z-10">
        {experienceData.map((org, orgIndex) => {
          const Icon = org.icon;
          return (
            <motion.div 
              key={orgIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="mb-20 relative"
            >
              {/* Organization Header */}
              <motion.div variants={itemVariants} className="flex items-center gap-6 mb-10 relative z-10">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-darkSurfaceLighter border border-white/10 flex items-center justify-center text-secondaryLight shadow-[0_0_30px_rgba(166,124,82,0.15)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors" />
                  <Icon className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-medium text-[#D1D4D1]">
                  {org.name}
                </h3>
              </motion.div>

              {/* Roles Container */}
              <div className="relative">
                {/* Vertical Timeline Line (Connecting the org header to the roles) */}
                <div className="absolute left-8 top-[-40px] bottom-10 w-[2px] bg-gradient-to-b from-darkBorder via-darkBorder/50 to-transparent -translate-x-1/2 z-0" />
                
                <div className="flex flex-col gap-10 pl-[70px] md:pl-[96px] pr-4">
                  {org.roles.map((role, roleIndex) => {
                    const isSub = role.isSubRole;
                    
                    // Indentation logic for sub-roles (promotions)
                    const indentClass = isSub ? "ml-6 md:ml-12 -mt-6 md:-mt-6" : "";
                    const nodeLeftClass = isSub ? "left-[-62px] md:left-[-112px]" : "left-[-38px] md:left-[-64px]";
                    const armWidthClass = isSub ? "w-12 md:w-20" : "w-6 md:w-8";
                    
                    const cardPaddingClass = isSub ? "p-5 md:p-6" : "p-7 md:p-8";
                    const titleSizeClass = isSub ? "text-lg md:text-xl text-textBody" : "text-xl md:text-2xl text-[#D1D4D1]";
                    const nodeSizeClass = isSub ? "w-3 h-3 border" : "w-4 h-4 border-2";

                    return (
                      <motion.div key={roleIndex} variants={itemVariants} className={`relative group ${indentClass}`}>
                        
                        {/* Timeline Node */}
                        <div className={`absolute ${nodeLeftClass} top-[36px] ${nodeSizeClass} rounded-full bg-darkBase border-secondaryLight -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 group-hover:scale-[1.3] group-hover:bg-secondaryLight group-hover:shadow-[0_0_20px_rgba(166,124,82,0.6)]`} />
                        
                        {/* Connection Arm */}
                        <div className={`absolute ${nodeLeftClass} top-[36px] ${armWidthClass} h-[1.5px] bg-darkBorder -translate-y-1/2 z-0 transition-colors duration-500 group-hover:bg-secondaryLight/60`} />

                        {/* Role Card */}
                        <Tilt
                          tiltMaxAngleX={isSub ? 2 : 3}
                          tiltMaxAngleY={isSub ? 2 : 3}
                          glareEnable={true}
                          glareMaxOpacity={0.05}
                          glareColor="#ffffff"
                          glarePosition="all"
                          scale={1.01}
                          transitionSpeed={2500}
                          className={`relative ${cardPaddingClass} overflow-hidden transition-all duration-700 bg-darkSurfaceLighter/40 backdrop-blur-3xl border border-white/5 ${isSub ? 'rounded-2xl' : 'rounded-3xl'} group-hover:border-secondary/40 group-hover:shadow-[0_0_40px_rgba(166,124,82,0.15)]`}
                        >
                          {/* Hover Accent Bars */}
                          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary/40 via-secondary to-secondary/40 transition-transform origin-top scale-y-0 group-hover:scale-y-100 duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                          <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                              <h4 className={`${titleSizeClass} font-heading font-medium group-hover:text-secondaryLight transition-colors`}>
                                {role.title}
                              </h4>
                              <span className="text-xs md:text-sm font-mono text-textBody bg-darkBase px-3.5 py-1.5 rounded-full border border-darkBorder group-hover:border-secondary/30 transition-colors shadow-sm whitespace-nowrap self-start md:self-auto">
                                {role.duration}
                              </span>
                            </div>

                            <p className="text-textBody font-light leading-relaxed text-sm md:text-base">
                              {role.description}
                            </p>
                          </div>
                        </Tilt>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
