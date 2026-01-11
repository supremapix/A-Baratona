import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationBySlug, generateLocationContent } from '../utils/seoHelper';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO, IMAGES } from '../constants';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocationBySlug(slug) : undefined;

  // If slug is invalid, redirect to home
  if (!location) {
    return <Navigate to="/" replace />;
  }

  const content = generateLocationContent(location);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Schema LD JSON
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `A Baratona Caçambas - ${location.name}`,
    "image": IMAGES.logo,
    "telephone": COMPANY_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR"
    },
    "description": content.metaDesc,
    "areaServed": location.name
  };

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDesc} />
        <link rel="canonical" href={`https://abaratonacacambas.com.br/${location.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="bg-gray-50 min-h-screen pt-20">
        {/* Mini Hero */}
        <div className="bg-secondary text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Atendimento Exclusivo</p>
            <h1 className="text-3xl md:text-5xl font-black mb-4">Caçambas em {location.name}</h1>
            <div className="flex justify-center gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">{location.name}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content (SEO Text) */}
            <div className="lg:col-span-2 space-y-12">
              <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-4">
                  {content.text1.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{content.text1.content}</p>
                <img src={IMAGES.truck} alt={`Caminhão de Caçamba em ${location.name}`} className="w-full h-64 object-cover rounded-lg mb-6" />
                
                <h2 className="text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-4">
                  {content.text2.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">{content.text2.content}</p>
              </article>

              <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-4">
                  {content.text3.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{content.text3.content}</p>
                
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 my-6">
                    <h4 className="font-bold text-secondary mb-2"><i className="fas fa-star text-yellow-500 mr-2"></i>Dica do Especialista</h4>
                    <p className="text-sm text-gray-700">Para obras em {location.name}, recomendamos solicitar a caçamba com 24h de antecedência para garantir o melhor horário de entrega, embora consigamos atender urgências em até 2h dependendo da rota.</p>
                </div>

                <h2 className="text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-4">
                  {content.text4.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">{content.text4.content}</p>
              </article>

              {/* Call to Action Bar */}
              <div className="bg-primary rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold">Precisa de caçamba em {location.name}?</h3>
                  <p className="text-orange-100">Não perca tempo, peça agora pelo WhatsApp.</p>
                </div>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Olá, vi o site e preciso de caçamba em ${location.name}`}
                  className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md whitespace-nowrap"
                >
                  <i className="fab fa-whatsapp mr-2"></i> PEDIR AGORA
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-secondary p-6 rounded-xl shadow-xl sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Orçamento Rápido para <span className="text-primary">{location.name}</span>
                </h3>
                <ContactForm />
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="font-bold text-secondary mb-4">Serviços Populares</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Remoção de Entulho</li>
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Caçamba para Reforma</li>
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Coleta de Podas</li>
                    <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Resíduos de Demolição</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LocationPage;