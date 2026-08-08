import { motion } from "framer-motion";
import { Code2, Server, Layers } from "lucide-react";
import { profile } from "../data";
import PortraitImage from "./PortraitImage";
import Flowers from "./Flowers";

const highlights = [
  { icon: Code2, label: "Frontend", value: "React & Next.js" },
  { icon: Server, label: "Backend", value: "PHP, Node.js & AWS" },
  { icon: Layers, label: "Focus", value: "Scalable, clean systems" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <Flowers layout="about" />
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0 w-56 h-72 sm:w-64 sm:h-80"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-burgundy-800 via-crimson-600 to-pink-400 opacity-80" />
          <PortraitImage
            src="/images/about.jpg"
            alt={`${profile.name} portrait`}
            className="relative w-full h-full rounded-[1.6rem] border-2 border-black/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
            About Me
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-blush-100">
            Turning ideas into <span className="text-gradient">reliable software</span>
          </h2>
          <p className="mt-6 text-blush-100/75 leading-relaxed text-lg sm:text-xl">
            {profile.summary}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 hover:border-pink-400/40 transition-colors"
              >
                <Icon className="text-crimson-600" size={20} />
                <p className="mt-3 text-sm uppercase tracking-wide text-blush-100/65">
                  {label}
                </p>
                <p className="text-base font-semibold text-blush-100">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
