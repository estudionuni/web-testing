import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-white pt-12 pb-6 px-4 sm:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <img
            src="/abastecedora-valette-logo.jpg"
            className="h-50 sm:h-40 w-fit mx-auto sm:mx-0"
            alt="Abastecedora Valette"
          />
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-xs text-gray-800 uppercase tracking-wider">
              Seguinos en nuestras redes
            </p>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <a
                href="https://www.instagram.com/abastecedora.valette?igsh=a2MwbTM2dTl5dGhj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-main items-center justify-center gap-2 h-9 rounded-xl border border-main/20 hover:bg-main/10 active:scale-[.98] transition-all text-sm px-4"
              >
                <FaInstagram size={15} /> @abastecedora.valette
              </a>
              <a
                href="https://www.facebook.com/share/1D5Qyoawao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-main items-center justify-center gap-2 h-9 rounded-xl border border-main/20 hover:bg-main/10 active:scale-[.98] transition-all text-sm px-4"
              >
                <FaFacebookF size={15} /> Abastecedora Valette
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 my-10">
          © {new Date().getFullYear()} Abastecedora Valette. Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  );
};

export default Footer;
