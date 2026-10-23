import northcodeShot from "../../assets/images/northcode.webp";
import { photos, type PhotoId } from "../../data/photos";

export type SceneId = PhotoId | "datos" | "northcode";

function PhotoScene({ id, eager = false }: { id: PhotoId; eager?: boolean }) {
  const p = photos[id];
  return (
    <img
      src={p.src}
      width={p.width}
      height={p.height}
      alt={p.alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className="photo absolute inset-0 h-full w-full object-cover"
    />
  );
}

const models = ["Usuario", "Rol", "Propiedad", "Categoria", "Reserva", "Cita", "Contrato"];

// Fragmento de interfaz con los modelos reales del sistema.
function Datos() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#101522] p-[8%]">
      <div data-ui className="w-full max-w-[440px] overflow-hidden rounded-[20px] bg-[#f7f5f0] text-[#1f2b4d]">
        <div className="flex items-center justify-between bg-[#14306b] px-5 py-3 text-small text-white">
          <span className="font-semibold">Clúster0</span>
          <span>MongoDB Atlas</span>
        </div>
        <p className="px-5 pt-4 text-small text-[#5a6175]">Modelos del sistema, sacados del diagrama entidad-relación</p>
        <ul className="m-0 list-none px-5 pb-5 pt-2">
          {models.map((m) => (
            <li key={m} className="flex items-center gap-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c8102e]" aria-hidden="true" />
              <span className="text-body">{m}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Northcode() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#101522] p-[6%]">
      <img
        src={northcodeShot}
        width={1440}
        height={900}
        alt="Primera pantalla del sitio de NorthCode Studio"
        className="h-auto w-full rounded-[16px]"
        loading="lazy"
      />
    </div>
  );
}

export function Scene({ id, eager }: { id: SceneId; eager?: boolean }) {
  if (id === "datos") return <Datos />;
  if (id === "northcode") return <Northcode />;
  return <PhotoScene id={id} eager={eager} />;
}

export const sceneIds: SceneId[] = ["atardecer", "muelle", "playa", "camalotes", "noche", "datos", "northcode"];

export const sceneCaption: Record<SceneId, string> = {
  atardecer: photos.atardecer.caption,
  muelle: photos.muelle.caption,
  playa: photos.playa.caption,
  camalotes: photos.camalotes.caption,
  noche: photos.noche.caption,
  datos: "Negocios Inmobiliarios · modelos de datos",
  northcode: "NorthCode Studio · primera pantalla",
};
