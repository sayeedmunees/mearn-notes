import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../components/Footer";
import {
  faCircleCheck,
  faImage,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allBookAdminAPI } from "../../services/allAPI";

const AdminBooks = () => {
  const [bookListStatus, setBookListStatus] = useState(true);
  const [usersStatus, setUsersStatus] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);

  const getAllBooksAdmin = async (token) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    const result = await allBookAdminAPI(reqHeader);
    console.log(result.data);
    if (result.status == 200) {
      setBookDetails(result.data);
    }
  };
  console.log(bookDetails);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      getAllBooksAdmin(token);
    }
  }, []);

  const handleBookListStatus = () => {
    setBookListStatus(true);
    setUsersStatus(false);
  };
  const handleUsersStatus = () => {
    setBookListStatus(false);
    setUsersStatus(true);
  };

  return (
    <>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_4fr]">
        <div className="bg-green-950 rounded-tr-2xl rounded-br-2xl mb-1 -mt-1 py-4 flex flex-col items-center min-h-[55vh]">
          <AdminSidebar />
        </div>
        <div>
          <div>
            <h2 className="text-center font-bold my-4 text-2xl">All Books</h2>
          </div>
          {/* tabs */}
          <div className="md:px-40 mt-4">
            <div className="flex justify-center">
              <p
                onClick={handleBookListStatus}
                className={
                  bookListStatus
                    ? "p-4 text-green-950 border-2 border-b-0 border-gray-200 rounded cursor-pointer"
                    : "p-4 text-black border-b-2 border-b-gray-200"
                }
              >
                Book List
              </p>
              <p
                onClick={handleUsersStatus}
                className={
                  usersStatus
                    ? "p-4 text-green-950 border-2 border-b-0 border-gray-200 rounded cursor-pointer"
                    : "p-4 text-black border-b-2 border-b-gray-200"
                }
              >
                Users
              </p>
            </div>
          </div>

          {/* Contents */}
          {bookListStatus && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 px-4">
              {bookDetails.map((item) => {
                return (
                  <div
                    className="p-3 flex flex-col items-center shadow col-span-1 hover:shadow-xl border-2 border-green-950/20 rounded-lg"
                    key={item?._id}
                  >
                    <img
                      className="border rounded-lg"
                      src={item?.imageurl}
                      alt="Book cover"
                      style={{ width: "200px", height: "250px" }}
                    />
                    <div className="flex flex-col justify-center items-center mt-3">
                      <p>{item?.author}</p>
                      <h3>{item?.title}</h3>
                      <p>${item?.dprice}</p>
                      <div className="flex items-center justify-between font-semibold text-green-950 p-2 w-full my-2 ">
                        <p>Approved</p>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="p-3 shadow-xl col-span-1 rounded border border-gray-400">
                <img
                  src="https://m.media-amazon.com/images/I/71XJ8xwLPpL.jpg"
                  alt="Book cover"
                />
                <div className="flex flex-col justify-center items-center mt-3">
                  <p>Author</p>
                  <h3>Title</h3>
                  <p>$Price</p>
                  <button className="bg-green-950 text-white border border-green-950 hover:text-green-950 hover:bg-white p-2 w-full my-2 rounded-full">
                    Approve
                  </button>
                </div>
              </div> */}
            </div>
          )}

          {usersStatus && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 px-4">
              <div className="p-3 shadow-lg col-span-1 rounded-xl bg-gray-100 border-3 border-gray-300">
                <div className="text-green-950">ID: sggjugf7uas6ujfg</div>
                <div className="flex flex-row gap-4 items-center mt-3 ">
                  <div className="bg-gray-400 rounded-full">
                    <img
                      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                      alt="no image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Ken</h3>
                    <p>example@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-3 shadow-lg col-span-1 rounded-xl bg-gray-100 border-3 border-gray-300">
                <div className="text-green-950">ID: sggjugf7uas6ujfg</div>
                <div className="flex flex-row gap-4 items-center mt-3 ">
                  <div className="bg-gray-400 rounded-full">
                    <img
                      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                      alt="no image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Ken</h3>
                    <p>example@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-3 shadow-lg col-span-1 rounded-xl bg-gray-100 border-3 border-gray-300">
                <div className="text-green-950">ID: sggjugf7uas6ujfg</div>
                <div className="flex flex-row gap-4 items-center mt-3 ">
                  <div className="bg-gray-400 rounded-full">
                    <img
                      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                      alt="no image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Ken</h3>
                    <p>example@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-3 shadow-lg col-span-1 rounded-xl bg-gray-100 border-3 border-gray-300">
                <div className="text-green-950">ID: sggjugf7uas6ujfg</div>
                <div className="flex flex-row gap-4 items-center mt-3 ">
                  <div className="bg-gray-400 rounded-full">
                    <img
                      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                      alt="no image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Ken</h3>
                    <p>example@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-3 shadow-lg col-span-1 rounded-xl bg-gray-100 border-3 border-gray-300">
                <div className="text-green-950">ID: sggjugf7uas6ujfg</div>
                <div className="flex flex-row gap-4 items-center mt-3 ">
                  <div className="bg-gray-400 rounded-full">
                    <img
                      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                      alt="no image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Ken</h3>
                    <p>example@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-3 shadow-lg col-span-1 rounded-xl bg-gray-100 border-3 border-gray-300">
                <div className="text-green-950">ID: sggjugf7uas6ujfg</div>
                <div className="flex flex-row gap-4 items-center mt-3 ">
                  <div className="bg-gray-400 rounded-full">
                    <img
                      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                      alt="no image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Ken</h3>
                    <p>example@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminBooks;
