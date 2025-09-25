import React from 'react';

const CustomLogo = ({ className = "h-12 w-auto", animated = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`relative mr-3 ${animated ? 'animate-pulse' : ''}`}>
        {/* Custom Anantya Group Logo SVG */}
        <svg 
          width="50" 
          height="50" 
          viewBox="0 0 50 50" 
          className="drop-shadow-lg"
        >
          {/* Background Circle */}
          <circle 
            cx="25" 
            cy="25" 
            r="23" 
            fill="url(#gradient1)" 
            className="animate-spin-slow"
            style={{ animationDuration: '20s' }}
          />
          
          {/* Inner Design - Diamond Pattern */}
          <g className="animate-pulse" style={{ animationDuration: '3s' }}>
            <polygon 
              points="25,8 35,18 25,28 15,18" 
              fill="#17A2B8" 
              opacity="0.9"
            />
            <polygon 
              points="25,22 35,32 25,42 15,32" 
              fill="#E67E22" 
              opacity="0.9"
            />
          </g>
          
          {/* Center Diamond */}
          <polygon 
            points="25,15 30,20 25,25 20,20" 
            fill="white" 
            opacity="0.8"
            className="animate-bounce"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E67E22" />
              <stop offset="50%" stopColor="#F39C12" />
              <stop offset="100%" stopColor="#17A2B8" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Animated Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 opacity-20 animate-ping"></div>
      </div>
      
      <div className="flex flex-col">
        <span className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500 ${animated ? 'animate-pulse' : ''}`} 
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', lineHeight: '1.1' }}>
          ANANTYA
        </span>
        <span className="text-xs font-semibold text-gray-400 tracking-widest -mt-1">
          GROUP
        </span>
      </div>
    </div>
  );
};

export default CustomLogo;