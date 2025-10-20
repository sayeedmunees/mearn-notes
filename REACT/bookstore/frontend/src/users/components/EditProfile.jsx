import {
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
        <div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity w-full h-full"
            onClick={() => setOffCanvasStatus(false)}
          ></div>

          {/* Off-canvas */}
          <div className="bg-white h-full w-[90%] max-w-sm z-50 fixed top-0 left-0 shadow-lg">
            <div className="bg-green-950 px-3 py-4 flex justify-between items-center text-white text-2xl">
              <h1>Edit User Profile</h1>
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer"
                onClick={() => setOffCanvasStatus(false)}
              />
            </div>

            <div className="flex flex-col items-center gap-3 p-4">
              <label
                htmlFor="imageFile"
                className="cursor-pointer flex flex-col items-center"
              >
                <input type="file" id="imageFile" className="hidden" />
                <img
                  src="https://png.pngtree.com/png-vector/20240607/ourmid/pngtree-man-silhouette-profile-circle-logo-vector-png-image_6992202.png"
                  alt="profile pic"
                  className="w-24 h-24 rounded-full border"
                />
                <FontAwesomeIcon icon={faPenNib} />
              </label>

              <input
                type="text"
                placeholder="Username"
                className="p-2 border rounded placeholder-gray-400 w-full"
              />

              <input
                type="password"
                placeholder="Password"
                className="p-2 border rounded placeholder-gray-400 w-full"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="p-2 border rounded placeholder-gray-400 w-full"
              />

              <textarea
                rows={5}
                placeholder="Bio"
                className="p-2 border rounded placeholder-gray-400 w-full"
              ></textarea>

              <div className="flex justify-end w-full">
                <button className=" text-red-600 tracking-wider p-3 hover:cursor-pointer hover:underline hover:font-semibold">
                  Reset
                </button>

                <button className="bg-green-950 rounded text-white p-3 hover:bg-white border border-green-950 hover:text-green-950 ms-3">
                  Submit
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
