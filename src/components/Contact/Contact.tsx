import { useState, FormEvent } from "react";
import { LuArrowRight, LuMail, LuCircleAlert, LuShieldCheck } from "react-icons/lu";

type Step = "form" | "verify" | "sent";

const Contact = () => {
  const [step, setStep] = useState<Step>("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [token, setToken] = useState("");

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/request-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Ocurrió un error, probá de nuevo");
        return;
      }

      setToken(data.token);
      setStep("verify");
    } catch {
      setError("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/confirm-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, code }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Código incorrecto");
        return;
      }

      setStep("sent");
    } catch {
      setError("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 md:px-12 bg-zinc-900/40">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-lime-500 text-sm font-medium tracking-wide uppercase">
          Hablemos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Contáctanos
        </h2>
        <p className="text-zinc-400 mt-3">
          ¿Tenés un proyecto en mente? Contanos de qué se trata.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-8 shadow-xl shadow-black/20">
        {step === "form" && (
          <form onSubmit={handleSubmitForm} className="space-y-5">
            <div>
              <label className="text-sm text-zinc-400 mb-1.5 block">Nombre</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-950/70 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-500 transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400 mb-1.5 block">Correo</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-950/70 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-500 transition-colors"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400 mb-1.5 block">Mensaje</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-zinc-950/70 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-500 transition-colors resize-none"
                placeholder="Contanos sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 disabled:opacity-60 text-white font-medium py-3 rounded-lg transition-colors"
            >
              {loading ? (
                "Enviando código..."
              ) : (
                <>
                  <LuArrowRight className="w-4 h-4" /> Enviar mensaje
                </>
              )}
            </button>

            {error && (
              <p className="flex items-center gap-1.5 text-red-400 text-sm justify-center">
                <LuCircleAlert className="w-4 h-4" /> {error}
              </p>
            )}
          </form>
        )}

        {step === "verify" && (
          <form onSubmit={handleVerifyCode} className="space-y-5">
            <div className="text-center mb-2">
              <LuShieldCheck className="w-8 h-8 text-lime-500 mx-auto mb-3" />
              <p className="text-zinc-300 text-sm">
                Te enviamos un código de 6 dígitos a{" "}
                <span className="text-white font-medium">{email}</span>.
                Ingresalo para confirmar tu mensaje.
              </p>
            </div>

            <input
              type="text"
              required
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              className="w-full text-center tracking-[0.5em] text-lg bg-zinc-950/70 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-500 transition-colors"
              placeholder="000000"
            />

            <button
              type="submit"
              disabled={loading || code.length !== 6}
              className="w-full flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 disabled:opacity-60 text-white font-medium py-3 rounded-lg transition-colors"
            >
              {loading ? "Verificando..." : "Confirmar código"}
            </button>

            <button
              type="button"
              onClick={() => setStep("form")}
              className="w-full text-zinc-400 hover:text-white text-sm transition-colors"
            >
              Volver y editar el mensaje
            </button>

            {error && (
              <p className="flex items-center gap-1.5 text-red-400 text-sm justify-center">
                <LuCircleAlert className="w-4 h-4" /> {error}
              </p>
            )}
          </form>
        )}

        {step === "sent" && (
          <div className="text-center py-6">
            <LuMail className="w-10 h-10 text-lime-500 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg">
              ¡Mensaje enviado!
            </h3>
            <p className="text-zinc-400 text-sm mt-2">
              Gracias por escribirnos, te vamos a responder a la brevedad.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;