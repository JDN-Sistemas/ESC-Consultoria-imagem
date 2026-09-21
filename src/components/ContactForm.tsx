"use client";

import { useState } from "react";
import { services, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

/**
 * Sem back-end: o formulário monta a mensagem e abre a conversa no WhatsApp.
 * Para enviar por e-mail/CRM, troque `onSubmit` por um Server Action.
 */
export function ContactForm() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Olá! Meu nome é ${data.get("nome")}.`,
      `Tenho interesse em: ${data.get("servico")}.`,
      `E-mail: ${data.get("email")}`,
      `Telefone: ${data.get("telefone")}`,
      data.get("mensagem") ? `\n${data.get("mensagem")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setSending(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSending(false);
  }

  const fieldClass =
    "w-full border-b border-plum/20 bg-transparent py-3 text-plum placeholder:text-mauve/60 transition-colors focus:border-magenta focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-xs tracking-[0.2em] text-mauve uppercase">
            Nome
          </span>
          <input
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Como posso te chamar?"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs tracking-[0.2em] text-mauve uppercase">
            E-mail
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="seu@email.com"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs tracking-[0.2em] text-mauve uppercase">
            Telefone
          </span>
          <input
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs tracking-[0.2em] text-mauve uppercase">
            Qual serviço te interessa?
          </span>
          <select name="servico" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Selecione uma opção
            </option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Outro serviço">Outro / ainda não sei</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-xs tracking-[0.2em] text-mauve uppercase">
          Mensagem (opcional)
        </span>
        <textarea
          name="mensagem"
          rows={3}
          placeholder="Conte um pouco sobre o seu momento."
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-magenta px-7 py-3.5 text-sm tracking-wide text-pearl uppercase transition-colors duration-300 hover:bg-magenta-dark disabled:opacity-60"
      >
        <WhatsAppIcon className="size-4" />
        Enviar pelo WhatsApp
      </button>

      <p className="text-xs leading-relaxed text-mauve/80">
        Ao enviar, a conversa abre no WhatsApp com as informações já
        preenchidas.
      </p>
    </form>
  );
}
