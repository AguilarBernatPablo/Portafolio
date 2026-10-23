import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { crearApp } from "../src/app.js";
import { reiniciarLimite } from "../src/limite.js";

const valido = { nombre: "Ana", email: "ana@empresa.com", mensaje: "Hola Pablo, quiero hablar con vos.", motivo: "entrevista" };

async function conServidor(fn, enviarEmail = async () => {}) {
  const server = crearApp({ enviarEmail }).listen(0);
  const url = `http://127.0.0.1:${server.address().port}/api/contacto`;
  const post = (body) => fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  try {
    await fn(post);
  } finally {
    server.close();
  }
}

beforeEach(() => reiniciarLimite());

test("manda un mensaje válido", async () => {
  const enviados = [];
  await conServidor(async (post) => {
    const res = await post(valido);
    assert.equal(res.status, 200);
  }, async (d) => enviados.push(d));
  assert.equal(enviados.length, 1);
  assert.equal(enviados[0].email, "ana@empresa.com");
});

test("rechaza un email inválido sin enviar nada", async () => {
  let enviado = false;
  await conServidor(async (post) => {
    const res = await post({ ...valido, email: "no-es-un-email" });
    assert.equal(res.status, 400);
  }, async () => { enviado = true; });
  assert.equal(enviado, false);
});

test("ignora en silencio a los bots que completan el campo trampa", async () => {
  let enviado = false;
  await conServidor(async (post) => {
    const res = await post({ ...valido, sitio: "http://spam.example" });
    assert.equal(res.status, 200);
  }, async () => { enviado = true; });
  assert.equal(enviado, false);
});

test("corta después de 3 envíos seguidos", async () => {
  await conServidor(async (post) => {
    for (let i = 0; i < 3; i++) assert.equal((await post(valido)).status, 200);
    assert.equal((await post(valido)).status, 429);
  });
});
