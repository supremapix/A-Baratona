import React from 'react';
import { TESTIMONIALS } from '../constants';

const VerticalTestimonials: React.FC = () => {
  // Duplicate to loop seamlessly
  const extendedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="relative h-[600px] overflow-hidden bg-gray-50 rounded-2xl shadow-inner group">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll-up group-hover:[animation-play-state:paused] px-4 md:px-8">
            {extendedTestimonials.map((t, i) => (
                <div key={`${t.id}-${i}`} className="mb-6 transform transition-all hover:scale-[1.02] duration-300">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <i className="fas fa-quote-right text-6xl text-primary"></i>
                        </div>
                        
                        <div className="flex items-center mb-4 gap-1 text-yellow-400 text-sm">
                            {[...Array(5)].map((_, starI) => (
                                <i key={starI} className={`fas fa-star ${starI < t.stars ? '' : 'text-gray-300'}`}></i>
                            ))}
                        </div>
                        
                        <p className="text-gray-600 mb-4 italic font-medium relative z-10">"{t.content}"</p>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-primary font-bold">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-secondary text-sm">{t.name}</p>
                                <p className="text-xs text-primary font-bold uppercase tracking-wider">{t.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default VerticalTestimonials;