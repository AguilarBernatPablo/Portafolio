import northcodeShot from "../../assets/images/northcode.webp";

export type SceneId = "alba" | "siesta" | "noche" | "datos" | "northcode";

const svgProps = {
  viewBox: "0 0 800 1000",
  preserveAspectRatio: "xMidYMid slice",
  className: "absolute inset-0 h-full w-full",
  "aria-hidden": true,
} as const;

// Copas de árboles sobre la barranca: grupos de círculos.
function Trees({ x, y, fill, scale = 1 }: { x: number; y: number; fill: string; scale?: number }) {
  const blobs = [
    [0, 0, 38], [34, -18, 30], [66, 4, 36], [100, -10, 28], [128, 8, 32],
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill}>
      {blobs.map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
      ))}
    </g>
  );
}

// Línea de islas en la orilla de enfrente.
function Islands({ y, fill }: { y: number; fill: string }) {
  return (
    <path
      fill={fill}
      d={`M0 ${y} C60 ${y - 14} 110 ${y - 22} 170 ${y - 12} S290 ${y - 26} 360 ${y - 14} S480 ${y - 30} 560 ${y - 16} S690 ${y - 24} 800 ${y - 10} L800 ${y + 18} L0 ${y + 18} Z`}
    />
  );
}

function Alba() {
  return (
    <svg {...svgProps}>
      <rect width="800" height="1000" fill="#e3e1dc" />
      <circle cx="540" cy="452" r="54" fill="#f7941d" />
      <Islands y={520} fill="#8f93a3" />
      <rect y="536" width="800" height="464" fill="#1f2b4d" />
      <g className="drift" fill="#f7941d">
        <rect x="486" y="566" width="108" height="6" rx="3" />
        <rect x="502" y="596" width="76" height="6" rx="3" />
        <rect x="470" y="628" width="140" height="6" rx="3" opacity="0.8" />
        <rect x="514" y="664" width="52" height="6" rx="3" opacity="0.7" />
        <rect x="492" y="704" width="96" height="6" rx="3" opacity="0.5" />
      </g>
      <path fill="#05070a" d="M0 760 C120 740 220 770 300 820 S460 930 520 1000 L0 1000 Z" />
      <Trees x={-20} y={742} fill="#05070a" scale={1.3} />
    </svg>
  );
}

function Siesta() {
  return (
    <svg {...svgProps}>
      <rect width="800" height="1000" fill="#f4f4f2" />
      <ellipse cx="210" cy="250" rx="120" ry="22" fill="#ffffff" />
      <ellipse cx="560" cy="330" rx="160" ry="26" fill="#ffffff" />
      <Islands y={470} fill="#5d6479" />
      <rect y="486" width="800" height="514" fill="#1f2b4d" />
      <g className="drift" fill="#f4f4f2" opacity="0.55">
        <rect x="90" y="540" width="180" height="5" rx="2.5" />
        <rect x="380" y="590" width="240" height="5" rx="2.5" />
        <rect x="160" y="660" width="120" height="5" rx="2.5" />
        <rect x="520" y="720" width="190" height="5" rx="2.5" />
      </g>
      <g fill="#f7941d">
        <path d="M300 612 L392 612 L380 628 L312 628 Z" />
        <rect x="336" y="590" width="6" height="22" />
      </g>
      <path fill="#05070a" d="M800 700 C700 690 620 730 560 800 S470 940 440 1000 L800 1000 Z" />
      <Trees x={600} y={690} fill="#05070a" scale={1.4} />
    </svg>
  );
}

// Versión ancha para el cierre: horizonte alto, el río ocupa el resto.
export function NocheAncha() {
  const lights = Array.from({ length: 34 }, (_, i) => 30 + i * 47 + (i % 3) * 9);
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect width="1600" height="900" fill="#05070a" />
      <circle cx="640" cy="170" r="44" fill="#f4f4f2" />
      <rect y="300" width="1600" height="26" fill="#111a33" />
      {lights.map((x, i) => (
        <circle key={x} cx={x} cy={307 + (i % 3) * 6} r={i % 4 === 0 ? 4 : 3} fill={i % 2 ? "#f7941d" : "#f4f4f2"} />
      ))}
      <rect y="326" width="1600" height="574" fill="#0b1226" />
      <g className="drift">
        {lights.map((x, i) => (
          <rect key={x} x={x - 2} y={346 + (i % 4) * 14} width="4" height={40 + (i % 3) * 26} rx="2" fill={i % 2 ? "#f7941d" : "#f4f4f2"} opacity="0.4" />
        ))}
      </g>
    </svg>
  );
}

function Noche() {
  const lights = [40, 92, 130, 188, 236, 270, 330, 376, 420, 470, 520, 566, 610, 650, 700, 748];
  return (
    <svg {...svgProps}>
      <rect width="800" height="1000" fill="#05070a" />
      <circle cx="180" cy="220" r="34" fill="#f4f4f2" />
      <rect y="500" width="800" height="22" fill="#111a33" />
      {lights.map((x, i) => (
        <circle key={x} cx={x} cy={506 + (i % 3) * 5} r={i % 4 === 0 ? 3.5 : 2.5} fill={i % 2 ? "#f7941d" : "#f4f4f2"} />
      ))}
      <rect y="522" width="800" height="478" fill="#0b1226" />
      <g className="drift">
        {lights.map((x, i) => (
          <rect key={x} x={x - 1.5} y={540 + (i % 4) * 12} width="3" height={30 + (i % 3) * 18} rx="1.5" fill={i % 2 ? "#f7941d" : "#f4f4f2"} opacity="0.45" />
        ))}
      </g>
      <path fill="#000000" d="M0 820 C140 800 260 830 340 880 S470 960 500 1000 L0 1000 Z" />
    </svg>
  );
}

const models = ["Usuario", "Rol", "Propiedad", "Categoria", "Reserva", "Cita", "Contrato"];

function Datos() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink p-[8%]">
      <div data-ui className="w-full max-w-[440px] bg-white text-ink shadow-none">
        <div className="flex items-center justify-between bg-[#14306b] px-5 py-3 text-small text-white">
          <span className="font-semibold">Clúster0</span>
          <span>MongoDB Atlas</span>
        </div>
        <p className="px-5 pt-4 text-small text-muted">Modelos del sistema, sacados del diagrama entidad-relación</p>
        <ul className="px-5 pb-5 pt-2">
          {models.map((m) => (
            <li key={m} className="flex items-center gap-3 py-2.5">
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
    <div className="absolute inset-0 flex items-center justify-center bg-night p-[6%]">
      <img
        src={northcodeShot}
        width={1440}
        height={900}
        alt="Primera pantalla del sitio de NorthCode Studio"
        className="h-auto w-full"
        loading="lazy"
      />
    </div>
  );
}

export const scenes: Record<SceneId, () => React.JSX.Element> = {
  alba: Alba,
  siesta: Siesta,
  noche: Noche,
  datos: Datos,
  northcode: Northcode,
};

export const sceneCaption: Record<SceneId, string> = {
  alba: "El río Paraná a la mañana",
  siesta: "El río Paraná al mediodía",
  noche: "El río Paraná de noche",
  datos: "Negocios Inmobiliarios · modelos de datos",
  northcode: "NorthCode Studio · primera pantalla",
};
