import { projects } from "../../data/projects";
import { Link } from "../../lib/router";
import { useSetScene } from "./Split";

// Lista de proyectos: al pasar por una fila, el ventanal muestra ese trabajo.
// "big" es el índice grande de la portada; sin él, la lista tranquila de Proyectos.
export default function Ledger({ anchors, big = false }: { anchors: boolean; big?: boolean }) {
  const setScene = useSetScene();
  return (
    <ul className="group/ledger m-0 list-none p-0">
      {projects.map((p, i) => {
        const inner = big ? (
          <>
            <span className="font-display text-[clamp(2rem,1rem+2.8vw,3.75rem)] leading-[1] tracking-[-0.02em] transition-transform duration-500 ease-out group-hover/row:translate-x-3">
              {p.name}
            </span>
            <span className="mt-2 flex justify-between gap-6 text-body text-muted">
              <span>{p.kind}</span>
              <span className="tabular-nums">{p.year}</span>
            </span>
          </>
        ) : (
          <>
            <span className="text-body font-semibold">{p.name}</span>
            <span className="text-small text-muted sm:text-body">{p.kind}</span>
            <span className="text-body tabular-nums sm:text-right">{p.year}</span>
          </>
        );
        const cls = big
          ? "group/row flex flex-col py-6 no-underline text-ink transition-colors duration-300 group-hover/ledger:text-muted hover:!text-ink focus-visible:!text-ink"
          : "grid min-h-14 grid-cols-[1fr_auto] items-baseline gap-x-6 py-3 no-underline text-ink transition-colors duration-300 group-hover/ledger:text-muted hover:!text-ink focus-visible:!text-ink sm:grid-cols-[1.2fr_1.6fr_auto] [&>span:nth-child(2)]:order-3 [&>span:nth-child(2)]:col-span-2 sm:[&>span:nth-child(2)]:order-none sm:[&>span:nth-child(2)]:col-span-1";
        const events = {
          onMouseEnter: () => setScene(p.scene),
          onFocus: () => setScene(p.scene),
        };
        return (
          <li key={p.slug} data-reveal style={{ "--i": i + 1 } as React.CSSProperties}>
            {anchors ? (
              <a href={`#${p.slug}`} className={cls} {...events}>{inner}</a>
            ) : (
              <Link href="/proyectos" className={cls} {...events}>{inner}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
