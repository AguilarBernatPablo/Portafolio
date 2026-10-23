import { Link } from "../../lib/router";
import { routes, site } from "../../data/site";
import { photos } from "../../data/photos";

const light = "text-[#f3eee4] underline decoration-1 underline-offset-4 hover:decoration-accent hover:decoration-[3px]";

// El cierre: la costanera de noche, con el nombre encima.
export default function Footer() {
  const night = photos.noche;
  return (
    <footer className="px-3 pb-3">
      <div className="relative flex min-h-[88svh] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-night text-[#f3eee4] lg:min-h-[calc(100svh-0.75rem)]">
        <img
          src={night.src}
          width={night.width}
          height={night.height}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
        />
        <div className="relative flex flex-wrap justify-between gap-8 px-6 pt-8 sm:px-12">
          <nav aria-label="Pie de página">
            <ul className="m-0 list-none space-y-1 p-0 text-body">
              {routes.map((r) => (
                <li key={r.path}>
                  <Link href={r.path} className={light}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="m-0 list-none space-y-1 p-0 text-body sm:text-right">
            <li><a className={light} href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className={light} href={site.phoneHref}>{site.phoneLabel}</a></li>
            <li>{site.city}</li>
          </ul>
        </div>
        <div className="relative px-6 pb-8 sm:px-12">
          <p className="m-0 font-display text-[clamp(3rem,9.2vw,11rem)] leading-[0.95] tracking-[-0.03em]" translate="no">
            Pablo Aguilar Bernat
          </p>
          <p className="mt-4 text-small text-[#f3eee4]/85">
            © {new Date().getFullYear()} {site.name}. {site.role} en {site.city}.
          </p>
          <p className="mt-2 max-w-[110ch] text-small text-[#f3eee4]/85">
            Fotos de Paraná en Wikimedia Commons:{" "}
            {Object.values(photos).map((p, i, all) => (
              <span key={p.source}>
                <a className={light} href={p.source} target="_blank" rel="noreferrer">{p.caption}</a>
                {` (${p.author}, `}
                <a className={light} href={p.licenseUrl} target="_blank" rel="noreferrer">{p.license}</a>
                {i < all.length - 1 ? "), " : ")."}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
