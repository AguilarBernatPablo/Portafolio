export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
         <span className="text-white">North</span>
         <span className="text-orange-500">Code</span>
         <span className="text-white"> Studio</span>
        </h1>

        <nav className="flex gap-8 text-zinc-300">
          <a href="#home" className="hover:text-orange-500 transition">
            Inicio
          </a>

          <a href="#about" className="hover:text-orange-500 transition">
            Nosotros
          </a>

          <a href="#projects" className="hover:text-orange-500 transition">
            Proyectos
          </a>

          <a href="#contact" className="hover:text-orange-500 transition">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}