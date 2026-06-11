import React from "react";

const MediaResCard = () => {
  return (
    <>
      <article className="flex w-64 p-2 relative bg-neutral-50 rounded border border-neutral-400">
        <img
          src="/media-res-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png"
          alt="Media res"
          className="aspect-square object-scale-down w-full"
        />
        <h1>85.7 kg</h1>
        <h2>$10.700 / kg</h2>
        <h3>Total: $916.990</h3>
        <p>MR-0001</p>
      </article>
    </>
  );
};

export default MediaResCard;
