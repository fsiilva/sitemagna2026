# Magna Locações - Website

Site institucional da **Magna Locações**, desenvolvido com React + TypeScript + Vite.

## Funcionalidades
- Catálogo por categorias e página de detalhes dos equipamentos
- Formulário de orçamento por filial
- Página de contato por filial (WhatsApp, ligação e e-mail)
- Página "Fale Conosco" com redirecionamento para WhatsApp da filial escolhida
- Mapa de filiais e links para redes sociais
- Layout responsivo para desktop e mobile

## Tecnologias
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Pré-requisitos
- Node.js 18+
- npm 9+

## Como rodar localmente
```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

## Build de produção
```bash
npm run build
npm run preview
```

## Estrutura principal
- `src/components`: componentes visuais da interface
- `src/pages`: páginas e fluxos principais
- `src/data`: dados de equipamentos e filiais
- `src/utils`: utilitários (ex.: envio de formulário e máscara de telefone)

## Formulários
Os formulários de orçamento e contato usam o serviço **FormSubmit** para envio de e-mails por filial.

## Deploy
Para publicar em hospedagem tradicional (ex.: Hostinger):
1. Gere a build com `npm run build`
2. Envie o conteúdo da pasta `dist/` para o diretório público do domínio
3. Configure fallback de SPA para `index.html` (quando necessário)

## Repositório
`https://github.com/fsiilva/sitemagna2026.git`
