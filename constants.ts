import { LocationData, PricingTier, ServiceItem, Testimonial, NewsItem } from './types';

export const COMPANY_INFO = {
  name: "A Baratona Locação de Caçambas",
  phone: "(41) 3275-0505",
  whatsapp: "(41) 99670-1500",
  whatsappRaw: "5541996701500",
  email: "sac@abaratonacacambas.com.br",
  address: "Rua Waldemar Loureiro Campos, 4119 - Xaxim, Curitiba - PR",
  mapCoords: { lat: -25.467977, lng: -49.248827 },
  googleMapsLink: "https://maps.app.goo.gl/ty56IOoMwAzCso3vb"
};

// Slider Images for Hero Section - 5 Premium Images
export const HERO_SLIDES = [
  // 1. Caminhão moderno em movimento (Modern Truck)
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1600",
  // 2. Canteiro de obras com céu azul (Construction Site)
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600",
  // 3. Detalhe de caçamba/entulho (Dumpster/Rubble)
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1600",
  // 4. Escavadeira carregando caminhão (Excavator Action)
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600",
  // 5. Profissional/Engenheiro na obra (Human Element)
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600"
];

// Updated Image Assets - Definitive Fix for Broken Links with Premium Images
export const IMAGES = {
  // Logo placeholder
  logo: "https://placehold.co/172x64/FF6B00/ffffff?text=A+Baratona", 
  
  // Hero Background: Dark construction texture
  heroBg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920", 
  
  // Truck: Frota Image - "Logística Própria" (CORRECTED: Professional Heavy Dump Truck)
  truck: "https://images.unsplash.com/photo-1605218427306-022ba6d10c8c?auto=format&fit=crop&q=80&w=800", 
  
  // Debris: Excavator/Rubble - "Coleta de Resíduos" (Excavator loading truck)
  debris: "https://images.unsplash.com/photo-1526500599607-160869389230?auto=format&fit=crop&q=80&w=800", 
  
  // Yellow Skip Bin: Main Service Image - "Caçambas Padrão" (Yellow container)
  skipBin: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800", 
  
  // Excavator: Heavy machinery (Yellow Excavator)
  excavator: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
  
  // Landfill/Environment
  landfill: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
  
  // Mascot: Friendly Construction Worker - "Gostou das dicas?"
  mascot: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=400",
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
    title: "Novas regras para descarte de resíduos em Curitiba: Guia Completo 2025",
    excerpt: "Confira o que mudou na legislação municipal sobre caçambas estacionárias e evite multas na sua obra. Exigência de CTR e novas regras de sinalização.",
    content: `
      <p class="lead">A gestão de resíduos sólidos é um dos grandes desafios das metrópoles modernas, e Curitiba, reconhecida como capital ecológica, não poderia ficar para trás. A partir deste ano, a Prefeitura implementou novas diretrizes para o gerenciamento de resíduos da construção civil (RCC), visando aumentar a sustentabilidade e a organização urbana.</p>
      
      <h3>O que muda na prática para quem aluga caçambas?</h3>
      <p>A principal mudança é a rastreabilidade total do resíduo. Agora, é obrigatório que o gerador do resíduo (você, cliente) exija o <strong>CTR (Controle de Transporte de Resíduos)</strong> da empresa locadora. Este documento funciona como uma "nota fiscal" do entulho, comprovando que ele foi levado para um aterro ou usina de reciclagem licenciada pelo IAP (Instituto Ambiental do Paraná).</p>
      <p>Sem esse documento, sua obra pode ser embargada e você pode ser responsabilizado solidariamente caso o entulho seja encontrado em locais irregulares, como terrenos baldios ou margens de rios.</p>

      <h3>Sinalização e Segurança</h3>
      <p>Além da documentação, as regras visuais ficaram mais rígidas. Caçambas estacionadas em vias públicas devem seguir rigorosamente as normas de sinalização:</p>
      <ul>
        <li>Faixas reflexivas em todas as laterais e bordas superiores.</li>
        <li>Identificação clara da empresa responsável com telefone de contato visível.</li>
        <li>Estacionamento permitido apenas em locais regulamentados (não pode bloquear hidrantes, garagens ou esquinas).</li>
      </ul>

      <h3>Multas mais pesadas para infratores</h3>
      <p>O não cumprimento das normas pode gerar multas que variam de <strong>R$ 500,00 a R$ 50.000,00</strong>, dependendo da gravidade da infração e do volume de material descartado incorretamente. A fiscalização foi intensificada com o uso de denúncias via central 156.</p>
      
      <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-primary my-6">
        <h4 class="font-bold text-secondary mb-2">Compromisso A Baratona</h4>
        <p class="text-sm">A Baratona Caçambas já está 100% adequada às novas normas de 2025. Ao contratar nossos serviços, você tem a garantia de destinação correta, emissão de CTR e equipamentos sinalizados conforme a lei. Não corra riscos!</p>
      </div>

      <p>Planeje sua obra com segurança jurídica e ambiental. Conte conosco para fazer o descarte certo.</p>
    `,
    date: "15 Jan 2025",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", // Legislation/Document
    category: "Legislação"
  },
  {
    id: 2,
    slug: "como-calcular-tamanho-cacamba-ideal",
    title: "Como calcular o tamanho da caçamba ideal para sua obra?",
    excerpt: "Guia completo para você não desperdiçar dinheiro. Saiba quando pedir uma caçamba de 3m³, 5m³ ou 8m³ e economize no orçamento.",
    content: `
      <p class="lead">Escolher o tamanho certo da caçamba é fundamental para economizar na sua obra. Pedir uma caçamba muito pequena pode exigir uma segunda locação, dobrando o custo logístico. Pedir uma muito grande é desperdício de espaço e dinheiro.</p>
      
      <h3>Entendendo as Medidas</h3>
      <p>Para facilitar, imagine o volume em "carrinhos de mão" de obra padrão. Essa é uma medida prática que ajuda mestres de obras e pedreiros a estimar o volume.</p>

      <h4>Caçamba de 3m³ (Pequena)</h4>
      <p>Ideal para pequenas reformas ou limpezas pontuais. É compacta e cabe em vagas menores.</p>
      <ul>
        <li><strong>Capacidade:</strong> Aproximadamente 40 a 50 carrinhos de mão.</li>
        <li><strong>Uso comum:</strong> Troca de pisos de um cômodo, pequenas demolições de paredes não estruturais, limpeza de jardins e garagens.</li>
      </ul>

      <h4>Caçamba de 5m³ (Média - A mais popular)</h4>
      <p>É o modelo padrão de mercado, o "fiel da balança" para a maioria das obras residenciais.</p>
      <ul>
        <li><strong>Capacidade:</strong> Cerca de 70 a 80 carrinhos de mão.</li>
        <li><strong>Uso comum:</strong> Reformas de banheiros e cozinhas completas, troca de telhados de médio porte, demolição de múltiplas paredes internas.</li>
      </ul>

      <h4>Caçamba de 8m³ (Grande)</h4>
      <p>Indicada para grandes geradores e obras pesadas. Atenção ao peso do material!</p>
      <ul>
        <li><strong>Capacidade:</strong> Mais de 120 carrinhos de mão.</li>
        <li><strong>Uso comum:</strong> Construções desde o alicerce, grandes demolições, limpeza de terrenos com muito mato/madeira.</li>
        <li><strong>Importante:</strong> Para entulho muito pesado (apenas concreto/terra), verifique com a locadora se o caminhão suporta o peso de uma caçamba de 8m³ cheia, ou se é melhor dividir em duas de 4m³ ou 5m³.</li>
      </ul>

      <h3>Dica de Ouro: A "Montanha" de Entulho</h3>
      <p>Lembre-se que o entulho solto ocupa mais espaço do que o material compactado na parede. Uma parede de tijolos, ao ser demolida, gera um volume de entulho cerca de 30% a 50% maior devido aos espaços vazios entre os pedaços.</p>
      <p>Na dúvida, envie uma foto do seu entulho ou da área a ser demolida para nosso WhatsApp. Nossa equipe tem experiência visual e pode ajudar a calcular o tamanho ideal!</p>
    `,
    date: "10 Jan 2025",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800", // Calculator
    category: "Dicas"
  },
  {
    id: 3,
    slug: "a-baratona-renova-frota-2025",
    title: "A Baratona renova frota de caminhões em 2025: Tecnologia e Sustentabilidade",
    excerpt: "Investimento em tecnologia Euro 6 e sistemas hidráulicos modernos para garantir entregas ainda mais rápidas e limpas em Curitiba.",
    content: `
      <p class="lead">Comprometida com a eficiência operacional e a sustentabilidade ambiental, a A Baratona Caçambas tem o orgulho de anunciar a renovação completa de sua frota para o ano de 2025.</p>
      
      <h3>Tecnologia Euro 6: Menos Poluição</h3>
      <p>Adquirimos novos caminhões equipados com tecnologia de motores Euro 6. Este padrão internacional exige uma redução drástica na emissão de gases poluentes, como óxidos de nitrogênio (NOx) e material particulado. Ao contratar A Baratona, você indiretamente contribui para um ar mais limpo em Curitiba.</p>

      <h3>Sistemas Hidráulicos de Alta Performance</h3>
      <p>A agilidade é nosso sobrenome. Os novos veículos possuem sistemas de "poliguindaste" mais modernos e robustos. O que isso significa para você?</p>
      <ul>
        <li><strong>Rapidez:</strong> A colocação e retirada das caçambas é feita em questão de minutos (média de 3 a 5 minutos).</li>
        <li><strong>Segurança:</strong> Estabilizadores melhores garantem que a caçamba seja pousada suavemente, sem danificar calçadas ou pisos sensíveis.</li>
        <li><strong>Menor Bloqueio:</strong> O tempo de manobra é reduzido, atrapalhando menos o trânsito na sua rua.</li>
      </ul>

      <h3>Rastreamento e Logística 4.0</h3>
      <p>Toda a nova frota é equipada com GPS de alta precisão e telemetria. Nossa central de operações monitora cada entrega em tempo real.</p>
      <p>Isso nos permite cumprir rigorosamente o prazo de "entrega em até 2 horas" para bairros selecionados, pois conseguimos despachar o caminhão mais próximo da sua localização instantaneamente. É a tecnologia trabalhando a favor do cronograma da sua obra!</p>
    `,
    date: "05 Jan 2025",
    // Modern truck on the road - symbolizes new fleet and technology (Updated to fixed URL)
    image: "https://images.unsplash.com/photo-1591798365688-66258f8b049d?auto=format&fit=crop&q=80&w=800", 
    category: "Institucional"
  },
  {
    id: 4,
    slug: "dicas-economizar-reforma",
    title: "4 Dicas infalíveis para economizar na reforma da sua casa",
    excerpt: "Planejamento é tudo. Veja como organizar o cronograma da sua obra, evitar desperdícios e manter o orçamento sob controle.",
    content: `
      <p class="lead">Reformar é realizar um sonho, mas sem o devido planejamento, pode virar um pesadelo financeiro. Estourar o orçamento é a regra, não a exceção, no Brasil. Mas você pode fugir dessa estatística com organização.</p>
      
      <h3>1. Tenha um Projeto Definido</h3>
      <p>Não comece a quebrar nada sem saber exatamente como vai ficar. Mudanças de ideia no meio da obra são as maiores causadoras de prejuízo. "Já que estamos quebrando aqui, vamos aumentar ali" é a frase que acaba com suas economias. Defina o escopo e siga-o.</p>

      <h3>2. Compre Materiais com Antecedência</h3>
      <p>Aproveite promoções e evite comprar tudo na última hora. Quando você precisa de um piso "para hoje" porque o pedreiro está parado esperando, você perde o poder de negociação e paga mais caro pelo frete expresso. Faça um cronograma de compras alinhado com as fases da obra.</p>

      <h3>3. Contrate Mão de Obra Qualificada</h3>
      <p>O ditado "o barato sai caro" nunca foi tão verdadeiro. Um profissional ruim pode desperdiçar até 20% do material (cortes errados de piso, massa preparada em excesso que seca) e fazer serviços que precisarão ser refeitos em meses. Peça referências e veja obras anteriores.</p>

      <h3>4. Gerencie o Entulho Inteligentemente</h3>
      <p>Manter a obra limpa aumenta a produtividade. Um canteiro bagunçado esconde ferramentas, causa acidentes e desanima a equipe. Alugar uma caçamba e fazer a retirada programada evita acúmulo de sujeira.</p>
      <p>Além disso, separar materiais recicláveis (papelão de embalagens, metais) pode gerar uma pequena renda extra ou facilitar a doação, reduzindo o volume que vai para a caçamba paga.</p>

      <p>Conte com a A Baratona para manter sua obra limpa e organizada com o melhor custo-benefício de Curitiba.</p>
    `,
    date: "28 Dez 2024",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800", // Money
    category: "Economia"
  },
  {
    id: 5,
    slug: "o-que-pode-nao-pode-cacamba",
    title: "O que pode e o que não pode colocar na caçamba de entulho?",
    excerpt: "Evite multas e taxas extras. Entenda a classificação de resíduos e saiba o que é estritamente proibido descartar.",
    content: `
      <p class="lead">Muitos clientes têm dúvidas sobre o que é permitido descartar nas caçambas estacionárias. O descarte incorreto pode gerar multas ambientais severas e até a recusa da retirada pela empresa, pois os aterros sanitários são rigorosos na triagem.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 class="text-green-800 font-bold mb-4"><i class="fas fa-check-circle mr-2"></i> O QUE PODE (PERMITIDO)</h3>
          <ul class="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Resíduos Classe A (Alvenaria):</strong> Tijolos, blocos cerâmicos, concreto, argamassa, areia e terra.</li>
            <li><strong>Madeiras:</strong> Restos de construção, tábuas de caixaria, compensados (geralmente em caçambas mistas).</li>
            <li><strong>Cerâmicas:</strong> Azulejos, pisos, porcelanatos, telhas de barro.</li>
            <li><strong>Metais:</strong> Ferragens, arames (embora seja melhor reciclar separadamente).</li>
          </ul>
        </div>

        <div class="bg-red-50 p-6 rounded-xl border border-red-200">
          <h3 class="text-red-800 font-bold mb-4"><i class="fas fa-times-circle mr-2"></i> O QUE NÃO PODE (PROIBIDO)</h3>
          <ul class="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Lixo Doméstico/Orgânico:</strong> Restos de comida, papel higiênico, fraldas. Isso atrai vetores e causa mau cheiro.</li>
            <li><strong>Resíduos Perigosos (Classe B/D):</strong> Latas de tinta líquida, solventes, óleos, graxas, vernizes.</li>
            <li><strong>Eletrônicos:</strong> Computadores, TVs, pilhas e baterias.</li>
            <li><strong>Pneus e Amianto:</strong> Telhas de amianto são tóxicas e exigem descarte especializado. Pneus acumulam água.</li>
            <li><strong>Lixo Hospitalar:</strong> Risco biológico grave.</li>
          </ul>
        </div>
      </div>

      <h3>E o Gesso?</h3>
      <p>O gesso (drywall, placas de forro) é um caso especial. Ele não pode ser misturado com o entulho comum (Classe A) porque contamina o solo e dificulta a reciclagem da areia/pedra. Geralmente, ele deve ser enviado separado ou ensacado. <strong>Consulte-nos antes de colocar gesso na caçamba!</strong></p>

      <p>Tem dúvida sobre algum material específico? Entre em contato pelo WhatsApp antes de jogar na caçamba e evite dores de cabeça!</p>
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