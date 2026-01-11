import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  scale?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", scale = 1 }) => {
  return (
    <Link 
      to="/" 
      className={`group flex flex-col items-center justify-center select-none transition-all duration-300 ease-in-out hover:scale-110 active:scale-90 cursor-pointer ${className}`}
      aria-label="A Baratona Home"
      style={{ transformOrigin: 'center' }}
    >
      {/* Top Text: "A BARATONA" - White with Heavy Black Stroke */}
      <div className="relative z-10 leading-none">
        <span 
          className="block font-black italic tracking-tighter text-white whitespace-nowrap"
          style={{ 
            fontFamily: "'Arial Black', 'Impact', sans-serif",
            fontSize: `${2 * scale}rem`,
            textShadow: `
              3px 3px 0 #000,
              -1px -1px 0 #000,  
              1px -1px 0 #000,
              -1px 1px 0 #000,
              1px 1px 0 #000,
              3px 0 0 #000,
              -3px 0 0 #000,
              0 3px 0 #000,
              0 -3px 0 #000
            `
          }}
        >
          A BARATONA
        </span>
      </div>
      
      {/* Bottom Pill: "LOCAÇÕES" */}
      <div 
        className="bg-secondary text-white font-bold tracking-[0.3em] rounded-full z-20 shadow-lg group-hover:bg-primary transition-colors duration-300 border-2 border-white flex items-center justify-center"
        style={{
          marginTop: `-${0.4 * scale}rem`,
          fontSize: `${0.6 * scale}rem`,
          padding: `${0.15 * scale}rem ${0.8 * scale}rem`,
          minWidth: `${8 * scale}rem`
        }}
      >
        LOCAÇÕES
      </div>
    </Link>
  );
};

export default Logo;