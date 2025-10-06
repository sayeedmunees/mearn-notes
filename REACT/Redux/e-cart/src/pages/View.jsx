import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const View = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allproducts = JSON.parse(sessionStorage.getItem("allProducts"));

      setProduct(allproducts.find((item) => item.id == id));
    }
  }, []);

  console.log(product);

  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <div className="px-5">
            <img width="350px" src={product.thumbnail} alt="no image" />
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
            <h3 className="font-bold">PID:{product.id}</h3>
            <h1 className="text-5x1 font-bold">{product.title}</h1>
            <h4 className="font-bold text-red-600 text-2x1">
              ${product.price}
            </h4>
            <h4>Brand:{product.brand}</h4>
            <h4>Category:{product.category}</h4>
            <p>
              <span className="font-medium">
                Description: {product.description}
              </span>
            </p>
            <h3 className="font-bold">Client Reviews</h3>
            {product?.reviews?.length > 0 ? (
              product.reviews?.map((item) => (
                <div
                  key={item?.date}
                  className="shadow rounded p-2 mb-2"
                >
                  <h5>
                    <span className="font-bold mr-2">{item?.reviewerName}</span>
                    <span>{item?.comment}</span>
                  </h5>
                  <p>
                    Rating: {item?.rating}
                    <i className="fa-solid fa-star text-yellow-400"></i>
                  </p>
                </div>
              ))
            ) : (
              <div>No Reviews Yet!!!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
