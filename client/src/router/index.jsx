import { Routes, Route } from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import DriverLayout from "../layouts/DriverLayout";
import ProtectedRoute from "../auth/ProtectedRoute";

// Public
import Home from "../pages/public/Home";
import Sucursales from "../pages/public/Sucursales";
import Links from "../pages/public/Links";

// Auth
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Admin
import Dashboard from "../pages/admin/Dashboard";
import Pedidos from "../pages/admin/Pedidos";
import MediaReses from "../pages/admin/MediaReses";

// Client
import MisPedidos from "../pages/client/MisPedidos";
import PedidoDetalle from "../pages/client/PedidoDetalle";

export default function AppRouter() {
  return (
    <Routes>
      {/* ── PUBLIC ── */}
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="sucursales" element={<Sucursales />} />
        <Route path="links" element={<Links />} />
      </Route>

      {/* ── AUTH ── */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* ── ADMIN (protegido) ── */}
      <Route
        element={
          <ProtectedRoute roles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="admin" element={<Dashboard />} />
        <Route path="admin/pedidos" element={<Pedidos />} />
        <Route path="admin/media-reses" element={<MediaReses />} />
      </Route>

      {/* ── CLIENT (protegido) ── */}
      <Route
        element={
          <ProtectedRoute roles={["client", "admin"]}>
            <DriverLayout />
          </ProtectedRoute>
        }
      >
        <Route path="mis-pedidos" element={<MisPedidos />} />
        <Route path="mis-pedidos/:id" element={<PedidoDetalle />} />
      </Route>
    </Routes>
  );
}
