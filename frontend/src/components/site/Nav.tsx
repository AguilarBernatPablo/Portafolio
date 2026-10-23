import { Link } from "../../lib/router";
import { routes, site } from "../../data/site";
import { useTheme } from "../../lib/theme";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-pressed={!dark}
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-raised text-ink transition-colors duration-200 hover:bg-accent hover:text-on-accent"
    >
      {dark ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  return (
    <header className="px-6 py-6 sm:px-12">
      <nav aria-label="Principal" className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link href="/" className="mr-auto font-display text-[1.25rem] text-ink no-underline">
          {site.name}
        </Link>
        <div className="contents">
          <ul className="order-3 m-0 flex w-full list-none flex-wrap gap-x-5 gap-y-2 p-0 text-body sm:order-2 sm:w-auto">
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
          <div className="order-2 sm:order-3">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
