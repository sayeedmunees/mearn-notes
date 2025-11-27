import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../components/Footer";
import {
  faArrowsRotate,
  faPaperPlane,
  faPencil,
  faPenNib,
  faPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import { updateProfileAPI } from "../../services/allAPI";

const AdminSettings = () => {
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    profile: "",
  });

  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");

  console.log(adminDetails);

  const handleAddFile = (e) => {
    // console.log(e.target.files[0]);
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] });

    if (e.target.files[0] != "") {
      const url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleReset = () => {
    setAdminDetails({
      username: "",
      password: "",
      cpassword: "",
      profile: "",
    });

    setPreview("");
  };

  const handleAdd = async () => {
    const { username, password, cpassword, profile } = adminDetails;
    console.log(username, password, cpassword, profile);

    if (!username || !password || !cpassword || !profile) {
      toast.info("Please add complete data");
    } else {
      const reqBody = new FormData();

      for (let key in adminDetails) {
        reqBody.append(key, adminDetails[key]);
      }

      const reqHeader = { Authorization: `Bearer ${token}` };

      const result = await updateProfileAPI(reqBody, reqHeader);
      console.log(result);
    }
  };

  console.log(preview);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      setToken(token);
    }
  }, []);

  return (
    <>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_4fr]">
        <div className="bg-green-950 rounded-tr-2xl rounded-br-2xl mb-1 -mt-1 py-4 flex flex-col items-center min-h-[55vh]">
          <AdminSidebar />
        </div>
        <div className="flex flex-col w-full items-center mb-4">
          <div>
            <h2 className="text-center font-bold my-4 text-2xl">Settings</h2>
          </div>
          <div className="flex gap-4 px-6 py-3">
            <div className="flex-1 p-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quam aperiam fugit placeat voluptatem esse qui, nam assumenda,
                vel odio libero illo sed hic natus itaque ipsa vitae iste. Eum?
              </p>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                architecto? Ipsa voluptas veritatis aut ullam. Minima
                dignissimos saepe magnam nobis unde obcaecati assumenda, rem
                excepturi repudiandae rerum inventore aliquam reiciendis! Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Alias
                doloremque facilis vitae, commodi recusandae magni hic
                repudiandae dolore ut facere, incidunt quis? Aliquam ab iste ea
                dolor dolore animi vel.
              </p>
            </div>
            <div className="flex-1 p-2">
              <div className="flex flex-col items-center gap-3 px-6 py-8 bg-green-950  rounded-2xl border shadow-xl">
                <label
                  htmlFor="imageFile"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <input
                    type="file"
                    id="imageFile"
                    className="hidden"
                    onChange={(e) => handleAddFile(e)}
                  />
                  <img
                    src={
                      preview
                        ? preview
                        : "https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
                    }
                    alt="no image"
                    style={{ width: "150px", height: "150px" }}
                    className="rounded-full"
                  />
                  <FontAwesomeIcon
                    className="-mt-4 -mr-35 text-white"
                    icon={faPencil}
                  />
                </label>

                <input
                  type="text"
                  placeholder="Username"
                  value={adminDetails.username}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      username: e.target.value,
                    })
                  }
                  className="p-2 border rounded bg-white placeholder:text-gray-600  w-full mt-4"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={adminDetails.password}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      password: e.target.value,
                    })
                  }
                  className="p-2 border rounded bg-white placeholder:text-gray-600 w-full"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={adminDetails.cpassword}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      cpassword: e.target.value,
                    })
                  }
                  className="p-2 border rounded bg-white placeholder:text-gray-600 w-full"
                />

                <div className="flex flex-col md:flex-row gap-2 w-full mt-8">
                  <button
                    className="bg-green-950 border border-white hover:bg-white rounded hover:text-green-950 text-white w-full p-2"
                    type="button"
                    onClick={handleReset}
                  >
                    <span className="font-bold me-2">Reset</span>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>

                  <button
                    className="bg-white border border-white hover:bg-green-950 rounded text-green-950 hover:text-white w-full p-2"
                    type="button"
                    onClick={handleAdd}
                  >
                    <span className="font-bold me-2">Update</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />

      <Footer />
    </>
  );
};

export default AdminSettings;
