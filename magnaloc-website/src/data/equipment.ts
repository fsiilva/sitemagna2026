export type ServiceCategory = {
  name: string;
  iconUrl: string;
  description: string;
  items: string[];
};

export type Equipment = {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  details: string;
  highlights: string[];
  imageUrl: string;
};

export const servicesData: ServiceCategory[] = [
  {
    name: 'Containers',
    iconUrl: 'https://www.magnaloc.com.br/images/menu/container.png',
    description: 'Equipamentos disponíveis para obras, canteiros e apoio operacional',
    items: [
      'Sanitário Slim 2,40m',
      'Guarita 2,40 x 1,20m',
      'Escritório 6m',
      'Sanitário 6m',
      'Duplo 30m²',
      'Escritório c/ WC',
      'Sanitário com Caixa de Dejetos',
      'Almoxarifado 6,00m',
      'Container Predial',
    ],
  },
  {
    name: 'Banheiros e Lavabos',
    iconUrl: 'https://www.magnaloc.com.br/images/menu/banheiro.png',
    description: 'Soluções sanitárias completas para obras',
    items: ['Banheiros químicos', 'Lavabos', 'Vestiários', 'Chuveiros'],
  },
  {
    name: 'Betoneiras',
    iconUrl: 'https://www.magnaloc.com.br/images/menu/betoneiras.png',
    description: 'Modelos e equipamentos para preparo e peneiramento de massa e concreto',
    items: [
      'Betoneiras Diversas: 145L, 400L e 600L',
      'Peneira Elétrica',
      'Argamassadeira',
      'Betoneira Hidráulica 600L',
    ],
  },
  {
    name: 'Escoramento',
    iconUrl: 'https://www.magnaloc.com.br/images/menu/ESCORAMENTO.png',
    description: 'Soluções completas para escoramento estrutural e de solo',
    items: [
      'Torre M.Tour',
      'Escora Metálica',
      'Escoramento leve',
      'Escoramento de Solo',
      'Cimbramento Horizontal',
      'Acessórios p/ Escoras Metálicas',
    ],
  },
  {
    name: 'Andaimes',
    iconUrl: 'https://www.magnaloc.com.br/images/menu/andaime.png',
    description: 'Modelos de andaime para fachadas, suspensão e montagem técnica',
    items: [
      'Andaime Simples',
      'Andaime Fachadeiro',
      'Plataforma Andaime Suspenso 1m à 6m',
      'Andaime Tubo Equipado Tubo/Abraçadeiras',
      'Andaime Multidirecional Elite',
      'Acessórios p/ Andaimes',
    ],
  },
  {
    name: 'Movimentação',
    iconUrl: 'https://www.magnaloc.com.br/images/menu/ELEV.png',
    description: 'Equipamentos para elevação vertical e transporte de materiais',
    items: [
      'Elevador Sistema Pinhão e Cremalheira Cabine Dupla',
      'Elevador Cremalheira EP 12 SC Sem Contrapeso',
      'Elevador Cremalheira Cabine EP 24',
      'Guincho Coluna Monofásico cap 400kg',
      'Guincho Coluna',
    ],
  },
  {
    name: 'Máquinas',
    iconUrl: 'https://www.magnaloc.com.br/images/menu/maquinas.png',
    description: 'Máquinas para corte, acabamento e soldagem em obra',
    items: [
      'Policorte',
      'Conjunto Oxicorte',
      'Máquina de Cortar Ferro',
      'Máquina de Cortar Piso',
      'Máquina de Polir Piso',
      'Máquina de Solda',
    ],
  },
  {
    name: 'Ferramentas',
    iconUrl: 'https://www.magnaloc.com.br/images/menu/ferramentas.png',
    description: 'Linha de ferramentas elétricas para corte, perfuração e acabamento',
    items: [
      'Martelete',
      'Rompedor Demolidor',
      'Esmerilhadeira',
      'Serra Circular',
      'Serra Marmore',
      'Perfuratriz',
      'Politriz',
      'Retificadeira',
      'Martelo',
      'Furadeira',
      'Lixadeira',
      'Serra Tico Tico',
      'Parafusadeira',
    ],
  },
  {
    name: 'Compactadores',
    iconUrl: 'https://www.magnaloc.com.br/images/menu/compactador.png',
    description: 'Equipamentos para compactação de solo e pavimentação',
    items: ['Placa compactadora', 'Revesível a Diesel', 'CM20 a Diesel', 'Placa Vibratória'],
  },
];

const categoryDetailTemplates: Record<
  string,
  {
    shortDescription: string;
    details: string;
    highlights: string[];
  }
