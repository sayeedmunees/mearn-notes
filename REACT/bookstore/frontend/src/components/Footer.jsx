import {
  faFacebook,
  faInstagram,
  faSquareLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row bg-green-950 text-white p-10">
        <div className="flex-2">
          <h2 className="uppercase text-xl font-semibold mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus labore blanditiis laborum vel repellat dicta iusto
            vitae aperiam ea harum, non aut modi veniam error quisquam optio?
            Facilis, dolore nesciunt.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="uppercase text-xl font-semibold mb-4">News Letter</h2>
          <p>Stay updated with our latest trends</p>
          <div className="flex mt-4 w-64 bg-white rounded items-center h-10 ps-4 ">
            <input
              type="text"
              placeholder="Email"
              className=" placeholder-gray-600 w-full"
            />
            <div className="bg-amber-400 w-12 h-full flex items-center justify-center">
              <FontAwesomeIcon
                className="text-lg text-green-950"
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="uppercase text-xl font-semibold mb-4">Follow Us</h2>
          <p>Let's Be Social</p>
          <div className="hidden md:inline-flex items-center gap-4 col-span-1 justify-end mt-4">
            <FontAwesomeIcon className="text-lg" icon={faInstagram} />
            <FontAwesomeIcon className="text-lg" icon={faXTwitter} />
            <FontAwesomeIcon className="text-lg" icon={faFacebook} />
            <FontAwesomeIcon className="text-lg" icon={faSquareLinkedin} />
          </div>
        </div>
      </div>
      <div className="bg-green-950 border border-green-950 border-t-white/50 text-white px-10 py-5">
        <p>Copyright © 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
