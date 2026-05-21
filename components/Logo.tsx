import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 160 32" 
      fill="none" 
      className={className}
      aria-label="SOLKN"
    >
      {/* 
        Client provided SVG Icon 
        Original ViewBox: 0 0 500 300
        Scaled to fit height approx 27px (0.09 scale)
        Centered vertically: Translate Y ~2.5px
      */}
      <g transform="translate(0, 2.5) scale(0.09)">
        <path 
            fill="currentColor" 
            stroke="currentColor" 
            strokeWidth="15" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M486.4,107.1c-33.2-18.6-69.9-32.4-108.2-40.8c-95.4-20.9-195.1-4.5-280.6,46.1C66.7,130.7,36.8,157.8,11,188.4
            c-1.8,2.1-1.9,5.2-0.2,7.4c1.7,2.2,4.7,2.9,7.1,1.5c96-54.8,206.8-76.5,315.8-61.8c31.8,4.3,63,12.9,92.7,25.5
            c3.1,1.3,6.7,0.1,8.4-2.8C488.4,114.8,489.3,111.1,486.4,107.1z"
        />
      </g>
      
      {/* Text: SOLKN */}
      {/* Adjusted X position to account for the new icon width (approx 45px + gap) */}
      <text 
        x="55" 
        y="24" 
        fill="currentColor" 
        fontFamily="'Manrope', sans-serif" 
        fontWeight="800" 
        fontSize="24" 
        letterSpacing="-0.05em"
      >
        SOLKN
      </text>
    </svg>
  );
};

export default Logo;