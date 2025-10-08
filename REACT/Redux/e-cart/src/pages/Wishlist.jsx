import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cartReducer);
  const userWishlist = useSelector((state) => state.wishlistReducer);

  const handleCart = (product) => {
    dispatch(addToCart(product));
    const existingProduct = userCart?.find((item) => item?.id == id);
    if (existingProduct) {
      alert("Product Quantity Increased!!!!");
    } else {
      alert("Product added to Cart!!!!");
    }
    dispatch(removeItem(product?.id));
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="px-5">
        {userWishlist?.length > 0 ? (
          <>
            <h1 className="text-4xl font-bold text-center">My Wishlist</h1>
            <div className="grid grid-cols-4 gap-4">
              {userWishlist?.map((product) => (
                <div className="rounded border border-violet-600 p-2 shadow">
                  <img
                    width={"100%"}
                    height={"200px"}
                    src={product.thumbnail}
                    alt="no image"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{product?.title}</h3>
                    <div className="flex justify-evenly mt-3">
                      <button
                        className="text-xl"
                        onClick={() => dispatch(removeItem(product?.id))}
                      >
                        <i className="fa-solid fa-heart-circle-xmark text-red-500"></i>
                      </button>
                      <button
                        onClick={() => handleCart(product)}
                        className="text-xl"
                      >
                        <i className="fa-solid fa-cart-plus text-green-500"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-fit">
            <img
              className="w-sm"
              src="https://assets-v2.lottiefiles.com/a/76623d28-4e37-11ef-87f5-03e9496a5cb5/PR2PeUMHrd.gif"
              alt=""
            />
            <h1 className="text-3xl text-violet-600">Your wishlist is empty</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
