import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

interface ContactFormProps {
  variant?: 'dark' | 'light'; // 'dark' = white text (for dark bg), 'light' = dark text (for light bg)
}

const ContactForm: React.FC<ContactFormProps> = ({ variant = 'dark' }) => {
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

  const isLightMode = variant === 'light';

  // Dynamic classes based on variant
  const labelClass = `block text-sm font-bold mb-2 ${isLightMode ? 'text-gray-800' : 'text-white'}`;
  const inputContainerClass = "relative";
  const iconClass = `fas fa-user absolute left-3 top-3.5 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`;
  
  const inputBaseClass = "w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 text-gray-800 placeholder-gray-500";
  const inputThemeClass = isLightMode 
    ? "bg-white border border-gray-300 shadow-sm hover:border-primary" 
    : "bg-white border-none shadow-lg";

  const footerTextClass = `text-xs text-center mt-3 flex items-center justify-center gap-1 ${isLightMode ? 'text-gray-600' : 'text-white/80'}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>Seu Nome</label>
        <div className={inputContainerClass}>
          <i className={`fas fa-user absolute left-3 top-3.5 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
          <input 
            type="text" 
            required
            className={`${inputBaseClass} ${inputThemeClass}`}
            placeholder="João Silva"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Endereço de Entrega</label>
        <div className={inputContainerClass}>
          <i className={`fas fa-map-marker-alt absolute left-3 top-3.5 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
          <input 
            type="text" 
            required
            className={`${inputBaseClass} ${inputThemeClass}`}
            placeholder="Rua, Bairro e Número"
            value={formData.address}
            onChange={e => setFormData({...formData, address: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Tamanho da Caçamba</label>
        <div className="grid grid-cols-3 gap-2">
          {['3m³', '5m³', '8m³'].map(s => (
            <button
              key={s}
              type="button"
              onClick={() => setFormData({...formData, size: s})}
              className={`py-3 rounded-lg font-bold transition-all shadow-md ${
                formData.size === s 
                  ? 'bg-primary text-white ring-2 ring-primary ring-offset-2' 
                  : isLightMode 
                    ? 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-[#25D366] hover:bg-green-600 text-white font-extrabold py-4 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
      >
        <i className="fab fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i> PEDIR AGORA
      </button>
      <p className={footerTextClass}>
        <i className="fas fa-bolt text-yellow-500"></i> Resposta média: 2 minutos
      </p>
    </form>
  );
};

export default ContactForm;