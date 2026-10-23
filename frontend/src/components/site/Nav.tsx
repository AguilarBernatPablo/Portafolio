import { Link } from "../../lib/router";
import { routes, site } from "../../data/site";

export default function Nav() {
  return (
    <header className="px-6 py-6 sm:px-12">
      <nav aria-label="Principal" className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <Link href="/" className="font-display text-[1.375rem] text-ink no-underline">
          {site.name}
        </Link>
        <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-body">
          {routes.map((r) => (
            <li key={r.path}>
              <Link
                href={r.path}
                className="link decoration-transparent aria-[current=page]:decoration-accent aria-[current=page]:decoration-[3px]"
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
