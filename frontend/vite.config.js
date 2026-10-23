import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // En desarrollo, /api va al backend local (cd backend && npm run dev).
  server: {
    proxy: { "/api": "http://localhost:3001" },
  },
});
