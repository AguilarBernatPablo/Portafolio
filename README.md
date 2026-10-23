# Portafolio · Pablo Aguilar Bernat

Mi portafolio profesional: desarrollador full stack y estudiante de Ingeniería en Sistemas en Paraná, Entre Ríos.

El sitio tiene tres páginas (Inicio, Proyectos y Cómo trabajo). Media pantalla queda fija como un ventanal que cambia de escena según la sección, y la otra media se lee con scroll lento y contenido que aparece de a poco.

## Estructura

```
frontend/   Sitio en React 19 + TypeScript + Vite + Tailwind CSS 4
backend/    API en Node.js + Express para el formulario de contacto
```

## Cómo correrlo

```bash
# API (puerto 3001)
cd backend
cp .env.example .env   # completar con los datos de EmailJS
npm install
npm run dev

# Sitio (puerto 5173, /api se redirige al backend)
cd frontend
npm install
npm run dev
```

Tests del backend: `cd backend && npm test`.

## Publicar en Vercel

Dos proyectos de Vercel apuntando a este mismo repositorio:

| Proyecto | Root Directory | Variables de entorno |
| --- | --- | --- |
| Sitio | `frontend` | `VITE_API_URL` = URL del proyecto del backend |
| API | `backend` | `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`, `EMAILJS_PRIVATE_KEY`, `FRONTEND_ORIGIN` = URL del sitio |

En EmailJS hay que activar *Account › Security › Allow EmailJS API for non-browser applications*.

## Ramas

- `main`: lo publicado.
- `develop`: integración.
- `feature/*`: una rama por cambio (estructura, cada página).
