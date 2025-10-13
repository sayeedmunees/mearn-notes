import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <nav className="container mx-auto">
        <div className="flex flex-row justify-between items-center mx-auto w-full h-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAhTXETNIvE8PsF6Uc6bElMUo-GmSmCx01Q&s"
            alt=""
            className="h-12"
          />
          <h1 className="font-bold text-3xl">Book Store</h1>
          <div className="inline-flex items-center gap-2">
            <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
            <FontAwesomeIcon className="text-2xl" icon={faXTwitter} />
            <FontAwesomeIcon className="text-2xl" icon={faFacebook} />
            <button className="bg-amber-800 rounded-full h-8 w-8 flex justify-center items-center">
              <h2 className=" text-white">L</h2>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
