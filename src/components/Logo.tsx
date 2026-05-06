export default function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const textMain = dark ? "#333333" : "#ffffff";
  const textRed = "#F83839";
  const taglineColor = dark ? "#666666" : "#cccccc";
  const lineColor = dark ? "#999999" : "#666666";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 380 100"
      className={className}
      aria-label="Reparatii Pro - Acoperisuri de Incredere"
    >
      {/* Roof group */}
      <g transform="translate(0, 2)">
        {/* Orange/red arc */}
        <path
          d="M 8,62 Q 55,-5 175,35"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffaa00" />
            <stop offset="40%" stopColor="#ff6600" />
            <stop offset="100%" stopColor="#cc2200" />
          </linearGradient>
        </defs>

        {/* Sun glow */}
        <circle cx="30" cy="18" r="5" fill="#ffdd00" opacity="0.9" />
        <circle cx="30" cy="18" r="9" fill="#ffdd00" opacity="0.25" />

        {/* Left dark-red roof */}
        <polygon points="15,60 62,18 109,60" fill="#c42020" />
        <polygon points="15,60 62,18 62,60" fill="#d83030" />
        {/* Window left roof */}
        <rect x="49" y="33" width="11" height="11" rx="1" fill="white" opacity="0.9" />
        <line x1="54.5" y1="33" x2="54.5" y2="44" stroke="#c42020" strokeWidth="1" />
        <line x1="49" y1="38.5" x2="60" y2="38.5" stroke="#c42020" strokeWidth="1" />

        {/* Center red roof (main, larger) */}
        <polygon points="45,60 100,10 155,60" fill="#F83839" />
        <polygon points="45,60 100,10 100,60" fill="#ff5050" />
        {/* Window center roof */}
        <rect x="86" y="28" width="12" height="12" rx="1" fill="white" opacity="0.9" />
        <line x1="92" y1="28" x2="92" y2="40" stroke="#F83839" strokeWidth="1" />
        <line x1="86" y1="34" x2="98" y2="34" stroke="#F83839" strokeWidth="1" />

        {/* Right dark/gray roof */}
        <polygon points="120,60 165,22 210,60" fill="#444444" />
        <polygon points="120,60 165,22 165,60" fill="#555555" />
        {/* Window right roof */}
        <rect x="153" y="36" width="10" height="10" rx="1" fill="#888888" />
        <line x1="158" y1="36" x2="158" y2="46" stroke="#444444" strokeWidth="1" />
        <line x1="153" y1="41" x2="163" y2="41" stroke="#444444" strokeWidth="1" />

        {/* Swoosh lines */}
        <path d="M 180,32 Q 205,24 225,38" fill="none" stroke="#444" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 176,42 Q 200,34 225,46" fill="none" stroke="#444" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M 176,51 Q 198,44 220,53" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Brand text */}
      <text x="10" y="88" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="30" letterSpacing="-0.5">
        <tspan fill={textMain} fontStyle="italic">Reparatii</tspan>
        <tspan fill={textRed} fontStyle="normal">Pro</tspan>
      </text>

      {/* Tagline with lines */}
      <line x1="10" y1="97" x2="70" y2="97" stroke={lineColor} strokeWidth="1" />
      <text
        x="82"
        y="99"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="8.5"
        fill={taglineColor}
        letterSpacing="2.5"
        fontWeight="600"
      >
        ACOPERISURI DE INCREDERE
      </text>
      <line x1="298" y1="97" x2="370" y2="97" stroke={lineColor} strokeWidth="1" />
    </svg>
  );
}
