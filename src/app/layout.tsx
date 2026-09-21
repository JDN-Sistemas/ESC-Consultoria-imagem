import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Consultoria de imagem, coach de estilo, análise de coloração pessoal e personal shopper com Lucilene Ita. Mais de 30 anos revelando a melhor versão de cada mulher.",
  keywords: [
    "consultoria de imagem",
    "coach de estilo",
    "personal shopper",
    "análise de coloração pessoal",
    "consultoria de estilo",
    "visual merchandising",
    "Lucilene Ita",
  ],
  authors: [{ name: site.consultant }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Revele a sua melhor versão através da imagem. Consultoria de Imagem e Coach de Estilo com Lucilene Ita.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Revele a sua melhor versão através da imagem. Consultoria de Imagem e Coach de Estilo com Lucilene Ita.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
