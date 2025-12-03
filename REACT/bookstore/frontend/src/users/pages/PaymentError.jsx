import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PaymentError = () => {
  return (
    <>
      <Header />
      <div className="container my-10">
        <div className="md:grid grid-cols-2 px-20 justify-center items-center flex-col">
          <div>
            <h1 className="md:text-4xl text-red-500">
              Sorry, Your payment is Unsuccessfull
            </h1>
            <p>
              We Apologize for the inconvience caused and appreciate your
              valuable time!!!
            </p>
            <Link to={"/all-books"}>
              {""}
              <button className="bg-red-600 px-4 py-3 text-white my-5">
                <FontAwesomeIcon icon={faBackward} />
                Explore more Books
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://cdn.dribbble.com/userupload/23003310/file/original-6396208ee0571627a9e2e9987dcc1974.gif"
              alt=" Error"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentError;
