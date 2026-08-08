import FlowerIcon from "./FlowerIcon";

const layouts = {
  hero: [
    { top: "10%", left: "6%", size: 52, rotate: -15, opacity: 0.9, variant: "pink", delay: 0 },
    { top: "20%", left: "88%", size: 38, rotate: 25, opacity: 0.85, variant: "white", delay: 1.2 },
    { top: "70%", left: "4%", size: 42, rotate: 40, opacity: 0.8, variant: "white", delay: 0.6 },
    { top: "80%", left: "91%", size: 48, rotate: -30, opacity: 0.85, variant: "pink", delay: 1.8 },
    { top: "42%", left: "14%", size: 30, rotate: 10, opacity: 0.7, variant: "pink", delay: 2.4 },
    { top: "55%", left: "80%", size: 34, rotate: -50, opacity: 0.75, variant: "white", delay: 0.3 },
  ],
  about: [
    { top: "8%", left: "86%", size: 40, rotate: 12, opacity: 0.8, variant: "pink", delay: 0.4 },
    { top: "38%", left: "4%", size: 34, rotate: -25, opacity: 0.75, variant: "white", delay: 1.6 },
    { top: "78%", left: "10%", size: 46, rotate: 35, opacity: 0.8, variant: "pink", delay: 0.9 },
    { top: "88%", left: "78%", size: 32, rotate: -10, opacity: 0.7, variant: "white", delay: 2.1 },
  ],
  skills: [
    { top: "6%", left: "10%", size: 38, rotate: 20, opacity: 0.8, variant: "white", delay: 0.5 },
    { top: "14%", left: "68%", size: 46, rotate: -18, opacity: 0.85, variant: "pink", delay: 1.4 },
    { top: "58%", left: "90%", size: 34, rotate: 30, opacity: 0.75, variant: "white", delay: 2.0 },
    { top: "86%", left: "6%", size: 48, rotate: -35, opacity: 0.85, variant: "pink", delay: 0.2 },
    { top: "44%", left: "3%", size: 30, rotate: 8, opacity: 0.65, variant: "pink", delay: 1.0 },
  ],
  experience: [
    { top: "10%", left: "86%", size: 40, rotate: -20, opacity: 0.8, variant: "pink", delay: 0.7 },
    { top: "48%", left: "5%", size: 34, rotate: 15, opacity: 0.7, variant: "white", delay: 1.9 },
    { top: "84%", left: "84%", size: 44, rotate: 30, opacity: 0.8, variant: "white", delay: 0.3 },
  ],
  projects: [
    { top: "5%", left: "5%", size: 46, rotate: 18, opacity: 0.85, variant: "pink", delay: 0.6 },
    { top: "18%", left: "92%", size: 34, rotate: -22, opacity: 0.75, variant: "white", delay: 1.5 },
    { top: "64%", left: "3%", size: 38, rotate: 40, opacity: 0.8, variant: "white", delay: 2.2 },
    { top: "90%", left: "88%", size: 48, rotate: -12, opacity: 0.85, variant: "pink", delay: 0.9 },
    { top: "40%", left: "95%", size: 30, rotate: 25, opacity: 0.65, variant: "pink", delay: 1.1 },
  ],
  education: [
    { top: "12%", left: "90%", size: 38, rotate: -15, opacity: 0.8, variant: "white", delay: 0.8 },
    { top: "80%", left: "8%", size: 42, rotate: 22, opacity: 0.8, variant: "pink", delay: 1.7 },
  ],
  contact: [
    { top: "8%", left: "8%", size: 42, rotate: 22, opacity: 0.8, variant: "pink", delay: 0.4 },
    { top: "22%", left: "90%", size: 34, rotate: -18, opacity: 0.75, variant: "white", delay: 1.3 },
    { top: "74%", left: "5%", size: 38, rotate: 35, opacity: 0.8, variant: "white", delay: 2.0 },
    { top: "88%", left: "86%", size: 46, rotate: -28, opacity: 0.85, variant: "pink", delay: 0.6 },
  ],
};

export default function Flowers({ layout = "hero" }) {
  const items = layouts[layout] || layouts.hero;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((f, i) => (
        <div
          key={i}
          className="absolute flower-sway"
          style={{
            top: f.top,
            left: f.left,
            opacity: f.opacity,
            "--flower-rotate": `${f.rotate}deg`,
            transform: `rotate(${f.rotate}deg)`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <FlowerIcon variant={f.variant} size={f.size} />
        </div>
      ))}
    </div>
  );
}
