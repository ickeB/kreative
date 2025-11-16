import { motion } from "motion/react";

export function PotteryIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 140 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Teller/Plate (links - schräg von der Seite) */}
      <g>
        {/* Plate body - schräge Ansicht */}
        <ellipse cx="25" cy="55" rx="18" ry="22" fill="currentColor" opacity="0.85" />
        {/* Inner plate circle */}
        <ellipse cx="25" cy="55" rx="12" ry="16" fill="currentColor" opacity="0.6" />
        {/* Center of plate */}
        <ellipse cx="25" cy="55" rx="6" ry="8" fill="currentColor" opacity="0.4" />
        {/* Decorative rim details */}
        <path
          d="M 25 35 Q 27 38 27 45"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.2"
          strokeLinecap="round"
        />
        {/* Shadow */}
        <ellipse cx="25" cy="78" rx="14" ry="2" fill="currentColor" opacity="0.15" />
      </g>

      {/* Tasse/Mug (mitte) */}
      <g>
        {/* Mug body */}
        <path
          d="M 50 45 Q 48 45 48 47 L 48 68 Q 48 72 51 75 L 53 77 L 73 77 L 75 75 Q 78 72 78 68 L 78 47 Q 78 45 76 45 Z"
          fill="currentColor"
          opacity="0.95"
        />
        {/* Mug rim */}
        <rect x="48" y="43" width="30" height="3" fill="currentColor" rx="1" />
        <ellipse cx="63" cy="43" rx="15" ry="2" fill="currentColor" opacity="0.7" />
        
        {/* Handle */}
        <path
          d="M 78 52 Q 85 52 88 56 Q 90 60 88 64 Q 85 68 78 68"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          opacity="0.9"
          strokeLinecap="round"
        />
        <path
          d="M 78 54 Q 83 54 85 57 Q 86 60 85 63 Q 83 66 78 66"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
        
        {/* Decorative dots */}
        <circle cx="58" cy="57" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="63" cy="60" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="68" cy="57" r="1.5" fill="currentColor" opacity="0.4" />
        
        {/* Highlight on mug */}
        <path
          d="M 54 49 Q 55 56 55 65"
          stroke="white"
          strokeWidth="2.5"
          opacity="0.3"
          strokeLinecap="round"
        />
        
        {/* Shadow */}
        <ellipse cx="63" cy="79" rx="16" ry="2.5" fill="currentColor" opacity="0.15" />
      </g>

      {/* Vase (rechts) */}
      <g>
        {/* Vase body */}
        <path
          d="M 100 38 Q 98 38 98 41 L 98 65 Q 98 70 102 73 L 105 75 L 118 75 L 121 73 Q 125 70 125 65 L 125 41 Q 125 38 123 38 Z"
          fill="currentColor"
          opacity="0.9"
        />
        {/* Vase neck */}
        <rect x="106" y="28" width="11" height="10" fill="currentColor" opacity="0.95" rx="1" />
        {/* Vase opening */}
        <ellipse cx="111.5" cy="28" rx="6" ry="2" fill="currentColor" />
        {/* Decorative bands */}
        <rect x="100" y="48" width="25" height="2" fill="currentColor" opacity="0.4" />
        <rect x="100" y="55" width="25" height="2" fill="currentColor" opacity="0.4" />
        {/* Decorative wave pattern */}
        <path
          d="M 100 62 Q 105 60 111.5 62 Q 118 64 125 62"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        {/* Highlight */}
        <path
          d="M 105 41 Q 106 48 106 60"
          stroke="white"
          strokeWidth="2"
          opacity="0.25"
          strokeLinecap="round"
        />
        {/* Shadow */}
        <ellipse cx="111.5" cy="77" rx="13" ry="2" fill="currentColor" opacity="0.15" />
      </g>
    </motion.svg>
  );
}