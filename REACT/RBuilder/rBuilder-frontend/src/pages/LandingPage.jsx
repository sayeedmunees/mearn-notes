import { Button } from "@mui/material";
import "./LandingPage.css";
import React from "react";
const LandingPage = () => {
  return (
    <div>
      <section id="bg1">
        <div className="row py-5">
          <div className="col-4"></div>
          <div className="col-4 box py-5 mt-5 border text-center">
            <h3>Designed to get hired.</h3>
            <h4>Your skills, your story, your next job - all in one.</h4>
            <Button variant="contained" sx={{ backgroundColor: "blueviolet" }}>
              Make Your Resume
            </Button>
          </div>
          <div className="col-4"></div>
        </div>
      </section>
      <section>
        <h3>Tools</h3>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
