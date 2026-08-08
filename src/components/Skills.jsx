import { motion } from "framer-motion";
import { skills } from "../data";
import Flowers from "./Flowers";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-burgundy-950/40">
      <Flowers layout="skills" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
            Skills
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-blush-100">
            What I <span className="text-gradient">work with</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-black/10 bg-gradient-to-b from-black/[0.035] to-transparent p-6 hover:border-pink-400/40 hover:-translate-y-1 transition-all"
            >
              <h3 className="font-display font-semibold text-crimson-600">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-medium rounded-full border border-black/10 bg-black/[0.04] text-blush-100/85 px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
