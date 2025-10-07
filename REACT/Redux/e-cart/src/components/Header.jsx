import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ insideHome }) => {
  const userWishlist = useSelector((state) => state.wishlistReducer);

  return (
    <>
      <nav className=" flex bg-violet-600 fixed w-full p-5 text-white">
        <Link className="text-2x1 font-bold" to={"/"}>
          <i className="fa-solid text-2xl fa-truck-fast me-1"></i>{" "}
          <span className="text-2xl">Daily Cart</span>
        </Link>
        <ul className="flex-1 text-right">
          {insideHome && (
            <li className="list-none inline-block px-5 ">
              <input
                type="text"
                className="rounded p-2 border bg-white text-violet-600"
                placeholder="Search Products Here!"
              />
            </li>
          )}
          <Link to={"/wishlist"}>
            <li className="list-none inline-block px-5">
              <i className="fa-solid fa-heart text-red-600"></i> Wishlist{" "}
              <span className="bg-white text-violet-600 rounded-full p-1 mx-2">
                {userWishlist?.length}
              </span>
            </li>
          </Link>

          <Link to={"/cart"}>
            <li className="list-none inline-block px-5">
              <i className="fa-solid fa-cart-plus text-green-600"></i>Cart{" "}
              <span className="bg-white text-violet-600 rounded-full p-1 mx-2">
                10
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
