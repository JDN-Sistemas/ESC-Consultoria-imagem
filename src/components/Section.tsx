import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Fundo alternado entre as seções para criar ritmo na leitura. */
  tone?: "pearl" | "lilac" | "plum";
};

const tones = {
  pearl: "bg-pearl text-plum",
  lilac: "bg-lilac/50 text-plum",
  plum: "bg-plum text-pearl",
} as const;

export function Section({
  id,
  children,
  className = "",
  tone = "pearl",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:py-32 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  inverted?: boolean;
}) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p
          className={`text-xs uppercase tracking-[0.28em] ${
            inverted ? "text-champagne" : "text-magenta"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-3xl leading-tight font-light text-balance sm:text-4xl lg:text-5xl ${
          inverted ? "text-pearl" : "text-plum"
        }`}
      >
        {title}
      </h2>
      <span
        aria-hidden
        className={`block h-px w-16 ${inverted ? "bg-champagne/60" : "bg-magenta/40"}`}
      />
      {description ? (
        <p
          className={`max-w-2xl text-base leading-relaxed text-pretty sm:text-lg ${
            inverted ? "text-pearl/75" : "text-mauve"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
