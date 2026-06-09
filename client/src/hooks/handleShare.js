export const handleShare = async (onCopied) => {
  if (navigator.share) {
    await navigator.share({
      title: "Abastecedora Valette",
      text: "Mirá el catalogo de cortes y troceos que tiene Abastecedora Valette, directos del productor. 🥩\n",
      url: "https://abastecedoravalette.com/",
    });
  } else {
    await navigator.clipboard.writeText("https://abastecedoravalette.com/");
    onCopied?.();
  }
};
