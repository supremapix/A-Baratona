import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    size: '5m³',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*NOVO PEDIDO VIA SITE*%0A%0A*Nome:* ${formData.name}%0A*Endereço:* ${formData.address}%0A*Tamanho:* ${formData.size}%0A*Obs:* ${formData.message}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-white text-sm font-bold mb-2">Seu Nome</label>
        <div className="relative">
          <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
          <input 
            type="text" 
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary text-gray-800"
            placeholder="João Silva"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className="block text-white text-sm font-bold mb-2">Endereço de Entrega</label>
        <div className="relative">
          <i className="fas fa-map-marker-alt absolute left-3 top-3 text-gray-400"></i>
          <input 
            type="text" 
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary text-gray-800"
            placeholder="Rua, Bairro..."
            value={formData.address}
            onChange={e => setFormData({...formData, address: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className="block text-white text-sm font-bold mb-2">Tamanho da Caçamba</label>
        <div className="grid grid-cols-3 gap-2">
          {['3m³', '5m³', '8m³'].map(s => (
            <button
              key={s}
              type="button"
              onClick={() => setFormData({...formData, size: s})}
              className={`py-2 rounded-lg font-bold transition-all ${formData.size === s ? 'bg-primary text-white ring-2 ring-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-[#25D366] hover:bg-green-600 text-white font-extrabold py-4 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
      >
        <i className="fab fa-whatsapp text-2xl"></i> PEDIR AGORA
      </button>
      <p className="text-white/70 text-xs text-center mt-2">
        <i className="fas fa-bolt text-yellow-400"></i> Resposta média: 2 minutos
      </p>
    </form>
  );
};

export default ContactForm;