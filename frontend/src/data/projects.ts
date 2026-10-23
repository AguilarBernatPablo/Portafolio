import type { SceneId } from "../components/site/scenes";

export interface Project {
  slug: string;
  name: string;
  kind: string;
  year: number;
  scene: SceneId;
  summary: string;
  did: string[];
  stack: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "negocios-inmobiliarios",
    name: "Negocios Inmobiliarios",
    kind: "Sistema web para una inmobiliaria",
    year: 2026,
    scene: "datos",
    summary:
      "Proyecto de la facultad para una inmobiliaria de Paraná: publicar propiedades y manejar reservas, citas y contratos desde un solo sistema.",
    did: [
      "Diseñé 16 pantallas de alta fidelidad con los colores de la inmobiliaria, en varias rondas de corrección.",
      "Revisé el backlog del equipo: encontré historias duplicadas, dos requisitos prioritarios que faltaban (RF-12 y RF-13) y un orden que no convenía.",
      "Pasé el diagrama entidad-relación a modelos de Mongoose: usuarios, roles, propiedades, categorías, reservas, citas y contratos.",
    ],
    stack: ["Node.js", "Express", "MongoDB Atlas", "Mongoose"],
    links: [],
  },
  {
    slug: "northcode-studio",
    name: "NorthCode Studio",
    kind: "Sitio y marca propia",
    year: 2026,
    scene: "northcode",
    summary:
      "Mi estudio de desarrollo: el sitio que presenta los servicios y recibe consultas de clientes.",
    did: [
      "Armé la interfaz en React 19 con TypeScript y Tailwind, componente por componente.",
      "Programé funciones serverless en Vercel que mandan un código de verificación por email antes de aceptar un mensaje.",
      "Lo publiqué en Vercel con variables de entorno separadas para cada servicio.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    links: [],
  },
];
