import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className="bg-green-950"></div>
      <div
        style={{
          width: "230px",
          height: "230px",
          borderRadius: "50%",
          marginLeft: "70px",
          marginTop: "-130px",
        }}
        className="bg-white p-3"
      >
        <img
          src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
          alt="profile-pic"
        />
      </div>
      <div className="flex justify-between px-20 mt-5">
        <p className="flex justify-center items-center">
          <span>Maxx Well</span>
          <FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} />
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
