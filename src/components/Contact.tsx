import { Section, SectionHeading } from "./Section";
import { ContactForm } from "./ContactForm";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "./Icons";
import { contact, whatsappLink } from "@/data/site";

const channels = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: contact.whatsapp.display,
    href: whatsappLink("Olá! Vim pelo site e gostaria de conversar."),
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: contact.instagram.handle,
    href: contact.instagram.href,
  },
  {
    icon: InstagramIcon,
    label: "Instagram pessoal",
    value: contact.instagramPersonal.handle,
    href: contact.instagramPersonal.href,
  },
  {
    icon: MailIcon,
    label: "E-mail",
    value: contact.emails[0],
    href: `mailto:${contact.emails[0]}`,
  },
  {
    icon: MailIcon,
    label: "E-mail",
    value: contact.emails[1],
    href: `mailto:${contact.emails[1]}`,
  },
];

export function Contact() {
  return (
    <Section id="contato">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Vamos conversar"
            title="Vamos conversar sobre como podemos revelar a sua melhor versão?"
            description="Envie uma mensagem ou nos encontre nas redes sociais."
            align="left"
          />

          <ul className="flex flex-col divide-y divide-plum/10 border-y border-plum/10">
            {channels.map((channel) => (
              <li key={`${channel.label}-${channel.value}`}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 transition-colors hover:text-magenta"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lilac text-magenta transition-colors group-hover:bg-magenta group-hover:text-pearl">
                    <channel.icon className="size-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[0.65rem] tracking-[0.2em] text-mauve uppercase">
                      {channel.label}
                    </span>
                    <span className="text-base break-all">{channel.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-sm border border-plum/10 bg-lilac/40 p-8 sm:p-10">
          <h3 className="font-serif text-2xl font-light text-plum">
            Prefere que eu entre em contato?
          </h3>
          <p className="mt-2 mb-8 text-sm leading-relaxed text-mauve">
            Preencha os campos abaixo e me conte o que você procura.
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
