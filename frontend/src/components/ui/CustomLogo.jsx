import React from 'react';


const CustomLogo = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Placeholder Logo - Simple and Fast */}
    <img
  src="/logo192.png"
  alt="Anantya Logo"
  className="h-20 w-20 object-contain mr-3"  // was h-10 w-10 before
/>
      
      <div className="flex flex-col">
        <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500 text-xl">
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