import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 200, height = 60 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fleur stylisée */}
      <g transform="translate(10, 30)">
        <circle cx="0" cy="-8" r="6" fill="#f97316" opacity="0.9" />
        <circle cx="8" cy="-4" r="6" fill="#fb923c" opacity="0.9" />
        <circle cx="8" cy="4" r="6" fill="#f97316" opacity="0.9" />
        <circle cx="0" cy="8" r="6" fill="#fb923c" opacity="0.9" />
        <circle cx="-8" cy="4" r="6" fill="#f97316" opacity="0.9" />
        <circle cx="-8" cy="-4" r="6" fill="#fb923c" opacity="0.9" />
        <circle cx="0" cy="0" r="5" fill="#ea580c" />
      </g>
      
      {/* Texte */}
      <text x="35" y="28" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="700" fill="#1f2937">
        En pleine
      </text>
      <text x="35" y="48" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="800" fill="#f97316">
        flore!
      </text>
    </svg>
  );
};

export default Logo;
