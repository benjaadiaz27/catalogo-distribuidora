export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">

          

          <div>
            <h1 className="text-xl font-bold text-zinc-900">
              Distribuidora Don Zenón
            </h1>

            <p className="text-sm text-zinc-500">
              Catálogo Mayorista
            </p>
          </div>

        </a>


        {/* Menú */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-zinc-600">

          <a
            href="/"
            className="transition hover:text-black"
          >
            Inicio
          </a>


          <a
            href="/productos"
            className="transition hover:text-black"
          >
            Productos
          </a>


          <a
            href="/contacto"
            className="transition hover:text-black"
          >
            Contacto
          </a>

        </nav>

      </div>
    </header>
  );
}