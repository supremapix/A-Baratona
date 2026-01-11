import { COMPANY_INFO, ALL_LOCATIONS } from '../constants';
import { LocationData } from '../types';

export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return ALL_LOCATIONS.find(loc => loc.slug === slug);
};

// Function to generate slightly different phrasing to avoid duplicate content penalties
const getVariedIntro = (name: string, type: 'city' | 'neighborhood') => {
  const intros = [
    `A demanda por locação de caçambas em ${name} tem crescido exponencialmente devido ao aumento de obras e reformas na região.`,
    `Se você está construindo ou reformando em ${name}, sabe que o descarte correto de entulhos é fundamental para evitar multas.`,
    `Para moradores e empresas de ${name}, a A Baratona oferece a solução mais ágil em caçambas estacionárias.`,
    `Chegou a hora de organizar sua obra em ${name} com o serviço de remoção de entulhos mais confiável do Paraná.`
  ];
  // Deterministic selection based on name length so it stays consistent per page
  return intros[name.length % intros.length];
};

export const generateLocationContent = (location: LocationData) => {
  const isCity = location.type === 'city';
  const locName = location.name;
  const baseUrl = "https://abaratonacacambas.com.br";
  const currentUrl = `${baseUrl}/${location.slug}`;
  const intro = getVariedIntro(locName, location.type);
  
  // Advanced Meta Data
  const metaTitle = `Aluguel de Caçambas em ${locName} - Entrega Rápida | A Baratona`;
  const metaDesc = `Precisa de caçamba em ${locName}? Locação de caçambas 3m³, 5m³ e 8m³ com melhor preço. Entrega em até 2h para ${locName}. Peça pelo WhatsApp!`;
  
  const content = {
    title: metaTitle,
    metaDesc: metaDesc,
    canonical: currentUrl,
    
    text1: {
      heading: `Locação de Caçambas em ${locName}`,
      content: `${intro} Seja para construções residenciais, comerciais ou pequenas reformas domésticas, o descarte correto de entulhos é lei. A Baratona se destaca como líder no fornecimento de caçambas estacionárias em ${locName}, garantindo que seu projeto siga sem interrupções. Nossa frota moderna permite acesso fácil mesmo nas ruas mais estreitas de ${locName}, assegurando pontualidade e eficiência máxima.`
    },
    
    text2: {
      heading: `Serviços de Remoção de Entulho em ${locName}`,
      content: `Em ${locName}, os serviços mais solicitados envolvem a remoção de resíduos de construção civil (Classe A), como tijolos, concreto e argamassa. No entanto, também atendemos demandas para limpeza de terrenos, podas de jardim e descarte de madeira. Nossas caçambas de 3m³, 5m³ e 8m³ são perfeitamente dimensionadas para qualquer tamanho de obra em ${locName}. Oferecemos um processo simplificado: você solicita via WhatsApp, nós entregamos, você enche e nós retiramos e destinamos corretamente aos aterros autorizados.`
    },
    
    text3: {
      heading: `Por que escolher A Baratona em ${locName}?`,
      content: `O grande diferencial da A Baratona em ${locName} é nossa agilidade e compromisso com o cliente. Entendemos que uma obra parada por falta de espaço para entulho é prejuízo. Por isso, oferecemos entrega expressa em até 2 horas para diversas áreas de ${locName} e região. Além disso, nossos preços são imbatíveis. Cobrimos orçamentos e oferecemos condições especiais para construtores e empreiteiros que atuam em ${locName}. Nosso atendimento é humanizado, 24 horas por dia via WhatsApp.`
    },
    
    text4: {
      heading: `Atendimento Completo em ${locName} e Região`,
      content: `Nossa logística cobre 100% da área de ${locName}, chegando onde outras empresas não chegam. Conhecemos cada rua e particularidade de ${locName}, o que facilita o posicionamento correto da caçamba conforme as normas de trânsito locais. Seja no centro de ${locName} ou nos bairros mais afastados, a A Baratona é a escolha certa. Milhares de clientes em ${locName} já comprovaram a qualidade do nosso serviço. Não arrisque multas por descarte irregular; contrate quem entende do assunto.`
    }
  };

  // Structured Data (JSON-LD)
  
  // 1. BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": `Caçambas em ${locName}`,
      "item": currentUrl
    }]
  };

  // 2. LocalBusiness / Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Locação de Caçambas",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "image": "https://abaratonacacambas.com.br/logo.png", // Assuming logo path
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_INFO.address,
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "Place",
      "name": locName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": isCity ? locName : "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
      }
    },
    "description": metaDesc,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tamanhos de Caçambas",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Caçamba 3m³"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Caçamba 5m³"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Caçamba 8m³"
          }
        }
      ]
    }
  };

  // 3. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": `Quanto custa alugar uma caçamba em ${locName}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Os valores variam conforme o tamanho (3m, 5m ou 8m) e o tipo de resíduo. Entre em contato pelo WhatsApp ${COMPANY_INFO.whatsapp} para um orçamento personalizado para ${locName}.`
      }
    }, {
      "@type": "Question",
      "name": `Qual o prazo de entrega para ${locName}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Para ${locName}, conseguimos entregar caçambas em até 2 horas após a confirmação do pedido, dependendo da disponibilidade logística do momento.`
      }
    }, {
      "@type": "Question",
      "name": `Posso colocar a caçamba na rua em ${locName}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, desde que respeite as normas de trânsito. Nossa equipe orienta sobre a melhor posição para evitar multas e garantir a segurança."
      }
    }]
  };

  return {
    ...content,
    schemas: [breadcrumbSchema, serviceSchema, faqSchema]
  };
};

export const generateSitemapXML = () => {
  const baseUrl = "https://abaratonacacambas.com.br";
  const staticPages = [
    `${baseUrl}/`,
  ];
  
  // Ensure we cover all 150+ locations defined in constants
  const dynamicPages = ALL_LOCATIONS.map(loc => `${baseUrl}/${loc.slug}`);
  
  const allUrls = [...staticPages, ...dynamicPages];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  allUrls.forEach(url => {
    // Priority: Home 1.0, Cities 0.9, Neighborhoods 0.8
    let priority = '0.8';
    if (url === `${baseUrl}/`) priority = '1.0';
    // Logic to check if it's a city (simplified based on url structure/knowledge)
    
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  });
  
  xml += `</urlset>`;
  return xml;
};