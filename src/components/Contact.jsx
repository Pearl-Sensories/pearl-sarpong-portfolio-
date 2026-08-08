import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data";
import Flowers from "./Flowers";

const contactCards = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
  { icon: FaGithub, label: "GitHub", value: "pearl-sensories", href: profile.github },
  { icon: FaLinkedin, label: "LinkedIn", value: "pearl-sarpong", href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-burgundy-950/40">
      <Flowers layout="contact" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
            Contact
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-blush-100">
            Let's build something <span className="text-gradient">great together</span>
          </h2>
          <p className="mt-4 text-blush-100/70">
            Have a role, project, or idea in mind? My inbox is open.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactCards.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-black/[0.03] p-4 hover:border-pink-400/40 transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-pink-500 to-crimson-600 flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm uppercase tracking-wide text-blush-100/65">
                      {label}
                    </p>
                    <p className="text-base font-medium text-blush-100 truncate">
                      {value}
                    </p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm uppercase tracking-wide text-blush-100/72">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-black/[0.04] border border-black/10 px-4 py-3 text-base text-blush-100 placeholder:text-blush-100/30 focus:outline-none focus:border-pink-400/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm uppercase tracking-wide text-blush-100/72">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-black/[0.04] border border-black/10 px-4 py-3 text-base text-blush-100 placeholder:text-blush-100/30 focus:outline-none focus:border-pink-400/60"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm uppercase tracking-wide text-blush-100/72">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl bg-black/[0.04] border border-black/10 px-4 py-3 text-base text-blush-100 placeholder:text-blush-100/30 focus:outline-none focus:border-pink-400/60 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-crimson-600 px-6 py-3 text-base font-semibold text-white shadow-glow hover:brightness-110 transition"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
