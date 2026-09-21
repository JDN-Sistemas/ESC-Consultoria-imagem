import { Section, SectionHeading } from "./Section";
import { Portrait } from "./Portrait";
import { formation, site } from "@/data/site";

export function About() {
  return (
    <Section id="sobre" tone="lilac">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Portrait
          src="/images/lucilene-sobre.jpg"
          alt={`${site.consultant}, consultora de imagem, de braços cruzados`}
          className="mx-auto w-full max-w-xs lg:sticky lg:top-28 lg:max-w-sm"
        />

        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Sobre a consultora"
            title={`Quem é ${site.consultant}`}
            align="left"
          />

          <p className="text-base leading-relaxed text-pretty text-mauve sm:text-lg">
            Profissional com mais de 30 anos de experiência em atendimento ao
            cliente, vendas consultivas e desenvolvimento pessoal. Essa vivência
            se une a técnicas de consultoria de imagem e estilo para revelar a
            melhor versão de cada cliente e potencializar sua autoestima — do
            diagnóstico inicial até os dossiês e sessões de personal shopper.
          </p>

          <div>
            <h3 className="text-xs tracking-[0.24em] text-magenta uppercase">
              Formação
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {formation.map((item) => (
                <li key={item} className="flex items-start gap-3 text-plum">
                  <span
                    aria-hidden
                    className="mt-2.5 block size-1.5 shrink-0 rotate-45 bg-magenta"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="border-l-2 border-magenta/50 pl-6">
            <p className="font-serif text-xl leading-relaxed text-pretty text-plum italic sm:text-2xl">
              “Busco aplicar minha visão profissional e a paixão por estilo para
            criar experiências excepcionais e impulsionar resultados às
            clientes, empoderando mulheres através do vestir, usando a
            experiência de uma vida inteira.”
            </p>
            <footer className="mt-4 text-xs tracking-[0.2em] text-mauve uppercase">
              {site.consultant}
            </footer>
          </blockquote>

        </div>
      </div>
    </Section>
  );
}
