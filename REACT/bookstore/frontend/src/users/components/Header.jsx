import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <nav className="mx-auto">
        <div className="grid grid-cols-3 w-full h-20 px-8">
          <div className="col-span-1 flex justify-start items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAhTXETNIvE8PsF6Uc6bElMUo-GmSmCx01Q&s"
              alt=""
              className="h-12 w-auto md:h-14"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-start md:justify-center items-center">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl uppercase">
              Book Store
            </h1>
          </div>
          <div className="hidden md:inline-flex items-center gap-2 col-span-1 justify-end ">
            <FontAwesomeIcon className="text-xl" icon={faInstagram} />
            <FontAwesomeIcon className="text-xl" icon={faXTwitter} />
            <FontAwesomeIcon className="text-xl" icon={faFacebook} />
            <Link to={"/login"}>
              <button className="border border-gray-700 bg-white rounded-lg h-8 w-fit p-3 flex justify-center items-center hover:bg-gray-800 text-gray-900 hover:text-white">
                <FontAwesomeIcon icon={faUser} />
                <h2>Login</h2>
              </button>
            </Link>
            {/* <img
              src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
              alt="UserLogin"
              className="w-10 h-10"
            /> */}
          </div>
        </div>

        <div className=" bg-green-950 flex flex-col py-4 gap-2 ">
          <div className="flex justify-between px-4 md:hidden">
            <button
              className="rounded-lg h-8 w-fit p-3 flex justify-center items-center text-white"
              onClick={() => setStatus(!status)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <Link to={"/login"}>
              <button className="rounded-lg h-8 w-fit p-3 flex justify-center items-center text-white">
                <FontAwesomeIcon icon={faUser} />
                <h2>Login</h2>
              </button>
            </Link>
            {/* <img
              src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
              alt="UserLogin"
              className="w-10 h-10"
            /> */}
          </div>
          <div className="flex justify-center items-center text-white">
            <ul
              className={
                status ? "md:flex" : "md:flex gap-4 justify-center hidden"
              }
            >
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/all-books"}>
                <li>Books</li>
              </Link>
              <Link to={"/career"}>
                <li>Career</li>
              </Link>
              <Link to={"/contact"}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
