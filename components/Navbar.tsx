"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <h1 className="text-lg font-bold text-zinc-900 sm:text-xl">
            Distribuidora Don Zenón
          </h1>

          <p className="text-xs text-zinc-500 sm:text-sm">
            Catálogo Mayorista
          </p>
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden items-center gap-8 font-medium text-zinc-600 md:flex">
          <Link href="/" className="transition hover:text-black">
            Inicio
          </Link>

          <Link href="/productos" className="transition hover:text-black">
            Productos
          </Link>

          <Link href="/contacto" className="transition hover:text-black">
            Contacto
          </Link>
        </nav>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Abrir menú"
        >
          <span
            className={`h-0.5 w-6 bg-black transition ${
              menuAbierto ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${
              menuAbierto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${
              menuAbierto ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuAbierto ? "max-h-60 border-t border-zinc-200" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-white">

          <Link
            href="/"
            onClick={() => setMenuAbierto(false)}
            className="px-6 py-4 hover:bg-zinc-100"
          >
            Inicio
          </Link>

          <Link
            href="/productos"
            onClick={() => setMenuAbierto(false)}
            className="px-6 py-4 hover:bg-zinc-100"
          >
            Productos
          </Link>

          <Link
            href="/contacto"
            onClick={() => setMenuAbierto(false)}
            className="px-6 py-4 hover:bg-zinc-100"
          >
            Contacto
          </Link>

        </nav>
      </div>
    </header>
  );
}