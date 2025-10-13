import React from "react";
import { Link } from "react-router-dom";

const Preloader = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="md:grid grid-cols-3">
          <div></div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://i.pinimg.com/originals/e1/59/25/e15925c931a81678a3c2e0c0a40db781.gif"
              alt="Loading"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
