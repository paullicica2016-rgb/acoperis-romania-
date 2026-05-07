export default function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const textMain = dark ? "#0d1547" : "#ffffff";
  const textRed = "#E53935";
  const taglineColor = dark ? "#888888" : "#aaaaaa";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 290 60"
      className={className}
      aria-label="Acoperisuri Pro - Acoperisuri de Incredere"
    >
      {/* Icon: layered roof / shield shape */}
      <g transform="translate(4, 3)">
        {/* Back roof layer */}
        <polygon points="14,42 44,12 74,42" fill="none" stroke={dark ? "#c0c5dd" : "#ffffff"} strokeWidth="2.5" strokeLinejoin="round" opacity="0.4" />
        {/* Front roof layer — offset up-right */}
        <polygon points="8,40 40,6 72,40" fill="none" stroke={textRed} strokeWidth="3.5" strokeLinejoin="round" />
        {/* Horizontal base line */}
        <line x1="8" y1="40" x2="72" y2="40" stroke={textRed} strokeWidth="3.5" strokeLinecap="round" />
        {/* Small dot at peak */}
        <circle cx="40" cy="6" r="3" fill={textRed} />
      </g>

      {/* Brand name */}
      <text
        x="88"
        y="34"
        fontFamily="'Arial Black', 'Franklin Gothic Heavy', Impact, sans-serif"
        fontWeight="900"
        fontSize="25"
        letterSpacing="-0.5"
      >
        <tspan fill={textMain}>Acoperisuri</tspan><tspan fill={textRed}>Pro</tspan>
      </text>

      {/* Tagline */}
      <text
        x="89"
        y="49"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="7.5"
        fill={taglineColor}
        letterSpacing="2.2"
        fontWeight="600"
      >
        ACOPERISURI DE INCREDERE
      </text>
    </svg>
  );
}
