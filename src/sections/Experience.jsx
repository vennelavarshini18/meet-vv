import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative max-w-5xl px-6 mx-auto py-28"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-[140px]"
        />
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-white md:text-5xl font-heading">
        Position of <span className="text-purple-400">Responsibility</span>
      </h2>
      <div className="mt-4 mx-auto w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

      {/* Experience List */}
      <div className="mt-16 space-y-8">

        {/* Experience 1 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="relative p-6 overflow-hidden transition-all duration-300
                     border bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] group"
        >
          {/* Hover Accent Bar */}
          <div className="absolute top-0 left-0 w-1 h-full transition-transform origin-top scale-y-0 bg-cyan-400 group-hover:scale-y-100" />

          <h3 className="text-xl font-semibold text-cyan-400">
            Machine Learning Wing Member
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Axios, IIIT Lucknow · Sep 2025 – Present · Lucknow, India
          </p>

          <ul className="mt-4 ml-5 space-y-2 text-gray-300 list-disc">
            <li>
              Conducted classes and competitions on Machine Learning for juniors.
            </li>
          </ul>
        </motion.div>

        {/* Experience 2 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="relative p-6 overflow-hidden transition-all duration-300
                     border bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl
                     hover:border-purple-400/40
                     hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] group"
        >
          <div className="absolute top-0 left-0 w-1 h-full transition-transform origin-top scale-y-0 bg-purple-400 group-hover:scale-y-100" />

          <h3 className="text-xl font-semibold text-purple-400">
            FOSS Wing Member
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Google Developers Group, IIITL · Sep 2025 – Present · Lucknow, India
          </p>

          <ul className="mt-4 ml-5 space-y-2 text-gray-300 list-disc">
            <li>
              Organised sessions on Open Source and Git/GitHub for FOSS enthusiasts.
            </li>
          </ul>
        </motion.div>

        {/* Experience 3 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="relative p-6 overflow-hidden transition-all duration-300
                     border bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl
                     hover:border-teal-400/40
                     hover:shadow-[0_0_40px_rgba(45,212,191,0.25)] group"
        >
          <div className="absolute top-0 left-0 w-1 h-full transition-transform origin-top scale-y-0 bg-teal-400 group-hover:scale-y-100" />

          <h3 className="text-xl font-semibold text-teal-400">
            Member of Estrella
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            The Music Society, IIITL · Oct 2024 – Present · Lucknow, India
          </p>

          <ul className="mt-4 ml-5 space-y-2 text-gray-300 list-disc">
            <li>
              Created social media content and actively participated in cultural club events.
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
