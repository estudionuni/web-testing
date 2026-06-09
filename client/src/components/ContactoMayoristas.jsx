import React from "react";
import { FaHandshake, FaWhatsapp } from "react-icons/fa";

const ContactoMayoristas = () => {
  return (
    <>
      <section className="bg-[#8B0000] py-10 sm:py-14 px-4 -mt-1">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center shrink-0">
              <FaHandshake size={30} className="text-white" />
            </div>
            <div className="text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-red-300 mb-1">
                VENTA MAYORISTA
              </p>
              <h3 className="font-black text-2xl sm:text-3xl leading-tight mb-1">
                ¿Tenés un comercio o<br />
                sos distribuidor?
              </h3>
              <p className="text-sm text-red-200 max-w-sm">
                Accedé a precios especiales por volumen y sumate a nuestra red
                de clientes mayoristas. Te acompañamos y asesoramos en el
                proceso.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/541155291717?text=Hola!%20Me%20comunico%20desde%20la%20web,%20me%20interesa%20la%20venta%20mayorista."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#8B0000] font-black text-sm px-6 py-3.5 rounded-xl hover:bg-red-50 active:scale-[.97] transition-all whitespace-nowrap shadow-md"
          >
            ATENCIÓN PERSONALIZADA MAYORISTA <FaWhatsapp size={16} />
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactoMayoristas;
