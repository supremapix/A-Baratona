import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO, IMAGES } from '../constants';
import PageTransition from '../components/PageTransition';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Helmet>
        <title>Fale Conosco | A Baratona Caçambas</title>
        <meta name="description" content="Entre em contato com A Baratona Locação de Caçambas. Telefone, WhatsApp e Endereço. Atendimento rápido e orçamento sem compromisso em Curitiba." />
        <link rel="canonical" href="https://abaratonacacambas.com.br/contato" />
      </Helmet>

      {/* Hero Header */}
      <div className="relative pt-32 pb-12 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Fale Conosco</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Estamos prontos para atender sua obra com agilidade. Fale com nossa equipe agora mesmo.
            </p>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Contact Info & Map */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary">
                        <h2 className="text-2xl font-bold text-secondary mb-6">Canais de Atendimento</h2>
                        
                        <div className="space-y-6">
                            <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="flex items-center group p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500 font-bold uppercase">Telefone Fixo</p>
                                    <p className="text-xl font-bold text-secondary">{COMPANY_INFO.phone}</p>
                                </div>
                            </a>

                            <a href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="flex items-center group p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500 font-bold uppercase">WhatsApp 24h</p>
                                    <p className="text-xl font-bold text-secondary">{COMPANY_INFO.whatsapp}</p>
                                </div>
                            </a>

                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center group p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500 font-bold uppercase">E-mail</p>
                                    <p className="text-lg font-bold text-secondary break-all">{COMPANY_INFO.email}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-2 rounded-2xl shadow-lg h-80 relative overflow-hidden group">
                         {/* Static Map Image / Placeholder acting as link */}
                         <a 
                            href={COMPANY_INFO.googleMapsLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-full relative"
                         >
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <i className="fas fa-map-marked-alt text-6xl text-gray-300"></i>
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                <span className="bg-primary text-white px-6 py-2 rounded-full font-bold">Ver Rota no Google Maps</span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg z-0">
                                <p className="font-bold text-secondary text-sm"><i className="fas fa-map-marker-alt text-primary mr-2"></i> {COMPANY_INFO.address}</p>
                            </div>
                         </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-secondary p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-20 -mt-20"></div>
                    <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Envie uma Mensagem</h2>
                    <ContactForm />
                </div>

            </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;