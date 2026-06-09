import { Navigate, Outlet } from "react-router";
import { useAuth } from "./useAuth";

// Uso 1 — como wrapper de layout:
//   <Route element={<ProtectedRoute roles={["admin"]}><AdminLayout /></ProtectedRoute>}>
//
// Uso 2 — como layout en sí (sin children):
//   <Route element={<ProtectedRoute roles={["admin"]} />}>

export default function ProtectedRoute({ children, roles = [] }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Cargando...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Si se pasó un children (ej: <AdminLayout />), lo renderiza;
  // si no, actúa como layout propio y usa <Outlet />.
  return children ?? <Outlet />;
}
