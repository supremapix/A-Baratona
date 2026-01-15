
import { COMPANY_INFO, ALL_LOCATIONS, NEWS_ITEMS } from '../constants';
import { LocationData } from '../types';

export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return ALL_LOCATIONS.find(loc => loc.slug === slug);
};

const getVariedIntro = (name: string) => {
  const intros = [
    `Precisa de agilidade? A locação de caçambas em ${name} é essencial para manter sua obra organizada e dentro das normas ambientais.`,
    `Se você está construindo ou reformando em ${name}, a A Baratona oferece o serviço de remoção de entulho mais rápido da região.`,
    `Atendemos toda a região de ${name} com caçambas estacionárias legalizadas e descarte 100% correto.`,
    `A solução definitiva para o entulho da sua obra em ${name} está aqui. Entrega expressa e preço justo.`
  ];
  return intros[name.length % intros.length];
};

export const generateHomeSchemas = () => {
  const baseUrl = "https://abaratonacacambas.com.br";
  
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "image": `${baseUrl}/logo.png`,
      "@id": `${baseUrl}/#organization`,
      "url": baseUrl,
      "telephone": COMPANY_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_INFO.address,
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "81810-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": COMPANY_INFO.mapCoords.lat,
        "longitude": COMPANY_INFO.mapCoords.lng
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/abaratonacacambas",
        "https://www.instagram.com/abaratonacacambas"
      ]
    }
  ];
};

export const generateLocationContent = (location: LocationData) => {
  const isCity = location.type === 'city';
  const locName = location.name;
  const baseUrl = "https://abaratonacacambas.com.br";
  const currentUrl = `${baseUrl}/${location.slug}`;
  const intro = getVariedIntro(locName);
  
  const metaTitle = `Aluguel de Caçambas em ${locName} | Entrega em 2h | A Baratona`;
  const metaDesc = `Locação de caçambas em ${locName}. Peça sua caçamba 3m³, 5m³ ou 8m³ com o melhor preço de Curitiba. Atendimento 24h via WhatsApp em ${locName}.`;
  
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${COMPANY_INFO.name} - Unidade ${locName}`,
    "description": metaDesc,
    "url": currentUrl,
    "telephone": COMPANY_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": isCity ? locName : "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "Place",
      "name": locName
    },
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": `Como alugar caçamba em ${locName}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Para alugar uma caçamba em ${locName}, basta entrar em contato pelo WhatsApp ${COMPANY_INFO.whatsapp}. Informamos o preço na hora e entregamos em até 2 horas.`
      }
    }, {
      "@type": "Question",
      "name": `Qual o preço da caçamba de entulho em ${locName}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `O preço da caçamba em ${locName} varia conforme o tamanho (3m³, 5m³ ou 8m³). Oferecemos o melhor custo-benefício de Curitiba e região.`
      }
    }]
  };

  return {
    title: metaTitle,
    metaDesc: metaDesc,
    canonical: currentUrl,
    intro,
    text1: {
      heading: `Locação de Caçambas em ${locName}`,
      content: `${intro} A Baratona é especialista em atender ${locName} com agilidade extrema. Nossa frota circula diariamente por toda a região, garantindo que seu entulho seja removido sem atrasos.`
    },
    text2: {
      heading: `Disk Caçamba ${locName}`,
      content: `O serviço de Disk Caçamba em ${locName} funciona 24h para pedidos via WhatsApp. Atendemos residências, condomínios e grandes obras comerciais em ${locName} com equipamentos novos e seguros.`
    },
    text3: {
      heading: `Benefícios para sua obra em ${locName}`,
      content: `Ao escolher A Baratona em ${locName}, você garante um descarte ecológico. Levamos todo o material para usinas de reciclagem, evitando multas ambientais para sua obra em ${locName}.`
    },
    text4: {
      heading: `Atendimento em ${locName} e Proximidades`,
      content: `Seja no centro ou nos arredores de ${locName}, nossa equipe conhece bem as rotas e horários permitidos para estacionamento de caçambas, facilitando a logística do seu projeto.`
    },
    schemas: [breadcrumbSchema, localBusinessSchema, faqSchema]
  };
};

/**
 * Generates a sitemap XML string containing all site routes.
 * This is used for search engine optimization.
 */
export const generateSitemapXML = () => {
  const baseUrl = "https://abaratonacacambas.com.br";
  
  const staticPages = [
    { url: '', priority: '1.0' },
    { url: 'contato', priority: '0.7' }
  ];

  const locationPages = ALL_LOCATIONS.map(loc => ({
    url: loc.slug,
    priority: '0.9'
  }));

  const blogPages = NEWS_ITEMS.map(post => ({
    url: `blog/${post.slug}`,
    priority: '0.6'
  }));

  const allPages = [...staticPages, ...locationPages, ...blogPages];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  allPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/${page.url}</loc>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};
