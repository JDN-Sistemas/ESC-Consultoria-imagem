"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do corpo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-pearl/95 shadow-[0_1px_0_rgba(43,15,38,0.10)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#topo"
          className="flex items-center gap-3 leading-none"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/esc-logo.png"
            alt=""
            width={44}
            height={44}
            priority
            className="size-10 rounded-full sm:size-11"
          />
          <span className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.2em] text-plum">
              ESC
            </span>
            <span className="mt-1 text-[0.6rem] tracking-[0.22em] text-mauve uppercase">
              Essência e Estilo
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-mauve transition-colors hover:text-magenta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(
              `Olá, ${site.consultant}! Vim pelo site e gostaria de saber mais sobre a consultoria.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-magenta px-5 py-2.5 text-xs tracking-wider text-pearl uppercase transition-colors hover:bg-magenta-dark sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Agendar conversa
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex size-10 items-center justify-center rounded-full border border-plum/15 text-plum lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-plum/10 bg-pearl lg:hidden"
      >
        <nav
          aria-label="Navegação mobile"
          className="flex flex-col px-5 py-4 sm:px-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-plum/10 py-4 font-serif text-xl text-plum last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink(
              `Olá, ${site.consultant}! Vim pelo site e gostaria de saber mais sobre a consultoria.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-magenta px-6 py-3.5 text-xs tracking-wider text-pearl uppercase"
          >
            <WhatsAppIcon className="size-4" />
            Agendar conversa
          </a>
        </nav>
      </div>
    </header>
  );
}
