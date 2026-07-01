export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

// Todavía no hay proyectos cargados.
// Cuando subas uno nuevo, agregá un objeto acá y va a aparecer
// automáticamente en la sección Proyectos.
export const projects: Project[] = [];