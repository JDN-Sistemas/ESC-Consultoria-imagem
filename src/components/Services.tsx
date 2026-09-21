import { Section, SectionHeading } from "./Section";
import { CtaButton } from "./CtaButton";
import { ServiceIconFor } from "./Icons";
import { services, whatsappLink } from "@/data/site";

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeading
        eyebrow="Serviços"
        title="Como posso te ajudar"
        description="Cada encontro é desenhado a partir da sua história, do seu corpo e dos seus objetivos — da descoberta do estilo às compras assistidas."
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.title}>
            <article className="group h-full rounded-sm border border-plum/10 bg-white/60 p-8 transition-colors duration-300 hover:border-magenta/40 hover:bg-white">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-lilac text-magenta transition-colors duration-300 group-hover:bg-magenta group-hover:text-pearl">
                <ServiceIconFor name={service.icon} className="size-6" />
              </span>
              <h3 className="mt-6 font-serif text-2xl leading-snug font-light text-balance text-plum">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-pretty text-mauve">
                {service.description}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col items-center gap-8 text-center">
        <p className="max-w-2xl text-pretty text-mauve italic">
          Entre outros serviços relacionados às vestimentas, conforme a
          necessidade e o desejo de cada cliente.
        </p>
        <CtaButton
          href={whatsappLink(
            "Olá! Gostaria de montar o serviço ideal para o meu momento.",
          )}
        >
          Fale comigo e vamos montar o serviço ideal
        </CtaButton>
      </div>
    </Section>
  );
}
