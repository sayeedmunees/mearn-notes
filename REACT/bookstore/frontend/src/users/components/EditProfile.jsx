import {
  faArrowsRotate,
  faPaperPlane,
  faPencil,
  faPenNib,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const EditProfile = () => {
  const [offCanvasStatus, setOffCanvasStatus] = useState(false);

  return (
    <>
      <div>
        <button
          className="text-white border border-green-950 bg-green-950 rounded p-3 hover:bg-white hover:text-green-950"
          onClick={() => setOffCanvasStatus(true)}
        >
          <FontAwesomeIcon icon={faPenToSquare} /> Edit
        </button>
      </div>

      {offCanvasStatus && (
        <div c>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity w-full h-full"
            onClick={() => setOffCanvasStatus(false)}
          ></div>

          {/* Off-canvas */}
          <div className="bg-green-950 h-full w-[90%] max-w-sm z-50 fixed top-0 left-0 shadow-lg">
            <div className="bg-green-950 px-3 py-4 flex justify-between items-center text-white text-2xl">
              <h1>Edit User Profile</h1>
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer"
                onClick={() => setOffCanvasStatus(false)}
              />
            </div>

            <div className="flex flex-col  items-center gap-3 p-4">
              <label
                htmlFor="imageFile"
                className="cursor-pointer flex flex-col items-center"
              >
                <input type="file" id="imageFile" className="hidden" />
                <img
                  src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
                  alt="profile pic"
                  className="w-24 h-24 rounded-full border"
                />
                <FontAwesomeIcon
                  className="-mt-4 -mr-25 text-xl text-white"
                  icon={faPencil}
                />
              </label>

              <input
                type="text"
                placeholder="Username"
                className="p-2 mt-3 border rounded bg-white placeholder-gray-700 w-full"
              />

              <input
                type="password"
                placeholder="Password"
                className="p-2 border rounded bg-white placeholder-gray-700 w-full"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="p-2 border rounded bg-white placeholder-gray-700 w-full"
              />

              <textarea
                rows={5}
                placeholder="Bio"
                className="p-2 border rounded bg-white placeholder-gray-700 w-full"
              ></textarea>

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
        </div>
      )}
    </>
  );
};

export default EditProfile;
