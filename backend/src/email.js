const REQUERIDAS = ["EMAILJS_SERVICE_ID", "EMAILJS_TEMPLATE_ID", "EMAILJS_PUBLIC_KEY", "EMAILJS_PRIVATE_KEY"];

export const faltanVariables = () => REQUERIDAS.filter((k) => !process.env[k]);

// Envía el mensaje con la API REST de EmailJS. Las claves nunca llegan al navegador.
export async function enviarEmail({ nombre, email, mensaje, motivo }) {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: { name: nombre, email, message: mensaje, motivo },
    }),
  });
  if (!res.ok) throw new Error(`EmailJS respondió ${res.status}: ${await res.text()}`);
}
