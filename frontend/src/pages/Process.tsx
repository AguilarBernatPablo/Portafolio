import Split from "../components/site/Split";
import Nav from "../components/site/Nav";

const d = (i: number) => ({ "--i": i }) as React.CSSProperties;

const principles = [
  {
    title: "Ordeno antes de programar",
    text: "Paso el pedido a historias de usuario y reviso el backlog: qué falta, qué está repetido y qué conviene hacer primero.",
  },
  {
    title: "Empiezo por los datos",
    text: "Dibujo el diagrama entidad-relación y de ahí salen los modelos. Si los datos están bien pensados, el resto se ordena solo.",
  },
  {
    title: "Una rama por funcionalidad",
    text: "Cada cambio vive en su rama y entra a develop cuando está probado. Así el historial cuenta cómo se construyó el sistema.",
  },
];

const stack = [
  { area: "Frontend", tools: "React, TypeScript, Vite, Tailwind CSS" },
  { area: "Backend", tools: "Node.js, Express, Java, Spring Boot" },
  { area: "Datos", tools: "MongoDB, Mongoose, MySQL" },
  { area: "Herramientas", tools: "Git, GitHub, Docker, Vercel" },
];

const route = [
  {
    stage: "Antes de programar",
    rows: [
      ["Escucho el pedido y lo escribo como historias", "backlog"],
      ["Saco duplicados y ordeno prioridades", "backlog revisado"],
      ["Modelo los datos", "diagrama ER"],
    ],
  },
  {
    stage: "Mientras construyo",
    rows: [
      ["Diseño las pantallas y las corrijo con quien las pidió", "maquetas"],
      ["Programo cada funcionalidad en su rama", "feature → develop"],
      ["Armo la API y los modelos", "Node.js y MongoDB"],
    ],
  },
  {
    stage: "Al entregar",
    rows: [
      ["Publico con variables de entorno separadas", "Vercel"],
      ["Dejo el código explicado", "README"],
    ],
  },
];

export default function Process() {
  return (
    <>
      <Split first="camalotes">
        <Nav />

        <section data-scene="camalotes" aria-labelledby="trabajo-titulo" className="px-6 pb-28 pt-16 sm:px-12 lg:pt-32">
          <h1 id="trabajo-titulo" className="m-0 text-[clamp(2.75rem,1.6rem+4vw,5rem)]">Cómo trabajo</h1>
          <p className="mt-6 max-w-[40ch] text-lead leading-[1.35]">
            Hago sistemas web solo y de punta a punta: hablo con quien los pide, los diseño, los programo y los publico.
          </p>
          <div className="mt-8">
            <a href="#contacto" className="btn btn-accent">Escribime</a>
          </div>
          <dl className="mt-16 max-w-[46ch] space-y-10">
            {principles.map((p, i) => (
              <div key={p.title} data-reveal style={d(2 + i)}>
                <dt className="font-display text-lead">{p.title}</dt>
                <dd className="m-0 mt-3 text-body">{p.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section data-scene="playa" aria-labelledby="stack-titulo" className="px-6 pb-24 pt-12 sm:px-12 lg:pb-28">
          <h2 id="stack-titulo" className="m-0 text-head" data-reveal>Con qué trabajo</h2>
          <dl className="mt-12 max-w-[46ch] space-y-6">
            {stack.map((s, i) => (
              <div key={s.area} data-reveal style={d(1 + i)}>
                <dt className="text-small text-muted">{s.area}</dt>
                <dd className="m-0 mt-2 flex flex-wrap gap-2">
                  {s.tools.split(", ").map((t) => (
                    <span key={t} className="rounded-full bg-raised px-4 py-1.5 text-body">{t}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </Split>

      <section aria-labelledby="recorrido-titulo" className="px-3 pb-3">
        <div className="mx-auto grid gap-14 rounded-[var(--radius-card)] bg-surface px-6 py-24 sm:px-12 lg:grid-cols-12 lg:gap-6 lg:py-32">
          <div className="lg:col-span-5">
            <h2 id="recorrido-titulo" className="m-0 text-[clamp(2.5rem,1.2rem+3.4vw,4.25rem)]" data-reveal>El recorrido de un proyecto</h2>
            <p className="mt-8 max-w-[30ch] text-body" data-reveal style={d(1)}>
              Lo que hago en cada etapa y lo que queda escrito cuando la termino.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-card)] bg-raised px-7 pt-8 text-ink sm:px-10 lg:col-span-6 lg:col-start-7" data-reveal style={d(2)}>
            {route.map((g) => (
              <div key={g.stage} className="mt-7 first:mt-0">
                <h3 className="m-0 font-text text-body font-semibold tracking-normal">{g.stage}</h3>
                <ul className="mt-3 list-none space-y-2 p-0">
                  {g.rows.map(([what, out]) => (
                    <li key={what} className="flex items-end text-body">
                      <span className="min-w-0">{what}</span>
                      <span className="leader mb-[0.45em]" aria-hidden="true" />
                      <span className="shrink-0 text-right text-muted">{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="-mx-7 mt-8 flex min-h-14 items-center bg-accent px-7 py-4 text-body font-semibold text-on-accent sm:-mx-10 sm:px-10">
              Al final queda el sistema publicado y el código en GitHub.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
