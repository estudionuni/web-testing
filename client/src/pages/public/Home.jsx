import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero";
import { useAppContext } from "../../context/useAppContext";
import ShareButton from "../../components/ShareButton";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import ContactoMayoristas from "../../components/ContactoMayoristas";
import CortesSection from "../../components/CortesSection";
import TroceosSection from "../../components/TroceosSection";
import ContactoGeneral from "../../components/ContactoGeneral";
import useBackButtonClose from "../../hooks/useBackButtonClose";

export default function Home() {
  const {
    contactOpen,
    setContactOpen,
    selectedCut,
    setSelectedCut,
    menuOpen,
    setMenuOpen,
    anyModalOpen,
  } = useAppContext();

  // Interceptar "atrás" para cada overlay
  useBackButtonClose(menuOpen, () => setMenuOpen(false));
  useBackButtonClose(contactOpen, () => setContactOpen(false));
  useBackButtonClose(!!selectedCut, () => setSelectedCut(null));

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight / 4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Abastecedora Valette | Producción y venta de carnes.</title>
        <meta
          name="description"
          content="Productores directos de carne vacuna, cerdo y pollo con criadero propio. Cortes frescos, embutidos artesanales, troceo de media res y preparados listos para cocinar. Atendemos familias, comercios y mayoristas. Visitanos en Luis Guillón o Moreno."
        />
        <meta
          name="keywords"
          content="carnicería Luis Guillón, carniceria Moreno, carne al por mayor GBA Sur, carne al por mayor GBA Oeste, abastecedora Valette, cortes de carne Esteban Echeverría, carnicería Ezeiza, carnicería Monte Grande, carnicería Cañuelas, venta mayorista carne Buenos Aires, carne de cerdo, carne de pollo, carne de vaca, carne para asado, carne para restaurantes, troceo media res, carnicería mayorista, frigorifico, frigoríficos, zona sur, zona oeste"
        />
        <link rel="canonical" href="https://abastecedoravalette.com/" />
        <meta
          property="og:title"
          content="Abastecedora Valette — Venta de carnes directo del productor"
        />
        <meta
          property="og:description"
          content="Productores directos de carne vacuna, cerdo y pollo con criadero propio. Cortes frescos, embutidos artesanales, troceo de media res y preparados listos para cocinar. Atendemos familias, comercios y mayoristas. Visitanos en Luis Guillón o Moreno."
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://abastecedoravalette.com/" />
        <meta
          property="og:image"
          content="https://abastecedoravalette.com/abastecedora-valette-logo.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  name: "Abastecedora Valette",
                  description:
                    "Somos productores y comerciantes con atención mayorista y minorista de carne vacuna, de cerdo y pollo.",
                  url: "https://abastecedoravalette.com/",
                  telephone: [
                    "+5491135534033",
                    "+5491130531313",
                    "+5491155291717",
                  ],
                  areaServed: [
                    "Luis Guillón",
                    "Monte Grande",
                    "Ezeiza",
                    "Esteban Echeverría",
                    "Moreno",
                    "General Rodríguez",
                  ],
                  knowsAbout: [
                    "Carne vacuna",
                    "Carne de cerdo",
                    "Carne de pollo",
                    "Troceo de media res",
                    "Venta mayorista de carnes",
                  ],
                  email: "abastecedoravalette@gmail.com",
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                      ],
                      opens: "07:00",
                      closes: "15:00",
                    },
                  ],
                  priceRange: "$$",
                  logo: "https://abastecedoravalette.com/abastecedora-valette-logo.jpg",
                  image:
                    "https://abastecedoravalette.com/abastecedora-valette-logo.jpg",
                  sameAs: [
                    "https://www.instagram.com/abastecedora.valette",
                    "https://www.facebook.com/share/1D5Qyoawao/",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Catálogo de carnes Abastecedora Valette",
                    itemListElement: [
                      { "@type": "OfferCatalog", name: "Carne Vacuna" },
                      { "@type": "OfferCatalog", name: "Carne de Cerdo" },
                      { "@type": "OfferCatalog", name: "Carne de Pollo" },
                      { "@type": "OfferCatalog", name: "Embutidos" },
                    ],
                  },
                },
                {
                  "@type": ["LocalBusiness", "MeatShop"],
                  name: "Abastecedora Valette - Luis Guillón",
                  url: "https://abastecedoravalette.com/",
                  telephone: "+5491135534033",
                  openingHours: "Mo-Sa 07:00-15:00",
                  image:
                    "https://abastecedoravalette.com/abastecedora-valette-logo.jpg",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. Luciano Valette 1696",
                    addressLocality: "Luis Guillón",
                    addressRegion: "Provincia de Buenos Aires",
                    addressCountry: "AR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -34.792588,
                    longitude: -58.456931,
                  },
                  sameAs: [
                    "https://www.instagram.com/abastecedora.valette",
                    "https://www.facebook.com/share/1D5Qyoawao/",
                  ],
                },
                {
                  "@type": ["LocalBusiness", "MeatShop"],
                  name: "Abastecedora Valette - Moreno",
                  url: "https://abastecedoravalette.com/",
                  telephone: "+5491130531313",
                  openingHours: "Mo-Sa 06:00-15:00",
                  image:
                    "https://abastecedoravalette.com/abastecedora-valette-logo.jpg",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. Del Libertador 3910",
                    addressLocality: "Moreno",
                    addressRegion: "Provincia de Buenos Aires",
                    addressCountry: "AR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -34.612165,
                    longitude: -58.77052,
                  },
                  sameAs: [
                    "https://www.instagram.com/abastecedora.valette",
                    "https://www.facebook.com/share/1D5Qyoawao/",
                  ],
                },
              ],
            }),
          }}
        />
      </Helmet>

      {/* ── MODALS ── */}
      {contactOpen && <ContactoGeneral onClose={() => setContactOpen(false)} />}

      {/* Overlay para cerrar el menú mobile */}
      {menuOpen && !anyModalOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="min-h-screen flex flex-col font-open-sans text-main bg-white">
        <main className="flex-1 flex flex-col">
          {/* ── HERO ── */}
          <Hero />

          {/* ── CORTES ── */}
          <div id="nuestras-carnes" className="h-1 mb-20 -mt-20" />
          <CortesSection />

          {/* ── SEPARADOR WAVE ── */}
          <div className="w-full -mt-px">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
              <path
                d="M0 0 Q360 60 720 30 Q1080 0 1440 40 L1440 0 Z"
                fill="#f9fafb"
              />
            </svg>
          </div>

          {/* ── TROCEOS ── */}
          <div id="troceos" className="h-1 mb-20 -mt-20" />
          <TroceosSection onSelectCut={setSelectedCut} />

          {/* ── VENTA MAYORISTA ── */}
          <div id="venta-mayorista" className="h-1 mb-20 -mt-20" />
          <ContactoMayoristas />
        </main>
      </div>

      <ScrollToTopButton showScrollTop={showScrollTop} />
      <ShareButton />
    </>
  );
}
