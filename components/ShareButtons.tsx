import React, { useState } from 'react';

interface ShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  layout?: 'row' | 'column';
  variant?: 'minimal' | 'full';
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ 
  url = window.location.href, 
  title = "A Baratona Caçambas", 
  description = "Precisa de caçamba em Curitiba? Recomendo A Baratona! Entrega rápida, preço justo e tudo 100% legalizado.",
  layout = 'row',
  variant = 'full'
}) => {
  const [copied, setCopied] = useState(false);

  // Persuasive text for WhatsApp (Max ~160 chars recommended for preview, but logic handles full text)
  const whatsappText = `${description} Confira:`;
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(whatsappText);

  const links = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedText}%20${encodedUrl}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerClass = layout === 'row' ? 'flex flex-wrap items-center gap-3' : 'flex flex-col gap-3 w-full';
  const buttonBaseClass = "flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md";
  const sizeClass = variant === 'full' ? 'w-10 h-10 rounded-full' : 'w-8 h-8 rounded-full text-sm';

  return (
    <div className={containerClass}>
      {/* WhatsApp */}
      <a 
        href={links.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${buttonBaseClass} ${sizeClass} bg-[#25D366] text-white hover:bg-green-600`}
        title="Compartilhar no WhatsApp"
        aria-label="Compartilhar no WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Facebook */}
      <a 
        href={links.facebook} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${buttonBaseClass} ${sizeClass} bg-[#1877F2] text-white hover:bg-blue-700`}
        title="Compartilhar no Facebook"
        aria-label="Compartilhar no Facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      {/* Twitter / X */}
      <a 
        href={links.twitter} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${buttonBaseClass} ${sizeClass} bg-black text-white hover:bg-gray-800`}
        title="Compartilhar no X (Twitter)"
        aria-label="Compartilhar no X"
      >
        <i className="fab fa-x-twitter"></i>
      </a>

      {/* LinkedIn */}
      <a 
        href={links.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${buttonBaseClass} ${sizeClass} bg-[#0077b5] text-white hover:bg-blue-800`}
        title="Compartilhar no LinkedIn"
        aria-label="Compartilhar no LinkedIn"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      {/* Copy Link */}
      <button 
        onClick={handleCopy}
        className={`${buttonBaseClass} ${sizeClass} ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
        title="Copiar Link"
        aria-label="Copiar Link"
      >
        <i className={`fas ${copied ? 'fa-check' : 'fa-link'}`}></i>
      </button>
      
      {copied && <span className="text-xs text-green-600 font-bold animate-pulse">Link Copiado!</span>}
    </div>
  );
};

export default ShareButtons;