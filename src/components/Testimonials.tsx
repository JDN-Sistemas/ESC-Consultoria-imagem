import { Section, SectionHeading } from "./Section";
import { CtaButton } from "./CtaButton";
import { contact } from "@/data/site";
import { InstagramIcon } from "./Icons";

/**
 * Prova social ainda a desenvolver: os cartões abaixo são marcadores visuais.
 * Ao receber os depoimentos, substitua `placeholders` por uma lista real
 * (nome, texto e, se autorizado, foto) — a estrutura da grade já comporta.
 */
const placeholders = [
  "Depoimento de cliente",
  "Antes e depois (com autorização)",
  "Avaliação do Instagram ou Google",
];

export function Testimonials() {
  return (
    <Section id="depoimentos" tone="lilac">
      <SectionHeading
        eyebrow="Prova social"
        title="O que dizem as clientes"
        description="Espaço reservado para depoimentos, registros de antes e depois e avaliações das redes sociais."
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((label) => (
          <li
            key={label}
            className="flex min-h-56 flex-col justify-between rounded-sm border border-dashed border-plum/20 bg-pearl/60 p-8"
          >
            <span
              aria-hidden
              className="font-serif text-5xl leading-none text-magenta/30"
            >
              ”
            </span>
            <p className="mt-6 text-sm tracking-[0.16em] text-mauve/80 uppercase">
              {label}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex justify-center">
        <CtaButton href={contact.instagram.href} variant="outline">
          <InstagramIcon className="size-4" />
          Ver bastidores no Instagram
        </CtaButton>
      </div>
    </Section>
  );
}
