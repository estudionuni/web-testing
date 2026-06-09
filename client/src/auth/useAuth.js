// src/auth/useAuth.js
// Hook de autenticación que lee del AppContext.
// Cuando implementes el backend (PostgreSQL + JWT / sessions),
// conectá aquí la llamada a tu API y actualizá user/loading.

import { useAppContext } from "../context/useAppContext";

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useAppContext();
  return { user, setUser, loading, setLoading };
};
