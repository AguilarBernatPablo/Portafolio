import jwt from "jsonwebtoken";

const codeFor = () => Math.floor(100000 + Math.random() * 900000).toString();

const requiredEnv = [
  "JWT_SECRET",
  "EMAILJS_SERVICE_ID",
  "EMAILJS_PUBLIC_KEY",
  "EMAILJS_PRIVATE_KEY",
  "EMAILJS_VERIFICATION_TEMPLATE_ID",
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  const missingEnv = requiredEnv.filter((key) => !process.env[key]);
  if (missingEnv.length > 0) {
    return res.status(500).json({
      error: `Faltan variables de entorno: ${missingEnv.join(", ")}`,
    });
  }

  const code = codeFor();
  const token = jwt.sign(
    { name, email, message, code },
    process.env.JWT_SECRET,
    { expiresIn: "10m" }
  );

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_VERIFICATION_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        email,
        code,
      },
    }),
  });

  if (!response.ok) {
    return res.status(500).json({ error: "No se pudo enviar el código" });
  }

  res.status(200).set(corsHeaders).json({ token });
}
