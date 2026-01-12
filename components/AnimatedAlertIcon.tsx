import React from 'react';

interface AnimatedAlertIconProps {
  size?: 'lg' | 'xl';
  className?: string;
}

const AnimatedAlertIcon: React.FC<AnimatedAlertIconProps> = ({ size = 'lg', className = '' }) => {
  // Size configurations
  const containerSize = size === 'xl' ? 'w-40 h-40' : 'w-28 h-28';
  const iconSize = size === 'xl' ? 'text-6xl' : 'text-4xl';
  const dotSize = size === 'xl' ? 'w-8 h-8' : 'w-6 h-6';
  const dotPosition = size === 'xl' ? 'top-8 right-8' : 'top-5 right-6';

  return (
    <div className={`relative mx-auto -mt-14 mb-4 group cursor-pointer select-none ${containerSize} ${className}`}>
      {/* 1. Radar/Pulse Effects (Behind) */}
      <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      <div className="absolute inset-0 rounded-full bg-orange-400 opacity-10 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_500ms]"></div>
      
      {/* 2. Main Circle Container */}
      <div className="relative w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-primary to-orange-600 shadow-[0_10px_25px_-5px_rgba(255,107,0,0.5)] flex items-center justify-center transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_20px_30px_-5px_rgba(255,107,0,0.6)] group-active:scale-95 group-active:shadow-inner">
        
        {/* 3. Icon (Bell) - Animates on Hover */}
        <i className={`fas fa-bell text-white drop-shadow-md transform transition-transform duration-500 group-hover:rotate-[15deg] group-hover:animate-pulse ${iconSize}`}></i>
        
        {/* 4. Alert/Notification Dot */}
        <div className={`absolute ${dotPosition} flex items-center justify-center`}>
          <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75 animate-ping"></span>
          <span className={`relative inline-flex rounded-full border-2 border-primary bg-yellow-400 ${dotSize} flex items-center justify-center shadow-sm`}>
             <i className="fas fa-exclamation text-primary text-xs font-bold"></i>
          </span>
        </div>

        {/* 5. Shine Effect (Glossy look) */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default AnimatedAlertIcon;