export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center font-bold text-black">
            <span className="text-xl font-black">
                {"</>"}
            </span>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              North<span className="text-orange-500">Code</span>
            </h1>

            <p className="text-xs text-zinc-500">
              Studio
            </p>
          </div>

        </div>

        {/* Menú */}
        <nav className="hidden md:flex items-center gap-8 text-zinc-300">

          <a
            href="#home"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Inicio
          </a>

          <a
            href="#about"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Nosotros
          </a>

          <a
            href="#projects"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Proyectos
          </a>

          <a
            href="#contact"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Contacto
          </a>

        </nav>

      </div>
    </header>
  );
}