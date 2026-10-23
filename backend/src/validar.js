export const MOTIVOS = ["entrevista", "pasantia", "proyecto", "otra"];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Devuelve { datos } si el mensaje sirve, o { error } con un texto para mostrar.
export function validarContacto(body) {
  if (!body || typeof body !== "object") return { error: "Faltan los datos del mensaje." };

  const nombre = String(body.nombre ?? "").trim();
  const email = String(body.email ?? "").trim();
  const mensaje = String(body.mensaje ?? "").trim();
  const motivo = MOTIVOS.includes(body.motivo) ? body.motivo : "otra";

  if (nombre.length < 2 || nombre.length > 80) return { error: "Escribí tu nombre (entre 2 y 80 caracteres)." };
  if (!EMAIL.test(email) || email.length > 120) return { error: "Revisá el email: no parece válido." };
  if (mensaje.length < 10 || mensaje.length > 2000) return { error: "El mensaje tiene que tener entre 10 y 2000 caracteres." };

  return { datos: { nombre, email, mensaje, motivo } };
}

// Campo trampa: las personas no lo ven, los bots lo completan.
export const esBot = (body) => Boolean(body && String(body.sitio ?? "").trim());
