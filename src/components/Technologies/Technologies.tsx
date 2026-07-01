import {
  SiReact,
  SiTypescript,
  SiSpring,
  SiOpenjdk,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Spring Boot", icon: SiSpring },
  { name: "Java", icon: SiOpenjdk },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">
          Stack tecnológico
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-14">
          Tecnologías con las que trabajamos
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="w-9 h-9 text-zinc-400 group-hover:text-orange-500 transition-colors duration-300" />
              <span className="text-zinc-300 text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;