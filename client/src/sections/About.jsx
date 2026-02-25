import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-24 relative"
    >
      {/* Glow Background */}
      <div className="absolute w-80 h-80 bg-white/5 rounded-full blur-3xl top-20 right-10"></div>

      {/* ✅ Centered Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-heading tracking-tight text-center mb-16">
            Hi, i'm Vidhan Pandey
          </h1>

          <h2 className="text-lg md:text-xl text-gray-400 mb-6">
            Software Developer
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I build modern, user-friendly, animated websites with clean
            architecture and smooth interactions. Passionate about frontend
            engineering and creating premium digital experiences.
          </p>

          <p className="text-gray-500">
            📍 Bhopal, MP, India
          </p>
        </motion.div>

        {/* RIGHT SIDE - GLASS SOCIAL CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-soft"
        >
          <h3 className="text-4xl md:text-5xl font-heading tracking-tight text-center mb-16">
            Connect With Me
          </h3>

          <div className="flex justify-center gap-6">

            <a
              href="https://instagram.com/vidhnxai"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:scale-110 transition duration-300"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://linkedin.com/in/vidhan-pandey-2aa100342"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://github.com/Vidhan2115"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:scale-110 transition duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="mailto:vidhandevwork@gmail.com"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:scale-110 transition duration-300"
            >
              <MdEmail size={22} />
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;