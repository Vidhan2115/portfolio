import { motion } from "framer-motion";

const skillData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "GSAP", level: 75 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    title: "Deployment & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Vercel", level: 85 },
      { name: "Render", level: 75 },
      { name: "Railway", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 ">

        {skillData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="ext-4xl md:text-3xl font-heading tracking-tight text-center mb-6">
              {category.title}
            </h3>

            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2 text-sm text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-2 bg-white rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;