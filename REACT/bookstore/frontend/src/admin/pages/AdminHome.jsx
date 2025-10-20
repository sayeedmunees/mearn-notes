import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import { faBook, faUsers, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminHome = () => {
  return (
    <>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_4fr]">
        <div className="bg-green-950 rounded-tr-2xl rounded-br-2xl mb-1 -mt-1 py-4 flex flex-col items-center min-h-[55vh]">
          <AdminSidebar />
        </div>
        <div className="flex gap-2 justify-around mt-4">
          <div className="flex gap-2  items-center px-6 py-4 bg-green-950 text-white rounded-xl h-fit">
            <FontAwesomeIcon className="text-4xl" icon={faBook} />
            <p className="flex flex-col text-center">
              Total Number of Books{" "}
              <span className="font-bold text-xl">100+</span>
            </p>
          </div>

          <div className="flex gap-2 items-center px-6 py-4 bg-blue-950 text-white rounded-xl h-fit">
            <FontAwesomeIcon className="text-4xl" icon={faUsers} />
            <p className="flex flex-col text-center">
              Total Number of Users{" "}
              <span className="font-bold text-xl">100+</span>
            </p>
          </div>

          <div className="flex gap-2  items-center px-6 py-4 bg-amber-700 text-white rounded-xl h-fit">
            <FontAwesomeIcon className="text-4xl" icon={faUserTie} />
            <p className="flex flex-col text-center">
              Total Number of Employees{" "}
              <span className="font-bold text-xl">100+</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminHome;
