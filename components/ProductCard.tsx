import Image from "next/image";

type ProductCardProps = {
  nombre: string;
  precio: number;
  imagen: string;
};

export default function ProductCard({
  nombre,
  precio,
  imagen,
}: ProductCardProps) {

  const telefono = "5493564418855"; // Reemplazar con tu número

  const mensaje = encodeURIComponent(
    `Hola 👋\n\nQuisiera consultar disponibilidad del siguiente producto:\n\n• ${nombre}\n\nMuchas gracias.`
  );

  const whatsappUrl = `https://wa.me/${telefono}?text=${mensaje}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-lg">

      <div className="relative h-56 w-full">
        <Image
  src={imagen}
  alt={nombre}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  className="object-contain p-6"
/>
      </div>

      <div className="p-5">

        <h3 className="text-lg font-semibold text-zinc-900">
          {nombre}
        </h3>

        <p className="mt-2 text-2xl font-bold text-zinc-900">
          ${precio.toLocaleString("es-AR")}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          className="mt-5 block w-full rounded-lg bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          Consultar disponibilidad
        </a>

      </div>

    </div>
  );
}