import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../components/Footer";

const AdminSettings = () => {
  return (
    <>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_4fr]">
        <div className="bg-green-100 flex flex-col items-center">
          <AdminSidebar />
        </div>
        <div>Settings</div>
      </div>

      <Footer />
    </>
  );
};

export default AdminSettings;
