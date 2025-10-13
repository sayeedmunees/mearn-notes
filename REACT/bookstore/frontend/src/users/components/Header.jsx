import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="container">
        <div className="flex flex-row justify-around items-center mx-auto w-full h-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAhTXETNIvE8PsF6Uc6bElMUo-GmSmCx01Q&s"
            alt=""
            className="h-12"
          />
          <h2>Book Store</h2>
          <div className="inline-flex items-center gap-2">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <div className="bg-amber-800 rounded-full h-8 w-8 flex justify-center items-center">
              <h2 className=" text-white">L</h2>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
