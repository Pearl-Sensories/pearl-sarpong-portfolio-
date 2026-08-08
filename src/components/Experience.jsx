import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data";
import Flowers from "./Flowers";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <Flowers layout="experience" />
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
            Experience
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-blush-100">
            Where I've <span className="text-gradient">made an impact</span>
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-pink-400 via-crimson-600 to-transparent" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 sm:pl-20"
              >
                <span className="absolute left-0 sm:left-[-4px] top-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-crimson-600 flex items-center justify-center shadow-glow">
                  <Briefcase size={18} className="text-white" />
                </span>

                <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 hover:border-pink-400/30 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display font-semibold text-xl text-blush-100">
                      {job.role}
                    </h3>
                    <span className="text-sm font-medium uppercase tracking-wide text-crimson-600">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-base font-medium text-crimson-600/90 mt-0.5">
                    {job.company}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-base text-blush-100/70 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-pink-400/70"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
