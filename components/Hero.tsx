import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-4">

      {/* Logo como marca de agua */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
  <Image
    src="/logo.png"
    alt=""
    width={450}
    height={450}
    className="object-contain"
  />
</div>


      {/* Contenido del Hero */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">

        <h1 className="text-5xl font-extrabold text-zinc-900">
          Distribuidora Don Zenón
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          Descubrí nuestro catálogo de productos alimenticios.
          Consultá disponibilidad de forma rápida por WhatsApp.
        </p>

        <div className="mt-10 flex gap-4">

          <Link
  href="/productos"
  className="rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-zinc-800"
>
  Ver Catálogo
</Link>

          <Link
  href="/contacto"
  className="rounded-lg border border-zinc-300 px-6 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-100"
>
  Contactar
</Link>

        </div>

      </div>

    </section>
  );
}