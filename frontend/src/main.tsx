import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/young-serif/latin.css";
import "@fontsource-variable/source-serif-4/opsz.css";
import "@fontsource-variable/source-serif-4/opsz-italic.css";
import "./index.css";
import App from "./App";

// Las animaciones de entrada solo esconden contenido si este script corre.
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
