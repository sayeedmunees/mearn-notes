import React, { useEffect, useEffectEvent, useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allBookAPI } from "../../services/allAPI";

const AllBooks = () => {
  const [token, setToken] = useState("");

  const getAllBooks = async (tok) => {
    const reqHeader = {
      Authorization: `Bearer ${tok}`,
    };
    console.log(reqHeader);
    const result = await allBookAPI(reqHeader);
    console.log(result);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token1 = sessionStorage.getItem("token");
      setToken(token1);
      getAllBooks(token1);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center px-10">
        <div className="my-2 mt-2">
          <h2 className="text-xl text-center ">Our New</h2>
          <h4 className="text-3xl text-center uppercase">Collections</h4>
        </div>
        <div className="flex max-w-xl lg:w-xl shadow-2xl border my-2 bg-white rounded-3xl items-center py-2 px-4 ">
          <input
            type="text"
            placeholder="Search Books By Title"
            className=" placeholder-gray-600 max-w-3xl lg:w-3xl  text-black focus:outline-0"
          />
          <FontAwesomeIcon
            className="text-green-950"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="grid grid-cols-4 my-4">
          <div className="col-span-4 md:col-span-1">
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
          <div className="col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
