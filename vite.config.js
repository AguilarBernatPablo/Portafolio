import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import jwt from "jsonwebtoken";
import crypto from "node:crypto";
import { fileURLToPath, URL } from "node:url";
import { loadEnv } from "vite";

function contactVerificationDevPlugin(env) {
  const toJson = (res, statusCode, payload) => {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(payload));
  };

  const readBody = async (req) => {
    const chunks = [];

    for await (const chunk of req) {
      chunks.push(Buffer.from(chunk));
    }

    if (chunks.length === 0) {
      return {};
    }

    try {
      return JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch {
      return null;
    }
  };

  const missingEnv = () =>
    [
      "JWT_SECRET",
      "EMAILJS_SERVICE_ID",
      "EMAILJS_PUBLIC_KEY",
      "EMAILJS_PRIVATE_KEY",
      "EMAILJS_VERIFICATION_TEMPLATE_ID",
      "EMAILJS_CONTACT_TEMPLATE_ID",
    ].filter((key) => !env[key]);

  const hashCode = (code) => crypto.createHash("sha256").update(code).digest("hex");

  const sendEmailJs = async (templateId, templateParams) => {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: env.EMAILJS_SERVICE_ID,
        template_id: templateId,
        user_id: env.EMAILJS_PUBLIC_KEY,
        accessToken: env.EMAILJS_PRIVATE_KEY,
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "EmailJS request failed");
    }
  };

  return {
    name: "contact-verification-dev-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const method = req.method || "GET";
        const url = req.url || "";

        if (method === "OPTIONS" && (url === "/api/request-verification" || url === "/api/confirm-verification")) {
          res.statusCode = 200;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          res.end();
          return;
        }

        if (url !== "/api/request-verification" && url !== "/api/confirm-verification") {
          next();
          return;
        }

        const envErrors = missingEnv();
        if (envErrors.length > 0) {
          toJson(res, 500, { error: `Faltan variables de entorno: ${envErrors.join(", ")}` });
          return;
        }

        if (method !== "POST") {
          toJson(res, 405, { error: "Method not allowed" });
          return;
        }

        const body = await readBody(req);
        if (!body) {
          toJson(res, 400, { error: "JSON inválido" });
          return;
        }

        if (url === "/api/request-verification") {
          const { name, email, message } = body;
          if (!name || !email || !message) {
            toJson(res, 400, { error: "Faltan campos requeridos" });
            return;
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            toJson(res, 400, { error: "Email inválido" });
            return;
          }

          const code = Math.floor(100000 + Math.random() * 900000).toString();
          const token = jwt.sign(
            { name, email, message, codeHash: hashCode(code) },
            env.JWT_SECRET,
            { expiresIn: "10m" }
          );

          try {
            await sendEmailJs(env.EMAILJS_VERIFICATION_TEMPLATE_ID, { email, code });
            toJson(res, 200, { token });
          } catch (error) {
            console.error("Error EmailJS verification:", error);
            toJson(res, 502, { error: "No se pudo enviar el código" });
          }

          return;
        }

        if (url === "/api/confirm-verification") {
          const { token, code } = body;
          if (!token || !code) {
            toJson(res, 400, { error: "Faltan datos de verificación" });
            return;
          }

          try {
            const payload = jwt.verify(token, env.JWT_SECRET);
            if (payload.codeHash !== hashCode(String(code))) {
              toJson(res, 400, { error: "Código incorrecto" });
              return;
            }

            await sendEmailJs(env.EMAILJS_CONTACT_TEMPLATE_ID, {
              name: payload.name,
              email: payload.email,
              message: payload.message,
            });

            toJson(res, 200, { ok: true });
          } catch (error) {
            toJson(res, 400, { error: "Token inválido o vencido" });
          }
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    resolve: {
      alias: {
        "lucide-react": fileURLToPath(new URL("./src/shims/lucide-react.tsx", import.meta.url)),
      },
    },
    plugins: [react(), tailwindcss(), contactVerificationDevPlugin(env)],
  };
});
