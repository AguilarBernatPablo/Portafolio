import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-zinc-950 text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Texto */}

        <div>

          <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
            🚀 NorthCode Studio
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight">
            Desarrollo de
            <br />
            <span className="text-orange-500">Software</span>
            <br />
            para empresas.
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-8 max-w-xl">
            Diseñamos aplicaciones web, sistemas de gestión y soluciones digitales modernas utilizando las tecnologías más actuales del mercado.
          </p>

          <div className="flex gap-4 mt-12">

            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold">
              Ver proyectos
            </button>

            <button className="border border-zinc-700 hover:border-orange-500 hover:text-orange-500 transition px-8 py-4 rounded-xl">
              Contactanos
            </button>

          </div>

        </div>

        {/* Imagen */}

        <div className="flex justify-center items-center">

          <img
            src={heroImage}
            alt="NorthCode Studio"
            className="w-full max-w-2xl object-contain drop-shadow-[0_0_60px_rgba(249,115,22,0.45)]"
          />

        </div>

      </div>
    </section>
  );
}