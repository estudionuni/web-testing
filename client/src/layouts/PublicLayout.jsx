import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import PublicNavbar from "../components/PublicNavbar";

const PublicLayout = () => {
  return (
    <>
      <div className="flex flex-col w-full h-fit">
        <PublicNavbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
