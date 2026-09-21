export const site = {
  name: "ESC — Essência e Estilo",
  shortName: "ESC",
  tagline: "Consultoria de Imagem e Coach de Estilo",
  consultant: "Lucilene Ita",
  url: "https://esc-essenciaeestilo.com.br",
} as const;

export const contact = {
  whatsapp: {
    number: "5545999240147",
    display: "(45) 99924-0147",
    href: "https://wa.me/5545999240147",
  },
  instagram: {
    handle: "@esc.consultoriadeimagem",
    href: "https://instagram.com/esc.consultoriadeimagem",
  },
  instagramPersonal: {
    handle: "@italucilene.imagempessoal",
    href: "https://instagram.com/italucilene.imagempessoal",
  },
  // TODO: confirmar endereços antes de publicar (o material original trazia erros de digitação).
  emails: ["esc.consultoriadeimagem@gmail.com", "italucilene@gmail.com"],
} as const;

/** Mensagem pré-preenchida na conversa do WhatsApp. */
export function whatsappLink(message: string) {
  return `${contact.whatsapp.href}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Jornada", href: "#jornada" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
] as const;

export const formation = [
  "Escola de Moda Cá Cavalcante",
  "Formação Internacional em Consultoria de Imagem e Coach de Estilo",
  "Formação em Análise de Coloração Pessoal",
] as const;

export type ServiceIcon =
  | "sparkle"
  | "palette"
  | "suitcase"
  | "bag"
  | "briefcase"
  | "microphone"
  | "storefront";

export const services: {
  title: string;
  description: string;
  icon: ServiceIcon;
}[] = [
  {
    title: "Consultoria de Imagem Pessoal",
    description:
      "Descubra seu estilo autêntico e aprenda a vestir a favor do seu corpo e da sua personalidade.",
    icon: "sparkle",
  },
  {
    title: "Análise de Coloração Pessoal",
    description:
      "Identifique as cores que valorizam sua pele, cabelo e olhos.",
    icon: "palette",
  },
  {
    title: "Mala Inteligente",
    description:
      "Otimize seu guarda-roupa com peças estratégicas e versáteis.",
    icon: "suitcase",
  },
  {
    title: "Personal Shopper",
    description:
      "Compras assistidas para decisões mais assertivas e sem desperdício.",
    icon: "bag",
  },
  {
    title: "Posicionamento de Imagem Profissional",
    description: "Alinhe sua imagem aos seus objetivos de carreira.",
    icon: "briefcase",
  },
  {
    title: "Palestras, Eventos, Treinamentos e Workshops",
    description:
      "Conteúdo sobre imagem e estilo para empresas e grupos.",
    icon: "microphone",
  },
  {
    title: "Visual Merchandising (VM)",
    description:
      "Consultoria de vitrine e ambientação visual para lojas e marcas.",
    icon: "storefront",
  },
];

export const journey = [
  {
    title: "Escuta e Diagnóstico",
    description: "Entendemos quem você é e quem você quer se tornar.",
  },
  {
    title: "Análise Personalizada",
    description: "Coloração, estilo, guarda-roupa e objetivos.",
  },
  {
    title: "Plano de Ação / Dossiê",
    description: "Recomendações práticas e individualizadas.",
  },
  {
    title: "Acompanhamento",
    description:
      "Personal shopper e suporte contínuo na aplicação do estilo.",
  },
] as const;
