import React, { use, useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import {
  faArrowsRotate,
  faCircleCheck,
  faImage,
  faPaperPlane,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const [sellStatus, setSellStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  const handleSellStatus = () => {
    setSellStatus(true);
    setBookStatus(false);
    setPurchaseStatus(false);
  };
  const handleBookStatus = () => {
    setSellStatus(false);
    setBookStatus(true);
    setPurchaseStatus(false);
  };
  const handlePurchaseStatus = () => {
    setSellStatus(false);
    setBookStatus(false);
    setPurchaseStatus(true);
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
      <div className="md:px-40 mt-4">
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
            onClick={handlePurchaseStatus}
            className={
              purchaseStatus
                ? "p-4 text-green-950 border-2 border-b-0 border-gray-200 rounded cursor-pointer"
                : "p-4 text-black border-b-2 border-b-gray-200"
            }
          >
            Purchase History
          </p>
        </div>
      </div>

      {/* Contents */}
      {sellStatus && (
        <div className="p-10 pt-2 max-w-5xl mx-auto">
          <div className="bg-green-950 rounded-xl text-white text-center gap-4 flex flex-col justify-center items-center p-10">
            <div className=" flex justify-center items-center text-center flex-col px-5">
              <h2 className="text-2xl mt-4 font-bold">Book Details</h2>
            </div>

            <div className="flex flex-row gap-2 w-full">
              <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Book Title"
                  className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                />
              </div>
              <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Publisher"
                  className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 w-full">
              <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Author"
                  className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                />
              </div>
              <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Language"
                  className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 w-full">
              <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Number of Pages"
                  className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                />
              </div>
              <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="ISBN"
                  className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 w-full">
              <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Image URL"
                  className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                />
              </div>
              <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Category"
                  className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex flex-col col-span-1 gap-4">
                <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                  <input
                    type="text"
                    placeholder="Price"
                    className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                  />
                </div>

                <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                  <input
                    type="text"
                    placeholder="Discount Price"
                    className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                  />
                </div>

                <div className="flex w-full bg-white rounded items-center py-2 px-4 col-span-1 ">
                  <textarea
                    class="placeholder-gray-600 w-full text-black border-none border-0 outline-none focus:outline-none focus:ring-0 resize-none"
                    placeholder="Type your text..."
                  ></textarea>
                </div>
              </div>
              <div className="col-span-1 w-full">
                <div className="flex justify-center items-center w-full my-10">
                  <label htmlFor="imageFile">
                    <input
                      type="file"
                      name="imageFile"
                      style={{ display: "none" }}
                    />
                    <FontAwesomeIcon
                      className="text-white text-9xl"
                      icon={faImage}
                    />
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg"
                    alt="book-cover"
                    className="border-3 border-white rounded"
                    style={{ width: "70px", height: "70px" }}
                  />
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    className="fa-2x shadow ms-3"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 w-full mt-8">
              <button className="bg-green-950 border border-white hover:bg-white rounded hover:text-green-950 text-white w-full p-2">
                <span className="font-bold me-2">Reset</span>
                <FontAwesomeIcon icon={faArrowsRotate} />
              </button>

              <button className="bg-white border border-white hover:bg-green-950 rounded text-green-950 hover:text-white w-full p-2">
                <span className="font-bold me-2">Submit</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
      )}

      {bookStatus && (
        <div className="p-10 my-20 shadow rounded">
          <div className="bg-gray-200 p-4 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div>
                <h1 className="text-2xl">Book Name :</h1>
                <h1>Author :</h1>
                <p>
                  Abstract/Discription : Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Assumenda dignissimos deleniti ad non
                  consectetur architecto quo modi tempore optio quisquam
                  asperiores, nostrum recusandae ducimus nesciunt quis nam
                  doloribus blanditiis eos?
                </p>
                <div className="flex">
                  <img
                    src="https://t4.ftcdn.net/jpg/09/74/65/39/360_F_974653955_Auq2ekCJ7Q6lGaTpmnYxAu4lRbsZblxT.png"
                    alt="Pending"
                    style={{ width: "70px", height: "70px" }}
                  />

                  <img
                    src="https://png.pngtree.com/png-clipart/20250507/original/pngtree-rounded-sold-out-label-with-stamp-effect-for-product-availability-of-png-image_20938218.png"
                    alt="sold"
                    style={{ width: "70px", height: "70px" }}
                  />

                  <img
                    src="https://toppng.com/uploads/preview/round-approved-blue-postage-stamp-11642625101msjywonr0e.png"
                    alt="Approved"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
              </div>

              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgFsPvKjCc9OhYq89CL6PjUbk7kLFQIHH7A&s"
                  alt=""
                  className="w-full"
                  style={{ height: "400px" }}
                />
                <div className="flex justify-end mt-4">
                  <button className="bg-red-500 rounded text-white p-3 hover:bg-white hover:border hover:border-red-500 hover:text-red-500 ms-3">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://i.pinimg.com/originals/39/70/fd/3970fd45f8264338153834f7ff18f4f0.gif"
              alt="noimage"
            />
            <p className="text-red-600 text-4xl">No Books Added Yet!!</p>
          </div>
        </div>
      )}

      {purchaseStatus && (
        <div className="p-10 my-20 shadow rounded">
          <div className="bg-gray-200 p-4 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div>
                <h1 className="text-2xl">Book Name :</h1>
                <h1>Author :</h1>
                <p>
                  Abstract/Discription : Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Assumenda dignissimos deleniti ad non
                  consectetur architecto quo modi tempore optio quisquam
                  asperiores, nostrum recusandae ducimus nesciunt quis nam
                  doloribus blanditiis eos?
                </p>
                <div className="flex">
                  <img
                    src="https://t4.ftcdn.net/jpg/09/74/65/39/360_F_974653955_Auq2ekCJ7Q6lGaTpmnYxAu4lRbsZblxT.png"
                    alt="Pending"
                    style={{ width: "70px", height: "70px" }}
                  />

                  <img
                    src="https://png.pngtree.com/png-clipart/20250507/original/pngtree-rounded-sold-out-label-with-stamp-effect-for-product-availability-of-png-image_20938218.png"
                    alt="sold"
                    style={{ width: "70px", height: "70px" }}
                  />

                  <img
                    src="https://toppng.com/uploads/preview/round-approved-blue-postage-stamp-11642625101msjywonr0e.png"
                    alt="Approved"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
              </div>

              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgFsPvKjCc9OhYq89CL6PjUbk7kLFQIHH7A&s"
                  alt=""
                  className="w-full"
                  style={{ height: "400px" }}
                />
                <div className="flex justify-end mt-4">
                  <button className="bg-red-500 rounded text-white p-3 hover:bg-white hover:border hover:border-red-500 hover:text-red-500 ms-3">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://i.pinimg.com/originals/39/70/fd/3970fd45f8264338153834f7ff18f4f0.gif"
              alt="noimage"
            />
            <p className="text-red-600 text-4xl">No Books Added Yet!!</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Profile;
