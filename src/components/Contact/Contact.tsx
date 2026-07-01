import { useState, FormEvent } from "react";
import { LuMail, LuSend } from "react-icons/lu";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: integrar EmailJS o backend propio acá
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <section id="contacto" className="py-24 px-6 md:px-12 bg-zinc-900/40">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">
          Hablemos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Contáctanos
        </h2>
        <p className="text-zinc-400 mt-3">
          ¿Tenés un proyecto en mente? Contanos de qué se trata.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-8 space-y-5 shadow-xl shadow-black/20"
      >
        <div>
          <label className="text-sm text-zinc-400 mb-1.5 block">Nombre</label>
          <input
            type="text"
            required
            className="w-full bg-zinc-950/70 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400 mb-1.5 block">Correo</label>
          <input
            type="email"
            required
            className="w-full bg-zinc-950/70 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400 mb-1.5 block">Mensaje</label>
          <textarea
            required
            rows={4}
            className="w-full bg-zinc-950/70 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            placeholder="Contanos sobre tu proyecto..."
          />
        </div>

        <button
          type="submit"
          disabled={status !== "idle"}
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-medium py-3 rounded-lg transition-colors"
        >
          {status === "idle" && (
            <>
              <LuSend className="w-4 h-4" /> Enviar mensaje
            </>
          )}
          {status === "sending" && "Enviando..."}
          {status === "sent" && (
            <>
              <LuMail className="w-4 h-4" /> ¡Mensaje enviado!
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;