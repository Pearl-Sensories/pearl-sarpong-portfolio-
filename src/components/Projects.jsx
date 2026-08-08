import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { projects } from "../data";
import Flowers from "./Flowers";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-burgundy-950/40">
      <Flowers layout="projects" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
            Featured Projects
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-blush-100">
            Things I've <span className="text-gradient">built</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-black/10 bg-gradient-to-b from-black/[0.04] to-transparent p-6 hover:border-pink-400/40 hover:-translate-y-1.5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-crimson-600 flex items-center justify-center shadow-glow">
                <FolderGit2 size={20} className="text-white" />
              </div>

              <h3 className="mt-5 font-display font-semibold text-xl text-blush-100">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-crimson-600/80 mt-1">
                {project.subtitle}
              </p>

              <ul className="mt-4 space-y-2 flex-1">
                {project.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-base text-blush-100/70 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-pink-400/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium rounded-full bg-pink-500/10 border border-pink-400/20 text-crimson-600 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links?.length > 0 && (
                <div className="mt-5 pt-5 border-t border-black/10 flex flex-wrap gap-x-5 gap-y-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-crimson-600 hover:text-crimson-700 transition-colors"
                    >
                      {link.label} <ExternalLink size={13} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
