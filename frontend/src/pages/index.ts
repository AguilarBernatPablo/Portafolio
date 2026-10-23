import Home from "./Home";
import Projects from "./Projects";
import Process from "./Process";
// Cada página del sitio: su ruta, el componente y el título de la pestaña.
// Cada rama feature/<página> agrega la suya.
export const pages: Record<string, { view: () => React.JSX.Element; title: string }> = {
  "/": { view: Home, title: "Pablo Aguilar Bernat · Desarrollador full stack" },
  "/proyectos": { view: Projects, title: "Proyectos · Pablo Aguilar Bernat" },
  "/como-trabajo": { view: Process, title: "Cómo trabajo · Pablo Aguilar Bernat" },
};
