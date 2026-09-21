import type { ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  /** Externo por padrão: os CTAs apontam para WhatsApp, Instagram e e-mail. */
  external?: boolean;
  withArrow?: boolean;
};

const variants = {
  primary:
    "bg-magenta text-pearl hover:bg-magenta-dark focus-visible:bg-magenta-dark",
  outline:
    "border border-plum/25 text-plum hover:border-magenta hover:text-magenta",
  light: "bg-pearl text-plum hover:bg-lilac",
} as const;

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = true,
  withArrow = true,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm tracking-wide uppercase transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow ? (
        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </a>
  );
}
