import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, IMAGES, CITIES, NEIGHBORHOODS, TESTIMONIALS } from '../constants';
import PricingTable from '../components/PricingTable';
import ContactForm from '../components/ContactForm';
import Calculator from '../components/Calculator';

const Home: React.FC = () => {
  return (
    <div id="home">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.heroBg} alt="Caminhão de caçamba A Baratona" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-block px-4 py-1 bg-primary rounded-full text-sm font-bold uppercase tracking-wider animate-pulse">
              Entrega Rápida em até 2 horas
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Locação de Caçambas em <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Curitiba</span> e Região
            </h1>
            <p className="text-lg text-gray-300 md:pr-12">
              A solução mais rápida e econômica para o seu entulho. Caçambas estacionárias legalizadas, descarte consciente e o melhor preço do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#precos" className="px-8 py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transition-all text-center">
                VER PREÇOS
              </a>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <i className="fas fa-phone-alt text-primary text-2xl animate-bounce-slow"></i>
                <div>
                  <p className="text-xs text-gray-300 uppercase">Ligue Agora</p>
                  <p className="font-bold text-xl">{COMPANY_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="glass-effect p-8 rounded-2xl shadow-2xl border-t-4 border-primary transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
                Orçamento Expresso <i className="fab fa-whatsapp text-green-500 ml-2"></i>
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services / Differentials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Por que escolher A Baratona?</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-clock', title: 'Entrega Expressa', desc: 'Atendimento rápido em até 2h para regiões selecionadas.' },
              { icon: 'fa-file-contract', title: '100% Legalizado', desc: 'Descarte em aterros autorizados com certificação ambiental.' },
              { icon: 'fa-wallet', title: 'Melhor Preço', desc: 'Cobrimos qualquer orçamento comprovado da concorrência.' },
              { icon: 'fa-headset', title: 'Suporte 24h', desc: 'Atendimento via WhatsApp para emergências e agendamentos.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-primary group text-center">
                <div className="w-16 h-16 bg-orange-100 text-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Calculator */}
      <section id="precos" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">Nossos Tamanhos</h2>
              <p className="text-gray-600 mb-8">Escolha a caçamba ideal para sua necessidade.</p>
              <PricingTable />
            </div>
            <div>
              <div className="sticky top-24">
                <Calculator />
                <div className="mt-8 bg-secondary rounded-xl p-6 text-white text-center">
                    <img src={IMAGES.mascot} alt="Mascote Rei da Caçamba" className="w-32 h-32 rounded-full mx-auto border-4 border-primary -mt-16 mb-4 shadow-lg" />
                    <h4 className="text-xl font-bold text-primary mb-2">Dúvidas?</h4>
                    <p className="mb-4 text-sm text-gray-300">Nossa equipe te ajuda a escolher o tamanho certo agora mesmo.</p>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} className="inline-block bg-[#25D366] px-6 py-2 rounded-full font-bold hover:bg-green-600 transition-colors">
                        <i className="fab fa-whatsapp mr-2"></i> Falar com Especialista
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Frota e Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                <img src={IMAGES.truck} alt="Caminhão" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-bold border-2 border-primary px-4 py-2 text-primary">FROTA PRÓPRIA</span>
                </div>
             </div>
             <div className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                <img src={IMAGES.debris} alt="Entulho" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-bold border-2 border-primary px-4 py-2 text-primary">COLETA</span>
                </div>
             </div>
             <div className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                <img src={IMAGES.landfill} alt="Aterro" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-bold border-2 border-primary px-4 py-2 text-primary">DESTINO CORRETO</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">O que dizem nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
                <div key={t.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative">
                    <i className="fas fa-quote-right absolute top-4 right-4 text-gray-200 text-4xl"></i>
                    <div className="flex text-yellow-400 mb-4">
                        {[...Array(t.stars)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{t.content}"</p>
                    <div>
                        <p className="font-bold text-secondary">{t.name}</p>
                        <p className="text-xs text-primary font-bold uppercase">{t.role}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Grid (SEO) */}
      <section id="locais" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Área de Atendimento</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-bold text-primary mb-6 border-b border-gray-200 pb-2">
              <i className="fas fa-city mr-2"></i> Cidades da Região Metropolitana
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {CITIES.map((city, i) => (
                <Link 
                  key={i} 
                  to={`/${city.slug}`}
                  className="px-3 py-2 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-800 rounded text-sm font-medium transition-colors text-center truncate"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-600 mb-6 border-b border-gray-200 pb-2">
              <i className="fas fa-map-marked mr-2"></i> Bairros de Curitiba
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 h-96 overflow-y-auto pr-2 custom-scrollbar">
              {NEIGHBORHOODS.map((hood, i) => (
                <Link 
                  key={i} 
                  to={`/${hood.slug}`}
                  className="px-3 py-2 bg-green-50 hover:bg-green-600 hover:text-white text-green-800 rounded text-sm font-medium transition-colors text-center truncate"
                >
                  {hood.name}
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">Role para ver mais bairros...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;