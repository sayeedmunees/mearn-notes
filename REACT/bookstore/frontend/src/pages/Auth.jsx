import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleUser,
  faEyeSlash,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../users/components/Header";
import Footer from "../components/Footer";

const Auth = ({ register }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(userDetails);
  
  const handleRegister=()=>{
    const {username, email, password} = userDetails
    if (!username || !email || !password){
      alert("Please fill the form completely")
    }else{
      alert("Proceed")
    }
  }

  return (
    <>
      <Header />
      <div id="auth" className="flex justify-center items-center w-full">
        {/* Register */}
        {/* <div className="bg-green-950 rounded-xl text-white text-center gap-4 flex flex-col justify-center items-center w-xl p-10 ">
          <div className=" flex justify-center items-center text-center flex-col px-5">
            <FontAwesomeIcon className="text-9xl" icon={faCircleUser} />
            <h2 className="text-2xl mt-4 font-bold">Register</h2>
          </div>
  
          <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
            <input
              type="text"
              placeholder="Username"
              className=" placeholder-gray-600 w-full text-black border-none"
            />
          </div>
  
          <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
            <input
              type="text"
              placeholder="Email"
              className=" placeholder-gray-600 w-full text-black border-none"
            />
          </div>
  
          <div className="w-full">
            <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
              <input
                type="text"
                placeholder="Password"
                className=" placeholder-gray-600 w-full text-black border-none"
              />
              <FontAwesomeIcon className="text-green-950" icon={faEyeSlash} />
            </div>
            <p className="text-base text-start">
              *Never share password with others.
            </p>
          </div>
  
          <button className="bg-white border border-white hover:bg-green-950 rounded hover:text-white text-green-950 px-4 py-2">
            Register
          </button>
          <div>
            <p className="text-base">
              Are you already a user? <a href="#" className="underline">Login</a>
            </p>
          </div>
        </div> */}

        {/* Login */}
        <div className="bg-green-950 rounded-xl text-white text-center gap-4 flex flex-col justify-center items-center w-xl p-10 mx-2">
          <div className=" flex justify-center items-center text-center flex-col px-5">
            <FontAwesomeIcon className="text-9xl" icon={faCircleUser} />
            {register ? (
              <h2 className="text-2xl mt-4 font-bold">Register</h2>
            ) : (
              <h2 className="text-2xl mt-4 font-bold">Login</h2>
            )}
          </div>

          {register && (
            <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
              <input
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
                type="text"
                placeholder="Username"
                className=" placeholder-gray-600 w-full text-black border-none"
              />
            </div>
          )}

          <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
            <input
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              type="text"
              placeholder="Email"
              className=" placeholder-gray-600 w-full text-black border-none"
            />
          </div>

          <div className="w-full">
            <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
              <input
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                type="password"
                placeholder="Password"
                className=" placeholder-gray-600 text-black border-none w-full"
              />
              <FontAwesomeIcon className="text-green-950" icon={faEyeSlash} />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <p className="text-sm md:text-base text-start">
                *Never share password with others.
              </p>
              {!register && (
                <a href="#" className="underline text-start">
                  Forget Password
                </a>
              )}
            </div>
          </div>

          {register ? (
            <button onClick={handleRegister} className="bg-white border border-white hover:bg-green-950 rounded hover:text-white text-green-950 px-6 py-2 font-bold">
              Register
            </button>
          ) : (
            <button className="bg-white border border-white hover:bg-green-950 rounded hover:text-white text-green-950 px-6 py-2 font-bold">
              Login
            </button>
          )}

          {!register && (
            <>
              <div>
                <p className="text-xl">
                  ------------------ or ------------------
                </p>
              </div>
              <button className="bg-white border border-white hover:bg-green-950 rounded hover:text-white text-green-950 w-full px-4 py-2 ">
                <span className="font-semibold">Sign in with Google</span>
                <FontAwesomeIcon className="ps-2" icon={faGoogle} />
              </button>
            </>
          )}
          <div>
            {register ? (
              <p className="text-base">
                Are you already a user?{" "}
                <Link to={"/login"} className="underline">
                  Login
                </Link>
              </p>
            ) : (
              <p className="text-base">
                Are you a new user?{" "}
                <Link to={"/register"} className="underline">
                  Register
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
