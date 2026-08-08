export default function FlowerIcon({ variant = "pink", size = 24 }) {
  const isWhite = variant === "white";
  const petal = isWhite ? "#ffffff" : "#ff4fa0";
  const stroke = isWhite ? "#ff8fc4" : "#c2126b";
  const center = isWhite ? "#ffd1e6" : "#ffffff";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      style={{ filter: "drop-shadow(0 2px 5px rgba(214, 18, 122, 0.35))" }}
    >
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="20"
          cy="11"
          rx="7"
          ry="10"
          fill={petal}
          stroke={stroke}
          strokeWidth={isWhite ? 1.75 : 1}
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="4.5" fill={center} stroke={stroke} strokeWidth="1" />
    </svg>
  );
}
