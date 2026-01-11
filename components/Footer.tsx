import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black text-primary mb-4 italic">A BARATONA</h2>
            <p className="text-gray-400 mb-4">
              Líder em locação de caçambas em Curitiba e Região. Compromisso com o meio ambiente e agilidade na sua obra.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Início</a></li>
              <li><a href="#precos" className="text-gray-400 hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#locais" className="text-gray-400 hover:text-primary transition-colors">Área de Atuação</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-primary transition-colors">Contato</a></li>
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
                <span className="text-gray-400 font-bold">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-primary"></i>
                <span className="text-gray-400 font-bold">{COMPANY_INFO.whatsapp}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary"></i>
                <span className="text-gray-400 text-sm">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Map (Placeholder) */}
          <div className="rounded-lg overflow-hidden h-48 bg-gray-800 relative group">
             {/* Simulating interactive map */}
             <div className="absolute inset-0 flex items-center justify-center bg-gray-700 group-hover:bg-gray-600 transition-colors cursor-pointer">
                <div className="text-center">
                    <i className="fas fa-map-marked-alt text-4xl text-primary mb-2"></i>
                    <p className="text-sm font-bold">Ver no Mapa</p>
                </div>
             </div>
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