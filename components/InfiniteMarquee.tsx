import React from 'react';
import { Link } from 'react-router-dom';
import { LocationData } from '../types';

interface InfiniteMarqueeProps {
  items: LocationData[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'fast';
  color?: 'blue' | 'green';
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ 
  items, 
  direction = 'left', 
  color = 'blue' 
}) => {
  // We duplicate items to create a seamless loop
  const extendedItems = [...items, ...items];
  
  const bgClass = color === 'blue' ? 'bg-blue-50 hover:bg-blue-600 text-blue-900' : 'bg-green-50 hover:bg-green-600 text-green-900';

  return (
    <div className="relative flex overflow-hidden group w-full mask-linear">
      {/* Gradient Masks for fade effect */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <div 
        className={`flex gap-4 py-4 animate-scroll-left whitespace-nowrap group-hover:[animation-play-state:paused]`}
      >
        {extendedItems.map((item, i) => (
          <Link
            key={`${item.slug}-${i}`}
            to={`/${item.slug}`}
            className={`inline-block px-6 py-3 rounded-full font-bold text-sm shadow-sm transition-all hover:scale-110 hover:shadow-lg hover:text-white ${bgClass}`}
          >
            <i className={`fas ${item.type === 'city' ? 'fa-city' : 'fa-map-pin'} mr-2 opacity-70`}></i>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;