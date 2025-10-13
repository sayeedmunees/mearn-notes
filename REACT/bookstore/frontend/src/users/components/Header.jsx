import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <nav className="container mx-auto">
        <div className="flex flex-row justify-between items-center w-full h-20 px-4">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAhTXETNIvE8PsF6Uc6bElMUo-GmSmCx01Q&s"
              alt=""
              className="h-12 w-auto md:h-14"
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl uppercase">
              Book Store
            </h1>
          </div>
          <div className="hidden md:inline-flex items-center gap-2">
            <FontAwesomeIcon className="text-xl" icon={faInstagram} />
            <FontAwesomeIcon className="text-xl" icon={faXTwitter} />
            <FontAwesomeIcon className="text-xl" icon={faFacebook} />
            <button className="border border-gray-700 bg-white rounded-lg h-8 w-fit p-3 flex justify-center items-center hover:bg-gray-800 text-gray-900 hover:text-white">
              <FontAwesomeIcon icon={faUser} />
              <h2>Login</h2>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
