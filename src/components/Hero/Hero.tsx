export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white px-6"
    >
      <p className="uppercase tracking-[0.4em] text-orange-500 mb-4">
        Bienvenido a
      </p>

      <h1 className="text-5xl md:text-8xl font-black text-center">
        North<span className="text-orange-500">Code</span> Studio
      </h1>

      <p className="mt-8 max-w-3xl text-center text-zinc-400 text-lg leading-8">
        Desarrollamos aplicaciones web, sistemas empresariales y soluciones
        digitales modernas para negocios y empresas.
      </p>

      <div className="flex gap-4 mt-12">
        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition">
          Ver proyectos
        </button>

        <button className="border border-zinc-700 hover:border-orange-500 px-8 py-4 rounded-xl transition">
          Contacto
        </button>
      </div>
    </section>
  );
}