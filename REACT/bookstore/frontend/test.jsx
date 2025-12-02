import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import EditProfile from "../components/EditProfile";
import { toast, ToastContainer } from "react-toastify";
import { getAllUserBooksApi, uploadBookApi } from "../../services/allApi";
import { userProfileUpdateStatusContext } from "../../context/ContextShare";
import { serverURL } from "../../services/serverURL";

const Profile = () => {
  const [sellStatus, setSellStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    noofpages: "",
    imageurl: "",
    price: "",
    dprice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    uploadImages: [],
  });
  console.log(bookDetails);
  const [preview, setPreview] = useState("");
  const [previewList, setPreviewList] = useState([]);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState("");
  const [userBooks, setUserBooks] = useState([]);
  const [userBroughtBooks, setUserBroughtBooks] = useState([]);

  const { setUserProfileUpdateStatus } = useContext(
    userProfileUpdateStatusContext
  );

  const handleUploadImg = (e) => {
    const fileArray = bookDetails.uploadImages;
    // console.log(e.target.files[0]);
    fileArray.push(e.target.files[0]);
    setBookDetails({ ...bookDetails, uploadImages: fileArray });

    const url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
    setPreview(url);

    const newArray = previewList;
    newArray.push(url);
    setPreviewList(newArray);
  };

  const handleReset = () => {
    setBookDetails({
      title: "",
      author: "",
      noofpages: "",
      imageurl: "",
      price: "",
      dprice: "",
      abstract: "",
      publisher: "",
      language: "",
      isbn: "",
      category: "",
      uploadImages: [],
    });
    setPreview("");
    setPreviewList("");
  };

  const handleSubmit = async () => {
    const {
      title,
      author,
      noofpages,
      imageurl,
      price,
      dprice,
      abstract,
      publisher,
      language,
      isbn,
      category,
      uploadImages,
    } = bookDetails;
    if (
      !title ||
      !author ||
      !noofpages ||
      !imageurl ||
      !price ||
      !dprice ||
      !abstract ||
      !publisher ||
      !language ||
      !isbn ||
      !category ||
      uploadImages.length == 0
    ) {
      toast.info("please fill the form completly!!");
    } else {
      const reqHeader = {
        Authorization: `Bearer ${token} `,
      };
      const reqBody = new FormData();

      for (let key in bookDetails) {
        if (key != "uploadImages") {
          reqBody.append(key, bookDetails[key]);
        } else {
          bookDetails.uploadImages.forEach((item) => {
            reqBody.append("uploadImages", item);
          });
        }
      }
      const result = await uploadBookApi(reqBody, reqHeader);
      console.log(result);

      if (result.status == 401) {
        toast.warning(result.response.data);
        handleReset();
      } else if (result.status == 200) {
        toast.success("Book added successfully");
        handleReset();
      } else {
        toast.error("something went wrong");
        handleReset();
      }
    }
  };

  const getAllUserBooks = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await getAllUserBooksApi(reqHeader);
    console.log(result);
    if (result.status == 200) {
      setUserBooks(result.data);
    }
  };

  const getAllUserBroughtBooks = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const result = await getAllUserBroughtBooksApi(reqHeader);
    console.log(result);
    if (result.status == 200) {
      setUserBroughtBooks(result.data);
    }
  };
  console.log(userBooks);
  console.log(userBroughtBooks);

  useEffect(() => {
    if (bookStatus == true) {
      getAllUserBooks();
    } else if (purchaseStatus == true) {
      getAllUserBroughtBooks();
    } else {
      console.log("Something went wrong");
    }
  }, [bookStatus, purchaseStatus]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      setToken(token);
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      setUsername(user.username);
      setProfile(user.profile);
      // setUserDetails({ username: user.username, password: user.password, cpassword: user.cpassword, bio: user.bio })
      // setExistingImage(user.profile)
    }
  }, []);

  return (
    <>
      <Header />

      {/* Profile Banner */}
      <div className="relative">
        <div className="h-48 bg-gray-500"></div>

        <div className="absolute -top-32 left-20 w-56 h-56 bg-white p-4 rounded-full flex justify-center items-center shadow-lg">
          <img
            src={
              profile == ""
                ? "https://img.icons8.com/fluent/1200/user-male-circle.jpg"
                : profile.startsWith()
                ? profile
                : `${serverURL}/upload/${profile}`
            }
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="flex justify-between items-center px-20 mt-36">
        <p className="flex items-center text-3xl font-semibold">
          {username}
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-blue-500 ms-3"
          />
        </p>
        <EditProfile />
      </div>

      <p className="md:px-20 px-5 my-5 text-justify text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odit
        repellendus illo modi! Enim, quas odit ipsa nobis consectetur, libero
        blanditiis sint voluptatem nemo molestiae quisquam? Eum aspernatur
        excepturi temporibus.
      </p>

      {/* Tabs */}
      <div className="md:px-40">
        <div className="flex justify-center items-center my-5 border-b border-gray-300">
          {["Sell Book", "Sold History", "Purchase History"].map(
            (tab, index) => {
              const isActive =
                (index === 0 && sellStatus) ||
                (index === 1 && bookStatus) ||
                (index === 2 && purchaseStatus);

              return (
                <p
                  key={tab}
                  onClick={() => {
                    setSellStatus(index === 0);
                    setBookStatus(index === 1);
                    setPurchaseStatus(index === 2);
                  }}
                  className={`p-4 cursor-pointer ${
                    isActive
                      ? "text-blue-800 border-t border-r border-gray-200 rounded-t"
                      : "text-black"
                  }`}
                >
                  {tab}
                </p>
              );
            }
          )}
        </div>

        {/* Sell Book Form */}
        {sellStatus && (
          <div className="bg-gray-100 p-10 mt-10 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Book Details
            </h2>

            <div className="md:grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-3">
                {[
                  { key: "title", placeholder: "Title" },
                  { key: "author", placeholder: "Author" },
                  { key: "noofpages", placeholder: "Number of Pages" },
                  { key: "imageurl", placeholder: "Image URL" },
                  { key: "price", placeholder: "Price" },
                  { key: "dprice", placeholder: "Discount Price" },
                ].map((field) => (
                  <input
                    key={field.key}
                    value={bookDetails[field.key]}
                    onChange={(e) =>
                      setBookDetails({
                        ...bookDetails,
                        [field.key]: e.target.value,
                      })
                    }
                    placeholder={field.placeholder}
                    className="w-full p-2 rounded bg-white placeholder-gray-400"
                  />
                ))}

                <textarea
                  rows={5}
                  value={bookDetails.abstract}
                  onChange={(e) =>
                    setBookDetails({ ...bookDetails, abstract: e.target.value })
                  }
                  placeholder="Abstract"
                  className="w-full p-2 rounded bg-white placeholder-gray-400"
                />
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {["publisher", "language", "isbn", "category"].map((field) => (
                  <input
                    key={field}
                    value={bookDetails[field]}
                    onChange={(e) =>
                      setBookDetails({
                        ...bookDetails,
                        [field]: e.target.value,
                      })
                    }
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full p-2 rounded bg-white placeholder-gray-400"
                  />
                ))}

                {/* Image Upload */}
                <div className="flex flex-col items-center mt-6">
                  {!preview ? (
                    <label htmlFor="imageFile" className="cursor-pointer">
                      <input
                        id="imageFile"
                        type="file"
                        onChange={handleUploadImg}
                        style={{ display: "none" }}
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7HhyqJROfFo776omzUDCF6WW1AgpcgoizQ&s"
                        alt="Upload"
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </label>
                  ) : (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  )}

                  {preview && (
                    <div className="flex mt-3">
                      {previewList?.map((item) => (
                        <img
                          key={item}
                          src={item}
                          alt="Preview"
                          className="w-16 h-16 me-1 object-cover rounded"
                        />
                      ))}
                      <label htmlFor="imageFile" className="cursor-pointer">
                        <input
                          id="imageFile"
                          type="file"
                          onChange={handleUploadImg}
                          style={{ display: "none" }}
                        />
                        <FontAwesomeIcon
                          icon={faSquarePlus}
                          className="fa-2x ms-3 text-gray-700"
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Form Buttons */}
            <div className="flex justify-end mt-6 gap-2">
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-amber-500 text-black rounded hover:bg-white hover:border hover:border-amber-500 hover:text-amber-500"
              >
                Reset
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-white hover:border hover:border-green-500 hover:text-green-500"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {/* Sold / Purchase History Card */}
        {bookStatus && (
          <div className="p-10 mt-10 shadow rounded-lg space-y-6">
            <div className="bg-gray-200 p-4 rounded">
              <div className="md:grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h2 className="text-2xl">Book Name</h2>
                  <h3>Author</h3>
                  <p className="text-blue-600">$ Price</p>
                  <p className="text-gray-700">
                    Abstract/Description: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Minima nobis, commodi voluptatem debitis
                    consequatur.
                  </p>
                  <div className="flex mt-4 gap-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlag_31KJZKjPCyXpldwr3TGrBf1uFQmDLA&s"
                      alt="pending"
                      className="w-16 h-16"
                    />
                    <img
                      src="https://www.citypng.com/public/uploads/preview/hd-sold-red-stamp-word-png-701751694685373mjc3xeasfb.png"
                      alt="sold"
                      className="w-16 h-16"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RSSIGAEEQgzbWc5KFcDiTKpQohVozIybrg&s"
                      alt="approved"
                      className="w-16 h-16"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex flex-col justify-between">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_E4ltIKdFUwQAjHkJQBA06DBLTMX33Lpkg&s"
                    alt="Book"
                    className="w-full h-64 object-cover rounded"
                  />
                  <button className="mt-4 px-3 py-2 bg-red-600 text-white rounded hover:bg-gray-200 hover:text-red-800 hover:border hover:border-red-800">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif"
                alt="No books"
                className="w-48 h-48"
              />
              <p className="text-red-600 text-2xl mt-4">No Books Added Yet</p>
            </div>
          </div>
        )}

        {purchaseStatus && (
          <div className="p-10 my-20 shadow rounded">
            <div className="bg-gray-200 p-4 rounded">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                  <h1 className="text-2xl">Book Name</h1>
                  <h1>Author</h1>
                  <h3 className="text-blue-600">$ Price</h3>
                  <p>
                    Abstract/description: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptas officiis nemo fugit, nesciunt
                    dignissimos ratione amet. Molestias debitis iure maiores
                    sint inventore recusandae, vel eum beatae accusantium minus.
                    Sequi, vel? Officia inventore mollitia aperiam. Quos rerum
                    in itaque, quisquam esse vel, inventore harum quibusdam
                    accusamus ea, dolorem ducimus doloribus sit exercitationem
                    nobis officia quas hic sed? Unde eum mollitia in?
                  </p>

                  <div className="flex mt-5">
                    <img
                      src="https://cdn.create.vista.com/api/media/small/43546685/stock-photo-pending-rubber-stamp"
                      alt=""
                      style={{ width: "70px", height: "70px" }}
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDf07xmcclZ9zPzPGge6D3mErkD2Gk3jMjbw&s"
                      alt=""
                      style={{ width: "70px", height: "70px" }}
                    />

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglrXRJKf4NkoTVokEi2USm6Sv0Mm-dhNl9Q&s"
                      alt=""
                      style={{ width: "70px", height: "70px" }}
                    />
                  </div>
                </div>

                <div>
                  <img
                    src="https://i.pinimg.com/736x/d4/bf/49/d4bf49a51d944d01d40a1c8d5432da39.jpg"
                    alt=""
                    style={{ height: "300px" }}
                    className="w-full"
                  />
                  <div className="flex justify-end mt-4 ">
                    <button className="p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col">
              <img
                src="https://cdn.pixabay.com/animation/2022/12/05/05/08/05-08-32-681_512.gif"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
              <p className=" text-red-600 text-2xl">No Books Added yet</p>
            </div>
          </div>
        )}
      </div>

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
      <Footer />
    </>
  );
};

export default Profile;
