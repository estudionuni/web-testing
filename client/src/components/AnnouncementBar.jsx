import { useEffect, useRef, useState } from "react";

const items = [
  "Somos Productores",
  "Tenemos criadero propio de Cerdo",
  "[Horarios de Atención] Lunes a Sabados de 07 a 15hs",
  "Sucursales en Luis Guillón y Moreno",
  "Ofrecemos envíos",
  "Atención y asesoría personalizada a mayoristas y comerciantes",
  "Gracias por elegirnos siempre",
  "Una experiencia de compra directa, sin intermediarios.",
];

const SPEED = 0.5; // px por frame — ajustá a gusto

export default function AnnouncementBar() {
  const trackRef = useRef(null);
  const posRef = useRef(0);          // posición actual en px
  const halfRef = useRef(0);         // ancho de la mitad del track (un set de items)
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  const [paused, setPaused] = useState(false);

  // Drag state
  const dragRef = useRef({ active: false, startX: 0, startPos: 0 });

  // ─── Animación principal ───────────────────────────────────────────────────
  const tick = () => {
    if (!pausedRef.current && trackRef.current && halfRef.current) {
      posRef.current -= SPEED;

      // Si avanzó un set completo, reseteamos sin que se note
      if (Math.abs(posRef.current) >= halfRef.current) {
        posRef.current = 0;
      }

      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    // Calculamos el ancho de la primera mitad (un set de items)
    if (trackRef.current) {
      halfRef.current = trackRef.current.scrollWidth / 2;
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ─── Pausar / reanudar ────────────────────────────────────────────────────
  const togglePause = () => {
    pausedRef.current = !pausedRef.current;
    setPaused((p) => !p);
  };

  // ─── Drag (mouse) ─────────────────────────────────────────────────────────
  const onMouseDown = (e) => {
    dragRef.current = { active: true, startX: e.clientX, startPos: posRef.current };
    pausedRef.current = true;
    setPaused(true);
  };

  const onMouseMove = (e) => {
    if (!dragRef.current.active) return;
    const delta = e.clientX - dragRef.current.startX;
    let next = dragRef.current.startPos + delta;

    // Mantener dentro del rango circular
    if (next > 0) next = -halfRef.current + next;
    if (Math.abs(next) >= halfRef.current) next = next % halfRef.current;

    posRef.current = next;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${next}px)`;
    }
  };

  const onMouseUp = () => {
    dragRef.current.active = false;
  };

  // ─── Drag (touch) ─────────────────────────────────────────────────────────
  const onTouchStart = (e) => {
    dragRef.current = {
      active: true,
      startX: e.touches[0].clientX,
      startPos: posRef.current,
    };
    pausedRef.current = true;
    setPaused(true);
  };

  const onTouchMove = (e) => {
    if (!dragRef.current.active) return;
    const delta = e.touches[0].clientX - dragRef.current.startX;
    let next = dragRef.current.startPos + delta;

    if (next > 0) next = -halfRef.current + next;
    if (Math.abs(next) >= halfRef.current) next = next % halfRef.current;

    posRef.current = next;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${next}px)`;
    }
  };

  const onTouchEnd = () => {
    dragRef.current.active = false;
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div
      className="relative flex items-center bg-main text-white text-sm font-medium overflow-hidden h-9 select-none cursor-grab active:cursor-grabbing"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Track — duplicado para loop infinito */}
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-1 opacity-60">-</span>
            <span className="px-2">{item}</span>
          </span>
        ))}
      </div>

      {/* Botón pausar / reanudar */}
      <button
        onClick={togglePause}
        aria-label={paused ? "Reanudar anuncio" : "Pausar anuncio"}
        className="absolute right-2 flex items-center justify-center w-6 h-6 rounded-full bg-main-red hover:bg-main-red/35 transition-colors text-white shrink-0 z-10"
      >
        {paused ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </button>
    </div>
  );
            }
