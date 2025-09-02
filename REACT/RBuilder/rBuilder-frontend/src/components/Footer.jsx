import React from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg text-center text-light p-5"
    >
      <h4>Contact Us</h4>
      <h6 className="mt-4 mb-3">
        <MdEmail className="fs-4 me-3" />
        rbuilder@gmail.com
      </h6>
      <h6>
        <FaPhoneAlt className="fs-4 me-3" />
        9876545567
      </h6>
      <br />
      <h5>Connect with Us</h5>
      <div className="d-flex justify-content-center align-items-center">
        <FaWhatsapp className="fs-4 me-3" />
        <FaInstagram className="fs-4 me-3" />
        <FaLinkedin className="fs-4 me-3" />
      </div>
      <p className="mt-3">Designed & built with ❤️ using React</p>
    </div>
  );
};

export default Footer;
