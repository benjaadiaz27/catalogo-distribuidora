import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";


export default function ProductosPage() {

  return (

    <main className="min-h-screen bg-zinc-50 py-16">

      <div className="mx-auto max-w-7xl px-6">


        <h1 className="text-4xl font-bold text-zinc-900">
          Nuestro Catálogo
        </h1>


        <p className="mt-4 text-zinc-600">
          Encontrá todos nuestros productos disponibles.
        </p>



        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


          {productos.map((producto)=>(

            <ProductCard

              key={producto.id}

              nombre={producto.nombre}

              precio={producto.precio}

              imagen={producto.imagen}

            />

          ))}


        </div>


      </div>

    </main>

  );
}