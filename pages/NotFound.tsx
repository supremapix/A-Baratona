import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import PageTransition from '../components/PageTransition';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md w-full">
          <div className="mb-8 relative">
             <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
             <img 
               src={IMAGES.mascot} 
               alt="Rei da Caçamba" 
               className="w-40 h-40 mx-auto rounded-full border-4 border-primary shadow-2xl relative z-10 bg-white" 
             />
          </div>
          
          <h1 className="text-8xl font-black text-primary mb-2">404</h1>
          <h2 className="text-3xl font-bold text-secondary mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Ops! Parece que essa caçamba já foi recolhida. A página que você procura não existe ou foi movida.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1 hover:shadow-orange-500/30 gap-2"
          >
            <i className="fas fa-home"></i> VOLTAR AO INÍCIO
          </Link>
        </div>
        
        <div className="mt-12 text-sm text-gray-400">
          A Baratona Locação de Caçambas
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;