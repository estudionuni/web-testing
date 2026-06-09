import React from "react";
import { Outlet } from "react-router";

const DriverLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: ClientNavbar */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DriverLayout;
