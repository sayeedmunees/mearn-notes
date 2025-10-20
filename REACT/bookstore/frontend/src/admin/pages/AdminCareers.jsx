import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import {
  faArrowsRotate,
  faCircleCheck,
  faLocationDot,
  faMagnifyingGlass,
  faPaperPlane,
  faPlug,
  faPlus,
  faTrash,
  faUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
};

const AdminCareers = () => {
  const [jobPostStatus, setJobPostStatus] = useState(true);
  const [viewApplicantStatus, setViewApplicantStatus] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleJobPostStatus = () => {
    setJobPostStatus(true);
    setViewApplicantStatus(false);
  };
  const handleViewApplicantStatus = () => {
    setJobPostStatus(false);
    setViewApplicantStatus(true);
  };

  return (
    <>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_4fr]">
        <div className="bg-green-100 flex flex-col items-center min-h-[55vh]">
          <AdminSidebar />
        </div>
        <div className="flex flex-col w-full items-center mb-4">
          <div>
            <h2 className="text-center font-bold my-4 text-2xl">Careers</h2>
          </div>
          {/* tabs */}
          <div className="md:px-40 mt-4">
            <div className="flex justify-center">
              <p
                onClick={handleJobPostStatus}
                className={
                  jobPostStatus
                    ? "p-4 text-green-950 border-2 border-b-0 border-gray-200 rounded cursor-pointer"
                    : "p-4 text-black border-b-2 border-b-gray-200"
                }
              >
                Job Post
              </p>
              <p
                onClick={handleViewApplicantStatus}
                className={
                  viewApplicantStatus
                    ? "p-4 text-green-950 border-2 border-b-0 border-gray-200 rounded cursor-pointer"
                    : "p-4 text-black border-b-2 border-b-gray-200"
                }
              >
                View Applicant
              </p>
            </div>
          </div>

          {/* Contents */}
          {jobPostStatus && (
            <div>
              <div className="flex justify-between items-center my-2 px-2">
                <div className="flex max-w-sm shadow border my-2 bg-white rounded-3xl items-center py-2 px-4 focus:shadow-5xl">
                  <input
                    type="text"
                    placeholder="Search by Job Title"
                    className=" placeholder-gray-600 max-w-3xl lg:w-3xl text-black border-white focus:outline-0"
                  />
                  <FontAwesomeIcon
                    className="text-green-950"
                    icon={faMagnifyingGlass}
                  />
                </div>
                <button
                  onClick={handleOpen}
                  className="border border-green-950 bg-green-950 hover:bg-white rounded text-white hover:text-green-950 px-6 py-2 font-bold"
                >
                  <span className="me-2"> Add Job</span>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>

              <div className="flex flex-col border border-gray-400 rounded-lg items-center my-2 p-4 max-w-4xl lg:w-4xl mx-2 shadow-lg">
                <div className="flex flex-row justify-between w-full items-center">
                  <h2 className="text-xl text-center font-semibold">
                    Job Title
                  </h2>
                  <button className="border border-red-600 bg-red-600 hover:bg-white rounded text-white hover:text-red-600 px-6 py-2 font-bold">
                    <span className="me-2"> Delete</span>
                    <FontAwesomeIcon icon={faTrash} />
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
                    Description : Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Veniam, consectetur delectus doloremque
                    repellat, ipsum fugit ratione in nulla, quibusdam
                    voluptatibus dignissimos cumque obcaecati? Porro, ex dolor.
                    Quo consequuntur quisquam nisi.{" "}
                  </p>
                </div>
              </div>
            </div>
          )}

          {viewApplicantStatus && (
            <div className=" py-6 px-4 shadown-md rounded border-collapse">
              <table className="w-full text-left ">
                <thead className="bg-green-950 text-white uppercase ">
                  <tr>
                    <th className="px-6 py-3 border border-white">S1</th>
                    <th className="px-6 py-3 border border-white">Name</th>
                    <th className="px-6 py-3 border border-white">Job Title</th>
                    <th className="px-6 py-3 border border-white">
                      Qualification
                    </th>
                    <th className="px-6 py-3 border border-white">Email</th>
                    <th className="px-6 py-3 border border-white">Phone</th>
                    <th className="px-6 py-3 border border-white">
                      Cover letter
                    </th>
                    <th className="px-6 py-3 border border-white">Resume</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="px-6 py-3 border border-green-950">index</td>
                    <td className="px-6 py-3 border border-green-950">
                      jobtitle
                    </td>
                    <td className="px-6 py-3 border border-green-950">
                      fullname
                    </td>
                    <td className="px-6 py-3 border border-green-950">
                      Qualification
                    </td>
                    <td className="px-6 py-3 border border-green-950">email</td>
                    <td className="px-6 py-3 border border-green-950">phone</td>
                    <td className="px-6 py-3 border border-green-950">
                      coverletter
                    </td>
                    <td className="px-6 py-3 border border-green-950">
                      resume
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
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
              <div className="flex flex-col lg:min-w-xl justify-center items-center bg-green-950 rounded-xl text-white text-center gap-2 lg:gap-4 p-4 lg:p-8">
                <div className=" flex flex-row w-full justify-between items-center py-2">
                  <h2 className="text-xl font-bold">Application Form</h2>
                  <FontAwesomeIcon onClick={handleClose} icon={faXmark} />
                </div>

                <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                  <input
                    type="text"
                    placeholder="Job Title"
                    className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                  />
                </div>
                <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                  <input
                    type="text"
                    placeholder="Location"
                    className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                  />
                </div>

                <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                  <input
                    type="text"
                    placeholder="Job Type"
                    className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                  />
                </div>
                <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                  <input
                    type="text"
                    placeholder="Salary"
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

                <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                  <input
                    type="text"
                    placeholder="Experience"
                    className=" placeholder-gray-600 w-full text-black border-none focus:outline-0"
                  />
                </div>

                <div className="w-full">
                  <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
                    <textarea
                      class="placeholder-gray-600 w-full text-black border-none border-0 outline-none focus:outline-none focus:ring-0 resize-none"
                      placeholder="Description"
                      rows={5}
                    ></textarea>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 w-full mt-8">
                  <button className="bg-green-950 border border-white hover:bg-white rounded hover:text-green-950 text-white w-full p-2">
                    <span className="font-bold me-2">Reset</span>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>

                  <button className="bg-white border border-white hover:bg-green-950 rounded text-green-950 hover:text-white w-full p-2">
                    <span className="font-bold me-2">Add</span>
                    <FontAwesomeIcon icon={faPlus} />
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

export default AdminCareers;
