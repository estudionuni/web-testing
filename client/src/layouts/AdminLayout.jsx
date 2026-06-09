import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: AdminNavbar */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
