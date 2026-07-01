import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center px-6 md:px-12 pt-24 pb-16 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[45%_55%] gap-12 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/60 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-orange-500 text-sm font-medium">
              Disponibles para nuevos proyectos
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Desarrollo de <span className="text-orange-500">Software</span>{" "}
            para empresas.
          </h1>

          <p className="text-zinc-400 mt-6 text-lg leading-relaxed max-w-lg">
            Diseñamos aplicaciones web, sistemas de gestión y soluciones
            digitales modernas utilizando las tecnologías más actuales del
            mercado.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#proyectos"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="border border-zinc-700 hover:border-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Ilustración de una notebook con código React y TypeScript"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;