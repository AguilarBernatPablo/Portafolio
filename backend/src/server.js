import app from "./app.js";

const puerto = Number(process.env.PORT ?? 3001);
app.listen(puerto, () => console.log(`API lista en http://localhost:${puerto}`));
