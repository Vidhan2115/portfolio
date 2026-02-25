import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Education", href: "education" },
  { name: "Resume", href: "resume" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Floating Pill Navbar */}
      <div className="hidden md:flex items-center space-x-10 px-10 py-4 rounded-full backdrop-blur-xl bg-white/[0.05] border border-white/10 shadow-soft">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={`#${link.href}`}
            className={`transition duration-300 ${
              active === link.href
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* <div className="relative hidden md:flex items-center space-x-10 px-10 py-4 rounded-full backdrop-blur-xl bg-white/[0.05] border border-white/10 shadow-soft">
        {navLinks.map((link, index) => (
          <a key={index} href={`#${link.href}`} className="relative px-4 py-2"> */}
            {/* Animated Red Pill */}
            {/* {active === link.href && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                  background: "linear-gradient(135deg, #ef4444, #b91c1c)",
                  boxShadow: "0 6px 20px rgba(239, 68, 68, 0.4)",
                }}
              />
            )}

            <span
              className={`relative z-10 transition duration-300 ${
                active === link.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </span>
          </a>
        ))}
      </div> */}

      {/* Mobile Button */}
      <div className="md:hidden backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-full p-3 shadow-soft">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-4 backdrop-blur-xl bg-black/90 border border-white/10 rounded-2xl p-6 space-y-4 shadow-soft md:hidden"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.href}`}
                onClick={() => setIsOpen(false)}
                className={`block ${
                  active === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
