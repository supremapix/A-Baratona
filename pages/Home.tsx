import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO, IMAGES, CITIES, NEIGHBORHOODS, HERO_SLIDES } from '../constants';
import { generateHomeSchemas } from '../utils/seoHelper';
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
  const homeSchemas = generateHomeSchemas();

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
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <Helmet>
        <title>Aluguel de Caçambas em Curitiba | Entrega 2h | A Baratona</title>
        <meta name="description" content="A Baratona Caçambas: Locação de caçambas estacionárias em Curitiba e Região. Atendimento 24h via WhatsApp, entrega em 2h e descarte ecológico." />
        <link rel="canonical" href="https://abaratonacacambas.com.br" />
        
        <meta property="og:title" content="Aluguel de Caçambas em Curitiba | A Baratona" />
        <meta property="og:description" content="Entrega rápida de caçambas em Curitiba. Melhor preço e atendimento 24h." />
        <meta property="og:url" content="https://abaratonacacambas.com.br" />
        <meta property="og:image" content={IMAGES.heroBg} />
        
        {homeSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <div id="home">
        {/* Hero Section */}
        <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-secondary">
            {HERO_SLIDES.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img 
                  src={slide} 
                  alt={`A Baratona Caçambas Slide ${index + 1}`} 
                  className={`w-full h-full object-cover transform transition-transform duration-[6000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`} 
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/40"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 pt-10 md:pt-0">
              <span className="inline-block px-4 py-1 bg-primary rounded-full text-sm font-bold uppercase tracking-wider animate-pulse border border-orange-400 shadow-[0_0_15px_rgba(255,107,0,0.5)]">
                Entrega Rápida em até 2 horas
              </span>
              <div className="min-h-[120px] md:min-h-[160px]">
                <h1 className="text-4xl md:text-6xl font-black leading-tight mb-2">Locação de Caçambas</h1>
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

        {/* Rest of the components remain the same */}
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

        <VideoSection />

        <section id="precos" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50 -skew-x-12 translate-x-1/3 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Tabela 2025</span>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">Escolha o Tamanho Ideal</h2>
                <PricingTable />
              </div>
              <div className="relative">
                <div className="sticky top-28 z-20">
                  <Calculator />
                  <div className="mt-8 bg-secondary rounded-2xl p-8 text-white text-center relative overflow-hidden shadow-2xl">
                      <AnimatedAlertIcon size="lg" />
                      <h4 className="text-2xl font-bold text-primary mb-2">Precisando de Ajuda?</h4>
                      <a href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} className="inline-block w-full bg-[#25D366] py-4 rounded-xl font-bold hover:bg-green-500 transition-colors shadow-lg">
                          <i className="fab fa-whatsapp mr-2 text-xl"></i> CALCULAR NO WHATS
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary text-white relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Qualidade Premium</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-2">Nossa Frota e Serviços</h2>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <img src={IMAGES.truck} alt="Frota de Caçambas" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-3xl font-black text-white leading-none mb-2">Logística Própria</h3>
                  </div>
               </div>
               <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <img src={IMAGES.debris} alt="Remoção de Entulho" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-3xl font-black text-white leading-none mb-2">Coleta de Resíduos</h3>
                  </div>
               </div>
               <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <img src={IMAGES.skipBin} alt="Caçambas Estacionárias" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-3xl font-black text-white leading-none mb-2">Caçambas Padrão</h3>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6 leading-tight">O que dizem nossos clientes?</h2>
                  <VerticalTestimonials />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <NewsCarousel />
          </div>
        </section>

        <section id="locais" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 mb-12 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">Onde a Baratona está?</h2>
          </div>
          <div className="space-y-12">
              <InfiniteMarquee items={CITIES} color="blue" />
              <InfiniteMarquee items={NEIGHBORHOODS} color="green" />
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;