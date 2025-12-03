import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBackward, faXmark } from "@fortawesome/free-solid-svg-icons";
import { makePaymentAPI, viewBookAPI } from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";
import { loadStripe } from "@stripe/stripe-js";

const ViewBook = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [viewBookDetails, setViewBookDetails] = useState({});
  const [token, setToken] = useState("");
  const { id } = useParams();
  console.log(id);

  const viewABook = async (id) => {
    const result = await viewBookAPI(id);
    // console.log(result);
    if (result.status == 200) {
      setViewBookDetails(result.data);
    }
  };
  console.log(viewBookDetails);

  const makePayment = async () => {
    console.log(viewBookDetails);
    const stripe = await loadStripe(
      "pk_test_51Sa7V30VECkXdM8PbdiWsa5A4lIKXet6lkKYteTZjc1Gz9SA3ZCg5BDaOrm2f9POrOjFdF2rXHS5XYihUgm0SomS004XdhDDX1"
    );

    const reqBody = {
      bookDetails: viewBookDetails,
    };
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await makePaymentAPI(reqBody, reqHeader);
    console.log(result);
  };

  useEffect(() => {
    viewABook(id);
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      setToken(token);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="md:p-20 p-5">
        <div className="md:p-10 p-5 shadow w-full">
          <div className="flex justify-end mb-5 md:mb-0">
            <FontAwesomeIcon
              icon={faEye}
              className="text-gray-500 cursor-pointer"
              onClick={() => setModalStatus(true)}
            />
          </div>
          <div className="md:grid grid-cols-[1fr_3fr] w-full overflow-x-hidden">
            <div className="m-4">
              <img
                src={viewBookDetails?.imageurl}
                className="rounded-md"
                alt="no image"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="px-4 mt-5 md:mt-0">
              <h1 className="text-center font-bold text-2xl">
                {viewBookDetails?.title}
              </h1>
              <p className="text-blue-500 text-center mt-3 md:mt-0">
                {viewBookDetails?.author}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3">
                <div>
                  <p>
                    <span className="font-semibold">Publisher:</span>
                    {viewBookDetails?.publisher}
                  </p>
                  <p>
                    <span className="font-semibold">Seller Mail:</span>
                    {viewBookDetails?.userMail}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Language:</span>
                    {viewBookDetails?.language}
                  </p>
                  <p>
                    <span className="font-semibold">Real Price:</span>$
                    {viewBookDetails?.price}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">No. of pages:</span>
                    {viewBookDetails?.noofpages}
                  </p>
                  <p>
                    <span className="font-semibold">ISBN:</span>
                    {viewBookDetails?.isbn}
                  </p>
                </div>
              </div>

              <p className="text-justify mt-3">{viewBookDetails?.abstract}</p>
              <div className="mt-10 flex justify-end">
                <Link to="/all-Books">
                  <button className="px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800">
                    <FontAwesomeIcon className="me-2" icon={faBackward} />
                    Back
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={makePayment}
                  className="ms-3 px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800"
                >
                  Buy ${viewBookDetails?.dprice}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalStatus && (
        <div
          onClick={() => setModalStatus(false)}
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="bg-gray-900 p-3 text-white flex justify-between">
                  <h3>Book Photos</h3>
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => setModalStatus(false)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="md:flex my-4">
                    {viewBookDetails?.uploadedImg.map((item) => (
                      <img
                        className="mt-4 mx-5"
                        src={`${serverURL}/upload/${item}`}
                        alt="no image"
                        style={{ width: "300px", height: "300px" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBook;
