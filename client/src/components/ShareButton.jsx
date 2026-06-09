import { Share2 } from "lucide-react";
import React, { useState } from "react";

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Abastecedora Valette",
        text: "Mirá el catalogo de cortes y troceos que tiene Abastecedora Valette, directos del productor. 🥩\n",
        url: "https://abastecedoravalette.com/",
      });
    } else {
      await navigator.clipboard.writeText("https://abastecedoravalette.com/");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      {copied && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-main text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg">
          Enlace copiado al portapapeles
        </div>
      )}
      <button
        onClick={handleShare}
        className="fixed size-13 bottom-6 right-6 z-40 bg-white text-main-red shadow-lg rounded-full border border-gray-200 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Compartir"
      >
        <Share2 className="size-7" />
      </button>
    </>
  );
};

export default ShareButton;
