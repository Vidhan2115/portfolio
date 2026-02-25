import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 60,
        y: position.y - 60,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5,
      }}
      className="pointer-events-none fixed top-0 left-0 z-50 w-24 h-24 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(255,255,255,0.08), transparent 50%)",
        filter: "blur(20px)",
      }}
    />
  );
};

export default CursorGlow;