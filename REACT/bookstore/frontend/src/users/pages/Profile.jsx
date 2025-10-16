import React, { use, useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const [sellStatus, setSellStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaceStatus, setPurchaceStatus] = useState(false);

  const handleSellStatus = () => {
    setSellStatus(true);
    setBookStatus(false);
    setPurchaceStatus(false);
  };
  const handleBookStatus = () => {
    setSellStatus(false);
    setBookStatus(true);
    setPurchaceStatus(false);
  };
  const handlePurchaceStatus = () => {
    setSellStatus(false);
    setBookStatus(false);
    setPurchaceStatus(true);
  };
  return (
    <>
      <Header />
      <hr className="text-white" />
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
          <span className="text-3xl font-semibold">Maxx Well</span>
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
      {/* tabs */}
      <div className="md:px-40 my-4">
        <div className="flex justify-center">
          <p
            onClick={handleSellStatus}
            className={
              sellStatus
                ? "p-4 text-green-950 border-2 border-b-0 border-gray-200 rounded cursor-pointer"
                : "p-4 text-black border-b-2 border-b-gray-200"
            }
          >
            Sell Books
          </p>
          <p
            onClick={handleBookStatus}
            className={
              bookStatus
                ? "p-4 text-green-950 border-2 border-b-0 border-gray-200 rounded cursor-pointer"
                : "p-4 text-black border-b-2 border-b-gray-200"
            }
          >
            Sold History
          </p>
          <p
            onClick={handlePurchaceStatus}
            className={
              purchaceStatus
                ? "p-4 text-green-950 border-2 border-b-0 border-gray-200 rounded cursor-pointer"
                : "p-4 text-black border-b-2 border-b-gray-200"
            }
          >
            Purchase History
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
