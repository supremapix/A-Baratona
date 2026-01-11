import React from 'react';
import { PRICING, COMPANY_INFO } from '../constants';

const PricingTable: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {PRICING.map((tier, index) => (
        <div key={index} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 border ${index === 1 ? 'border-primary ring-2 ring-primary ring-opacity-50' : 'border-gray-200'}`}>
          {index === 1 && (
            <div className="absolute top-0 left-0 w-full bg-primary text-white text-center text-sm font-bold py-1 uppercase tracking-wider">
              Mais Popular
            </div>
          )}
          
          <div className="p-8 text-center">
            <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">{tier.title}</h3>
            <div className="text-5xl font-extrabold text-secondary mb-2">{tier.size}</div>
            <div className="text-primary font-bold text-xl mb-6">{tier.price}</div>
            
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Olá, quero alugar uma caçamba de ${tier.size}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full py-3 rounded-lg font-bold transition-colors ${index === 1 ? 'bg-primary text-white hover:bg-orange-600' : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}
            >
              ALUGAR AGORA
            </a>
          </div>
          
          <div className="bg-gray-50 p-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4 font-semibold text-center italic">Ideal para: {tier.recommendedFor}</p>
            <ul className="space-y-3">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;