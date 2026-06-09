// client/src/context/AppContext.jsx
import { useState } from "react";
import { AppContext } from "./appContext";

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCut, setSelectedCut] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Medias Reses", href: "/medias-reses" },
    { label: "Sucursales", href: "/sucursales" },
    { label: "Contactanos", href: "/links" },
    { label: "Venta Mayorista", href: "/venta-mayorista" },
  ];

  const anyModalOpen = contactOpen || !!selectedCut;

  //const login = async () => {};

  //const logout = async () => {};

  //const checkAuth = async () => {};

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        selectedCut,
        setSelectedCut,
        contactOpen,
        setContactOpen,
        menuOpen,
        setMenuOpen,
        navLinks,
        anyModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
