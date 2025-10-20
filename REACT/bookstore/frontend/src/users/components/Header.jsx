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
  const [dropDownStatus, setDropDownStatus] = useState(false);
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
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl uppercase text-green-950">
              Book Store
            </h1>
          </div>
          <div className="hidden md:inline-flex items-center gap-2 col-span-1 justify-end ">
            <FontAwesomeIcon className="text-xl" icon={faInstagram} />
            <FontAwesomeIcon className="text-xl" icon={faXTwitter} />
            <FontAwesomeIcon className="text-xl" icon={faFacebook} />
            {/* <Link to={"/login"}>
              <button className="border border-gray-700 bg-white rounded-lg h-8 w-fit p-3 flex justify-center items-center hover:bg-gray-800 text-gray-900 hover:text-white">
                <FontAwesomeIcon icon={faUser} />
                <h2>Login</h2>
              </button>
            </Link> */}
            <button
              onClick={() => setDropDownStatus(!dropDownStatus)}
              class="gap-x-1.5 rounded-md"
            >
              <img
                src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                alt="UserLogin"
                className="w-10 h-10"
              />
            </button>

            {/* Dropdown Tailwind */}
            {/* <el-dropdown class="inline-flex items-center text-black">
              <button class="gap-x-1.5 rounded-md">
                <img
                  src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                  alt="UserLogin"
                  className="w-10 h-10"
                />
              </button>

              <el-menu
                anchor="bottom end"
                popover
                class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                  >
                    Profile
                  </a>
                  <form action="#" method="POST">
                    <button
                      type="submit"
                      class="block w-full px-4 py-2 text-left text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                    >
                      Logout
                    </button>
                  </form>
                </div>
              </el-menu>
            </el-dropdown> */}

            {dropDownStatus && (
              <div
                className="absolute right-0 top-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                role="menu"
                aria-orientation=""
                tabIndex="-1"
              >
                <div role="none">
                  <Link to={"/profile"}>
                    <p
                      class="block px-4 py-2 text-sm rounded-md font-semibold hover:bg-gray-200 text-gray-700"
                      role="menuItem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Profile
                    </p>
                  </Link>

                  <button
                    type="submit"
                    class="block w-full rounded-md font-bold hover:bg-gray-200 px-4 py-2 text-left text-sm text-red-600"
                    role="menuItem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
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
            {/* <Link to={"/login"}>
              <button className="rounded-lg h-8 w-fit p-3 flex justify-center items-center text-white">
                <FontAwesomeIcon icon={faUser} />
                <h2>Login</h2>
              </button>
            </Link> */}

            <button
              onClick={() => setDropDownStatus(!dropDownStatus)}
              class="gap-x-1.5 rounded-md"
            >
              <img
                src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                alt="UserLogin"
                className="w-10 h-10"
              />
            </button>
            {dropDownStatus && (
              <div
                className="absolute right-0 top-40 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                role="menu"
                aria-orientation=""
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <Link to={"/profile"}>
                    <p
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuItem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Profile
                    </p>
                  </Link>

                  <button
                    type="submit"
                    class="block w- px-4 py-2 text-left text-sm text-gray-700"
                    role="menuItem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
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
