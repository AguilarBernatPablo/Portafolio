import { createContext, useContext, useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { scrollToTop } from "./motion";

type Nav = { path: string; go: (to: string) => void };
const RouterContext = createContext<Nav>({ path: "/", go: () => {} });

const clean = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => clean(window.location.pathname));

  useEffect(() => {
    const onPop = () => swap(() => setPath(clean(window.location.pathname)));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const go = (to: string) => {
    if (to === path) {
      scrollToTop();
      return;
    }
    window.history.pushState(null, "", to);
    swap(() => setPath(to));
  };

  return <RouterContext.Provider value={{ path, go }}>{children}</RouterContext.Provider>;
}

// Cambio de "ventana": usa View Transitions donde existe, si no cambia directo.
function swap(update: () => void) {
  const apply = () => {
    flushSync(update);
    scrollToTop();
  };
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (doc.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    doc.startViewTransition(apply);
  } else {
    apply();
  }
}

export const useRouter = () => useContext(RouterContext);

export function Link({ href, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { path, go } = useRouter();
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    go(href);
  };
  return <a href={href} aria-current={path === href ? "page" : undefined} onClick={handle} {...rest} />;
}
