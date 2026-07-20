
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

import { productos } from "../data/productos";

export default function Home() {
  return (
    <>
      
      <Hero />

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-10 text-4xl font-bold text-zinc-900">
            Nuestro Catálogo
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto) => (
              <ProductCard
                key={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}