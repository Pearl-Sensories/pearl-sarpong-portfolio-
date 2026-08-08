import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { nav } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-black/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-300 via-pink-500 to-crimson-600 flex items-center justify-center font-display font-bold text-ink text-base shadow-glow">
            PS
          </span>
          <span className="font-display font-semibold text-blush-100 tracking-tight">
            Pearl Sarpong
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-base text-blush-100/80 hover:text-crimson-600 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Pearl-Sarpong-CV.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-pink-400/40 px-4 py-2 text-base font-medium text-crimson-600 hover:bg-pink-500/10 hover:border-pink-400 transition-colors"
        >
          <Download size={16} /> Resume
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-blush-100 p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-burgundy-950/98 backdrop-blur-xl border-t border-black/10 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block text-lg text-blush-100/90 hover:text-crimson-600 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Pearl-Sarpong-CV.pdf"
                download
                className="inline-flex items-center gap-2 mt-2 rounded-full border border-pink-400/40 px-4 py-2 text-base font-medium text-crimson-600"
              >
                <Download size={16} /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
