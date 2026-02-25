import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  return (
    <section
      id="resume"
      className="px-6 py-24"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-heading tracking-tight text-center mb-16"
      >
        Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto glass-card p-8 rounded-3xl bg-white/5 border border-white/10 p-10 rounded-2xl shadow-soft text-center"
        // className="glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
      >
        <p className="text-gray-400 mb-8">
          Download my resume to learn more about my experience, skills, and projects.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition duration-300"
        >
          <FiDownload />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;