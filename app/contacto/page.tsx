export default function ContactoPage() {

  const telefono = "5493564336160"; // Reemplazar con tu número de WhatsApp

  const mensaje = encodeURIComponent(
    "Hola 👋, quisiera consultar información sobre sus productos."
  );

  const whatsappUrl = `https://wa.me/${telefono}?text=${mensaje}`;


  return (
    <main className="min-h-screen bg-zinc-50 py-16">

      <div className="mx-auto max-w-7xl px-6">


        <h1 className="text-4xl font-bold text-zinc-900">
          Contactanos
        </h1>

        <p className="mt-4 text-lg text-zinc-600">
          Estamos para ayudarte con tus pedidos y consultas.
        </p>



        <div className="mt-12 grid gap-10 lg:grid-cols-2">


          {/* Información */}

          <div className="rounded-2xl bg-white p-8 shadow-sm border border-zinc-200">


            <h2 className="text-2xl font-bold text-zinc-900">
              Distribuidora Don Zenón
            </h2>


            <div className="mt-6 space-y-5 text-zinc-700">


              <div>
                <h3 className="font-semibold text-zinc-900">
                  📍 Dirección
                </h3>

                <p>
                  Colocar dirección de la distribuidora
                </p>
              </div>



              <div>
                <h3 className="font-semibold text-zinc-900">
                  🕒 Horarios
                </h3>

                <p>
                  Lunes a Viernes: 08:00 - 18:00
                </p>

                <p>
                  Sábados: 08:00 - 13:00
                </p>

              </div>



            </div>



            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-xl bg-green-600 px-6 py-4 text-center text-lg font-bold text-white transition hover:bg-green-700"
            >
              Consultar por WhatsApp
            </a>


          </div>




          {/* Mapa */}

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">


            <iframe
  src="https://www.google.com/maps/embed?pb=!4v1784254000400!6m8!1m7!1s4vN6R350zKOnyJCMcP2T4w!2m2!1d-31.55735441077443!2d-61.89629602309116!3f51.66317622223517!4f-1.4641254548197224!5f0.7820865974627469"
  width="100%"
  height="450"
  loading="lazy"
  allowFullScreen
  className="border-0"
  referrerPolicy="strict-origin-when-cross-origin"
/>


          </div>


        </div>

      </div>

    </main>
  );
}