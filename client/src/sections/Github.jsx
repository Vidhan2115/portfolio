import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

const Github = () => {
  return (
    <section id="github" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading tracking-tight text-center mb-16"
        >
          Open Source Contributions
        </motion.h2>

        <div className="glass-card p-8 rounded-3xl overflow-x-auto">
          <GitHubCalendar
            username="Vidhan2115"
            hideTotalCount
            hideColorLegend
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            theme={{
              dark: [
                "#161b22",
                "#0e4429",
                "#006d32",
                "#26a641",
                "#39d353"
              ]
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Github;