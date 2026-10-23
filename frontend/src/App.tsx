import { useEffect } from "react";
import { RouterProvider, useRouter } from "./lib/router";
import { observeReveals, startSmoothScroll } from "./lib/motion";
import { pages } from "./pages";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";

function Page() {
  const { path } = useRouter();
  const page = pages[path] ?? pages["/"];
  const View = page?.view;

  useEffect(() => {
    if (page) document.title = page.title;
    return observeReveals();
  }, [path, page]);

  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-on-accent">
        Saltar al contenido
      </a>
      <main id="contenido" key={path}>
        {View && <View />}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  useEffect(() => startSmoothScroll(), []);
  return (
    <RouterProvider>
      <Page />
    </RouterProvider>
  );
}
