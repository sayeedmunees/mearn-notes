import {
  faPowerOff,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
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
          <h1 className="font-bold px-4 text-lg md:text-xl lg:text-2xl uppercase text-green-950">
            Book Store{" "}
            <span className="text-gray-700 font-medium px-1 text-sm">
              Admin
            </span>
          </h1>
        </div>
        <button className="px-4 py-2 flex items-center justify-center font-semibold text-green-950 border border-green-950 rounded hover:bg-red-700 hover:text-white">
          Logout
          <FontAwesomeIcon className="ps-2" icon={faRightFromBracket} />
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
