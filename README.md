# ESC — Essência e Estilo

Landing page de consultoria de imagem e coach de estilo, construída a partir de
`landingpage-esc-consultoria-imagem.md`.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run start   # serve o build
npm run lint
```

## Estrutura

```
src/
  app/
    layout.tsx        fontes (Cormorant Garamond + Jost) e metadados de SEO
    page.tsx          composição das seções
    globals.css       paleta, tipografia e estilos base
  components/
    Header.tsx        cabeçalho fixo com menu mobile
    Hero.tsx          1. Hero — headline, CTA e números
    About.tsx         2. Sobre a consultora — formação e citações
    Services.tsx      3. Serviços — grade com os 7 serviços
    Journey.tsx       4. Jornada — linha do tempo em 4 passos
    Testimonials.tsx  5. Prova social — marcadores a substituir
    Contact.tsx       6. Chamada final — canais + formulário
    Footer.tsx        7. Rodapé
    ContactForm.tsx   formulário (client component)
    WhatsAppFloat.tsx botão flutuante de WhatsApp
    Portrait.tsx      moldura de foto em 4:5
    Section.tsx       wrapper e título de seção
    CtaButton.tsx     botão de chamada
    Icons.tsx         ícones SVG inline
  data/site.ts        todo o conteúdo editável (textos, serviços, contatos)
```

Para ajustar textos, serviços ou contatos, edite **`src/data/site.ts`** — os
componentes leem tudo de lá.

## Imagens

As fotos ficam em `public/images/` — veja o README de lá para a relação entre
os arquivos originais e os recortes derivados (foto da seção Sobre, logo
circular e favicon).

## Design

- **Paleta:** derivada do logo da marca — magenta `#a0268b` (o anel do logo),
  ameixa `#2b0f26` (fundos cheios), champanhe `#efdcb4` (detalhe sobre o
  ameixa), lilás `#f2e3ee` e off-white rosado `#fdf7fb`. Tokens no `@theme` de
  `globals.css`: `pearl`, `lilac`, `magenta`, `magenta-dark`, `champagne`,
  `plum`, `mauve`. Todas as combinações de texto passam no WCAG AA.
- **Tipografia:** Cormorant Garamond (serifada, títulos) + Jost (sans, texto).
- **Mobile first**, com foco no tráfego vindo de redes sociais e WhatsApp.

## Pendências antes de publicar

- [ ] **Confirmar os e-mails** em `src/data/site.ts`. O material original trazia
      `esc.consultoriadeimagem@gail.com` e `@esc.consulturiadeimgem`; assumimos
      as grafias corrigidas (`@gmail.com` / `esc.consultoriadeimagem`).
- [ ] Substituir os marcadores da seção de depoimentos por conteúdo real.
- [ ] Definir o domínio final em `site.url` (`src/data/site.ts`) — é a base dos
      metadados de Open Graph.
- [ ] Informar cidade/região de atuação para reforçar o SEO local.
- [ ] Opcional: gerar uma imagem de Open Graph (`src/app/opengraph-image.png`)
      — hoje o link compartilhado no WhatsApp/Instagram não mostra prévia.

## Formulário de contato

Sem back-end: o formulário monta a mensagem e abre a conversa no WhatsApp já
preenchida. Para enviar por e-mail ou integrar a um CRM, troque o `onSubmit` de
`ContactForm.tsx` por um Server Action.