> = {
  Containers: {
    shortDescription: 'Módulos para apoio de obra, escritórios, almoxarifado e instalações sanitárias.',
    details:
      'Este equipamento é indicado para canteiros, áreas de apoio e frentes de obra que exigem estrutura rápida, segura e com baixo tempo de implantação.',
    highlights: [
      'Entrega e retirada programadas',
      'Modelos para uso operacional e administrativo',
      'Opções para obras de curto e longo prazo',
    ],
  },
  'Banheiros e Lavabos': {
    shortDescription: 'Soluções sanitárias para obras, eventos e operações temporárias.',
    details:
      'Este equipamento atende demandas de higiene e conforto em locais sem infraestrutura fixa, com foco em praticidade e conformidade operacional.',
    highlights: [
      'Instalação rápida no local',
      'Atende operações temporárias',
      'Suporte para reposição e manutenção',
    ],
  },
  Betoneiras: {
    shortDescription: 'Equipamentos para mistura e preparo de concreto e argamassa.',
    details:
      'Este equipamento oferece produtividade e padronização no preparo de materiais, sendo adequado para frentes de concretagem e serviços de alvenaria.',
    highlights: [
      'Modelos com diferentes capacidades',
      'Apoio para obras residenciais e industriais',
      'Facilidade de operação no canteiro',
    ],
  },
  Escoramento: {
    shortDescription: 'Sistemas para sustentação provisória de estruturas e formas.',
    details:
      'Este equipamento é utilizado para garantir estabilidade e segurança durante etapas estruturais, com componentes modulares de montagem técnica.',
    highlights: [
      'Aplicação em lajes, vigas e escavações',
      'Estrutura modular para montagem eficiente',
      'Suporte para planejamento de locação',
    ],
  },
  Andaimes: {
    shortDescription: 'Soluções para acesso, trabalho em altura e fachadas.',
    details:
      'Este equipamento é indicado para serviços de execução, manutenção e acabamento em altura, com opções para diferentes geometrias de obra.',
    highlights: [
      'Modelos simples, fachadeiro e multidirecional',
      'Acessórios para composição do sistema',
      'Indicado para obras prediais e industriais',
    ],
  },
  'Movimentação': {
    shortDescription: 'Equipamentos para transporte vertical de pessoas e materiais.',
    details:
      'Este equipamento melhora o fluxo operacional da obra, reduz deslocamentos manuais e aumenta a produtividade em edifícios e estruturas verticais.',
    highlights: [
      'Soluções com e sem contrapeso',
      'Modelos para diferentes capacidades',
      'Aplicação em canteiros de médio e grande porte',
    ],
  },
  Máquinas: {
    shortDescription: 'Máquinas para corte, preparo e acabamento na construção.',
    details:
      'Este equipamento atende etapas de produção e acabamento em obra, entregando desempenho para atividades de corte, polimento e soldagem.',
    highlights: [
      'Linha para serviços de corte e acabamento',
      'Modelos para uso contínuo em obra',
      'Atende equipes de montagem e manutenção',
    ],
  },
  Ferramentas: {
    shortDescription: 'Ferramentas elétricas para atividades de montagem e acabamento.',
    details:
      'Este equipamento apoia rotinas de perfuração, demolição e corte no canteiro, com opções para equipes de manutenção e instalação.',
    highlights: [
      'Grande variedade de ferramentas',
      'Aplicação em obras e reformas',
      'Agilidade para demandas pontuais',
    ],
  },
  Compactadores: {
    shortDescription: 'Equipamentos para compactação de solo e base de pavimento.',
    details:
      'Este equipamento é indicado para preparação de terreno, valas e subleito, garantindo melhor desempenho em etapas de infraestrutura e pavimentação.',
    highlights: [
      'Modelos vibratórios e a diesel',
      'Aplicação em obras urbanas e industriais',
      'Melhor densificação do solo',
    ],
  },
};

