import React from 'react';
import { Building2 } from 'lucide-react';

const CustomLogo = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Placeholder Logo - Simple and Fast */}
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
        <Building2 className="h-6 w-6 text-white" />
      </div>
      
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