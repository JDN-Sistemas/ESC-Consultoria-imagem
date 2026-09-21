import Image from "next/image";

type PortraitProps = {
  /** Caminho da foto dentro de `public/` — ex.: "/images/lucia.JPEG". */
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
};

export function Portrait({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: PortraitProps) {
  return (
    <figure className={`relative ${className}`}>
      {/* Moldura deslocada, em traço fino, reforçando o ar editorial. */}
      <span
        aria-hidden
        className="absolute -top-4 -right-4 bottom-4 left-4 rounded-t-[999px] border border-magenta/30 sm:-top-6 sm:-right-6 sm:bottom-6 sm:left-6"
      />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] bg-lilac">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 480px, 90vw"
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-5 text-center text-xs tracking-[0.2em] text-mauve uppercase">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
