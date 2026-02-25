import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Project One",
    description:
      "A modern full-stack web application with clean architecture and smooth UI interactions.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "Responsive frontend application with animations and optimized performance.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "Scalable backend API with authentication and secure database integration.",
    tech: ["Express", "PostgreSQL", "Docker"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* External Link Icon */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition"
            >
              <FiExternalLink size={20} />
            </a>

            <h3 className="ext-xl md:text-3xl font-heading tracking-tight text-center mb-6">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;