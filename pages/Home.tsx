import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO, IMAGES, CITIES, NEIGHBORHOODS, HERO_SLIDES } from '../constants';
import PricingTable from '../components/PricingTable';
import ContactForm from '../components/ContactForm';
import Calculator from '../components/Calculator';
import Typewriter from '../components/Typewriter';
import InfiniteMarquee from '../components/InfiniteMarquee';
import VerticalTestimonials from '../components/VerticalTestimonials';
import NewsCarousel from '../components/NewsCarousel';
import PageTransition from '../components/PageTransition';
import VideoSection from '../components/VideoSection';
import AnimatedAlertIcon from '../components/AnimatedAlertIcon';

const Home: React.FC = () => {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle Scroll to Section logic
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToId = params.get('scrollTo');
    
    if (scrollToId) {
      setTimeout(() => {
        const element = document.getElementById(scrollToId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300);
    }
  }, [location]);

  // Hero Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div id="home">
        {/* Hero Section */}
        <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
          {/* Background Image Slider with Overlay */}
          <div className="absolute inset-0 z-0 bg-secondary">
            {HERO_SLIDES.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img 
                  src={slide} 
                  alt={`Slide ${index + 1}`} 
                  className={`w-full h-full object-cover transform transition-transform duration-[6000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`} 
                />
              </div>
            ))}
            
            {/* Permanent Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/40"></div>
            
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 pt-10 md:pt-0">
              <span className="inline-block px-4 py-1 bg-primary rounded-full text-sm font-bold uppercase tracking-wider animate-pulse border border-orange-400 shadow-[0_0_15px_rgba(255,107,0,0.5)]">
                Entrega Rápida em até 2 horas
              </span>
              
              <div className="min-h-[120px] md:min-h-[160px]">
                <h1 className="text-4xl md:text-6xl font-black leading-tight mb-2">
                  Locação de Caçambas
                </h1>
                <Typewriter />
              </div>

              <p className="text-lg text-gray-300 md:pr-12 leading-relaxed">
                A solução definitiva para sua obra. Caçambas estacionárias 100% legalizadas, descarte ambientalmente correto e o atendimento mais ágil de Curitiba.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#precos" className="px-8 py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transition-all text-center transform hover:scale-105">
                  VER TAMANHOS E PREÇOS
                </a>
                <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg">
                     <i className="fab fa-whatsapp text-white text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">Plantão 24h</p>
                    <p className="font-bold text-xl group-hover:text-green-400 transition-colors">{COMPANY_INFO.whatsapp}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="glass-effect p-8 rounded-2xl shadow-2xl border-t-4 border-primary transform hover:scale-[1.01] transition-transform duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <h3 className="text-2xl font-bold text-secondary mb-6 text-center relative z-10">
                  Orçamento Expresso <span className="text-primary">Online</span>
                </h3>
                <div className="relative z-10">
                   <ContactForm variant="light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services / Differentials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">A Baratona é Diferente</h2>
              <div className="w-24 h-2 bg-gradient-to-r from-primary to-yellow-400 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600">Qualidade superior e compromisso com sua obra do início ao fim.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: 'fa-shipping-fast', title: 'Entrega Flash', desc: 'Logística otimizada para entrega em até 2h em bairros selecionados.' },
                { icon: 'fa-recycle', title: 'Eco Friendly', desc: '100% dos resíduos vão para usinas de reciclagem certificadas.' },
                { icon: 'fa-hand-holding-dollar', title: 'Preço Justo', desc: 'Negociamos valores para grandes volumes e contratos mensais.' },
                { icon: 'fa-user-shield', title: 'Segurança Total', desc: 'Motoristas treinados e equipamentos novos que não danificam calçadas.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-primary group text-center hover:-translate-y-2">
                  <div className="w-20 h-20 bg-orange-50 text-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner transform group-hover:rotate-12">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <VideoSection />

        {/* Pricing & Calculator */}
        <section id="precos" className="py-20 bg-white relative overflow-hidden">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50 -skew-x-12 translate-x-1/3 z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Tabela 2025</span>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">Escolha o Tamanho Ideal</h2>
                <p className="text-gray-600 mb-10 max-w-xl">Evite desperdícios ou falta de espaço. Temos a caçamba perfeita para o tamanho da sua reforma.</p>
                <PricingTable />
              </div>
              <div className="relative">
                <div className="sticky top-28 z-20">
                  <div className="transform hover:scale-[1.02] transition-transform duration-300">
                      <Calculator />
                  </div>
                  
                  {/* CTA Box */}
                  <div className="mt-8 bg-secondary rounded-2xl p-8 text-white text-center relative overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
                      
                      {/* REPLACED IMAGE WITH ANIMATED ICON */}
                      <AnimatedAlertIcon size="lg" />
                      
                      <h4 className="text-2xl font-bold text-primary mb-2">Precisando de Ajuda?</h4>
                      <p className="mb-6 text-sm text-gray-300">Mande uma foto do seu entulho no Zap e nós calculamos para você!</p>
                      <a href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} className="inline-block w-full bg-[#25D366] py-4 rounded-xl font-bold hover:bg-green-500 transition-colors shadow-lg hover:shadow-green-500/50">
                          <i className="fab fa-whatsapp mr-2 text-xl"></i> CALCULAR NO WHATS
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Redesigned Impactful Cards */}
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary to-transparent z-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block animate-pulse">Qualidade Premium</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-2">Nossa Frota e Serviços</h2>
                  <div className="w-24 h-2 bg-gradient-to-r from-primary to-orange-600 rounded-full mt-4"></div>
               </div>
               <p className="text-gray-400 mt-6 md:mt-0 max-w-md text-right leading-relaxed border-r-4 border-primary pr-6">
                  Equipamentos modernos para garantir segurança, agilidade e eficiência total na sua obra.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               {/* Card 1: Logística Própria (Dark/Industrial) */}
               <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-orange-500/20">
                  {/* Background Emulation (Fallback) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black z-0">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 to-transparent"></div>
                      {/* UPDATED ICON: Top Left Position and Higher Opacity */}
                      <i className="fas fa-truck text-9xl text-white/10 absolute -left-4 -top-4 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700"></i>
                  </div>
                  
                  {/* Image Layer */}
                  <img 
                    src={IMAGES.truck} 
                    alt="Caminhão A Baratona" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8 z-20">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 shadow-lg">Frota 2025</span>
                          <h3 className="text-3xl font-black text-white leading-none mb-2">Logística Própria</h3>
                          <h4 className="text-xl text-gray-300 font-bold mb-4 opacity-80 group-hover:text-white transition-colors">Frota Própria Baratona</h4>
                          
                          <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                              <p className="text-gray-400 text-sm border-l-2 border-primary pl-3">
                                  Caminhões monitorados via satélite para entregas precisas e pontuais.
                              </p>
                          </div>
                      </div>
                  </div>
               </div>

               {/* Card 2: Coleta de Resíduos (Dark/Action) */}
               <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-orange-500/20">
                  {/* Background Emulation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 z-0">
                      <i className="fas fa-recycle text-9xl text-white/5 absolute -left-4 -top-4 transform rotate-12 group-hover:rotate-0 transition-transform duration-700"></i>
                  </div>

                  {/* Image Layer */}
                  <img 
                    src={IMAGES.debris} 
                    alt="Coleta de Entulho" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8 z-20">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">Eco-Friendly</span>
                          <h3 className="text-3xl font-black text-white leading-none mb-2">Coleta de Resíduos</h3>
                          <h4 className="text-xl text-gray-300 font-bold mb-4 opacity-80 group-hover:text-white transition-colors">Entulhos e Resíduos</h4>
                          
                          <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                              <p className="text-gray-400 text-sm border-l-2 border-primary pl-3">
                                  Destinação correta para restos de obra, madeira, caliça e jardinagem.
                              </p>
                          </div>
                      </div>
                  </div>
               </div>

               {/* Card 3: Caçambas Padrão (Highlighted Orange Brand Color) */}
               <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-orange-500/50 ring-4 ring-transparent hover:ring-white/20">
                  {/* Background Emulation (Orange Brand) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-700 z-0">
                      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
                      <i className="fas fa-cubes text-9xl text-white/10 absolute -right-8 -bottom-8 transform rotate-12 group-hover:scale-125 transition-transform duration-700"></i>
                  </div>

                  {/* Image Layer (Blended) */}
                  <img 
                    src={IMAGES.skipBin} 
                    alt="Caçambas Padrão" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-20 mix-blend-overlay" 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-transparent to-transparent flex flex-col justify-end p-8 z-20">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex gap-2 mb-3">
                              <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded">3m³</span>
                              <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded">5m³</span>
                              <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded">8m³</span>
                          </div>
                          <h3 className="text-3xl font-black text-white leading-none mb-2">Caçambas Padrão</h3>
                          <h4 className="text-xl text-orange-100 font-bold mb-4 opacity-90 group-hover:text-white transition-colors">Para todo tamanho de obra</h4>
                          
                          <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                             <button className="mt-2 bg-white text-primary font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                                <i className="fab fa-whatsapp"></i> Pedir Agora
                             </button>
                          </div>
                      </div>
                  </div>
               </div>

            </div>
          </div>
        </section>

        {/* Testimonials - Vertical Scrolling */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                  <span className="text-primary font-bold uppercase tracking-wider">Depoimentos Reais</span>
                  <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6 leading-tight">
                      O que dizem <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">nossos clientes?</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                      A satisfação de quem constrói e reforma com a Baratona. São milhares de caçambas entregues e retiradas com pontualidade.
                  </p>
                  
                  <div className="flex items-center gap-4 mb-8">
                      <div className="text-center">
                          <span className="block text-3xl font-black text-secondary">4.9</span>
                          <div className="text-yellow-400 text-xs">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                          </div>
                          <span className="text-xs text-gray-400">Google Reviews</span>
                      </div>
                      <div className="h-12 w-px bg-gray-300"></div>
                      <div className="text-center">
                          <span className="block text-3xl font-black text-secondary">+5k</span>
                          <span className="text-xs text-gray-400 block mt-1">Clientes Atendidos</span>
                      </div>
                  </div>

                  <a href="/contato" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-secondary border border-transparent rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                      Quero ser o próximo
                  </a>
              </div>
              
              <div className="relative">
                  {/* Decorative blob behind testimonials */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-blue-50 rounded-[2rem] blur-xl opacity-50 transform rotate-3"></div>
                  <VerticalTestimonials />
              </div>
            </div>
          </div>
        </section>

        {/* News Carousel Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Blog A Baratona</span>
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">Dicas & Novidades</h2>
              <div className="w-24 h-2 bg-gradient-to-r from-primary to-yellow-400 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600">Fique por dentro das melhores práticas para sua obra e atualizações do setor.</p>
            </div>
            <NewsCarousel />
          </div>
        </section>

        {/* Location Marquees */}
        <section id="locais" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 mb-12 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">Onde a Baratona está?</h2>
            <p className="text-gray-600">Atendemos toda Curitiba e Região Metropolitana. Confira se sua região está na rota!</p>
          </div>
          
          <div className="space-y-12">
              <div>
                  <div className="flex items-center gap-3 justify-center mb-6 text-blue-800 font-bold uppercase tracking-wider">
                      <i className="fas fa-map-marked-alt"></i> Cidades Atendidas
                  </div>
                  <InfiniteMarquee items={CITIES} color="blue" />
              </div>

              <div>
                   <div className="flex items-center gap-3 justify-center mb-6 text-green-800 font-bold uppercase tracking-wider">
                      <i className="fas fa-tree"></i> Bairros de Curitiba
                  </div>
                  <InfiniteMarquee items={NEIGHBORHOODS} color="green" />
              </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;