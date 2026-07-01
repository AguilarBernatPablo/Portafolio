import { projects } from "../../data/projects";
import { LuExternalLink, LuFolderGit2, LuGithub } from "react-icons/lu";

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">
            Nuestro trabajo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Proyectos
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto">
            Aplicaciones y soluciones que hemos desarrollado para distintos
            clientes y casos de uso.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center border border-zinc-800 rounded-2xl py-16 px-6 bg-zinc-900/40 backdrop-blur-sm text-center">
            <LuFolderGit2 className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-white text-lg font-semibold">Próximamente</h3>
            <p className="text-zinc-400 mt-2 max-w-md">
              Estamos preparando nuestros primeros proyectos publicados.
              Vuelve pronto para ver el trabajo de NorthCode Studio.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-colors duration-300"
              >
                {project.image && (
                  <div className="h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-zinc-300 hover:text-orange-500 transition-colors"
                      >
                        <LuGithub className="w-4 h-4" /> Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-zinc-300 hover:text-orange-500 transition-colors"
                      >
                        <LuExternalLink className="w-4 h-4" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;