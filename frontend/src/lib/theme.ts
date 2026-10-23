import { useState } from "react";

export type Theme = "dark" | "light";
const KEY = "tema";

// El tema se aplica antes de pintar con un script en index.html; esto solo lo cambia.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#0c0e13" : "#f7f5f0");
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Sin almacenamiento (modo privado): el cambio dura hasta recargar.
    }
    setTheme(next);
  };

  return { theme, toggle };
}
