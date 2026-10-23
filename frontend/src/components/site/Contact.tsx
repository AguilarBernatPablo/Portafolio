import { useState, type FormEvent } from "react";
import { site } from "../../data/site";
import { scenes } from "./scenes";

const reasons = [
  { id: "entrevista", label: "Una entrevista", body: "Hola Pablo, vi tu portafolio y me gustaría coordinar una entrevista para un puesto de desarrollo." },
  { id: "pasantia", label: "Una pasantía", body: "Hola Pablo, vi tu portafolio y tenemos una pasantía en desarrollo web que puede interesarte." },
  { id: "proyecto", label: "Un proyecto", body: "Hola Pablo, vi tu portafolio y quiero consultarte por un proyecto." },
  { id: "otra", label: "Otra cosa", body: "Hola Pablo, " },
] as const;

type ReasonId = (typeof reasons)[number]["id"];
type Status = { kind: "idle" | "sending" | "sent" } | { kind: "error"; message: string };

const API = import.meta.env.VITE_API_URL ?? "";

const field =
  "mt-2 block w-full bg-white px-4 py-3 text-body text-ink outline-none transition-shadow duration-200 focus-visible:shadow-[0_0_0_3px_var(--color-accent)]";

export default function Contact() {
  const [reason, setReason] = useState<ReasonId>("entrevista");
  const [message, setMessage] = useState<string>(reasons[0].body);
  const [edited, setEdited] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const Night = scenes.noche;

  const pick = (id: ReasonId) => {
    setReason(id);
    if (!edited) setMessage(reasons.find((r) => r.id === id)!.body);
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(`${API}/api/contacto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.get("nombre"),
          email: form.get("email"),
          mensaje: form.get("mensaje"),
          motivo: reason,
          sitio: form.get("sitio"),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "No se pudo enviar el mensaje.");
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "No se pudo enviar el mensaje." });
    }
  };

  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="bg-sand px-6 py-32 sm:px-12 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <h2 id="contacto-titulo" className="m-0 text-head" data-reveal>Escribime</h2>
          <p className="mt-8 max-w-[26ch] text-lead leading-[1.3]" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Si buscás a alguien que se haga cargo de un sistema de punta a punta, hablemos.
          </p>
          <div className="mt-12 flex items-start gap-6" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
            <div className="relative hidden aspect-square w-28 shrink-0 overflow-hidden sm:block" aria-hidden="true">
              <Night />
            </div>
            <ul className="m-0 list-none space-y-1 p-0 text-body">
              <li><a className="link" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a className="link" href={site.phoneHref}>{site.phoneLabel}</a></li>
              <li><a className="link" href={site.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li className="text-small text-muted">{site.city} · Argentina</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
          {status.kind === "sent" ? (
            <div className="bg-white p-8" role="status">
              <p className="m-0 font-display text-lead">Mensaje enviado. Gracias.</p>
              <p className="mt-3 text-body">Te respondo a la brevedad al email que dejaste.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate={false}>
              <fieldset className="m-0 border-0 p-0">
                <legend className="mb-4 p-0 text-body font-semibold">¿Sobre qué me escribís?</legend>
                <div className="flex flex-wrap gap-2">
                  {reasons.map((x) => (
                    <label
                      key={x.id}
                      className="inline-flex min-h-11 cursor-pointer items-center bg-white px-4 text-body transition-colors duration-200 hover:bg-surface has-[:checked]:bg-ink has-[:checked]:text-white has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-accent"
                    >
                      <input type="radio" name="motivo" value={x.id} checked={reason === x.id} onChange={() => pick(x.id)} className="sr-only" />
                      {x.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="block text-body">
                  Nombre
                  <input name="nombre" type="text" required minLength={2} maxLength={80} autoComplete="name" placeholder="Ana Pérez…" className={field} />
                </label>
                <label className="block text-body">
                  Email
                  <input name="email" type="email" required maxLength={120} autoComplete="email" spellCheck={false} placeholder="ana@empresa.com…" className={field} />
                </label>
              </div>

              <label className="mt-6 block text-body">
                Mensaje
                <textarea
                  name="mensaje"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setEdited(true);
                  }}
                  className={`${field} resize-y`}
                />
              </label>

              {/* Campo trampa para bots: oculto para las personas */}
              <label className="absolute -left-[9999px]" aria-hidden="true">
                Sitio web
                <input name="sitio" type="text" tabIndex={-1} autoComplete="off" />
              </label>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <button type="submit" className="btn btn-accent cursor-pointer border-0" disabled={status.kind === "sending"}>
                  {status.kind === "sending" ? "Enviando…" : "Enviar mensaje"}
                </button>
                <a className="link text-body" href={whatsapp} target="_blank" rel="noreferrer">o mandalo por WhatsApp</a>
              </div>

              <p className="mt-4 min-h-6 text-body text-[#9b1c1c]" aria-live="polite">
                {status.kind === "error" ? status.message : ""}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
