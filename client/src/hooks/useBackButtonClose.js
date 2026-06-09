// ─── HOOK: intercepta el botón "atrás" para cerrar overlays ──────────────────
import { useEffect } from "react";

export default function useBackButtonClose(isOpen, onClose) {
  useEffect(() => {
    if (isOpen) {
      // Pushea una entrada falsa al historial cuando se abre
      window.history.pushState({ overlay: true }, "");

      const handlePop = () => onClose();
      window.addEventListener("popstate", handlePop);

      return () => {
        window.removeEventListener("popstate", handlePop);
      };
    }
  }, [isOpen, onClose]);
}
