import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base text-blush-100/65">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-blush-100/72 hover:text-crimson-600 transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-blush-100/72 hover:text-crimson-600 transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-blush-100/72 hover:text-crimson-600 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
