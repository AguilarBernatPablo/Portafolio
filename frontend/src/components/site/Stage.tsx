import { scenes, sceneCaption, type SceneId } from "./scenes";

const order = Object.keys(scenes) as SceneId[];

// El ventanal fijo: todas las escenas apiladas, solo la activa se ve.
export default function Stage({ active }: { active: SceneId }) {
  return (
    <figure className="relative m-0 h-full w-full overflow-hidden bg-night">
      {order.map((id) => {
        const Scene = scenes[id];
        return (
          <div key={id} className={`scene absolute inset-0 ${id === active ? "is-active" : ""}`} aria-hidden={id !== active}>
            <Scene />
          </div>
        );
      })}
      <figcaption className="absolute bottom-0 left-0 bg-white px-4 py-2 text-small text-ink">
        {sceneCaption[active]}
      </figcaption>
    </figure>
  );
}
