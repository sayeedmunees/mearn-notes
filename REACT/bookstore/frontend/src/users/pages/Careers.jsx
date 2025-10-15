import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import {
  faLocationDot,
  faMagnifyingGlass,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Careers = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center my-4 ">
        <div className="flex flex-col items-center my-2 mt-4">
          <h2 className="text-xl text-center ">Start Your</h2>
          <h4 className="text-3xl text-center uppercase">Career With Us</h4>
          <p className="max-w-5xl text-center py-2 px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            voluptate voluptatem cumque minus vero eveniet dolores recusandae,
            aspernatur, distinctio itaque, facilis perspiciatis quis incidunt.
            Dignissimos nulla doloremque ad ut quae!
          </p>
        </div>
        <div className="flex flex-col items-center my-2 ">
          <h2 className="text-xl text-center font-semibold">
            Current Openings
          </h2>
          <div className="flex max-w-xl shadow-2xl border my-2 bg-white rounded-3xl items-center py-2 px-4 focus:shadow-5xl">
            <input
              type="text"
              placeholder="Job Title"
              className=" placeholder-gray-600 max-w-3xl lg:w-3xl text-black border-white focus:outline-0"
            />
            <FontAwesomeIcon
              className="text-green-950"
              icon={faMagnifyingGlass}
            />
          </div>
        </div>
        <div className="flex flex-col border border-gray-400 rounded-lg items-center my-2 p-4 max-w-4xl lg:w-4xl mx-2 shadow-lg">
          <div className="flex flex-row justify-between w-full items-center">
            <h2 className="text-xl text-center font-semibold">Job Title</h2>
            <button className="border border-green-950 bg-green-950 hover:bg-white rounded text-white hover:text-green-950 px-6 py-2 font-bold">
              <span className="me-2"> Apply</span>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </button>
          </div>
          <hr class="border-0 h-px bg-gray-300 my-4 w-full" />
          <div className="flex flex-col justify-start items-start w-full gap-4">
            <p>
              <FontAwesomeIcon
                className="text-green-950"
                icon={faLocationDot}
              />
              <span> Location</span>
            </p>
            <p>Job Type : Senior Level</p>
            <p>Salary : 10 Lakhs</p>
            <p>Qualifications : M.tech/B.tech </p>
            <p>Experience : 5 to 7 Years </p>
            <p>
              Description : Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Veniam, consectetur delectus doloremque repellat, ipsum
              fugit ratione in nulla, quibusdam voluptatibus dignissimos cumque
              obcaecati? Porro, ex dolor. Quo consequuntur quisquam nisi.{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
