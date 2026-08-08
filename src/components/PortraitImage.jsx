import { useState } from "react";
import { User } from "lucide-react";

export default function PortraitImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-burgundy-800 via-crimson-600 to-pink-500 ${className}`}
      >
        <User className="w-1/3 h-1/3 text-white/90" strokeWidth={1.2} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
