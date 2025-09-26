import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="px-5">
        <>
          <h1 className="text-4x1 font-boldtext-red-600 text-center">
            My Wishlist
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <div className="rounded border border-violet-600 p-2 shadow">
              <img
                width={"100%"}
                height={"200px"}
                src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
                alt="no image"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">title</h3>
                <Link
                  to={"/id/view"}
                  className="bg-violet-500 rounded p-2 mt-3 text-white inline-block"
                >
                  View more.....
                </Link>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Wishlist;
