import { WhatsAppIcon } from "./Icons";
import { whatsappLink } from "@/data/site";

/** Atalho permanente para o WhatsApp — a maior parte do tráfego vem do mobile. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site e gostaria de conversar.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-magenta text-pearl shadow-lg shadow-plum/20 transition-transform duration-300 hover:scale-105 hover:bg-magenta-dark sm:right-8 sm:bottom-8"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
