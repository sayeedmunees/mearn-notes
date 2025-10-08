import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  emptyCart,
  incrementQuantity,
  removeCartItem,
} from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cartReducer);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (userCart?.length > 0) {
      setCartTotal(
        userCart?.map((item) => item.totalPrice).reduce((a1, a2) => a1 + a2)
      );
    }
  });

  // Second Method - Checking outside slice

  // const handleDecrement = (product) => {
  //   if (product?.quantity > 1) {
  //     dispatch(decrementQuantity(product?.id));
  //   } else {
  //     dispatch(removeCartItem(product?.id));
  //   }
  // };

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
                    {userCart?.map((product, index) => (
                      <tr key={product?.id}>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td>
                          <img
                            width={"70px"}
                            height={"70px"}
                            src={product.thumbnail}
                            alt="no image"
                          />
                        </td>
                        <td>
                          <div className="flex">
                            <button
                              onClick={() =>
                                dispatch(decrementQuantity(product?.id))
                              }
                              className="font-bold"
                            >
                              -
                            </button>
                            <input
                              style={{ width: "40px" }}
                              type="text"
                              className="border p-1 rounded"
                              value={product.quantity}
                            />
                            <button
                              onClick={() =>
                                dispatch(incrementQuantity(product?.id))
                              }
                              className="font-bold"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${product.totalPrice}</td>
                        <td>
                          <button
                            onClick={() =>
                              dispatch(removeCartItem(product?.id))
                            }
                            className="text-red-600"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className=" float-right mt-5">
                  <button
                    onClick={() => dispatch(emptyCart())}
                    className="bg-red-600 rounded p-2 text-white"
                  >
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
                    Total amount:{" "}
                    <span className="text-red-600">${cartTotal}</span>
                  </h2>
                  <hr />
                  <button
                    onClick={() => dispatch(emptyCart())}
                    className="bg-green-600 rounded p-2 text-white w-full mt-4"
                  >
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
