import Split from "../components/site/Split";
import Nav from "../components/site/Nav";
import Ledger from "../components/site/Ledger";
import { Link } from "../lib/router";
import { site } from "../data/site";

const d = (i: number) => ({ "--i": i }) as React.CSSProperties;

function Stripe() {
  return (
    <div className="flex h-14 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 40 }, (_, i) => (
        <span key={i} className={`h-full w-7 shrink-0 ${i % 2 ? "bg-surface" : "bg-ink"}`} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Split first="alba">
        <Nav />

        <section data-scene="alba" aria-labelledby="inicio-titulo" className="bg-surface">
          <div className="hidden lg:block"><Stripe /></div>
          <div className="flex flex-col justify-end px-6 pb-12 pt-10 sm:px-12 lg:min-h-[calc(100svh-11rem)] lg:pt-24">
            <h1 id="inicio-titulo" className="m-0 text-[clamp(3rem,0.4rem+4.6vw,5.25rem)] leading-[0.95] tracking-[-0.035em]">
              <span className="sr-only">{site.name}, desarrollador full stack</span>
              <span aria-hidden="true">Pablo Aguilar Bernat</span>
            </h1>
            <p className="mt-8 max-w-[34ch] text-lead leading-[1.35]" data-reveal style={d(1)}>
              Desarrollador full stack en {site.city}. Hago sitios y sistemas web, de la base de datos a la pantalla.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" data-reveal style={d(2)}>
              <Link href="/proyectos" className="btn btn-accent">Ver proyectos</Link>
              <span className="text-small text-muted">Estudiante de Ingeniería en Sistemas</span>
            </div>
            <ul className="mt-10 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-body" data-reveal style={d(3)}>
              <li><Link href="/como-trabajo" className="link">Cómo trabajo</Link></li>
              <li><a href={site.github} className="link" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="#contacto" className="link">Escribime</a></li>
            </ul>
          </div>
        </section>

        <section data-scene="siesta" aria-labelledby="carta-titulo" className="px-6 py-32 sm:px-12 lg:py-48">
          <div className="max-w-[46ch]">
            <h2 id="carta-titulo" className="m-0 text-head" data-reveal>Hola, soy Pablo</h2>
            <div className="mt-10 space-y-6 text-body">
              <p data-reveal style={d(1)}>
                Estudio Ingeniería en Sistemas y hago desarrollo web completo: desde el modelo de datos hasta la última pantalla que ve quien usa el sistema.
              </p>
              <p data-reveal style={d(2)}>
                Empecé <span className="bg-accent/35 px-1">NorthCode Studio</span> para hacer sitios y sistemas a medida. Hoy lo llevo adelante solo: hablo con quien me pide el trabajo, diseño, programo y lo publico.
              </p>
              <p data-reveal style={d(3)}>
                En la facultad trabajé en Negocios Inmobiliarios, un sistema para una inmobiliaria de acá de Paraná. Diseñé las pantallas, ordené el backlog y armé la base de datos.
              </p>
              <p data-reveal style={d(4)}>
                Me gusta entender el problema antes de escribir código, y dejar todo explicado para que otra persona pueda seguir donde yo dejé.
              </p>
            </div>
            <p className="mt-12 font-display text-lead" data-reveal style={d(5)}>{site.name}</p>
            <p className="mt-1 text-small text-muted" data-reveal style={d(5)}>{site.role} · {site.city}</p>
          </div>
        </section>

        <section data-scene="noche" aria-labelledby="trabajos-titulo" className="px-6 pb-32 sm:px-12 lg:pb-48">
          <h2 id="trabajos-titulo" className="m-0 text-head" data-reveal>Proyectos</h2>
          <p className="mt-6 max-w-[40ch] text-body" data-reveal style={d(1)}>
            Dos trabajos reales, uno de la facultad y uno propio. En cada uno cuento qué hice yo y con qué.
          </p>
          <div className="mt-10">
            <Ledger anchors={false} big />
          </div>
          <div className="mt-10" data-reveal style={d(4)}>
            <Link href="/proyectos" className="btn btn-ink">Leer cada proyecto</Link>
          </div>
        </section>
      </Split>
    </>
  );
}
