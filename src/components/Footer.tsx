import Image from "next/image";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "./Icons";
import { contact, navLinks, site, whatsappLink } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      href: whatsappLink("Olá! Vim pelo site."),
    },
    {
      icon: InstagramIcon,
      label: `Instagram ${contact.instagram.handle}`,
      href: contact.instagram.href,
    },
    {
      icon: InstagramIcon,
      label: `Instagram ${contact.instagramPersonal.handle}`,
      href: contact.instagramPersonal.href,
    },
    {
      icon: MailIcon,
      label: `E-mail ${contact.emails[0]}`,
      href: `mailto:${contact.emails[0]}`,
    },
  ];

  return (
    <footer className="bg-plum px-5 py-14 text-pearl sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src="/images/esc-logo.png"
              alt="Logo ESC – Essência e Estilo"
              width={72}
              height={72}
              className="mb-5 size-16 rounded-full"
            />
            <p className="font-serif text-3xl tracking-[0.2em]">
              {site.shortName}
            </p>
            <p className="mt-2 text-sm tracking-[0.16em] text-pearl/70 uppercase">
              Essência e Estilo
            </p>
            <p className="mt-1 text-sm text-pearl/60">{site.tagline}</p>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-pearl/70 transition-colors hover:text-champagne"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ul className="flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-pearl/20 text-pearl/80 transition-colors hover:border-champagne hover:text-champagne"
                >
                  <social.icon className="size-4.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="border-t border-pearl/15 pt-8 text-xs text-pearl/50">
          Copyright © {year} ESC – Essência e Estilo. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