const referenceImages: Record<string, Array<{ title: string; src: string }>> = {
  Containers: [
    { title: 'Sanitário Slim 2,40m', src: 'https://www.magnaloc.com.br/images/equipamentos/conteineres/sanitario3.jpg' },
    { title: 'Guarita 2,40 x 1,20m', src: 'https://www.magnaloc.com.br/images/equipamentos/conteineres/guarita.jpg' },
    { title: 'Escritório 6m', src: 'https://www.magnaloc.com.br/images/equipamentos/conteineres/escritorio6m.jpg' },
    { title: 'Sanitário 6m', src: 'https://www.magnaloc.com.br/images/equipamentos/conteineres/SANITARIO 6M.jpg' },
    { title: 'Duplo: 30m2', src: 'https://www.magnaloc.com.br/images/equipamentos/conteineres/duplo30.jpg' },
    { title: 'Escritório C/WC', src: 'https://www.magnaloc.com.br/images/equipamentos/conteineres/escritorio_wc_v05.jpg' },
    { title: 'Sanitário com Caixa de Dejetos', src: 'https://www.magnaloc.com.br/images/equipamentos/conteineres/sanitario.jpg' },
    { title: 'Almoxarifado 6,00m', src: 'https://www.magnaloc.com.br/images/equipamentos/conteineres/Container-almoxarifado6.jpg' },
    { title: 'Container Predial', src: 'https://www.magnaloc.com.br/images/equipamentos/conteineres/predial.jpg' },
  ],
  Betoneiras: [
    { title: 'Betoneiras Diversas: 145l, 400l e 600l', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Betoneira 150-400-600 L.jpg' },
    { title: 'Peneira Elétrica', src: 'https://www.magnaloc.com.br/images/equipamentos/diversos/Peneira Eletrica.jpg' },
    { title: 'Argamassadeira', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Argamassadeira.jpg' },
    { title: 'Betoneira Hidraúlica 600l', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/betoneira Hidráulica 600l.jpg' },
  ],
  Escoramento: [
    { title: 'Torre M.Tour', src: 'https://www.magnaloc.com.br/images/equipamentos/escoras/Montagens Magna - Torre MT.jpg' },
    { title: 'Escora Metálica', src: 'https://www.magnaloc.com.br/images/equipamentos/escoras/escorametalica.jpg' },
    { title: 'Escoramento leve', src: 'https://www.magnaloc.com.br/images/equipamentos/escoras/Escoramento leve.jpg' },
    { title: 'Escoramento de Solo', src: 'https://www.magnaloc.com.br/images/equipamentos/escoras/escoramento_solo.jpg' },
    { title: 'Cimbramento Horizontal', src: 'https://www.magnaloc.com.br/images/equipamentos/escoras/horizontal.jpg' },
    { title: 'Acessórios p/ Escoras Metálicas', src: 'https://www.magnaloc.com.br/images/equipamentos/escoras/acessorios.jpg' },
  ],
  Andaimes: [
    { title: 'Andaime Simples', src: 'https://www.magnaloc.com.br/images/equipamentos/andaime/Andaime Tubular Leve.jpg' },
    { title: 'Andaime Fachadeiro', src: 'https://www.magnaloc.com.br/images/equipamentos/andaime/andaime-fachadeiro-mecan-1.jpg' },
    { title: 'Plataforma Andaime Suspenso 1m à 6m', src: 'https://www.magnaloc.com.br/images/equipamentos/andaime/Andaime Suspenso.jpg' },
    { title: 'Andaime Tubo Equipado Tubo/Abraçadeiras', src: 'https://www.magnaloc.com.br/images/equipamentos/andaime/tubo.jpg' },
    { title: 'Andaime Multidirecional Elite', src: 'https://www.magnaloc.com.br/images/equipamentos/andaime/multdirecional.jpg' },
    { title: 'Acessórios p/ Andaimes', src: 'https://www.magnaloc.com.br/images/equipamentos/andaime/acessorios.jpg' },
  ],
  'Movimentação': [
    { title: 'Elevador Sistema Pinhão e Cremalheira Cabine Dupla', src: 'https://www.magnaloc.com.br/images/equipamentos/Acesso/ELEVADOR SISTEMA PINHÃO E CREMALHEIRA CABINE DUPLA.jpg' },
    { title: 'Elevador Cremalheira EP 12 SC Sem Contrapeso', src: 'https://www.magnaloc.com.br/images/equipamentos/Acesso/Elevador Cremalheira EP 12 SC Sem Contrapeso.jpg' },
    { title: 'Elevador Cremalheira Cabine EP 24', src: 'https://www.magnaloc.com.br/images/equipamentos/Acesso/Elevador Cremalheira Cabine EP - 24.jpg' },
    { title: 'Guincho Coluna Monofásico cap 400kg', src: 'https://www.magnaloc.com.br/images/equipamentos/Acesso/Guincho Coluna Monofásico cap. 400kg.jpg' },
    { title: 'Guincho Coluna', src: 'https://www.magnaloc.com.br/images/equipamentos/Acesso/Guincho Coluna.jpg' },
  ],
  Máquinas: [
    { title: 'Policorte', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Policorte.jpg' },
    { title: 'Conjunto Oxicorte', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Conjunto Oxicorte.jpg' },
    { title: 'Máquina de Cortar Ferro', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Máquina de Cortar Ferro.jpg' },
    { title: 'Máquina de Cortar Piso', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Máquina de Cortar Piso.jpg' },
    { title: 'Máquina de Polir Piso', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Máquina de Polir Piso.jpg' },
    { title: 'Máquina de Solda', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Máquina de Solda.jpg' },
  ],
  Ferramentas: [
    { title: 'Martelete', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/martelete.jpg' },
    { title: 'Rompedor Demolidor', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Rompedor.Demolidor.jpg' },
    { title: 'Esmerilhadeira', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Esmerilhadeira.jpg' },
    { title: 'Serra Circular', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Serra Circular Manual.jpg' },
    { title: 'Serra Marmore', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Serra Marmore GDC.jpg' },
    { title: 'Perfuratriz', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Perfuratriz.jpg' },
    { title: 'Politriz', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Politriz.jpg' },
    { title: 'Retificadeira', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Retificadeira.jpg' },
    { title: 'Martelo', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/martelete.jpg' },
    { title: 'Furadeira', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Furadeira.jpg' },
    { title: 'Lixadeira', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Lixadeira.jpg' },
    { title: 'Serra Tico Tico', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/serra tico tico.jpg' },
    { title: 'Parafusadeira', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/Parafusadeira.jpg' },
  ],
  Compactadores: [
    { title: 'Placa compactadora', src: 'https://www.magnaloc.com.br/images/equipamentos/compactacao/Placa compactadora.jpg' },
    { title: 'Revesível a Diesel', src: 'https://www.magnaloc.com.br/images/equipamentos/compactacao/Revesivel a Diesel.jpg' },
    { title: 'CM20 a Diesel', src: 'https://www.magnaloc.com.br/images/equipamentos/compactacao/Revesivel a Diesel.jpg' },
    { title: 'Placa Vibratória', src: 'https://www.magnaloc.com.br/images/equipamentos/maquinas-ferramentas/compactador.jpg' },
  ],
};

const defaultCategoryImages: Record<string, string> = {
  'Banheiros e Lavabos': 'https://www.magnaloc.com.br/images/menu/banheiro.png',
  Containers: 'https://www.magnaloc.com.br/images/menu/container.png',
  Betoneiras: 'https://www.magnaloc.com.br/images/menu/betoneiras.png',
  Escoramento: 'https://www.magnaloc.com.br/images/menu/ESCORAMENTO.png',
  Andaimes: 'https://www.magnaloc.com.br/images/menu/andaime.png',
  'Movimentação': 'https://www.magnaloc.com.br/images/menu/ELEV.png',
  Máquinas: 'https://www.magnaloc.com.br/images/menu/maquinas.png',
  Ferramentas: 'https://www.magnaloc.com.br/images/menu/ferramentas.png',
  Compactadores: 'https://www.magnaloc.com.br/images/menu/compactador.png',
};

const normalizeText = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const resolveImageUrl = (category: string, itemName: string) => {
  const categoryImages = referenceImages[category] ?? [];
  const normalizedItem = normalizeText(itemName);

  const exact = categoryImages.find((entry) => normalizeText(entry.title) === normalizedItem);
  if (exact) {
    return exact.src;
  }

  const partial = categoryImages.find((entry) => {
    const normalizedRef = normalizeText(entry.title);
    return normalizedRef.includes(normalizedItem) || normalizedItem.includes(normalizedRef);
  });

  return partial?.src ?? defaultCategoryImages[category] ?? 'https://www.magnaloc.com.br/images/LGML.png';
};

export const equipmentData: Equipment[] = servicesData.flatMap((service) => {
  const template = categoryDetailTemplates[service.name];

  return service.items.map((item) => ({
    name: item,
    slug: slugify(`${service.name}-${item}`),
    category: service.name,
    shortDescription: template.shortDescription,
    details: `${item}: ${template.details}`,
    highlights: template.highlights,
    imageUrl: resolveImageUrl(service.name, item),
  }));
});

export const findEquipmentBySlug = (slug: string) =>
  equipmentData.find((equipment) => equipment.slug === slug);

export const getCategorySlug = (categoryName: string) => slugify(categoryName);

export const findCategoryBySlug = (categorySlug: string) =>
  servicesData.find((category) => getCategorySlug(category.name) === categorySlug);

export const getEquipmentsByCategory = (categoryName: string) =>
  equipmentData.filter((equipment) => equipment.category === categoryName);

