import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllBooks = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center px-10">
        <div className="my-2 mt-2">
          <h2 className="text-xl text-center ">Our New</h2>
          <h4 className="text-3xl text-center uppercase">Collections</h4>
        </div>
        <div className="flex w-xl shadow-2xl border my-2 bg-white rounded-3xl items-center py-2 px-4 ">
          <input
            type="text"
            placeholder="Search Books By Title"
            className=" placeholder-gray-600 w-3xl  text-black focus:outline-0"
          />
          <FontAwesomeIcon
            className="text-green-950"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="grid grid-cols-4 my-4">
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="flex flex-col gap-4 mb-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="all"
                  className="form-radio text-blue-600 w-5 h-5 mr-2"
                />
                <span>All</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="fiction-1"
                  className="form-radio text-blue-600 w-5 h-5 mr-2"
                />
                <span>Literary Fiction</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="fiction-2"
                  className="form-radio text-green-600 w-5 h-5 mr-2"
                />
                <span>Philosophy</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="non-fiction"
                  className="form-radio text-red-600 w-5 h-5 mr-2"
                />
                <span>Romance</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="mystery"
                  className="form-radio text-purple-600 w-5 h-5 mr-2"
                />
                <span>Mystery</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="mystery"
                  className="form-radio text-purple-600 w-5 h-5 mr-2"
                />
                <span>Horror</span>
              </label>
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-4 gap-2">
            <div className="p-3 shadow-xl col-span-1">
              <img
                src="https://m.media-amazon.com/images/I/71XJ8xwLPpL.jpg"
                alt="Book cover"
              />
              <div className="flex flex-col justify-center items-center mt-3">
                <p>Author</p>
                <h3>Title</h3>
                <p>$Price</p>
              </div>
            </div>
            <div className="p-3 shadow-xl col-span-1">
              <img
                src="https://m.media-amazon.com/images/I/71XJ8xwLPpL.jpg"
                alt="Book cover"
              />
              <div className="flex flex-col justify-center items-center mt-3">
                <p>Author</p>
                <h3>Title</h3>
                <p>$Price</p>
              </div>
            </div>
            <div className="p-3 shadow-xl col-span-1">
              <img
                src="https://m.media-amazon.com/images/I/71XJ8xwLPpL.jpg"
                alt="Book cover"
              />
              <div className="flex flex-col justify-center items-center mt-3">
                <p>Author</p>
                <h3>Title</h3>
                <p>$Price</p>
              </div>
            </div>
            <div className="p-3 shadow-xl col-span-1">
              <img
                src="https://m.media-amazon.com/images/I/71XJ8xwLPpL.jpg"
                alt="Book cover"
              />
              <div className="flex flex-col justify-center items-center mt-3">
                <p>Author</p>
                <h3>Title</h3>
                <p>$Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllBooks;
