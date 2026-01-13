import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import Logo from './Logo';
import ShareButtons from './ShareButtons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="mb-6 transform origin-left">
              <Logo scale={0.8} />
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Líder em locação de caçambas em Curitiba e Região. Compromisso com o meio ambiente e agilidade na sua obra.
            </p>
            
            {/* Share Page Section */}
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Recomende nosso site:</p>
              <ShareButtons 
                variant="minimal" 
                description="Precisa alugar caçamba em Curitiba? Recomendo A Baratona! O melhor preço e atendimento da cidade." 
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Início</Link></li>
              <li><Link to="/?scrollTo=precos" className="text-gray-400 hover:text-primary transition-colors">Preços</Link></li>
              <li><Link to="/?scrollTo=locais" className="text-gray-400 hover:text-primary transition-colors">Área de Atuação</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Fale Conosco</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <span className="text-gray-400 text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-primary"></i>
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-gray-400 font-bold hover:text-white">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-primary"></i>
                <a href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} className="text-gray-400 font-bold hover:text-white">{COMPANY_INFO.whatsapp}</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary"></i>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-400 text-sm hover:text-white">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Map (Placeholder) */}
          <div className="rounded-lg overflow-hidden h-48 bg-gray-800 relative group">
             {/* Interactive map link using correct shared link */}
             <a 
               href={COMPANY_INFO.googleMapsLink}
               target="_blank" 
               rel="noopener noreferrer"
               className="absolute inset-0 flex items-center justify-center bg-gray-700 group-hover:bg-gray-600 transition-colors cursor-pointer"
             >
                <div className="text-center">
                    <i className="fas fa-map-marked-alt text-4xl text-primary mb-2"></i>
                    <p className="text-sm font-bold text-white">Ver no Mapa</p>
                </div>
             </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 text-center md:text-left">
            © 2025 {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
          
          <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end">
            <p className="text-gray-400 flex items-center gap-1">
              Desenvolvido com 
              <i className="fas fa-heart text-red-500 animate-heartbeat mx-1"></i> 
              por 
              <a 
                href="https://supremasite.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-primary transition-colors ml-1"
              >
                Suprema Sites Express
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;