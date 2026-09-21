import { Section, SectionHeading } from "./Section";
import { journey } from "@/data/site";

export function Journey() {
  return (
    <Section id="jornada" tone="plum">
      <SectionHeading
        eyebrow="Como funciona"
        title="Sua jornada de autoconhecimento"
        description="Um caminho conduzido passo a passo, do primeiro diálogo ao acompanhamento na aplicação do seu estilo."
        inverted
      />

      <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Linha do tempo contínua apenas no desktop. */}
        <span
          aria-hidden
          className="absolute top-6 right-0 left-0 hidden h-px bg-pearl/15 lg:block"
        />

        {journey.map((step, index) => (
          <li key={step.title} className="relative flex flex-col gap-4">
            <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-champagne/50 bg-plum font-serif text-lg text-champagne">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-2xl leading-snug font-light text-balance text-pearl">
              {step.title}
            </h3>
            <p className="leading-relaxed text-pretty text-pearl/70">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-16 border-t border-pearl/15 pt-10 text-center font-serif text-xl leading-relaxed text-balance text-pearl/90 italic sm:text-2xl">
        Com a ESC – Essência e Estilo, você será guiada em uma jornada de
        autoconhecimento, revelando sua melhor versão.
      </p>
    </Section>
  );
}
