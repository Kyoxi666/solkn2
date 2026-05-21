import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 32" 
      fill="none" 
      className={className}
      aria-label="SOLKN"
    >
      {/* Wordmark Only - SVG paths completely deleted */}
      <text 
        x="0" 
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