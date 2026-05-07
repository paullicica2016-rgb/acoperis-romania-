export default function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const textMain = dark ? "#0d1547" : "#ffffff";
  const textRed = "#E53935";
  const taglineColor = dark ? "#888888" : "#aaaaaa";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 60"
      className={className}
      aria-label="Reparatii Pro - Acoperisuri de Incredere"
    >
      {/* Roof icon — clean geometric triangle with ridge line */}
      <g transform="translate(0, 4)">
        {/* Shadow triangle */}
        <polygon points="26,38 48,10 48,38" fill={dark ? "#c8cde8" : "#ffffff"} opacity="0.25" />
        {/* Main roof shape */}
        <polygon points="8,38 48,8 88,38" fill="none" stroke={textRed} strokeWidth="3.5" strokeLinejoin="round" />
        {/* Ridge cap */}
        <line x1="38" y1="14" x2="58" y2="14" stroke={textRed} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        {/* Chimney */}
        <rect x="60" y="20" width="7" height="12" rx="1" fill={textRed} opacity="0.85" />
        <rect x="58" y="18" width="11" height="3" rx="1" fill={textRed} />
      </g>

      {/* Brand name */}
      <text
        x="98"
        y="34"
        fontFamily="'Arial Black', 'Franklin Gothic Heavy', Impact, sans-serif"
        fontWeight="900"
        fontSize="26"
        letterSpacing="-0.5"
      >
        <tspan fill={textMain}>Reparatii</tspan><tspan fill={textRed}>Pro</tspan>
      </text>

      {/* Tagline */}
      <text
        x="99"
        y="48"
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
