import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faBackward,
  faXmark,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const ViewBook = () => {
  const [modalStatus, setModalStatus] = useState(false);

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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpwVET5XReut9PEV-ifoO_yiQHSzzanilk1pUHvjfx1EIWpVPSrNr9WlYiNrdxkcRUZZr_QFAnAeFuzZvmb8J9niSnqFFPje-FnytkKY0Y5KacLO_fNvqG"
                className="rounded-md"
                alt="no image"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="px-4 mt-5 md:mt-0">
              <h1 className="text-center font-medium text-2xl">title</h1>
              <p className="text-blue-500 text-center mt-3 md:mt-0">author</p>

              <div className="grid grid-cols-3 mt-10">
                <div>
                  <p>Publisher: publisher</p>
                  <p className="mt-3">Seller Mail: userEmail</p>
                </div>
                <div>
                  <p>Language: language</p>
                  <p className="mt-3">Real Price: $price</p>
                </div>
                <div>
                  <p>No. of pages: noofPages</p>
                  <p className="mt-3">ISBN: isbn</p>
                </div>
              </div>

              <p className="text-justify mt-10">abstract</p>
              <div className="mt-10 flex justify-end">
                <Link to="/all-Books">
                  <button className="px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800">
                    <FontAwesomeIcon className="me-2" icon={faBackward} />
                    Back
                  </button>
                </Link>
                <button
                  type="button"
                  className="ms-3 px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800"
                >
                  Buy $price
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
                    <img
                      className="mt-4 mx-5 rounded"
                      src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpwVET5XReut9PEV-ifoO_yiQHSzzanilk1pUHvjfx1EIWpVPSrNr9WlYiNrdxkcRUZZr_QFAnAeFuzZvmb8J9niSnqFFPje-FnytkKY0Y5KacLO_fNvqG"
                      alt="Book photo"
                    />
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
