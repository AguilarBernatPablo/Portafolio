import { LuBuilding2, LuCode, LuCpu, LuSparkles } from "react-icons/lu";

const services = [
  {
    icon: LuCode,
    title: "Aplicaciones web",
    description: "Interfaces modernas, rápidas y escalables con React y TypeScript.",
  },
  {
    icon: LuBuilding2,
    title: "Sistemas empresariales",
    description: "Soluciones a medida para optimizar procesos internos de negocio.",
  },
  {
    icon: LuCpu,
    title: "Software a medida",
    description: "Desarrollo backend robusto adaptado a cada necesidad específica.",
  },
  {
    icon: LuSparkles,
    title: "Soluciones digitales",
    description: "Productos digitales completos, del diseño al despliegue.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 px-6 md:px-12 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
          <div>
            <span className="text-lime-500 text-sm font-medium tracking-wide uppercase">
              Sobre nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
              Convertimos ideas en software real.
            </h2>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            En <span className="text-white font-medium">NorthCode Studio</span>{" "}
            desarrollamos aplicaciones web, sistemas de gestión y soluciones
            digitales utilizando las tecnologías más actuales del mercado.
            Combinamos buenas prácticas de arquitectura con un diseño
            cuidado para entregar productos sólidos y escalables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 transition-colors duration-300"
            >
              <Icon className="w-6 h-6 text-lime-500 mb-4" />
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;