import { Scene, sceneCaption, sceneIds, type SceneId } from "./scenes";

// El ventanal fijo: todas las escenas apiladas, solo la activa se ve.
export default function Stage({ active, first }: { active: SceneId; first: SceneId }) {
  return (
    <figure className="relative m-0 h-full w-full overflow-hidden rounded-[var(--radius-card)] bg-night">
      {sceneIds.map((id) => (
        <div key={id} className={`scene absolute inset-0 ${id === active ? "is-active" : ""}`} aria-hidden={id !== active}>
          <Scene id={id} eager={id === first} />
        </div>
      ))}
      <figcaption className="absolute bottom-4 left-4 rounded-full bg-night/80 px-4 py-2 text-small text-[#ede8de]">
        {sceneCaption[active]}
      </figcaption>
    </figure>
  );
}
