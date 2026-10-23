import express from "express";
import { validarContacto, esBot } from "./validar.js";
import { superaLimite } from "./limite.js";
import { enviarEmail as enviarPorDefecto, faltanVariables } from "./email.js";

// Crea la API. enviarEmail se puede reemplazar en los tests.
export function crearApp({ enviarEmail = enviarPorDefecto } = {}) {
  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", true);
  app.use(express.json({ limit: "10kb" }));

  // CORS solo para los orígenes del frontend (FRONTEND_ORIGIN, separados por coma).
  app.use((req, res, next) => {
    const permitidos = (process.env.FRONTEND_ORIGIN ?? "http://localhost:5173").split(",").map((s) => s.trim());
    const origen = req.headers.origin;
    if (origen && permitidos.includes(origen)) {
      res.setHeader("Access-Control-Allow-Origin", origen);
      res.setHeader("Vary", "Origin");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    }
    if (req.method === "OPTIONS") return res.sendStatus(204);
    next();
  });

  app.get("/api/salud", (_req, res) => res.json({ ok: true }));

  app.post("/api/contacto", async (req, res) => {
    if (esBot(req.body)) return res.json({ ok: true });

    const { datos, error } = validarContacto(req.body);
    if (error) return res.status(400).json({ error });

    if (superaLimite(req.ip ?? "desconocida")) {
      return res.status(429).json({ error: "Mandaste varios mensajes seguidos. Probá de nuevo en unos minutos o escribime por WhatsApp." });
    }

    const faltan = faltanVariables();
    if (faltan.length > 0 && enviarEmail === enviarPorDefecto) {
      console.error("Faltan variables de entorno:", faltan.join(", "));
      return res.status(500).json({ error: "El formulario no está configurado. Escribime directo por email." });
    }

    try {
      await enviarEmail(datos);
      return res.json({ ok: true });
    } catch (err) {
      console.error(err);
      return res.status(502).json({ error: "No se pudo enviar el mensaje. Probá por email o WhatsApp." });
    }
  });

  app.use((_req, res) => res.status(404).json({ error: "No existe esa ruta." }));
  return app;
}

export default crearApp();
