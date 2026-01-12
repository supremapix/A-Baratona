import React from 'react';
import { COMPANY_INFO } from '../constants';

interface VideoSectionProps {
  locationName?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ locationName }) => {
  const title = locationName 
    ? `A Baratona em Ação em ${locationName}` 
    : "Veja Por Que Somos a Nº 1 de Curitiba";

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Text & CTA Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Assista Agora
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6 leading-tight">
                {title}
              </h2>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Não é só promessa, é compromisso. Confira no vídeo como nossa <strong>frota moderna</strong> e equipe treinada garantem a entrega mais rápida e segura para sua obra.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3 text-xl"></i>
                  <span>Caminhões novos que não estragam calçadas</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3 text-xl"></i>
                  <span>Motoristas uniformizados e experientes</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3 text-xl"></i>
                  <span>Logística monitorada em tempo real</span>
                </li>
              </ul>

              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Olá, assisti o vídeo e quero alugar uma caçamba!`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#25D366] hover:bg-green-600 text-white font-black py-4 px-8 rounded-xl shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>SOLICITAR CAÇAMBA AGORA</span>
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">Atendimento imediato via WhatsApp</p>
            </div>

            {/* Video Side */}
            <div className="relative bg-black min-h-[300px] lg:min-h-full">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/3VxWuul4f1A?rel=0&modestbranding=1" 
                title="Vídeo Institucional A Baratona Caçambas"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;