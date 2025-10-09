import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector(
    (state) => state.productReducer
  );

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;
  const totalPages = Math.ceil(allProducts?.length / productPerPage);
  const currentPageLastIndex = currentPage * productPerPage;
  const currentPageFirstIndex = currentPageLastIndex - productPerPage;

  const visibleAllProducts = allProducts?.slice(
    currentPageFirstIndex,
    currentPageLastIndex
  );

  // console.log(allProducts, loading, errorMsg);

  useEffect(() => {
    dispatch(fetchproducts());
  }, []);

  const navigateNextPage = () => {
    if (currentPage != totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigatePrevPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: "100px" }} className="container px-4 mx-auto">
        {loading ? (
          <div className="flex justify-center items-center my-5 mx-auto">
            <img
              width={"70px"}
              height={"70px"}
              src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif"
              alt="Loading......"
            />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {allProducts.length > 0 ? (
              visibleAllProducts?.map((product) => (
                <div className="rounded border border-violet-600 p-2 shadow">
                  <img
                    width={"100%"}
                    height={"200px"}
                    src={product?.thumbnail}
                    alt="no image"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{product?.title}</h3>
                    <Link
                      to={`${product?.id}/view`}
                      className="bg-violet-500 rounded p-1 mt-3 text-white inline-block"
                    >
                      View more.....
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div>Products not found!!!</div>
            )}
          </div>
        )}
      </div>
      <div className="text-2xl text-center font-bold mt-20">
        <span onClick={navigatePrevPage} className="cursor-pointer">
          <i class="fa-solid fa-backward"></i>
        </span>
        <span>
          {currentPage} of {totalPages}
        </span>
        <span onClick={navigateNextPage} className="cursor-pointer">
          <i class="fa-solid fa-forward"></i>
        </span>
      </div>
    </>
  );
};

export default Home;
