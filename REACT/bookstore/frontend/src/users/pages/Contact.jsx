import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-col items-center my-2 mt-4">
          <h4 className="text-3xl text-center uppercase">Contact details</h4>
          <p className="max-w-5xl text-center py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            voluptate voluptatem cumque minus vero eveniet dolores recusandae,
            aspernatur, distinctio itaque, facilis perspiciatis quis incidunt.
            Dignissimos nulla doloremque ad ut quae!
          </p>
        </div>
        <div className="flex flex-row justify-around items-center my-2">
          <div className=" flex flex-row gap-2 items-center">
            <div className="bg-green-950 rounded-full h-10 w-10 flex justify-center items-center">
              <FontAwesomeIcon className="text-white" icon={faLocationDot} />
            </div>
            <p className="max-w-3xs">
              123 Main Street, Apt 48, Anytown, CA 9132
            </p>
          </div>

          <div className=" flex flex-row gap-2 items-center">
            <div className="bg-green-950 rounded-full h-10 w-10 flex justify-center items-center">
              <FontAwesomeIcon className="text-white" icon={faPhone} />
            </div>
            <p className="max-w-3xs">9876543210</p>
          </div>

          <div className=" flex flex-row gap-2 items-center">
            <div className="bg-green-950 rounded-full h-10 w-10 flex justify-center items-center">
              <FontAwesomeIcon className="text-white" icon={faEnvelope} />
            </div>
            <p className="max-w-3xs">contact@bookstore.com</p>
          </div>
        </div>
        <div className="flex justify-around my-10 mx-20 gap-10">
          <div className="flex-1 h-82">
            <div className="bg-green-950 rounded-xl text-white text-center gap-4 flex flex-col justify-center items-center p-10">
              <div className=" flex justify-center items-center text-center flex-col px-5">
                <h2 className="text-2xl mt-4 font-bold">Send a Message</h2>
              </div>

              <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                <input
                  type="text"
                  placeholder="Name"
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
                  <textarea
                    class="placeholder-gray-600 w-full text-black border-none border-0 outline-none focus:outline-none focus:ring-0 resize-none"
                    placeholder="Type your text..."
                  ></textarea>
                </div>
              </div>

              <button className="bg-green-950 border border-white hover:bg-white rounded hover:text-green-950 text-white w-full p-2 mt-8">
                <span className="font-bold me-2">Send</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-green-950 rounded-xl text-white text-center gap-4 flex flex-col justify-center items-center p-5">
              <div className="w-full h-92 rounded overflow-hidden border-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251479.2361276065!2d76.13730850996865!3d9.986838220537415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1760426643230!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kochi Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
