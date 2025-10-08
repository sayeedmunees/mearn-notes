import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const userCart = useSelector((state) => state.cartReducer);

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="px-5">
        {userCart?.length > 0 ? (
          <>
            <h1 className="text-5x1 font-bold text-blue-600">Cart Summary</h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="col-span-2 border rounded p-5 shadow">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <td className="font-semibold">#</td>
                      <td className="font-semibold">Name</td>
                      <td className="font-semibold">Image</td>
                      <td className="font-semibold">Quantity</td>
                      <td className="font-semibold">Price</td>
                      <td className="font-semibold">...</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Product Name</td>
                      <td>
                        <img
                          width={"70px"}
                          height={"70px"}
                          src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
                          alt="no image"
                        />
                      </td>
                      <td>
                        <div className="flex">
                          <button className="font-bold">-</button>
                          <input
                            style={{ width: "40px" }}
                            type="text"
                            className="border p-1 rounded"
                          />
                          <button className="font-bold">+</button>
                        </div>
                      </td>
                      <td>$234</td>
                      <td>
                        <button className="text-red-600">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className=" float-right mt-5">
                  <button className="bg-red-600 rounded p-2 text-white">
                    Empty Cart
                  </button>
                  <Link
                    to={"/"}
                    className="bg-blue-600 ms-3 rounded p-2 text-white"
                  >
                    Shop More
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className="border rounded shadow p-5">
                  <h2 className="text-2x1 font-bold">
                    Total amount: <span className="text-red-600">$345</span>
                  </h2>
                  <hr />
                  <button className="bg-green-600 rounded p-2 text-white w-full mt-4">
                    EMPTY CART
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-fit">
            <img
              className="w-sm"
              src="https://assets-v2.lottiefiles.com/a/76623d28-4e37-11ef-87f5-03e9496a5cb5/PR2PeUMHrd.gif"
              alt=""
            />
            <h1 className="text-3xl text-violet-600">Your Cart is empty</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
