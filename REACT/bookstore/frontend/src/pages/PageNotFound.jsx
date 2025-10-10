import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="md:grid grid-cols-3">
          <div></div>
          <div>
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif"
              alt="Oops.."
            />
            <p className="text-center">Oh No!</p>
            <h2 className="md:text-5xl text-2xl text-center">
              Looks like you're lost
            </h2>
            <h5 className="text-center">
              The page you're looking for is not available
            </h5>
            <Link className="text-center" to={"/"}>
              <button className="mt-4 px-4 text-center py-3 bg-blue-800 text-white rounded hover:border hover:border-blue-800 hover:bg-white hover:text-blue-800">
                Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
