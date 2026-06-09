import {
  GiChicken,
  GiCow,
  GiPig,
  GiSheep,
  GiSlicedSausage,
} from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";

export const WHATSAPP_CONTACTS = [
  {
    label: "Sucursal Luis Guillón",
    sub: "Av. Luciano Valette 1696",
    buildHref: (cut) =>
      `https://wa.me/541135534033?text=Hola!%20Me%20comunico%20desde%20la%20página%20web%20y%20quería%20consultar%20por%20*${encodeURIComponent(cut)}*%20en%20la%20sucursal%20Luis%20Guill%C3%B3n.`,
  },
  {
    label: "Sucursal Moreno",
    sub: "Av. Del Libertador 3910 — Mercado Modelo",
    buildHref: (cut) =>
      `https://wa.me/541130531313?text=Hola!%20Me%20comunico%20desde%20la%20página%20web%20y%20quería%20consultar%20por%20*${encodeURIComponent(cut)}*%20en%20la%20sucursal%20Moreno.`,
  },
  {
    label: "Atención personalizada",
    sub: "Mayoristas, comerciantes y pedidos especiales",
    buildHref: (cut) =>
      `https://wa.me/541155291717?text=Hola!%20Me%20comunico%20desde%20la%20página%20web%20y%20quería%20consultar%20por%20*${encodeURIComponent(cut)}*%20y%20me%20interesa%20la%20atenci%C3%B3n%20personalizada.`,
  },
];

