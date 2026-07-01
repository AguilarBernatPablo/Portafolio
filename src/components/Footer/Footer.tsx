import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-black font-bold text-sm">
            {"</>"}
          </div>
          <span className="text-white font-semibold">
            NorthCode <span className="text-zinc-400 font-normal">Studio</span>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
            <LuGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">
            <LuLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:contacto@northcode.dev" className="text-zinc-400 hover:text-orange-500 transition-colors">
            <LuMail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-zinc-500 text-sm">
          © {year} NorthCode Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;