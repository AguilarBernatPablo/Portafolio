export const site = {
  name: "Pablo Aguilar Bernat",
  role: "Desarrollador full stack",
  city: "Paraná, Entre Ríos",
  email: "pablobernat25@gmail.com",
  phoneLabel: "+54 343 506-1712",
  phoneHref: "tel:+543435061712",
  // WhatsApp en Argentina usa 54 + 9 + característica sin 0 + número
  whatsapp: "5493435061712",
  github: "https://github.com/AguilarBernatPablo",
};

export const routes = [
  { path: "/", label: "Inicio" },
  { path: "/proyectos", label: "Proyectos" },
  { path: "/como-trabajo", label: "Cómo trabajo" },
] as const;
