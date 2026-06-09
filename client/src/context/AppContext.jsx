// src/context/AppContext.jsx
import { useState } from "react";
import { AppContext } from "./appContext";

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Sin backend activo, loading arranca en false para no bloquear ProtectedRoute
  const [loading, setLoading] = useState(false);
  const [selectedCut, setSelectedCut] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Solo rutas que existen en el router (o anclas in-page en Home).
  // Las rutas /productos y /medias-reses se agregarán cuando estén listas.
  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nuestras carnes", href: "/#nuestras-carnes" },
    { label: "Troceos", href: "/#troceos" },
    { label: "Sucursales", href: "/sucursales" },
    { label: "Contactanos", href: "/links" },
    { label: "Venta Mayorista", href: "/#venta-mayorista" },
  ];

  const anyModalOpen = contactOpen || !!selectedCut;

  // Cuando implementes el backend, descomenta y completá:
  // const login  = async (credentials) => { ... setUser(...); };
  // const logout = async () => { ... setUser(null); };
  // const checkAuth = async () => { setLoading(true); ... setLoading(false); };

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
