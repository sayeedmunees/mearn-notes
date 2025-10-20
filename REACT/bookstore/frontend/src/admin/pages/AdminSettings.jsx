import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../components/Footer";
import { faPencil, faPenNib, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminSettings = () => {
  return (
    <>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_4fr]">
        <div className="bg-green-100 flex flex-col items-center min-h-[55vh]">
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
              <div className="flex flex-col items-center gap-3 p-4 bg-green-100  rounded-2xl border border-green-800 shadow-xl">
                <label
                  htmlFor="imageFile"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <input type="file" id="imageFile" className="hidden" />
                  <img
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt="no image"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <FontAwesomeIcon className="-mt-7 -mr-30" icon={faPencil} />
                </label>

                <input
                  type="text"
                  placeholder="Username"
                  className="p-2 border rounded bg-white placeholder-gray-400 w-full mt-4"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 border rounded bg-white placeholder-gray-400 w-full"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="p-2 border rounded bg-white placeholder-gray-400 w-full"
                />

                <div className="flex justify-end w-full">
                  <button className=" text-red-600 tracking-wider p-3 hover:cursor-pointer hover:underline font-semibold">
                    Reset
                  </button>

                  <button className="bg-green-950 rounded text-white p-3 hover:bg-green-100 font-bold border border-green-950 hover:text-green-950 ms-3">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminSettings;
