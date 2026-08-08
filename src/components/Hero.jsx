import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data";
import PortraitImage from "./PortraitImage";
import Flowers from "./Flowers";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* background glow layers */}
      <div className="absolute inset-0 -z-10 bg-noise" />
      <div className="absolute -top-40 -right-32 w-[32rem] h-[32rem] rounded-full bg-crimson-600/30 blur-[120px] -z-10" />
      <div className="absolute top-1/3 -left-40 w-[28rem] h-[28rem] rounded-full bg-pink-500/20 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[24rem] h-[24rem] rounded-full bg-burgundy-700/40 blur-[110px] -z-10" />
      <Flowers layout="hero" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-8 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-1.5 text-sm font-medium tracking-wide text-crimson-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            Available for new opportunities
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-blush-100">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 text-2xl sm:text-3xl font-display font-semibold text-crimson-600">
            {profile.title}
          </p>

          <p className="mt-5 text-lg sm:text-xl text-blush-100/75 max-w-xl leading-relaxed">
            Building scalable, user-centric products with React, Next.js, PHP
            and AWS — from mission-critical auditing platforms to real-time
            inventory systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-pink-500 to-crimson-600 px-6 py-3 text-base font-semibold text-white shadow-glow hover:brightness-110 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-blush-100/20 px-6 py-3 text-base font-semibold text-blush-100 hover:border-pink-400/50 hover:text-crimson-600 transition"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-blush-100/70 hover:text-crimson-600 transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-blush-100/70 hover:text-crimson-600 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-blush-100/70 hover:text-crimson-600 transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto md:mx-0 w-64 h-64 sm:w-80 sm:h-80"
        >
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-crimson-500 to-burgundy-700 opacity-70 blur-md" />
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-crimson-500 to-burgundy-700" />
          <PortraitImage
            src="/images/hero.jpg"
            alt={profile.name}
            className="relative w-full h-full rounded-[2.2rem] border-2 border-black/10"
          />
        </motion.div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-blush-100/65 hover:text-crimson-600 transition-colors"
      >
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
