import { COMPANY_INFO, ALL_LOCATIONS } from '../constants';
import { LocationData } from '../types';

export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return ALL_LOCATIONS.find(loc => loc.slug === slug);
};

export const generateLocationContent = (location: LocationData) => {
  const isCity = location.type === 'city';
  const locName = location.name;
  
  return {
    title: `Aluguel de Caçambas em ${locName} - Curitiba | A Baratona`,
    metaDesc: `Precisando de caçamba em ${locName}? A Baratona oferece locação rápida e barata. Caçambas 3m, 5m e 8m. Atendemos ${locName} com entrega expressa.`,
    
    text1: {
      heading: `Locação de Caçambas em ${locName}`,
      content: `A demanda por locação de caçambas em ${locName} tem crescido exponencialmente devido ao aumento de obras e reformas na região. Seja para construções residenciais, comerciais ou pequenas reformas domésticas, o descarte correto de entulhos é fundamental para manter a organização e cumprir com as leis ambientais. A Baratona se destaca como líder no fornecimento de caçambas estacionárias em ${locName}, garantindo que seu projeto siga sem interrupções. Nossa frota moderna permite acesso fácil mesmo nas ruas mais estreitas de ${locName}, assegurando pontualidade e eficiência.`
    },
    
    text2: {
      heading: `Serviços de Remoção de Entulho em ${locName}`,
      content: `Em ${locName}, os serviços mais solicitados envolvem a remoção de resíduos de construção civil (Classe A), como tijolos, concreto e argamassa. No entanto, também atendemos demandas para limpeza de terrenos, podas de jardim e descarte de madeira. Nossas caçambas de 3m³, 5m³ e 8m³ são perfeitamente dimensionadas para qualquer tamanho de obra em ${locName}. Oferecemos um processo simplificado: você solicita via WhatsApp, nós entregamos, você enche e nós retiramos e destinamos corretamente aos aterros autorizados, garantindo que ${locName} permaneça limpa e sustentável.`
    },
    
    text3: {
      heading: `Por que escolher A Baratona em ${locName}?`,
      content: `O grande diferencial da A Baratona em ${locName} é nossa agilidade e compromisso com o cliente. Entendemos que uma obra parada por falta de espaço para entulho é prejuízo. Por isso, oferecemos entrega expressa em até 2 horas para diversas áreas de ${locName} e região. Além disso, nossos preços são imbatíveis. Cobrimos orçamentos e oferecemos condições especiais para construtores e empreiteiros que atuam em ${locName}. Nosso atendimento é humanizado, 24 horas por dia via WhatsApp, facilitando a vida de quem constrói ou reforma.`
    },
    
    text4: {
      heading: `Atendimento Completo em ${locName} e Região`,
      content: `Nossa logística cobre 100% da área de ${locName}, chegando onde outras empresas não chegam. Conhecemos cada rua e particularidade de ${locName}, o que facilita o posicionamento correto da caçamba conforme as normas de trânsito locais. Seja no centro de ${locName} ou nos bairros mais afastados, a A Baratona é a escolha certa. Milhares de clientes em ${locName} já comprovaram a qualidade do nosso serviço. Não arrisque multas por descarte irregular; contrate quem entende do assunto e possui todas as licenças ambientais para operar em ${locName}.`
    }
  };
};

export const generateSitemapXML = () => {
  const baseUrl = "https://abaratonacacambas.com.br";
  const staticPages = [
    `${baseUrl}/`,
  ];
  
  const dynamicPages = ALL_LOCATIONS.map(loc => `${baseUrl}/${loc.slug}`);
  
  const allUrls = [...staticPages, ...dynamicPages];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  allUrls.forEach(url => {
    xml += `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${url === baseUrl + '/' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
  });
  
  xml += `</urlset>`;
  return xml;
};