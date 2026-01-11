import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationBySlug, generateLocationContent } from '../utils/seoHelper';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO, IMAGES } from '../constants';
import NotFound from './NotFound';
import PageTransition from '../components/PageTransition';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocationBySlug(slug) : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If slug is invalid, show NotFound page
  if (!location) {
    return <NotFound />;
  }

  const content = generateLocationContent(location);

  return (
    <PageTransition>
      <Helmet>
        {/* Basic SEO */}
        <title>{content.title}</title>
        <meta name="description" content={content.metaDesc} />
        <link rel="canonical" href={content.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.metaDesc} />
        <meta property="og:url" content={content.canonical} />
        <meta property="og:image" content={IMAGES.truck} />
        <meta property="og:type" content="website" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content={`Curitiba, ${location.name}`} />
        <meta name="geo.position" content={`${COMPANY_INFO.mapCoords.lat};${COMPANY_INFO.mapCoords.lng}`} />
        <meta name="ICBM" content={`${COMPANY_INFO.mapCoords.lat}, ${COMPANY_INFO.mapCoords.lng}`} />

        {/* Structured Data / JSON-LD Injection */}
        {content.schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <div className="bg-gray-50 min-h-screen pt-20">
        {/* Breadcrumb Visual */}
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
             <ol className="flex text-xs md:text-sm text-gray-500">
               <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
               <li className="mx-2">/</li>
               <li><span className="text-gray-400">Áreas de Atuação</span></li>
               <li className="mx-2">/</li>
               <li className="text-secondary font-bold">{location.name}</li>
             </ol>
          </div>
        </div>

        {/* Mini Hero */}
        <div className="relative overflow-hidden h-64 md:h-80 flex items-center justify-center">
          <img src={IMAGES.heroBg} alt={`Caçambas em ${location.name}`} className="absolute inset-0 w-full h-full object-cover filter brightness-[0.2]" />
          <div className="absolute inset-0 bg-primary/20"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-4 backdrop-blur-sm">
                Entrega em até 2h em {location.name}
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 text-white drop-shadow-lg leading-tight">
              Aluguel de Caçambas<br/> <span className="text-primary">{location.name}</span>
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content (SEO Text) */}
            <div className="lg:col-span-2 space-y-12">
              <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  {content.text1.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-justify">{content.text1.content}</p>
                
                <div className="relative rounded-xl overflow-hidden mb-8 group h-64 shadow-md">
                    <img src={IMAGES.skipBin} alt={`Caminhão de Caçamba em ${location.name}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-bold">Caçambas prontas para entrega em {location.name}</p>
                    </div>
                </div>
                
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  {content.text2.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">{content.text2.content}</p>
              </article>

              <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  {content.text3.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-justify">{content.text3.content}</p>
                
                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border-l-4 border-primary my-8 shadow-sm">
                    <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                        <i className="fas fa-lightbulb text-yellow-500 text-xl"></i>
                        Dica do Especialista A Baratona
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Para obras em <strong>{location.name}</strong>, verifique se haverá necessidade de colocar a caçamba na rua ou na calçada. Em algumas vias, é necessário autorização especial da SETRAN. Nossa equipe cuida de toda a orientação para você não levar multas.
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  {content.text4.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">{content.text4.content}</p>
              </article>

              {/* Call to Action Bar */}
              <div className="bg-secondary rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="mb-6 md:mb-0 relative z-10">
                  <h3 className="text-2xl font-bold mb-1">Precisa de caçamba em {location.name}?</h3>
                  <p className="text-gray-400">Não perca tempo, peça agora pelo WhatsApp.</p>
                </div>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Olá, vi o site e preciso de caçamba em ${location.name}`}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/50 whitespace-nowrap flex items-center gap-2 relative z-10 transform hover:-translate-y-1"
                >
                  <i className="fab fa-whatsapp text-2xl"></i> PEDIR AGORA
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-xl sticky top-24 border-t-4 border-primary z-20">
                <h3 className="text-xl font-bold text-secondary mb-6 text-center">
                  Orçamento Rápido
                </h3>
                <div className="bg-secondary p-4 rounded-xl">
                   <ContactForm />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-secondary mb-4 border-b pb-2">Serviços Populares</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center p-2 hover:bg-gray-50 rounded transition-colors"><i className="fas fa-truck-loading text-primary mr-3"></i> Remoção de Entulho</li>
                    <li className="flex items-center p-2 hover:bg-gray-50 rounded transition-colors"><i className="fas fa-hammer text-primary mr-3"></i> Caçamba para Reforma</li>
                    <li className="flex items-center p-2 hover:bg-gray-50 rounded transition-colors"><i className="fas fa-leaf text-primary mr-3"></i> Coleta de Podas</li>
                    <li className="flex items-center p-2 hover:bg-gray-50 rounded transition-colors"><i className="fas fa-building text-primary mr-3"></i> Resíduos de Demolição</li>
                </ul>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 relative group cursor-pointer">
                 <img src={IMAGES.excavator} alt="Serviços Pesados" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white font-bold text-lg">Precisando de máquinas?</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LocationPage;