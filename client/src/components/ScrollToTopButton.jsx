import { ChevronLeft } from "lucide-react";
import React from "react";

const ScrollToTopButton = ({ showScrollTop }) => {
  if (!showScrollTop) return null;

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      }}
      className="fixed bottom-20 right-6 z-50 size-13 bg-main text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#243060] active:scale-95 transition-all select-none cursor-pointer border border-gray-200"
      aria-label="Volver arriba"
    >
      <ChevronLeft className=" size-7 rotate-90" />
    </button>
  );
};

export default ScrollToTopButton;
