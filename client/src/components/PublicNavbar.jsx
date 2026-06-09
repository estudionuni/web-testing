import React from "react";
import AnnouncementBar from "./AnnouncementBar";
import { FaBars, FaChevronRight, FaTimes, FaWhatsapp } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const PublicNavbar = () => {
  const { menuOpen, navLinks, setContactOpen, setMenuOpen } = useAppContext();

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-100 shadow-sm h-20">
        <AnnouncementBar />
        <div className="w-full bg-white/90 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
            {/* Logo */}
            <img
              src="/logoRound.svg"
              onContextMenu={(e) => e.preventDefault()}
              className="h-18 w-fit cursor-pointer shrink-0 select-none"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.replaceState(null, "", "/");
              }}
              alt="Abastecedora Valette"
            />

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-main hover:text-main-red px-3 py-2 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap cursor-pointer select-none"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => setContactOpen(true)}
                className="flex items-center cursor-pointer select-none gap-2 bg-main-red text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#a93226] active:scale-[.97] transition-all shadow-sm"
              >
                <FaWhatsapp className="size-4" />
                <span>Contactanos</span>
              </button>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden size-[25px] flex items-center justify-center text-main hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Menú"
              >
                {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div
              className="md:hidden absolute inset-x-4 top-24 divide-y divide-gray-300 bg-white rounded-2xl border border-gray-100 shadow-xl p-2 z-50"
              style={{ animation: "slideUp .18s cubic-bezier(.22,1,.36,1)" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between inset-x-4 px-4 py-3 rounded text-sm font-semibold text-main hover:bg-gray-50 hover:text-main-red transition-colors"
                >
                  {link.label}
                  <FaChevronRight size={10} className="text-gray-300" />
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default PublicNavbar;
