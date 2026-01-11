import React, { useEffect, useState } from 'react';
import { COMPANY_INFO } from '../constants';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Side Contact Buttons */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {/* Phone */}
        <a 
          href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
          className="group flex items-center bg-black text-white p-3 rounded-r-lg shadow-lg hover:w-auto hover:pr-4 transition-all duration-300 w-12 overflow-hidden hover:w-48 whitespace-nowrap"
          title="Ligar Agora"
        >
          <i className="fas fa-phone-alt text-xl min-w-[24px]"></i>
          <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity font-bold">LIGAR AGORA</span>
        </a>

        {/* WhatsApp */}
        <a 
          href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Olá, gostaria de um orçamento de caçamba!`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#25D366] text-white p-3 rounded-r-lg shadow-lg hover:w-auto hover:pr-4 transition-all duration-300 w-12 overflow-hidden hover:w-48 whitespace-nowrap"
          title="WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl min-w-[24px]"></i>
          <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity font-bold">ORÇAMENTO</span>
        </a>

        {/* Email */}
        <a 
          href={`mailto:${COMPANY_INFO.email}`}
          className="group flex items-center bg-red-600 text-white p-3 rounded-r-lg shadow-lg hover:w-auto hover:pr-4 transition-all duration-300 w-12 overflow-hidden hover:w-48 whitespace-nowrap"
          title="Enviar E-mail"
        >
          <i className="fas fa-envelope text-xl min-w-[24px]"></i>
          <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity font-bold">E-MAIL</span>
        </a>
      </div>

      {/* Right Side Scroll Top */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 bottom-4 bg-primary text-white p-4 rounded-full shadow-xl transition-all duration-500 z-50 hover:bg-orange-600 hover:-translate-y-1 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Voltar ao topo"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default FloatingButtons;