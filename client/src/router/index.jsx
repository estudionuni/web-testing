import { Routes, Route } from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";

//public
import Home from "../pages/public/Home";
import Sucursales from "../pages/public/Sucursales";
import Links from "../pages/public/Links";
//Auth
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
//Admin
import Dashboard from "../pages/admin/Dashboard";
import Pedidos from "../pages/admin/Pedidos";
import MediaReses from "../pages/admin/MediaReses";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="sucursales" element={<Sucursales />} />
        <Route path="links" element={<Links />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="admin" element={<Dashboard />} />
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="media-reses" element={<MediaReses />} />
      </Route>
    </Routes>
  );
}
