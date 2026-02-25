import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        " https://graphyt-backend.onrender.com/api/contact",
        formData
      );

      if (response.status === 201) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Something went wrong!!");
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-24"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-heading tracking-tight text-center mb-16"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-2xl shadow-soft"
      >
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-white/30 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-white/30 transition"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-white/30 transition"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-gray-400 mt-4">
              {status}
            </p>
          )}

        </form>
      </motion.div>
    </section>
  );
};

export default Contact;