import Lenis from "lenis";

const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

let current: Lenis | null = null;

export function scrollToTop() {
  if (current) current.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}

// Scroll lento y suave. Con movimiento reducido se usa el scroll nativo.
export function startSmoothScroll() {
  if (reduced()) return () => {};
  const lenis = new Lenis({ lerp: 0.075, wheelMultiplier: 0.85, smoothWheel: true });
  current = lenis;
  let id = 0;
  const raf = (t: number) => {
    lenis.raf(t);
    id = requestAnimationFrame(raf);
  };
  id = requestAnimationFrame(raf);
  return () => {
    cancelAnimationFrame(id);
    lenis.destroy();
    current = null;
  };
}

// Cada parte marcada con data-reveal aparece una vez, al entrar en pantalla.
export function observeReveals(root: ParentNode = document) {
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-in"));
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
  );
  items.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

// La sección que cruza el centro de la pantalla decide qué muestra el ventanal.
export function observeScenes(onScene: (id: string) => void, root: ParentNode = document) {
  const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-scene]"));
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScene((entry.target as HTMLElement).dataset.scene!);
      }
    },
    { rootMargin: "-48% 0px -48% 0px" },
  );
  sections.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
