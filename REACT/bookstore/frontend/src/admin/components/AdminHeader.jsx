import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AdminHeader = () => {
  return (
    <>
      <div className="flex justify-between px-20 p-3">
        <div className="flex items-center">
          <img
            src="https://openclipart.org/download/275692/1489798288.svg"
            alt="Book Store"
            style={{ width: "50px", height: "50px" }}
          />
          <h1 className="ms-3 font-medium text-2x1">BOOK STORE</h1>
        </div>
        <button className="px-4 py-2 text-green-950 border border-green-950 rounded hover:bg-green-950 hover:text-white">
          <FontAwesomeIcon icon={faPowerOff} /> Logout
        </button>
      </div>

      <marquee
        behavior=""
        direction="left"
        className="p-3 bg-green-950 text-white"
      >
        <p>
          Welcome, Admin!.. You're all set to manage and monitor the system.
          Let's get to Work!
        </p>
      </marquee>
    </>
  );
};

export default AdminHeader;
