import React, { useEffect, useRef, useState } from "react";
import { BASE_CUTS, sections, WHATSAPP_CONTACTS } from "../assets/data";
import { FaChevronRight, FaTimes, FaWhatsapp } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LuBeef } from "react-icons/lu";
import useScrollLock from "../hooks/useScrollLock";
import { useAppContext } from "../context/useAppContext";

// Genera dinámicamente las secciones cruzadas por tag.
// Para agregar un item a "embutidos" o "preparados", solo
// agregale tags: ["embutidos"] o tags: ["preparados"] en BASE_CUTS.
function getTaggedItems(tag) {
  return Object.values(BASE_CUTS)
    .flat()
    .filter((item) => item.tags?.includes(tag));
}

const cuts = {
  ...BASE_CUTS,
  embutidos: getTaggedItems("embutidos"),
  preparados: getTaggedItems("preparados"),
};

// ─────────────────────────────────────────────────────────────────────────────

const CARD_W = 160;
const CARD_GAP = 8;
const SCROLL_STEP = (CARD_W + CARD_GAP) * 2;

// ─── CUT CARD ─────────────────────────────────────────────────────────────────
function CutCard({ item, onSelect }) {
  return (
    <button
      onClick={() => onSelect(item.name)}
      className="shrink-0 w-fit group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 shadow-sm rounded-lg overflow-hidden"
    >
      {/* Image */}
      <div className="h-40 w-full overflow-hidden aspect-square bg-white border border-gray-100 group-hover:shadow-md transition-shadow duration-300">
        <img
          src={item.img}
          alt={item.name}
          className="object-scale-down aspect-square max-w-40 mx-auto p-5 group-hover:scale-106 transition-transform duration-300"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1558030006-450675393462?w=300&q=80";
          }}
        />
      </div>
      {/* Label */}
      <div className="bg-main px-3 py-2 group-hover:bg-[#243060] transition-colors duration-200 flex flex-col w-full">
        <p className="text-white font-bold text-sm text-center leading-tight">
          {item.name}
        </p>
        <p className="text-neutral-300 text-xs text-center mt-0.5 leading-tight">
          {item.desc}
        </p>
      </div>
    </button>
  );
}

// ─── MEAT SECTION ─────────────────────────────────────────────────────────────
function MeatSection({ icon, title, subtitle, items, onSelectCut }) {
  const scrollRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  const onScroll = () => setScrollLeft(scrollRef.current?.scrollLeft ?? 0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const recalc = () => setMaxScroll(el.scrollWidth - el.clientWidth);
    recalc();
    const ro = new ResizeObserver(recalc);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scrollTo = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir * SCROLL_STEP,
      behavior: "smooth",
    });
  };

  const atStart = scrollLeft <= 8;
  const atEnd = scrollLeft >= maxScroll - 8;

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full mb-6">
      {/* SEO: listado de cortes para Google */}
      <h2 className="sr-only">
        {title}: {(items ?? []).map((i) => i.name).join(", ")}
      </h2>
      {/* Section header card */}
      <div className="px-5 py-4 flex flex-row items-center gap-3 mb-4">
        <div className="text-main-red shrink-0 flex">{icon}</div>
        <div className="sborder-l border-gray-200 pl-5">
          <h3 className="flex flex-row items-center gap-2 font-black text-main text-lg leading-tight">
            {title} <FaWhatsapp className="size-5" />
          </h3>
          <p className="text-gray-500 text-sm text-left mt-0.5 leading-snug">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative flex">
        {!atStart && (
          <button
            onClick={() => scrollTo(-1)}
            aria-label="Anterior"
            className="absolute left-1 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-main hover:bg-gray-50 active:scale-95 transition z-10"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto px-4 sm:px-6 py-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {(items ?? []).map((item, i) => (
            <CutCard key={i} item={item} onSelect={onSelectCut} />
          ))}
        </div>

        {!atEnd && (
          <button
            onClick={() => scrollTo(1)}
            aria-label="Siguiente"
            className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-main hover:bg-gray-50 active:scale-95 transition z-10"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── CUT QUERY MODAL ──────────────────────────────────────────────────────────
function CutModal({ cutName, onClose, label = "CONSULTA DE CORTE" }) {
  useScrollLock(!!cutName);

  if (!cutName) return null;

  return (
    <div
      className="fixed inset-0 z-200 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-sm mx-0 sm:mx-4 p-6 shadow-2xl"
        style={{ animation: "slideUp .22s cubic-bezier(.22,1,.36,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`@keyframes slideUp{from{transform:translateY(60px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>

        {/* Drag handle — mobile */}
        <div className="sm:hidden w-10 h-1 rounded-full bg-gray-200 mx-auto mb-4" />

        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-main-red mb-0.5">
              {label}
            </p>
            <h3 className="font-black text-main text-lg leading-tight">
              {cutName}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">
              ¿A qué sucursal le queres hacer la consulta?
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-colors shrink-0 ml-2"
          >
            <FaTimes size={14} />
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          {WHATSAPP_CONTACTS.map((contact, i) => (
            <a
              key={i}
              href={contact.buildHref(cutName)}
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
                  {contact.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">
                  {contact.sub}
                </p>
              </div>
              <FaChevronRight
                size={12}
                className="text-gray-300 group-hover:text-[#25D366] transition-colors shrink-0"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const CortesSection = () => {
  const { selectedCut, setSelectedCut } = useAppContext();

  return (
    <>
      {selectedCut && (
        <CutModal
          cutName={selectedCut}
          onClose={() => setSelectedCut(null)}
          label={
            selectedCut?.startsWith("Troceo")
              ? "CONSULTA DE TROCEO"
              : "CONSULTA DE CORTE"
          }
        />
      )}
      {/* ── CORTES Y TROCEOS ── */}
      <div id="nuestras-carnes" className="h-1 mb-20 -mt-20" />

      <section className="w-full py-10">
        {/* Section header */}
        <div className="text-center mb-10 px-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mb-4">
            <LuBeef className="size-7 text-main-red stroke-[1.5]" />
          </div>
          <p className="text-main-red text-xs font-bold uppercase tracking-widest mb-2">
            NUESTROS CORTES
          </p>
          <h2 className="text-main font-black text-3xl sm:text-4xl mb-3">
            Elegí lo que necesitás
          </h2>
          <div className="border border-l-4 border-green-700 flex items-center gap-4 w-full rounded-r-md bg-green-100 mt-15 p-4">
            <FaWhatsapp className="size-11 shrink-0 p-1.5 rounded-full text-green-500 bg-white" />
            <p className="text-gray-700 font-semibold text-sm text-start sm:mx-auto">
              Tocá cualquier corte para consultar por disponibilidad y precio
              directamente a nuestro WhatsApp. Seleccioná sucursal.
            </p>
          </div>
        </div>

        {/* Meat categories */}
        <div className="flex flex-col gap-2">
          {Object.entries(sections).map(([key, sec]) => (
            <div key={key} className="bg-gray-50 border-y border-gray-100 py-6">
              <MeatSection
                icon={sec.icon}
                title={sec.title}
                subtitle={sec.subtitle}
                items={cuts[key]}
                onSelectCut={setSelectedCut}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CortesSection;
