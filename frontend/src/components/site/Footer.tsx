import { Link } from "../../lib/router";
import { routes, site } from "../../data/site";
import { NocheAncha as Night } from "./scenes";

// El cierre: el río de noche a todo el ancho, con el nombre encima.
export default function Footer() {
  return (
    <footer className="relative flex min-h-[88svh] flex-col justify-between overflow-hidden text-white lg:min-h-svh">
      <div className="absolute inset-0" aria-hidden="true">
        <Night />
      </div>
      <div className="relative flex flex-wrap justify-between gap-8 px-6 pt-8 sm:px-12">
        <nav aria-label="Pie de página">
          <ul className="m-0 list-none space-y-1 p-0 text-body">
            {routes.map((r) => (
              <li key={r.path}>
                <Link href={r.path} className="text-white underline decoration-1 underline-offset-4 hover:decoration-accent hover:decoration-[3px]">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="m-0 list-none space-y-1 p-0 text-body sm:text-right">
          <li><a className="text-white underline decoration-1 underline-offset-4 hover:decoration-accent hover:decoration-[3px]" href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a className="text-white underline decoration-1 underline-offset-4 hover:decoration-accent hover:decoration-[3px]" href={site.phoneHref}>{site.phoneLabel}</a></li>
          <li>{site.city}</li>
        </ul>
      </div>
      <div className="relative px-6 pb-8 sm:px-12">
        <p className="m-0 font-display text-[clamp(3rem,9.2vw,11rem)] leading-[0.95] tracking-[-0.03em]" translate="no">
          Pablo Aguilar Bernat
        </p>
        <p className="mt-4 text-small text-white/80">
          © {new Date().getFullYear()} {site.name}. {site.role} en {site.city}.
        </p>
      </div>
    </footer>
  );
}
