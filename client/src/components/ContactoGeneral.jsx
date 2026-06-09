import React from "react";
import { FaChevronRight, FaTimes, FaWhatsapp } from "react-icons/fa";
import useScrollLock from "../hooks/useScrollLock";

// ─── CONTACT MODAL ────────────────────────────────────────────────────────────
const ContactoGeneral = ({ onClose }) => {
  useScrollLock(true);

  const contacts = [
    {
      label: "Atención personalizada mayoristas",
      sub: "Asesoría y ventas para comerciantes y mayoristas",
      href: "https://wa.me/541155291717?text=Hola!%20Me%20comunico%20desde%20la%20página%20web,%20me%20interesa%20la%20venta%20mayorista.",
    },
    {
      label: "Sucursal Luis Guillón",
      sub: "Atención comercial",
      href: "https://wa.me/541135534033?text=Hola!%20Me%20comunico%20desde%20la%20página%20web%20por%20la%20sucursal%20Luis%20Guill%C3%B3n.",
    },
    {
      label: "Sucursal Moreno",
      sub: "Atención comercial",
      href: "https://wa.me/541130531313?text=Hola!%20Me%20comunico%20desde%20la%20página%20web%20por%20la%20sucursal%20Moreno.",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-sm mx-0 sm:mx-4 p-6 shadow-2xl"
        style={{ animation: "slideUp .22s cubic-bezier(.22,1,.36,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm:hidden w-10 h-1 rounded-full bg-gray-200 mx-auto mb-4" />

        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-main-red mb-0.5">
              WHATSAPP
            </p>
            <h3 className="font-black text-main text-lg leading-tight">
              ¿Con quién querés hablar?
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
          >
            <FaTimes size={14} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {contacts.map((op, i) => (
            <a
              key={i}
              href={op.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-100 hover:border-[#25D366] hover:bg-green-50 active:scale-[.98] transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                <FaWhatsapp size={20} className="text-[#25D366]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-main text-sm leading-tight">
                  {op.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{op.sub}</p>
              </div>
              <FaChevronRight
                size={12}
                className="ml-auto text-gray-300 group-hover:text-[#25D366] transition-colors"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactoGeneral;
