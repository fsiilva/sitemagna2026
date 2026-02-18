export type Branch = {
  city: string;
  state: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  isMain?: boolean;
  mapQuery: string;
};

export const branchesData: Branch[] = [
  {
    city: 'Fortaleza',
    state: 'CE',
    address: 'Rod. BR 116, 4967, Aerolândia',
    phone: '(85) 3311-3200',
    whatsapp: '5585981476842',
    email: 'comercial@magnaloc.com.br',
    isMain: true,
    mapQuery: 'Rod. BR 116, 4967, Aerolândia, Fortaleza, CE',
  },
  {
    city: 'Teresina',
    state: 'PI',
    address: 'Rua Riachuelo, 1149, Vermelha',
    phone: '(86) 2140-0618',
    whatsapp: '5586988253571',
    email: 'comercial.the@magnaloc.com.br',
    mapQuery: 'Rua Riachuelo, 1149, Vermelha, Teresina, PI',
  },
  {
    city: 'São Luís',
    state: 'MA',
    address: 'Rua São Bernardo, 38, Forquilha',
    phone: '(98) 3303-0392',
    whatsapp: '5598991417300',
    email: 'comercial.slz@magnaloc.com.br',
    mapQuery: 'Rua São Bernardo, 38, Forquilha, São Luís, MA',
  },
  {
    city: 'Cariri',
    state: 'CE',
    address: 'Av. Deputado Leão Sampaio, 4240, Barbalha',
    phone: '(88) 2157-0509',
    whatsapp: '5588992084122',
    email: 'comercial.jdo@magnaloc.com.br',
    mapQuery: 'Av. Deputado Leão Sampaio, 4240, Barbalha, CE',
  },
  {
    city: 'Mossoró',
    state: 'RN',
    address: 'Av. Industrial Behuel Vieira Diniz, 1945',
    phone: '(84) 3318-0504',
    whatsapp: '5584988830500',
    email: 'comercial.msr@magnaloc.com.br',
    mapQuery: 'Av. Industrial Behuel Vieira Diniz, 1945, Mossoró, RN',
  },
  {
    city: 'Natal',
    state: 'RN',
    address: 'Rua Manoel Ferreira Neto, 983, Parnamirim',
    phone: '(84) 3217-1216',
    whatsapp: '5584981189799',
    email: 'comercial.nat@magnaloc.com.br',
    mapQuery: 'Rua Manoel Ferreira Neto, 983, Parnamirim, RN',
  },
  {
    city: 'Recife',
    state: 'PE',
    address: 'Rodovia BR-232 km 14,5, Jaboatão dos Guararapes',
    phone: '(81) 3455-1479',
    whatsapp: '558134551479',
    email: 'comercial.rec@magnaloc.com.br',
    mapQuery: 'Rodovia BR-232 km 14,5, Jaboatão dos Guararapes, PE',
  },
  {
    city: 'João Pessoa',
    state: 'PB',
    address: 'Rua Francisco Feitosa Palitot, Aeroclube',
    phone: '(83) 3031-5200',
    whatsapp: '558330315200',
    email: 'comercial.jpa@magnaloc.com.br',
    mapQuery: 'Rua Francisco Feitosa Palitot, Aeroclube, João Pessoa, PB',
  },
];
