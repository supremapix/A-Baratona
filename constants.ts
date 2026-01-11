import { LocationData, PricingTier, ServiceItem, Testimonial, NewsItem } from './types';

export const COMPANY_INFO = {
  name: "A Baratona Locação de Caçambas",
  phone: "(41) 3275-0505",
  whatsapp: "(41) 99670-1500",
  whatsappRaw: "5541996701500",
  email: "sac@abaratonacacambas.com.br",
  address: "Rua Waldemar Loureiro Campos, 4119 - Xaxim, Curitiba - PR",
  mapCoords: { lat: -25.467977, lng: -49.248827 }
};

// Slider Images for Hero Section
export const HERO_SLIDES = [
  // 1. General Construction / Worker
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  // 2. Skip Bin / Container specific
  "https://images.unsplash.com/photo-1591955506264-3f5129538638?q=80&w=2070&auto=format&fit=crop",
  // 3. Rubble / Demolition / Action
  "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?q=80&w=2070&auto=format&fit=crop",
  // 4. Heavy Machinery / Excavator
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  // 5. Site / Building / Structure
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=1997&auto=format&fit=crop"
];

// High Reliability Placeholders (Emulating Images) to prevent broken links
// Using Placehold.co with brand colors (Orange #FF6B00, Dark #1A1A1A)
export const IMAGES = {
  // Logo placeholder (though used as component mostly)
  logo: "https://placehold.co/172x64/FF6B00/ffffff?text=A+Baratona", 
  
  // Hero Background: Dark themed construction placeholder
  heroBg: "https://placehold.co/1920x1080/1A1A1A/FF6B00?text=Obras+em+Curitiba+e+Regi%C3%A3o&font=roboto", 
  
  // Truck: Dark background with Orange text
  truck: "https://placehold.co/800x600/1A1A1A/FF6B00?text=Frota+Pr%C3%B3pria+Baratona&font=oswald", 
  
  // Debris: Grey background for rubble context
  debris: "https://placehold.co/800x600/4a4a4a/ffffff?text=Coleta+de+Entulho+e+Res%C3%ADduos&font=oswald", 
  
  // Yellow Skip Bin: Orange/Yellow background to match "Caçamba Amarela"
  skipBin: "https://placehold.co/800x600/FF6B00/ffffff?text=Ca%C3%A7ambas+3m%C2%B3+5m%C2%B3+e+8m%C2%B3&font=oswald", 
  
  // Excavator: Heavy machinery placeholder
  excavator: "https://placehold.co/800x600/222222/FF6B00?text=M%C3%A1quinas+e+Terraplanagem&font=oswald",
  
  // Landfill/Environment
  landfill: "https://placehold.co/800x600/2E8B57/ffffff?text=Descarte+Ecol%C3%B3gico&font=roboto",
  
  // Mascot
  mascot: "https://placehold.co/300x300/FF6B00/ffffff?text=Rei+da+Ca%C3%A7amba&font=roboto",
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

// Expanded to 25 testimonials for the animation
export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Ricardo Souza", role: "Mestre de Obras", content: "A melhor de Curitiba. Sempre entregam no horário combinado, essencial para não parar a obra.", stars: 5 },
  { id: 2, name: "Ana Paula", role: "Arquiteta", content: "Atendimento excelente pelo WhatsApp. A caçamba chegou limpa e recolheram super rápido.", stars: 5 },
  { id: 3, name: "Construtora Prata", role: "Cliente Corporativo", content: "Parceria de anos. Preço justo e nunca nos deixaram na mão, mesmo em feriados.", stars: 5 },
  { id: 4, name: "João Carlos", role: "Pedreiro", content: "No Xaxim eles são os mais rápidos. Pedi de manhã e antes do almoço já estava na obra.", stars: 5 },
  { id: 5, name: "Maria Helena", role: "Dona de Casa", content: "Fiz uma limpeza no jardim e a caçamba pequena foi ideal. O motorista foi muito educado.", stars: 5 },
  { id: 6, name: "Eng. Roberto", role: "Engenheiro Civil", content: "Documentação ambiental impecável. Essencial para obras grandes que precisam de CTR.", stars: 5 },
  { id: 7, name: "Felipe Mendes", role: "Empreiteiro", content: "Preço imbatível na região do Pinheirinho. Recomendo de olhos fechados.", stars: 4 },
  { id: 8, name: "Carla Dias", role: "Reforma Residencial", content: "O atendimento via WhatsApp é muito prático. Resolveram tudo em 5 minutos.", stars: 5 },
  { id: 9, name: "Marcos Viana", role: "Demolidora Viana", content: "As caçambas de 8m³ são reforçadas, aguentam concreto pesado sem problemas.", stars: 5 },
  { id: 10, name: "Sônia Lima", role: "Jardim das Américas", content: "Entrega pontualíssima. O caminhão era novo e não estragou minha calçada.", stars: 5 },
  { id: 11, name: "Pedro Santos", role: "Mestre de Obras", content: "Já aluguei com várias, mas a Baratona é a única que não falha na retirada.", stars: 5 },
  { id: 12, name: "Amanda K.", role: "Síndica", content: "Atenderam nosso condomínio no Água Verde com muita agilidade. Nota 10.", stars: 5 },
  { id: 13, name: "Lucas P.", role: "Construtora LP", content: "Troca simultânea funciona de verdade. O caminhão chega com a vazia e leva a cheia.", stars: 5 },
  { id: 14, name: "Beatriz M.", role: "Arquiteta", content: "Sempre indico para meus clientes. Confiança é tudo nesse ramo.", stars: 5 },
  { id: 15, name: "Rafael T.", role: "Bairro Alto", content: "Moro numa rua estreita e o motorista foi ninja, colocou a caçamba certinho.", stars: 5 },
  { id: 16, name: "Cláudio R.", role: "Reforma Loja", content: "Precisava tirar entulho de noite no shopping e eles atenderam. Serviço diferenciado.", stars: 5 },
  { id: 17, name: "Geraldo F.", role: "Pedreiro", content: "Caçamba boa, não vem amassada nem furada. O entulho não cai na rua.", stars: 4 },
  { id: 18, name: "Mônica B.", role: "Boqueirão", content: "Preço justo. Pesquisei em 5 lugares e a Baratona ganhou.", stars: 5 },
  { id: 19, name: "Igor S.", role: "Engenheiro", content: "O sistema de gestão de resíduos deles é sério. Importante para a certificação da obra.", stars: 5 },
  { id: 20, name: "Fernanda L.", role: "Santa Felicidade", content: "Atendimento top! A menina do WhatsApp é super atenciosa.", stars: 5 },
  { id: 21, name: "Bruno G.", role: "Empreiteiro", content: "Fechei pacote mensal e consegui um desconto ótimo. Vale a pena.", stars: 5 },
  { id: 22, name: "Tatiane M.", role: "Cajuru", content: "Chegou rápido, retirou rápido. Sem dor de cabeça.", stars: 5 },
  { id: 23, name: "André W.", role: "Reforma", content: "Facilidade no pagamento e nota fiscal na hora. Profissionais.", stars: 5 },
  { id: 24, name: "Lúcia H.", role: "Batel", content: "Serviço limpo e organizado. Recomendo para obras de alto padrão.", stars: 5 },
  { id: 25, name: "Jorge M.", role: "Mestre de Obras", content: "O nome já diz tudo, preço bom e serviço de primeira.", stars: 5 },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Novas regras para descarte de resíduos em Curitiba",
    excerpt: "Confira o que mudou na legislação municipal sobre caçambas estacionárias e evite multas na sua obra.",
    date: "15 Jan 2025",
    image: "https://placehold.co/800x500/1A1A1A/FF6B00?text=Legisla%C3%A7%C3%A3o+Ambiental",
    category: "Legislação"
  },
  {
    id: 2,
    title: "Como calcular o tamanho da caçamba ideal?",
    excerpt: "Guia completo para você não desperdiçar dinheiro pedindo uma caçamba muito grande ou muito pequena.",
    date: "10 Jan 2025",
    image: "https://placehold.co/800x500/FF6B00/ffffff?text=Guia+de+Tamanhos",
    category: "Dicas"
  },
  {
    id: 3,
    title: "A Baratona renova frota de caminhões em 2024",
    excerpt: "Investimento em tecnologia e sustentabilidade para garantir entregas ainda mais rápidas em Curitiba.",
    date: "05 Jan 2025",
    image: "https://placehold.co/800x500/333333/ffffff?text=Frota+Nova+2025",
    category: "Institucional"
  },
  {
    id: 4,
    title: "Dicas para economizar na reforma da sua casa",
    excerpt: "Planejamento é tudo. Veja como organizar o cronograma da sua obra e reduzir o desperdício de materiais.",
    date: "28 Dez 2024",
    image: "https://placehold.co/800x500/f3f4f6/1A1A1A?text=Dicas+de+Economia",
    category: "Economia"
  },
  {
    id: 5,
    title: "O que pode e o que não pode colocar na caçamba?",
    excerpt: "Entenda a classificação de resíduos e saiba o que é proibido descartar em caçambas de entulho comuns.",
    date: "20 Dez 2024",
    image: "https://placehold.co/800x500/22c55e/ffffff?text=Descarte+Consciente",
    category: "Educativo"
  }
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
  "Vila São João", "Vila São Miguel", "Vila Santo Antônio", "Vila Verde II", "Vila Verde III", "Vila Verde IV", 
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