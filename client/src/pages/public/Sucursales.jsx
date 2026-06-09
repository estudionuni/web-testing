import { MapPin } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

const Sucursales = () => {
  return (
    <>
      <div className="w-full -mb-px">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
          <path
            d="M0 60 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z"
            fill="#1a2340"
          />
        </svg>
      </div>

      <section className="bg-main pt-10 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white font-black text-3xl sm:text-4xl mb-3">
              Nuestras Sucursales
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto text-sm">
              Visitanos y viví una experiencia de compra directa, con la mejor
              atención y los cortes más frescos de la zona.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Luis Guillón",
                address: "Av. Luciano Valette 1696",
                detail: "A 4 cuadras de Camino de Cintura",
                mapSrc:
                  "https://www.google.com/maps?q=Abastecedora+Valette+Av.+Luciano+Valette+1696,+Luis+Guillón,+Buenos+Aires&output=embed",
                waHref:
                  "https://wa.me/541135534033?text=Hola!%20Me%20comunico%20desde%20la%20web%20por%20la%20sucursal%20Luis%20Guill%C3%B3n",
                horarios: "Lunes a Sabado de 7 a 15hs",
              },
              {
                name: "Moreno",
                address: "Av. Del Libertador 3910",
                detail: "Mercado Modelo Moreno",
                mapSrc:
                  "https://www.google.com/maps?q=abastecedora+valette+Av.+Del+Libertador+3910,+Moreno,+Buenos+Aires&output=embed",
                waHref:
                  "https://wa.me/541130531313?text=Hola!%20Me%20comunico%20desde%20la%20web%20por%20la%20sucursal%20Moreno",
                horarios: "Lunes a Sabado de 06 a 15hs",
              },
            ].map((branch) => (
              <div
                key={branch.name}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 relative">
                  <iframe
                    src={branch.mapSrc}
                    className="w-full h-full border-0 saturate-75 contrast-110"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa sucursal ${branch.name}`}
                  />
                </div>

                <div className="px-5 pt-3 pb-5">
                  <p className="flex items-center text-xs text-neutral-500 gap-1 mb-3">
                    Click en el mapa para abrir Google Maps{" "}
                    <IoOpenOutline className="size-3.5" />
                  </p>
                  <h3 className="text-xl font-bold text-main mb-2">
                    {branch.name}
                  </h3>
                  <p className="text-gray-600 flex items-start gap-2.5 mb-1 text-sm">
                    <MapPin
                      className="mt-0.5 shrink-0 text-main-red"
                      size={16}
                    />
                    <span>
                      <strong>{branch.address}</strong>
                      <br />
                      {branch.detail}
                    </span>
                  </p>
                  <div className="mt-5">
                    <a
                      href={branch.waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-50 border-2 border-gray-100 hover:border-[#25D366] hover:bg-green-50 text-gray-700 hover:text-[#128C7E] font-bold py-3 px-4 rounded-xl transition-all text-sm active:scale-[.98]"
                    >
                      <FaWhatsapp className="size-5 text-[#25D366]" />
                      Contactar con Sucursal {branch.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sucursales;
