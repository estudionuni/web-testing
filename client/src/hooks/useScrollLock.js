import { useEffect } from "react";

// ─── HOOK: lock body scroll when a modal is open ─────────────────────────────
export default function useScrollLock(active) {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);
}
