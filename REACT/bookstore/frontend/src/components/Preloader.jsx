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
              src="https://media.tenor.com/_m9BeUagaMkAAAAi/writing-hand-joypixels.gif"
              alt="Loading"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
