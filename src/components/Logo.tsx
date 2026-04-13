export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Renouv62 Logo"
    >
      {/* House/Building icon */}
      <g transform="translate(0, 8)">
        {/* Main building shape */}
        <rect x="8" y="20" width="28" height="44" rx="2" fill="#E8700A" />
        {/* Roof / Triangle */}
        <polygon points="6,22 22,4 38,22" fill="#1E293B" />
        {/* Window top */}
        <rect x="14" y="26" width="8" height="8" rx="1" fill="#FFF" opacity="0.9" />
        <rect x="26" y="26" width="8" height="8" rx="1" fill="#FFF" opacity="0.9" />
        {/* Door */}
        <rect x="17" y="46" width="12" height="18" rx="1.5" fill="#1E293B" />
        {/* Extension building */}
        <rect x="38" y="32" width="22" height="32" rx="2" fill="#D4650A" />
        <rect x="43" y="38" width="7" height="7" rx="1" fill="#FFF" opacity="0.9" />
        <rect x="43" y="50" width="7" height="7" rx="1" fill="#FFF" opacity="0.9" />
        {/* Renovation tool accent - trowel */}
        <line x1="54" y1="16" x2="62" y2="8" stroke="#E8700A" strokeWidth="3" strokeLinecap="round" />
        <rect x="60" y="4" width="8" height="5" rx="1" fill="#E8700A" transform="rotate(-45, 64, 6)" />
      </g>

      {/* Text: RENOUV */}
      <text
        x="78"
        y="48"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="38"
        letterSpacing="-1"
        fill="#1E293B"
      >
        RENOUV
      </text>

      {/* Text: 62 in accent color */}
      <text
        x="248"
        y="48"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="38"
        letterSpacing="-1"
        fill="#E8700A"
      >
        62
      </text>

      {/* Tagline */}
      <text
        x="78"
        y="68"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="500"
        fontSize="11"
        letterSpacing="3"
        fill="#64748B"
      >
        RENOVATION &amp; FACADES
      </text>
    </svg>
  );
}
