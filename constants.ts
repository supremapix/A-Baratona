import { LocationData, PricingTier, ServiceItem, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "A Baratona Locação de Caçambas",
  phone: "(41) 3275-0505",
  whatsapp: "(41) 99670-1500",
  whatsappRaw: "5541996701500",
  email: "sac@abaratonacacambas.com.br",
  address: "Rua Waldemar Loureiro Campos, 4119 - Xaxim, Curitiba - PR",
  mapCoords: { lat: -25.467977, lng: -49.248827 }
};

// Image Placeholders (using placeholders because local files aren't available in this env, 
// but mapping to the requested names for structure)
export const IMAGES = {
  logo: "https://placehold.co/172x64/orange/white?text=A+Baratona", // locacaoes-cacambas-a-baratona-em-curitiba-1-172x64.png
  heroBg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", // a-baratona-aluguel-de-cacambas-estacionarias-em-curitba-1-607x963.jpg
  truck: "https://images.unsplash.com/photo-1615818497946-4903e1e3b677?q=80&w=1000&auto=format&fit=crop", // cacambas-pinheirinho-xaxim-capao-raso-a-baratona-em-curitiba-564x799.jpg
  debris: "https://images.unsplash.com/photo-1595245842247-495293674e2d?q=80&w=1000", // buscar-entulhos-em-curitiba-552x326.jpg
  landfill: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000", // aterro-para-entulhos-em-curitiba-552x326.jpg
  sorting: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=1000", // tete-entulhos-em-curitiba-552x326.jpg
  mascot: "https://placehold.co/300x300/orange/white?text=Rei+da+Cacamba", // o-rei-da-caamba-de-curitiba-300x300.jpg
};

export const PRICING: PricingTier[] = [
  {
    size: "3m³",
    title: "Pequena / Standard",
    price: "Consulte",
    recommendedFor: "Pequenas reformas, limpeza de jardins",
    features: ["Entrega Imediata", "Até 3 dias no local", "Coleta agendada", "Resíduos Classe A"]
  },
  {
    size: "5m³",
    title: "Média / Popular",
    price: "Melhor Custo",
    recommendedFor: "Reformas médias, troca de pisos",
    features: ["Entrega Imediata", "Até 5 dias no local", "Coleta agendada", "Resíduos mistos (consulte)"]
  },
  {
    size: "8m³",
    title: "Grande / Obra",
    price: "Consulte",
    recommendedFor: "Grandes obras, demolições",
    features: ["Entrega Imediata", "Até 7 dias no local", "Troca simultânea", "Grande volume"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Ricardo Souza", role: "Mestre de Obras", content: "A melhor de Curitiba. Sempre entregam no horário combinado, essencial para não parar a obra.", stars: 5 },
  { id: 2, name: "Ana Paula", role: "Arquiteta", content: "Atendimento excelente pelo WhatsApp. A caçamba chegou limpa e recolheram super rápido.", stars: 5 },
  { id: 3, name: "Construtora Prata", role: "Cliente Corporativo", content: "Parceria de anos. Preço justo e nunca nos deixaram na mão, mesmo em feriados.", stars: 5 },
];

export const CITIES_LIST = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", 
  "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", 
  "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha", 
  "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const NEIGHBORHOODS_LIST = [
  // Curitiba Main
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", 
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", 
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", 
  "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", 
  "Centro Histórico", "Ecoville", "Carmo", "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", 
  "Alto da XV", "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", 
  "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", 
  "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão da Imbuia", 
  "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", "CIC", "Cristo Rei", "Fanny", 
  "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", 
  "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", 
  "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", 
  "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", 
  "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", 
  "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", 
  "Vila Izabel", "Vista Alegre", "Xaxim",
  // CIC Vilas
  "Vila Verde", "Vila São José", "Vila Santa Helena", "Vila Industrial", "Vila Conquista", 
  "Vila União", "Vila Nova Esperança", "Vila Osternack", "Vila Nova", "Vila São Domingos", 
  "Vila Audi União", "Vila Becker", "Vila Copel", "Vila Eletrosul", "Vila Trabalhador", 
  "Vila São Miguel", "Vila Santo Antônio", "Vila Verde II", "Vila Verde III", "Vila Verde IV", 
  "Vila Verde V", "Vila Nova Primavera", "Vila Araucária", "Vila Concórdia", "Vila São Judas Tadeu", 
  "Vila São Mateus", "Vila São Pedro", "Vila São Marcos", "Vila São Paulo", "Vila Barigui", 
  "Vila Reno", "Vila Formosa", "Vila Sandra", "Vila Pantanal", "Neo Ville", "Conjunto Caiuá", 
  "Conjunto Parigot de Souza", "Conjunto Sabará", "Conjunto Vitória Régia", "Conjunto Nova Esperança"
];

// Helper to normalize strings for slugs
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const CITIES: LocationData[] = CITIES_LIST.map(name => ({
  name,
  slug: slugify(name),
  type: 'city'
}));

export const NEIGHBORHOODS: LocationData[] = NEIGHBORHOODS_LIST.map(name => ({
  name,
  slug: slugify(name),
  type: 'neighborhood'
}));

export const ALL_LOCATIONS = [...CITIES, ...NEIGHBORHOODS];