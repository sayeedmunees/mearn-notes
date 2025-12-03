import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";


const PaymentSuccess = () => {
  return (
    <>
      <Header />
      <div className="container my-10">
        <div className="md:grid grid-cols-2 px-20 justify-center items-center flex-col">
          <div>
            <h1 className="md:text-4xl text-blue-500">Congratulations</h1>
            <p>Thank you for shopping..... Hope you have a good time</p>
            <Link to={"/all-books"}>
              
              <button className="bg-blue-600 px-4 py-3 text-white my-5">
                <FontAwesomeIcon icon={faBackward} />
                Back
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif"
              alt="Thankuuu"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
