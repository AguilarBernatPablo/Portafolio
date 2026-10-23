// Límite de envíos por IP: 3 mensajes cada 10 minutos.
// shortcut: la memoria es por instancia; si el sitio recibe mucho tráfico, pasar a Upstash/Redis.
const VENTANA_MS = 10 * 60 * 1000;
const MAXIMO = 3;
const envios = new Map();

export function superaLimite(ip, ahora = Date.now()) {
  const recientes = (envios.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS);
  if (recientes.length >= MAXIMO) {
    envios.set(ip, recientes);
    return true;
  }
  recientes.push(ahora);
  envios.set(ip, recientes);
  return false;
}

export const reiniciarLimite = () => envios.clear();
