import { ArrowUpRight, ChevronRight } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { PiCowFill, PiHandshakeFill, PiTruckFill } from "react-icons/pi";
import { useAppContext } from "../context/AppContext";

const Hero = () => {
  const { setContactOpen } = useAppContext();

  return (
    <section className="relative overflow-hidden bg-main min-h-[400px] sm:min-h-[460px]">
      <div className="absolute inset-0">
        <img
          src="/hero.webp"
          alt="Carnes Abastecedora Valette"
          className="w-full h-full object-cover opacity-45"
          style={{ objectPosition: "center right" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-main/90 via-main/60 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col md:flex-row md:items-center md:gap-16">
        {/* Left: headline + CTA */}
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-white drop-shadow-md drop-shadow-main font-black text-4xl sm:text-5xl leading-none tracking-tight uppercase mb-4 text-center">
            ABASTECEDORA
            <br />
            VALETTE
          </h1>

          <p className="text-white/90 drop-shadow drop-shadow-main/50 text-sm font-bold uppercase tracking-widest mb-3 text-center">
            una experiencia de compra directa, sin intermediarios.
          </p>

          <p className="text-gray-300 drop-shadow drop-shadow-main leading-relaxed max-w-sm my-8 sm:text-lg">
            Somos productores con criadero propio, con la mejor hacienda y te
            vendemos directo, sin intermediarios.
            <br />
            Todo lo que necesita tu comercio o tu hogar. <br />{" "}
            <b>Ahorrá sin sacrificar calidad</b>
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#nuestras-carnes"
              className="inline-flex items-center justify-center gap-2 bg-main-red text-white font-bold px-6 py-3 rounded-xl hover:bg-[#a93226] active:scale-[.97] transition-all text-sm shadow-md whitespace-nowrap"
            >
              Ver nuestros cortes <ChevronRight size={16} />
            </a>
            <div className="flex flex-col w-full">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white text-main font-semibold px-6 py-3 rounded-t-xl text-sm"
              >
                Contactanos por WhatsApp <FaWhatsapp size={16} />
              </button>

              <p className="flex text-center gap-2 bg-main/70 text-white/85 text-[11px] px-4 py-2 rounded-b-xl border border-white/20">
                <ArrowUpRight className="size-5 shrink-0 my-auto" /> Abrí el
                menu para ver nuestros contactos mayoristas, minoristas y
                sucursales.
              </p>
            </div>
          </div>
        </div>

        {/* Right: value props */}
        <div className="flex flex-col gap-3 w-full md:w-[340px] shrink-0">
          {[
            {
              icon: <PiCowFill className="size-8 shrink-0" />,
              title: "Calidad garantizada",
              desc: "Al ser productores, nos enfocamos en la selección y el control en cada proceso.",
            },
            {
              icon: <PiTruckFill className="size-8 shrink-0" />,
              title: "Carnes frescas, siempre.",
              desc: "Reposición diaria en todas las sucursales, directo desde nuestros criaderos.",
            },
            {
              icon: <PiHandshakeFill className="size-8 shrink-0" />,
              title: "Ventas minoristas y mayoristas",
              desc: "Familias, emprendedores, comercios y empresas confían en nuestra calidad.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-main/70 border border-white/15 rounded-2xl px-4 py-3"
            >
              <div className="text-main mt-0.5 p-2 rounded-xl bg-white border border-white/10 shrink-0">
                {p.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">
                  {p.title}
                </p>
                <p className="text-neutral-300 text-xs leading-snug mt-0.5">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 -mt-px">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
          <path
            d="M0 60 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
