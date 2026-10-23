import Split from "../components/site/Split";
import Nav from "../components/site/Nav";
import Ledger from "../components/site/Ledger";
import { scenes } from "../components/site/scenes";
import { projects } from "../data/projects";

const d = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Projects() {
  return (
    <Split first="siesta">
      <Nav />

      <section data-scene="siesta" aria-labelledby="proyectos-titulo" className="px-6 pb-24 pt-16 sm:px-12 lg:pt-32">
        <h1 id="proyectos-titulo" className="m-0 text-[clamp(2.75rem,1.6rem+4vw,5rem)]">Proyectos</h1>
        <p className="mt-6 max-w-[40ch] text-lead leading-[1.35]">
          Los sistemas web que hice, contados por lo que hice yo en cada uno.
        </p>
        <div className="mt-8">
          <a href="#contacto" className="btn btn-accent">Escribime</a>
        </div>
        <div className="mt-14">
          <Ledger anchors />
        </div>
      </section>

      {projects.map((p) => {
        const Scene = scenes[p.scene];
        return (
          <article
            key={p.slug}
            id={p.slug}
            data-scene={p.scene}
            aria-labelledby={`${p.slug}-titulo`}
            className="px-6 py-28 sm:px-12 lg:py-44"
          >
            <div className="relative mb-10 aspect-[4/3] overflow-hidden lg:hidden" aria-hidden="true">
              <Scene />
            </div>
            <p className="m-0 text-body text-muted" data-reveal>
              {p.kind} · <span className="tabular-nums">{p.year}</span>
            </p>
            <h2 id={`${p.slug}-titulo`} className="mt-3 text-head" data-reveal style={d(1)}>{p.name}</h2>
            <p className="mt-8 max-w-[46ch] text-lead leading-[1.4]" data-reveal style={d(2)}>{p.summary}</p>

            <h3 className="mt-12 font-text text-body font-semibold tracking-normal" data-reveal style={d(3)}>Qué hice</h3>
            <ul className="mt-4 max-w-[46ch] space-y-4 pl-5 text-body marker:text-accent">
              {p.did.map((item, i) => (
                <li key={item} data-reveal style={d(4 + i)}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-12 font-text text-body font-semibold tracking-normal" data-reveal style={d(7)}>Con qué</h3>
            <p className="mt-3 max-w-[46ch] text-body" data-reveal style={d(8)}>{p.stack.join(", ")}</p>

            {p.links.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-3" data-reveal style={d(9)}>
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} className="btn btn-ink" target="_blank" rel="noreferrer">{l.label}</a>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </Split>
  );
}
