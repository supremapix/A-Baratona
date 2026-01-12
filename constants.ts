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

// Slider Images for Hero Section - Updated with Real Assets
export const HERO_SLIDES = [
  // 1. Frota / Fleet
  "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=2070",
  // 2. Operation / Excavator
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=2070",
  // 3. Trucks and Bins
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2070",
  // 4. Construction Site
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  // 5. Urban Construction
  "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?q=80&w=2070&auto=format&fit=crop"
];

// Updated Image Assets
export const IMAGES = {
  // Logo placeholder (though used as component mostly)
  logo: "https://placehold.co/172x64/FF6B00/ffffff?text=A+Baratona", 
  
  // Hero Background: Dark themed construction placeholder
  heroBg: "https://placehold.co/1920x1080/1A1A1A/FF6B00?text=Obras+em+Curitiba+e+Regi%C3%A3o&font=roboto", 
  
  // Truck: Frota Image - White Truck similar to brand
  truck: "https://images.unsplash.com/photo-1591799265444-d66432b91592?auto=format&fit=crop&q=80&w=800", 
  
  // Debris: Excavator Image / Rubble
  debris: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800", 
  
  // Yellow Skip Bin: Trucks and Bins Image
  skipBin: "https://images.unsplash.com/photo-1610450829878-55734358896c?auto=format&fit=crop&q=80&w=800", 
  
  // Excavator: Heavy machinery (Reusing Image 2)
  excavator: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
  
  // Landfill/Environment
  landfill: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
  
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
    slug: "novas-regras-descarte-residuos-curitiba",
    title: "Novas regras para descarte de resíduos em Curitiba",
    excerpt: "Confira o que mudou na legislação municipal sobre caçambas estacionárias e evite multas na sua obra.",
    content: `
      <p>A partir deste ano, a Prefeitura de Curitiba implementou novas diretrizes para o gerenciamento de resíduos da construção civil (RCC). O objetivo é aumentar a taxa de reciclagem e diminuir o descarte irregular em áreas de preservação.</p>
      <h3>O que muda para quem aluga caçambas?</h3>
      <p>Agora, é obrigatório que o gerador do resíduo (você, cliente) exija o CTR (Controle de Transporte de Resíduos) da empresa locadora. Este documento comprova que o entulho foi levado para um aterro ou usina de reciclagem licenciada.</p>
      <p>Além disso, caçambas estacionadas em vias públicas devem seguir rigorosamente as normas de sinalização, com faixas reflexivas e identificação clara da empresa responsável.</p>
      <h3>Multas mais pesadas</h3>
      <p>O não cumprimento das normas pode gerar multas que variam de R$ 500,00 a R$ 50.000,00, dependendo da gravidade da infração e do volume de material descartado incorretamente.</p>
      <p><strong>A Baratona Caçambas já está 100% adequada às novas normas.</strong> Ao contratar nossos serviços, você tem a garantia de destinação correta e documentação em dia.</p>
    `,
    date: "15 Jan 2025",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", // Legislation/Document
    category: "Legislação"
  },
  {
    id: 2,
    slug: "como-calcular-tamanho-cacamba-ideal",
    title: "Como calcular o tamanho da caçamba ideal?",
    excerpt: "Guia completo para você não desperdiçar dinheiro pedindo uma caçamba muito grande ou muito pequena.",
    content: `
      <p>Escolher o tamanho certo da caçamba é fundamental para economizar na sua obra. Pedir uma caçamba muito pequena pode exigir uma segunda locação, dobrando o custo. Pedir uma muito grande é desperdício de espaço.</p>
      <h3>Caçamba de 3m³ (Pequena)</h3>
      <p>Ideal para pequenas reformas, como troca de pisos de um cômodo, pequenas demolições de paredes não estruturais ou limpeza de jardins. Equivale a aproximadamente 40 carrinhos de mão.</p>
      <h3>Caçamba de 5m³ (Média - A mais popular)</h3>
      <p>A mais utilizada em reformas residenciais completas. Comporta entulho de demolição de paredes, troca de telhados de médio porte e reformas de banheiros e cozinhas. Equivale a cerca de 70 a 80 carrinhos de mão.</p>
      <h3>Caçamba de 8m³ (Grande)</h3>
      <p>Indicada para grandes obras, construções desde o alicerce ou grandes demolições. É a melhor opção para construtoras e empreiteiros que geram muito volume rapidamente. Atenção: devido ao peso, em alguns casos só pode ser usada para materiais leves (madeira, plástico, gesso).</p>
      <p>Na dúvida, envie uma foto do seu entulho para nosso WhatsApp e nossa equipe ajuda a calcular!</p>
    `,
    date: "10 Jan 2025",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800", // Calculator
    category: "Dicas"
  },
  {
    id: 3,
    slug: "a-baratona-renova-frota-2025",
    title: "A Baratona renova frota de caminhões em 2025",
    excerpt: "Investimento em tecnologia e sustentabilidade para garantir entregas ainda mais rápidas em Curitiba.",
    content: `
      <p>Comprometida com a eficiência e a sustentabilidade, a A Baratona Caçambas anuncia a renovação de sua frota para 2025. Adquirimos novos caminhões equipados com tecnologia Euro 6, que emitem significativamente menos poluentes na atmosfera.</p>
      <h3>Mais agilidade na entrega</h3>
      <p>Os novos veículos possuem sistemas hidráulicos mais modernos, permitindo que a colocação e retirada das caçambas seja feita em questão de minutos. Isso reduz o tempo de bloqueio da via e agiliza o serviço para o cliente.</p>
      <h3>Rastreamento em tempo real</h3>
      <p>Toda a nova frota é equipada com GPS de alta precisão. Isso permite que nossa central de operações monitore cada entrega e retirada, garantindo que o prazo de "entrega em até 2 horas" seja cumprido rigorosamente.</p>
      <p>É a tecnologia trabalhando a favor da sua obra!</p>
    `,
    date: "05 Jan 2025",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=800", // Fleet (Truck)
    category: "Institucional"
  },
  {
    id: 4,
    slug: "dicas-economizar-reforma",
    title: "Dicas para economizar na reforma da sua casa",
    excerpt: "Planejamento é tudo. Veja como organizar o cronograma da sua obra e reduzir o desperdício de materiais.",
    content: `
      <p>Reformar é realizar um sonho, mas sem planejamento pode virar um pesadelo financeiro. Confira 4 dicas essenciais para manter o orçamento sob controle.</p>
      <ol>
        <li><strong>Tenha um projeto:</strong> Não comece a quebrar nada sem saber exatamente como vai ficar. Mudanças de ideia no meio da obra são as maiores causadoras de prejuízo.</li>
        <li><strong>Compre materiais com antecedência:</strong> Aproveite promoções e evite comprar tudo na última hora, quando você não tem tempo de pesquisar preços.</li>
        <li><strong>Contrate mão de obra qualificada:</strong> "O barato sai caro". Um profissional ruim pode desperdiçar material e fazer serviços que precisarão ser refeitos.</li>
        <li><strong>Gerencie o entulho:</strong> Manter a obra limpa aumenta a produtividade. Alugar uma caçamba e fazer a retirada programada evita acúmulo de sujeira que atrapalha os trabalhadores.</li>
      </ol>
      <p>Conte com a A Baratona para manter sua obra limpa e organizada com o melhor custo-benefício de Curitiba.</p>
    `,
    date: "28 Dez 2024",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800", // Money
    category: "Economia"
  },
  {
    id: 5,
    slug: "o-que-pode-nao-pode-cacamba",
    title: "O que pode e o que não pode colocar na caçamba?",
    excerpt: "Entenda a classificação de resíduos e saiba o que é proibido descartar em caçambas de entulho comuns.",
    content: `
      <p>Muitos clientes têm dúvidas sobre o que é permitido descartar nas caçambas estacionárias. O descarte incorreto pode gerar multas e até a recusa da retirada pela empresa, pois os aterros são rigorosos.</p>
      <h3>✅ O QUE PODE:</h3>
      <ul>
        <li><strong>Resíduos Classe A:</strong> Tijolos, blocos, concreto, argamassa, areia e terra.</li>
        <li><strong>Madeiras:</strong> Restos de construção, tábuas e compensados (em caçambas específicas ou mistas).</li>
        <li><strong>Gesso:</strong> (Geralmente requer caçamba exclusiva ou separação, consulte-nos).</li>
      </ul>
      <h3>❌ O QUE NÃO PODE (PROIBIDO):</h3>
      <ul>
        <li><strong>Lixo Doméstico:</strong> Restos de comida, papel higiênico, fraldas.</li>
        <li><strong>Resíduos Perigosos:</strong> Latas de tinta, solventes, óleos, graxas.</li>
        <li><strong>Eletrônicos:</strong> Computadores, TVs, pilhas e baterias.</li>
        <li><strong>Pneus e Amianto:</strong> Estes materiais exigem logística reversa específica.</li>
        <li><strong>Lixo Hospitalar:</strong> Risco biológico grave.</li>
      </ul>
      <p>Tem dúvida sobre algum material? Entre em contato antes de jogar na caçamba!</p>
    `,
    date: "20 Dez 2024",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800", // Recycling
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