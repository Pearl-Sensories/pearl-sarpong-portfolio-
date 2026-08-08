import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data";
import Flowers from "./Flowers";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <Flowers layout="education" />
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
            Education
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-blush-100">
            Academic <span className="text-gradient">background</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 flex gap-4 hover:border-pink-400/40 transition-colors"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-pink-500 to-crimson-600 flex items-center justify-center shadow-glow">
                <GraduationCap size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-blush-100">{edu.school}</h3>
                <p className="text-base text-crimson-600/90 mt-0.5">{edu.degree}</p>
                <p className="text-sm text-blush-100/65 mt-1 uppercase tracking-wide">
                  {edu.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
