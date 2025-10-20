import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import {
  faArrowsRotate,
  faLocationDot,
  faMagnifyingGlass,
  faPaperPlane,
  faUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
};

const Careers = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <div className="flex flex-col w-full items-center my-4 ">
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
            <button
              onClick={handleOpen}
              className="border border-green-950 bg-green-950 hover:bg-white rounded text-white hover:text-green-950 px-6 py-2 font-bold"
            >
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

        {/* Modal */}
        <div className="w-full">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="flex flex-col justify-center items-center bg-green-950 rounded-xl text-white text-center gap-2 lg:gap-4 p-4 lg:p-8">
                <div className=" flex flex-row w-full justify-between items-center py-2">
                  <h2 className="text-xl font-bold">Application Form</h2>
                  <FontAwesomeIcon onClick={handleClose} icon={faXmark} />
                </div>

                <div className="flex flex-col lg:flex-row w-full gap-2">
                  <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                    />
                  </div>
                  <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                    <input
                      type="text"
                      placeholder="Qualification"
                      className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full gap-2">
                  <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                    <input
                      type="text"
                      placeholder="Email"
                      className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                    />
                  </div>
                  <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                    <input
                      type="text"
                      placeholder="Phone"
                      className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                    <textarea
                      class="placeholder-gray-600 w-full text-black border-none border-0 outline-none focus:outline-none focus:ring-0 resize-none"
                      placeholder="Cover Letter"
                    ></textarea>
                  </div>
                  <div class="col-span-full mt-8">
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-white px-6 py-10">
                      <div class="text-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          data-slot="icon"
                          aria-hidden="true"
                          class="mx-auto size-12 text-gray-300"
                        >
                          <path
                            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                          />
                        </svg>
                        <div class="mt-4 flex text-sm/6 text-white">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                          >
                            <span>Upload resume</span>
                            <input
                              id="file-upload"
                              type="file"
                              name="file-upload"
                              class="sr-only"
                            />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs/5 text-white">PDF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 w-full mt-8">
                  <button className="bg-green-950 border border-white hover:bg-white rounded hover:text-green-950 text-white w-full p-2">
                    <span className="font-bold me-2">Reset</span>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>

                  <button className="bg-white border border-white hover:bg-green-950 rounded text-green-950 hover:text-white w-full p-2">
                    <span className="font-bold me-2">Submit</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
