import { createContext, useContext, useEffect, useRef, useState } from "react";
import Stage from "./Stage";
import type { SceneId } from "./scenes";
import { observeScenes } from "../../lib/motion";

const SceneContext = createContext<(id: SceneId) => void>(() => {});
export const useSetScene = () => useContext(SceneContext);

// Media pantalla quieta (el ventanal) y media que se lee con calma.
export default function Split({ first, children }: { first: SceneId; children: React.ReactNode }) {
  const [active, setActive] = useState<SceneId>(first);
  const column = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!column.current) return;
    return observeScenes((id) => setActive(id as SceneId), column.current);
  }, []);

  return (
    <SceneContext.Provider value={setActive}>
      <div className="relative grid grid-cols-[minmax(0,1fr)] gap-3 p-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="sticky top-3 z-0 h-[34svh] lg:order-2 lg:h-[calc(100svh-1.5rem)]">
          <Stage active={active} first={first} />
        </div>
        <div ref={column} className="relative z-10 -mt-3 rounded-t-[var(--radius-card)] bg-bg pt-3 lg:order-1 lg:mt-0 lg:rounded-none lg:pt-0">
          {children}
        </div>
      </div>
    </SceneContext.Provider>
  );
}
