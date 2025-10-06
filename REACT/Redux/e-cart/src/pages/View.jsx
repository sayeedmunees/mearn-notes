import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const View = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <div className="px-5">
            <img
              width="350px"
              src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
              alt="no image"
            />
            <div className="flex justify-between items-start mt-5">
              <button className="bg-blue-600 rounded text-white p-2">
                ADD TO WISHLIST
              </button>
              <button className="bg-green-600 rounded text-white p-2">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="px-5">
            <h3 className="font-bold">PID:id</h3>
            <h1 className="text-5x1 font-bold">Title</h1>
            <h4 className="font-bold text-red-600 text-2x1">$230</h4>
            <h4>Brand:</h4>
            <h4>Category: </h4>
            <p>
              <span className="font-medium">
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Labore necessitatibus itaque tempora quia repudiandae.
                Ipsa aliquam doloremque recusandae ea ex sit ab necessitatibus
                illo. Enim, adipisci. Quia suscipit inventore voluptates.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
