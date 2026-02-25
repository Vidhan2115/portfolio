import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "Frontend Specialist",
  "Full Stack Developer",
  "React Developer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 80;

    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  return (
    // <section className="min-h-screen flex items-center justify-center px-6">
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* Profile Image */}
        <motion.img
          src="/profile.png"
          alt="Vidhan Pandey"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full object-cover border border-white/20 shadow-glow"
        />

        <h1 className="text-5xl md:text-5xl font-heading tracking-tight text-center mb-16">
          Vidhan Pandey
        </h1>

        <h2 className="text-xl md:text-2xl font-heading tracking-tight text-gray-400 h-10 mb-8">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        <a
          href="#about"
          className="inline-block px-8 py-3 border border-white/20 rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition font-heading tracking-tight"
        >
          About Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
