import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
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
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto glass-card p-8 rounded-3xl bg-white/5 border border-white/10 p-10 rounded-2xl shadow-soft text-center"
        // className="glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
      >
        <h3 className="ext-4xl md:text-4xl font-heading tracking-tight text-center mb-16">
          Sagar Institute of Research and Technology
        </h3>

        <p className="text-gray-400 mb-2">
          BTech in Computer Science Engineering
        </p>

        <p className="text-gray-500">
          2023 – 2027
        </p>

        <p className="text-gray-500 mt-4">
          Bhopal, Madhya Pradesh, India
        </p>
      </motion.div>
    </section>
  );
};

export default Education;