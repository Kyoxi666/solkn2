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
            d="M486.4,107.1c-33.2-18.6-69.9-32.4-108.2-40.8c-95.4-20.9-195.1-4.5-280.6,46.1C66.7,130.7,36.8,157.8,11,188.4
            c-1.8,2.1-1.9,5.2-0.2,7.4c1.7,2.2,4.7,2.9,7.1,1.5c96-54.8,206.8-76.5,315.8-61.8c31.8,4.3,63,12.9,92.7,25.5
            c3.1,1.3,6.7,0.1,8.4-2.8C488.4,114.8,489.3,111.1,486.4,107.1z M36.9,209.3c23.5-26.9,50.6-50.9,80.6-71.2
            c84.7-57.4,190.2-79.8,290.4-61.8c21.7,3.9,42.9,9.7,63.5,17.3c2.5,0.9,5.2-0.1,6.5-2.5c1.3-2.4,0.7-5.3-1.4-7.1
            C410,28.1,307.9,5.2,208,25.2C115.4,43.7,37,110.2,6.3,197.7C3.6,205.5,31.3,215.8,36.9,209.3z M484.2,159.4
            c-23.2-16.6-49.4-29.8-77.4-38.9c-82.2-26.7-170.6-25.7-251.6,2.9c-55.4,19.6-106.5,51.8-150.2,94.8c-2.1,2.1-2.4,5.5-0.6,7.9
            c1.8,2.4,5,3.2,7.6,2c95.2-44.8,200.3-60.6,304-45.8c42.7,6.1,84.4,19.2,123.3,38.7c2.4,1.2,5.3,0.5,6.9-1.6
            C487.7,166.6,486.8,161.3,484.2,159.4z"
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