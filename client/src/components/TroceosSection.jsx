import React from "react";
import { TROCEOS } from "../assets/data";
import { GiCow } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const TroceosSection = ({ onSelectCut }) => {
  return (
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-row items-center gap-3 mb-6">
          <div className="text-main-red">
            <GiCow size={48} />
          </div>
          <div>
            <h3 className="font-black text-main text-lg leading-tight">
              TROCEO DE 1/2 RES
            </h3>
            <p className="text-gray-500 text-sm mt-0.5">
              Trozamos la media res según tu necesidad. <br /> Elegí el tipo de
              troceo que buscás.
            </p>
          </div>
        </div>

        <div className="border border-l-4 border-green-700 flex items-center gap-4 w-full rounded-r-md bg-green-100 my-15 p-4">
          <FaWhatsapp className="size-11 shrink-0 p-1.5 rounded-full text-green-500 bg-white" />
          <p className="text-gray-700 font-semibold text-sm text-start sm:mx-auto">
            Tocá el tipo de troceo que quieras consultar por disponibilidad y
            precio directamente a nuestro WhatsApp. Seleccioná sucursal.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-gray-400 border border-gray-400 rounded-2xl overflow-hidden">
          {TROCEOS.map((t, i) => (
            <button
              key={i}
              onClick={() => onSelectCut(`Troceo ${t.name}`)}
              className="flex items-start gap-4 px-5 py-4 bg-white text-left w-full group hover:cursor-pointer"
            >
              <img
                src={t.img}
                alt={t.name}
                className="aspect-square size-25 my-auto shrink-0 group-hover:scale-110 transition-transform"
              />
              <div className="flex-1">
                <p className="font-bold text-main">{t.name}</p>
                <p className="text-gray-500 text-sm mt-0.5 leading-snug">
                  {t.desc}
                </p>
              </div>
              <ArrowUpRight className="size-6 self-center text-gray-400 group-hover:text-main-red mt-1.5 shrink-0 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TroceosSection;
