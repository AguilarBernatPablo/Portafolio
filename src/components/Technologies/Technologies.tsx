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
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
  { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#E5E5E5" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-20 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">
          Stack tecnológico
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-12">
          Tecnologías con las que trabajamos
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {technologies.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              style={{ ["--tech-color" as string]: color }}
              className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="w-9 h-9 text-zinc-400 group-hover:[color:var(--tech-color)] transition-colors duration-300" />
              <span className="text-zinc-300 text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;