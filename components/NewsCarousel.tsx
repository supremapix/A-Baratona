import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NEWS_ITEMS } from '../constants';

const NewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < NEWS_ITEMS.length - itemsToShow) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= NEWS_ITEMS.length - itemsToShow;

  return (
    <div className="relative group max-w-7xl mx-auto">
       {/* Controls */}
       <div className="hidden md:block">
         <button 
            onClick={prevSlide} 
            disabled={isPrevDisabled}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${isPrevDisabled ? 'opacity-0 cursor-default' : 'text-primary hover:bg-primary hover:text-white cursor-pointer'}`}
            aria-label="Anterior"
         >
            <i className="fas fa-chevron-left text-lg"></i>
         </button>
         <button 
            onClick={nextSlide} 
            disabled={isNextDisabled}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${isNextDisabled ? 'opacity-0 cursor-default' : 'text-primary hover:bg-primary hover:text-white cursor-pointer'}`}
            aria-label="Próximo"
         >
            <i className="fas fa-chevron-right text-lg"></i>
         </button>
       </div>

       {/* Mobile Controls (below) */}
       <div className="flex justify-center gap-4 mt-4 md:hidden">
          <button 
            onClick={prevSlide} 
            disabled={isPrevDisabled}
            className={`w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center ${isPrevDisabled ? 'opacity-50' : 'text-primary'}`}
          >
             <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={nextSlide} 
            disabled={isNextDisabled}
            className={`w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center ${isNextDisabled ? 'opacity-50' : 'text-primary'}`}
          >
             <i className="fas fa-chevron-right"></i>
          </button>
       </div>

       {/* Carousel Viewport */}
       <div className="overflow-hidden px-2 py-8 -mx-2">
         <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
         >
            {NEWS_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <Link to={`/blog/${item.slug}`} className="block h-full">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 group/card border border-gray-100">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/800x600/FF6B00/FFFFFF?text=A+Baratona";
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {item.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                        <i className="far fa-calendar-alt"></i>
                        {item.date}
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-3 leading-tight group-hover/card:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wider hover:underline mt-auto">
                        Ler Mais <i className="fas fa-arrow-right ml-2 text-xs"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
         </div>
       </div>
    </div>
  );
};

export default NewsCarousel;