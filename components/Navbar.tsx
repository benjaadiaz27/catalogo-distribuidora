"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <Link
          href="/"
          onClick={cerrarMenu}
          className="flex flex-col"
        >
          <h1 className="text-lg font-bold leading-tight text-zinc-900 sm:text-xl">
            Distribuidora Don Zenón
          </h1>

          <p className="text-xs text-zinc-500 sm:text-sm">
            Catálogo Mayorista
          </p>
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-zinc-700 md:flex">
          <Link href="/" className="transition hover:text-black">
            Inicio
          </Link>

          <Link
            href="/productos"
            className="transition hover:text-black"
          >
            Productos
          </Link>

          <Link
            href="/contacto"
            className="transition hover:text-black"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex h-11 w-11 items-center justify-center rounded-lg transition hover:bg-zinc-100 md:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-3xl leading-none text-zinc-900">
            {menuAbierto ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          menuAbierto
            ? "max-h-72 border-t border-zinc-200"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col py-2">

          <Link
            href="/"
            onClick={cerrarMenu}
            className="px-6 py-4 text-lg font-medium text-zinc-800 transition hover:bg-zinc-100"
          >
            Inicio
          </Link>

          <Link
            href="/productos"
            onClick={cerrarMenu}
            className="px-6 py-4 text-lg font-medium text-zinc-800 transition hover:bg-zinc-100"
          >
            Productos
          </Link>

          <Link
            href="/contacto"
            onClick={cerrarMenu}
            className="px-6 py-4 text-lg font-medium text-zinc-800 transition hover:bg-zinc-100"
          >
            Contacto
          </Link>

        </nav>
      </div>
    </header>
  );
}