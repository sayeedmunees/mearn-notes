import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { RiFileDownloadLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ResumeGenerator = () => {
  return (
    <div>
      <div className="row my-5 d-flex justify-content-evenly">
        <h3 className="text-center my-5">
          Create a job-winning Resume in minutes
        </h3>
        <div className="col-4 border shadow p-5 text-center rounded">
          <FaFileAlt className="fs-1 my-3 text-primary" />
          <h4>Add your Information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>
        </div>
        <div className="col-4 border shadow p-5 text-center rounded">
          <RiFileDownloadLine className="fs-1 my-3 text-danger" />
          <h4>Download Your CV</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>
        </div>
        <div className="d-flex justify-content-center mb-5 mt-5">
          <Link to={"/form"}>
            <Button sx={{ backgroundColor: "blueviolet" }} variant="contained">
              Let's Start
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeGenerator;