export const BASE_CUTS = {
  vacuna: [
    {
      name: "1/2 Res",
      desc: "Fresca y lista para despostar",
      img: "/media-res-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Lomo",
      desc: "El corte más tierno y premium",
      img: "/lomo-vaca-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Bife Ancho",
      desc: "Jugoso y marmolado, estrella del asado",
      img: "/bife-ancho-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpeg",
    },
    {
      name: "Bife Angosto",
      desc: "Tierno y magro, ideal a la parrilla",
      img: "/bife-angosto-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpeg",
    },
    {
      name: "Bife de Chorizo",
      desc: "Clásico jugoso con su tapa de grasa",
      img: "/bife-de-chorizo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Entraña",
      desc: "Sabor intenso, imperdible en la parrilla",
      img: "/entraña-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Asado",
      desc: "El clásico argentino infaltable",
      img: "/asado-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Tapa de Asado",
      desc: "Sabrosa y tradicional a la parrilla",
      img: "/tapa-de-asado-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Vacío",
      desc: "Jugoso y sabroso a la parrilla",
      img: "/vacio-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Matambre",
      desc: "Fino y versátil, relleno o a la parrilla",
      img: "/matambre-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.webp",
    },
    {
      name: "Picaña",
      desc: "Jugosa y popular en todo asado",
      img: "/picaña-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Cuadril",
      desc: "Tierno y versátil, horno o parrilla",
      img: "/cuadril-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Colita de Cuadril",
      desc: "Magra, tierna y fácil de cocinar",
      img: "/colita-de-cuadril-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Roast Beef",
      desc: "Ideal para horno y cocción lenta",
      img: "/roast-beef-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Nalga",
      desc: "Versátil y tierna, ideal al horno",
      img: "/nalga-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Tapa de Nalga",
      desc: "Magra y versátil en la cocina",
      img: "/tapa-de-nalga-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Bola de Lomo",
      desc: "La favorita para milanesas",
      img: "/bola-de-lomo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpeg",
    },
    {
      name: "Peceto",
      desc: "Magro y tierno, perfecto al horno",
      img: "/peceto-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpeg",
    },
    {
      name: "Paleta",
      desc: "Sabrosa, ideal para guisos y estofados",
      img: "/paleta-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.webp",
    },
    {
      name: "Hamburguesas de Carne",
      desc: "Caseras, jugosas y listas para cocinar",
      img: "/hamburguesas-de-vaca-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["preparados"],
    },
    {
      name: "Palomita",
      desc: "Tierna y económica para guisos",
      img: "/palomita-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Bife Americano",
      desc: "Corte grueso y sabroso a la plancha",
      img: "/bife-americano-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Cuadrada",
      desc: "Magra y firme, buena para milanesas",
      img: "/cuadrada-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpeg",
    },
    {
      name: "Tortuguita",
      desc: "Tierna, ideal para milanesas y horno",
      img: "/tortuguita-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Cima",
      desc: "Económica y sabrosa para rellenos",
      img: "/cima-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Osobuco",
      desc: "Con hueso, ideal para caldos y guisos",
      img: "/osobuco-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Falda",
      desc: "Económica y sabrosa en cocción lenta",
      img: "/falda-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Espinazo",
      desc: "Con hueso, perfecto para pucheros",
      img: "/espinazo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.webp",
    },
    {
      name: "Carne Picada Especial",
      desc: "Perfecta para empanadas y salsas",
      img: "/carne-picada-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["preparados"],
    },
  ],
  cerdo: [
    {
      name: "1/2 Res de Cerdo",
      desc: "Media res fresca, lista para despostar",
      img: "/media-res-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Lechón",
      desc: "Tierno y festivo, ideal para eventos",
      img: "/lechon-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Carré de Cerdo",
      desc: "Corte premium, jugoso y tierno",
      img: "/carre-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.webp",
    },
    {
      name: "Bondiola",
      desc: "Jugosa y llena de sabor",
      img: "/bondiola-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Bondiola en Caja",
      desc: "Bondiola al por mayor, calidad garantizada",
      img: "/bondola-en-caja-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Pernil (Jamón)",
      desc: "Ideal para reuniones y eventos",
      img: "/pernil-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Paleta",
      desc: "Versátil, ideal al horno o estofado",
      img: "/paleta-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Bife de Cerdo",
      desc: "Tierno y perfecto a la plancha",
      img: "/bife-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Churrasquito",
      desc: "Pequeño, tierno y rápido a la parrilla",
      img: "/churrasquitos-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Hamburguesas de Cerdo",
      desc: "Caseras, jugosas y listas para cocinar",
      img: "/hamburguesas-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["preparados"],
    },
    {
      name: "Pechito de Cerdo",
      desc: "Ideal para parrilla lenta y ahumados",
      img: "/pechito-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Anqueta de Cerdo",
      desc: "Sabrosa, ideal para horno o parrilla",
      img: "/anqueta-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Chorizos",
      desc: "Infaltables en cualquier asado",
      img: "/chorizo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["embutidos"],
    },
    {
      name: "Chorizo Bombón",
      desc: "El bocado parrillero perfecto",
      img: "/chorizo-bombon-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.webp",
      tags: ["embutidos"],
    },
    {
      name: "Salchichas Parrilleras",
      desc: "Frescas y listas para la parrilla",
      img: "/salchicha-parrillera-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["embutidos"],
    },
    {
      name: "Morcilla",
      desc: "Clásica y sabrosa en el asado",
      img: "/morcilla-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["embutidos"],
    },
    {
      name: "Morcilla Vasca",
      desc: "Con verduras, suave y tradicional",
      img: "/morcilla-vasca-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["embutidos"],
    },
    {
      name: "Picada de Cerdo",
      desc: "Ideal para empanadas y rellenos",
      img: "/picada-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["preparados"],
    },
    {
      name: "Recorte",
      desc: "Económico, ideal para guisos y rellenos",
      img: "/recorte-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Patita de Cerdo",
      desc: "Ideal para caldos y gelatinas",
      img: "/patita-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Huesito de Cerdo",
      desc: "Perfecto para caldos y guisos",
      img: "/huesito-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.webp",
    },
    {
      name: "Cuero de Cerdo",
      desc: "Para chicharrón o dar sabor a guisos",
      img: "/cuero-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Grasa de Cerdo",
      desc: "Para frituras y preparaciones caseras",
      img: "/grasa-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Cabeza de Cerdo",
      desc: "Para queso de cerdo y preparados",
      img: "/cabeza-de-cerdo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
  ],
  pollo: [
    {
      name: "Cajón de Pollo",
      desc: "Pollos enteros frescos por mayor",
      img: "/cajon-de-pollo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Pollo Entero",
      desc: "Fresco, natural y de calidad",
      img: "/pollo-entero-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Supremas",
      desc: "Sin piel, tiernas y magras",
      img: "/supremas-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Caja de Supremas",
      desc: "Supremas al por mayor, sin piel",
      img: "/caja-de-supremas-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Milanesas de Pollo",
      desc: "Listas para cocinar, rebozadas al momento",
      img: "/milanesas-de-pollo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["preparados"],
    },
    {
      name: "Hamburguesas de Pollo",
      desc: "Caseras, jugosas y listas para cocinar",
      img: "/hamburguesas-de-pollo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
      tags: ["preparados"],
    },
    {
      name: "Pata y Muslo",
      desc: "Rendidoras y jugosas, ideales al horno",
      img: "/pata-y-muslo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Caja de Pata y Muslo",
      desc: "Pata y muslo al por mayor",
      img: "/caja-de-pata-y-muslo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.png",
    },
    {
      name: "Alitas",
      desc: "Crocantes y sabrosas a la parrilla",
      img: "/alitas-de-pollo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Menudo de Pollo",
      desc: "Hígado, corazón y molleja frescos",
      img: "/menudo-de-pollo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
    {
      name: "Carcasa de Pollo",
      desc: "Ideal para caldos y sopas caseras",
      img: "/carcasa-de-pollo-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpeg",
    },
  ],
  cordero: [
    {
      name: "Cordero",
      desc: "Producto fresco y exclusivo",
      img: "/cordero-luis-guillon-mayorista-carnes-zona-sur-oeste-abastecedora-valette.jpg",
    },
  ],
};

// ─── TROCEO SECTION ───────────────────────────────────────────────────────────
export const TROCEOS = [
  {
    name: "Completo",
    img: "/troceos/troceoCompleto.png",
    desc: "La media res entera sin dividir, ideal para grandes volúmenes.",
  },
  {
    name: "Pistola",
    img: "/troceos/troceoPistola.png",
    desc: "Cuarto trasero completo: pierna y lomo. El más solicitado por carnicerías.",
  },
  {
    name: "Barra de Bife",
    img: "/troceos/troceoBarraDeBife.png",
    desc: "Lomo y bifes juntos, sin costillas. Ideal para cortes premium.",
  },
  {
    name: "Mocho",
    img: "/troceos/troceoMocho.png",
    desc: "Parte trasera sin el cuarto delantero. Buena proporción de cortes nobles.",
  },
  {
    name: "Parrillero",
    img: "/troceos/troceoParrillero.png",
    desc: "Selección orientada al asado: asado, vacío y cortes de parrilla.",
  },
  {
    name: "Pecho",
    img: "/troceos/troceoPecho.png",
    desc: "Parte delantera con hueso. Económica, ideal para pucheros y caldos.",
  },
];

export const sections = {
  vacuna: {
    icon: <GiCow size={60} />,
    title: "CARNE VACUNA",
    subtitle: "Los mejores para asado, milanesas y cocina diaria.",
  },
  cerdo: {
    icon: <GiPig size={60} />,
    title: "CARNE DE CERDO",
    subtitle:
      "Cortes frescos y de excelente calidad, con criadero propio y cerdos de genética.",
  },
  pollo: {
    icon: <GiChicken size={60} />,
    title: "POLLO FRESCO",
    subtitle: "Tiernos, saludables y perfectos para todas tus comidas.",
  },
  embutidos: {
    icon: <GiSlicedSausage size={60} />,
    title: "EMBUTIDOS",
    subtitle: "Chorizos, morcillas y salchichas artesanales para tu asado.",
  },
  preparados: {
    icon: <MdOutlineFoodBank size={60} />,
    title: "PREPARADOS",
    subtitle: "Listos para cocinar: milanesas, hamburguesas y más.",
  },
  cordero: {
    icon: <GiSheep size={60} />,
    title: "CARNE DE CORDERO",
    subtitle: "Cortes especiales y de excelente calidad.",
  },
};
