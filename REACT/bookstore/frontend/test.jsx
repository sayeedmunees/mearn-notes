import {
  faPenNib,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { updateUserProfileApi } from "../../services/allApi";
import { toast, ToastContainer } from "react-toastify";
import { serverURL } from "../../services/serverURL";
import { userProfileUpdateStatusContext } from "../../context/ContextShare";

const EditProfile = () => {
  const [offCanvasStatus, setOffCanvasStatus] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    bio: "",
    profile: "",
  });
  const [existingImage, setExistingImage] = useState("");
  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");

  console.log(userDetails);

  // const [setUserProfileUpdateStatus] = useContext(userProfileUpdateStatusContext)
  const { setUserProfileUpdateStatus } = useContext(
    userProfileUpdateStatusContext
  );

  const handleUploadImage = (e) => {
    setUserDetails({ ...userDetails, profile: e.target.files[0] });
    const url = URL.createObjectURL(e.target.files[0]);
    setPreview(url);
  };

  const handleReset = () => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    setUserDetails({
      username: user.username,
      password: user.password,
      cpassword: user.cpassword,
      bio: user.bio,
    });
    setExistingImage(user.profile);
    setPreview("");
  };

  const handleSubmit = async () => {
    const { username, password, cpassword, bio, profile } = userDetails;
    console.log(username, password, cpassword, bio, profile);

    if (!username || !password || !cpassword || !bio) {
      toast.info("please add complete details");
    } else {
      if (password != cpassword) {
        toast.warning("Password Must Match ");
      } else {
        if (preview) {
          const reqbody = new FormData();

          for (let key in userDetails) {
            console.log(key);

            reqbody.append(key, userDetails[key]);
          }

          const reqHeader = {
            Authorization: `Bearer ${token}`,
          };

          const result = await updateUserProfileApi(reqbody, reqHeader);
          console.log(result);
          if (result.status == 200) {
            toast.success("Profile Updated SuccessFully!!");
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
            handleReset();
            setOffCanvasStatus(false);
            setUserProfileUpdateStatus(result.data);
          } else {
            toast.error("Something Went Wrong!!!");
            handleReset();
          }
        } else {
          const reqHeader = {
            Authorization: `Bearer ${token}`,
          };

          const result = await updateUserProfileApi(
            { username, password, profile: existingImage, bio },
            reqHeader
          );
          console.log(result);
          if (result.status == 200) {
            toast.success("Profile Updated SuccessFully!!");
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
            handleReset();
            setOffCanvasStatus(false);
            setUserProfileUpdateStatus(result.data);
          } else {
            toast.error("Something Went Wrong!!!");
            handleReset();
          }
        }
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      setToken(token);
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      setUserDetails({
        username: user.username,
        password: user.password,
        cpassword: user.cpassword,
        bio: user.bio,
      });
      setExistingImage(user.profile);
    }
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => setOffCanvasStatus(true)}
          className="text-blue-500 border border-blue-500 rounded px-4 py-2 hover:bg-blue-500 hover:text-white flex items-center gap-2"
        >
          Edit <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>

      {offCanvasStatus && (
        <div>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setOffCanvasStatus(false)}
          ></div>

          {/* Offcanvas Panel */}
          <div className="fixed top-0 left-0 h-full w-80 sm:w-96 bg-white shadow-xl z-50 animate-slideIn">
            {/* Header */}
            <div className="bg-gray-900 px-4 py-4 flex justify-between items-center text-white">
              <h1 className="text-lg font-semibold">Edit User Profile</h1>
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer text-xl hover:text-red-400"
                onClick={() => setOffCanvasStatus(false)}
              />
            </div>

            {/* Body */}
            <div className="flex flex-col justify-start items-center p-6 space-y-5">
              {/* Profile Image Upload */}
              <label htmlFor="imageFile" className="relative cursor-pointer">
                <input
                  id="imageFile"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleUploadImage(e)}
                />

                {existingImage == "" ? (
                  <img
                    src={
                      preview
                        ? preview
                        : "https://img.icons8.com/fluent/1200/user-male-circle.jpg"
                    }
                    alt="Profile"
                    className="w-36 h-36 rounded-full object-cover border shadow"
                  />
                ) : existingImage?.startsWith(
                    "https://lh3.googleusercontent.com/"
                  ) ? (
                  <img
                    src={preview ? preview : existingImage}
                    alt="Profile"
                    className="w-36 h-36 rounded-full object-cover border shadow"
                  />
                ) : (
                  <img
                    src={
                      preview ? preview : `${serverURL}/upload/${existingImage}`
                    }
                    alt="Profile"
                    className="w-36 h-36 rounded-full object-cover border shadow"
                  />
                )}

                <div className="absolute bottom-2 right-3 bg-white shadow-md p-2 rounded-full">
                  <FontAwesomeIcon icon={faPenNib} className="text-blue-600" />
                </div>
              </label>

              {/* Username */}
              <input
                value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
                type="text"
                placeholder="Username"
                className="p-2 bg-gray-100 border rounded w-full"
              />

              {/* Password */}
              <input
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                type="text"
                placeholder="Password"
                className="p-2 bg-gray-100 border rounded w-full"
              />

              {/* Confirm Password */}
              <input
                value={userDetails.cpassword}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, cpassword: e.target.value })
                }
                type="text"
                placeholder="Confirm Password"
                className="p-2 bg-gray-100 border rounded w-full"
              />

              {/* Bio */}
              <textarea
                rows={4}
                placeholder="Bio"
                className="p-2 bg-gray-100 border rounded w-full"
              ></textarea>

              {/* Buttons */}
              <div className="flex justify-end w-full mt-3 gap-3">
                <button
                  onClick={handleReset}
                  className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-white border border-transparent hover:border-amber-500 hover:text-amber-500 transition"
                >
                  Reset
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-white border border-transparent hover:border-green-600 hover:text-green-600 transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );
};

export default EditProfile;
