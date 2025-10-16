import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditProfile from "../components/EditProfile";

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
          <span className="text-3xl">Maxx Well</span>
          <FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} />
        </p>
        <EditProfile />
      </div>
      <p className="md:px-20 px-5 my-5 text-justify max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum
        quam blanditiis animi quaerat voluptatibus repudiandae esse sequi nulla
        deleniti, quia laboriosam iusto incidunt nesciunt molestias?
        Perspiciatis unde impedit eius?
      </p>
      <Footer />
    </>
  );
};

export default Profile;
