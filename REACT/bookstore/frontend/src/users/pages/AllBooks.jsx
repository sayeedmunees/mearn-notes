import React, { useEffect, useEffectEvent, useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allBookAPI } from "../../services/allAPI";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [token, setToken] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const [tempAllBooks, setTempAllBooks] = useState([]);

  const getAllBooks = async (tok) => {
    const reqHeader = {
      Authorization: `Bearer ${tok}`,
    };
    console.log(reqHeader);
    const result = await allBookAPI(reqHeader);
    console.log(result);
    if (result.status == 200) {
      setAllBooks(result.data);
      setTempAllBooks(result.data);
    }
  };

  console.log(allBooks);

  const filter = (data) => {
    if (data == "All") {
      setAllBooks(tempAllBooks);
    } else {
      setAllBooks(
        tempAllBooks.filter(
          (item) => item.category.toLowerCase() == data.toLowerCase()
        )
      );
    }
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

      {token && (
        <div className="flex flex-col px-10">
          <div className="my-2 mt-2">
            <h2 className="text-xl text-center ">Our New</h2>
            <h4 className="text-3xl text-center uppercase">Collections</h4>
          </div>
          <div className="flex w-full items-center justify-center">
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
          </div>

          <div className="grid grid-cols-4 my-4">
            {/* filters */}
            <div className="col-span-4 md:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="flex flex-col gap-4 mb-6">
                <div onClick={() => filter("All")}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      className="form-radio text-blue-600 w-5 h-5 mr-2"
                    />
                    <span>All</span>
                  </label>
                </div>

                <div onClick={() => filter("Self Help")}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="fiction-1"
                      className="form-radio text-blue-600 w-5 h-5 mr-2"
                    />
                    <span>Self-Help</span>
                  </label>
                </div>

                <div onClick={() => filter("Finance")}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="fiction-2"
                      className="form-radio text-green-600 w-5 h-5 mr-2"
                    />
                    <span>Finance</span>
                  </label>
                </div>

                <div onClick={() => filter("History")}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="non-fiction"
                      className="form-radio text-red-600 w-5 h-5 mr-2"
                    />
                    <span>History</span>
                  </label>
                </div>

                <div onClick={() => filter("Mystery")}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="mystery"
                      className="form-radio text-purple-600 w-5 h-5 mr-2"
                    />
                    <span>Mystery</span>
                  </label>
                </div>

                <div onClick={() => filter("Horror")}>
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
            </div>

            <div className="col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
              {allBooks.length > 0 ? (
                allBooks.map((item) => {
                  return (
                    <div
                      className="p-3 flex flex-col items-center shadow col-span-1 hover:shadow-xl border-2 border-green-950/20 rounded-lg"
                      key={item?._id}
                    >
                      <img
                        className="border rounded-lg"
                        src={item?.imageurl}
                        style={{ width: "200px", height: "250px" }}
                        alt="Book cover"
                      />
                      <div className="flex flex-col justify-between items-start w-full h-full">
                        <div className="flex flex-col text-left justify-center mt-3">
                          <p className="text-green-950">{item?.author}</p>
                          <h3 className="font-bold">{item?.title}</h3>
                          <p>${item?.price}</p>
                        </div>
                        <Link to={`/view-book/${item?._id}`}>
                          <button className="bg-green-950 border border-green-950 hover:bg-white text-white rounded-md hover:text-green-950 font-semibold p-2 mt-2">
                            Explore More
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No books</p>
              )}
              {/* <div className="p-3 shadow-xl col-span-1">
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
              </div> */}
            </div>
          </div>
        </div>
      )}

      {!token && (
        <div className="grid grid-cols-3">
          <div></div>
          <div className="flex justify-center items-center flex-col w-full">
            <img
              src="https://i.pinimg.com/originals/eb/17/d0/eb17d0925c49ef13af6e84cdfeaad079.gif"
              alt="no image"
            />
            <p className=" m-3 text-2x1">
              Please
              <Link to={"/login"} className="text-red-500 underline">
                Login
              </Link>
              to Explore more...
            </p>
          </div>
          <div></div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default AllBooks;
