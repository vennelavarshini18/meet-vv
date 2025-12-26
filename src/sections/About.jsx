import { motion } from "framer-motion";
import { GraduationCap, FileText } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative flex justify-center px-6 overflow-hidden py-28">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[520px] h-[520px] bg-purple-500/10 rounded-full blur-[140px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl text-center"
      >
        {/* Heading */}
        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl font-heading">
          About <span className="text-purple-400">Me</span>
        </h2>

        {/* Divider */}
        <div className="mt-4 mx-auto w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

        {/* About Text */}
        <p className="max-w-4xl mx-auto mt-8 text-lg leading-relaxed text-gray-300 font-body">
          I am a Sophomore pursuing <span className="font-medium text-gray-100">Computer Science and Business</span> at
          <span className="font-medium text-gray-100"> IIIT Lucknow</span>, with a strong foundation in
          Data Structures and Algorithms for
          competitive programming.
          <br /><br />
          Alongside this, I actively build data-driven solutions using
          Artificial Intelligence, Machine Learning, and Deep Learning. I enjoy translating theoretical
          concepts into scalable, real-world systems.
          <br /><br />
          I am deeply committed to open-source contribution and continuous
          learning, aiming to solve meaningful real-world problems.
        </p>

        {/* Education & Resume Cards */}
        <motion.div
          className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mt-14 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Education Card */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-left relative
                       hover:border-purple-400/40 transition
                       hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          >
            {/* Score Badge */}
            <div className="absolute top-0 right-0 flex flex-col items-center justify-center p-1 m-4 text-white rounded-lg w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-500">
              <span className="text-xl font-bold tracking-tight">9.65</span>
              <span className="text-xs uppercase opacity-80">CGPA</span>
            </div>

            <div className="flex items-center gap-3 mb-1">
              <GraduationCap className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>

            <p className="pr-16 mt-5 text-lg font-medium text-gray-100">
              Bachelor of Technology in Computer Science & Business
            </p>

            <p className="mt-1 text-sm text-purple-400 cursor-pointer">
              Indian Institute of Information Technology, Lucknow
            </p>

            <div className="mt-4 text-sm text-gray-400">
              <p>Aug 2024 – Jun 2028</p>
              <p className="mt-1">Lucknow, India</p>
            </div>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-left
                       hover:border-cyan-400/40 transition flex flex-col justify-between
                       hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >
            <div>
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Resume / CV</h3>
              </div>

              <p className="mt-5 text-lg font-medium text-gray-100">
                Download My Professional Profile
              </p>

              <p className="mt-1 text-sm text-gray-400">
                A detailed summary of my technical skills, projects, and educational background.
              </p>
            </div>

            <a
              href="/Resume_Vennela_Varshini_Anasoori.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block mt-6 px-5 py-2.5 rounded-xl
                         bg-gradient-to-r from-cyan-500 to-purple-500
                         font-semibold text-white text-center
                         hover:scale-[1.03] transition-all
                         shadow-lg shadow-purple-500/30 overflow-hidden"
            >
              <span className="relative z-10">View & Download</span>
              <span className="absolute inset-0 transition-transform duration-700 -translate-x-full skew-x-12 bg-white/20 hover:translate-x-full" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
