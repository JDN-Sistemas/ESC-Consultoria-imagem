import { CtaButton } from "./CtaButton";
import { Portrait } from "./Portrait";
import { site, whatsappLink } from "@/data/site";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-pearl px-5 pt-32 pb-20 sm:px-8 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Halo suave atrás do conteúdo, no lugar de uma imagem de fundo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[32rem] rounded-full bg-lilac/70 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="animate-fade-up flex flex-col items-start gap-7">
          <p className="text-xs tracking-[0.3em] text-magenta uppercase">
            {site.tagline}
          </p>

          <h1 className="font-serif text-4xl leading-[1.1] font-light text-balance text-plum sm:text-5xl lg:text-6xl">
            Revele a sua melhor versão através da{" "}
            <em className="text-magenta not-italic">imagem</em>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-pretty text-mauve sm:text-lg">
            Consultoria de Imagem e Coach de Estilo com {site.consultant} — mais
            de 30 anos ouvindo, entendendo e transformando a relação de mulheres
            com o próprio estilo.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton
              href={whatsappLink(
                "Olá! Quero conhecer minha consultoria de imagem.",
              )}
            >
              Quero conhecer minha consultoria
            </CtaButton>
            <CtaButton href="#servicos" variant="outline" external={false}>
              Ver serviços
            </CtaButton>
          </div>

          <dl className="mt-2 grid grid-cols-2 gap-x-10 gap-y-5 border-t border-plum/10 pt-7 sm:grid-cols-3">
            {[
              { value: "+30", label: "anos de experiência" },
              { value: "100%", label: "atendimento personalizado" },
              { value: "7", label: "frentes de consultoria" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-serif text-3xl text-magenta">
                  {item.value}
                </dt>
                <dd className="mt-1 text-xs tracking-[0.14em] text-mauve uppercase">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Portrait
          src="/images/lucia.JPEG"
          alt={`${site.consultant}, consultora de imagem e coach de estilo`}
          caption={`${site.consultant} · ${site.shortName}`}
          priority
          className="mx-auto w-full max-w-sm lg:max-w-md"
        />
      </div>
    </section>
  );
}
