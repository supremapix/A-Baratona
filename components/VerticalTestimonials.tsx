import React from 'react';
import { TESTIMONIALS } from '../constants';

const VerticalTestimonials: React.FC = () => {
  // Duplicamos para criar o efeito de loop infinito suave
  const extendedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-gray-50 rounded-2xl shadow-inner group">
        {/* Máscaras de Gradiente para suavizar a entrada e saída dos cards */}
        <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll-up group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] px-3 sm:px-4 md:px-8 pt-10">
            {extendedTestimonials.map((t, i) => (
                <div key={`${t.id}-${i}`} className="mb-4 sm:mb-6 transform transition-all hover:scale-[1.01] duration-300">
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-primary relative overflow-hidden">
                        {/* Ícone de Aspas - Escondido em telas muito pequenas para dar espaço ao texto */}
                        <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-5 sm:opacity-10 hidden xs:block">
                            <i className="fas fa-quote-right text-4xl sm:text-6xl text-primary"></i>
                        </div>
                        
                        {/* Estrelas */}
                        <div className="flex items-center mb-2 sm:mb-4 gap-1 text-yellow-400 text-xs sm:text-sm">
                            {[...Array(5)].map((_, starI) => (
                                <i key={starI} className={`fas fa-star ${starI < t.stars ? '' : 'text-gray-300'}`}></i>
                            ))}
                        </div>
                        
                        {/* Texto do Depoimento - Tamanho de fonte responsivo */}
                        <p className="text-gray-600 mb-3 sm:mb-4 italic font-medium relative z-10 text-sm sm:text-base leading-snug sm:leading-relaxed">
                            "{t.content}"
                        </p>
                        
                        {/* Autor */}
                        <div className="flex items-center gap-2 sm:gap-3 border-t border-gray-50 pt-3 sm:pt-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary font-bold text-xs sm:text-base flex-shrink-0">
                                {t.name.charAt(0)}
                            </div>
                            <div className="min-w-0">
                                <p className="font-bold text-secondary text-xs sm:text-sm truncate">{t.name}</p>
                                <p className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-wider truncate">{t.role}</p>
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