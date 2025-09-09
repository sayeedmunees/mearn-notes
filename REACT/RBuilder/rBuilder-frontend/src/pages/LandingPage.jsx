import { Button } from "@mui/material";
import "./LandingPage.css";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <section id="bg1" style={{ height:"600px" }}>
        <div className="row py-5">
          <div className="col-4"></div>
          <div className="col-4 box py-5 mt-5 border text-center">
            <h3>Designed to get hired.</h3>
            <h4>Your skills, your story, your next job - all in one.</h4>
            <Link to={"/resumegenerator"}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "blueviolet" }}
              >
                Make Your Resume
              </Button>
            </Link>
          </div>
          <div className="col-4"></div>
        </div>
      </section>
      <section className="py-5 ">
        <h3 className="text-center mt-4 pt-4 fs-2"> Tools</h3>
        <div className="row pb-5">
          <div className="col-6 p-5 ">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>
              Effortlessly manage and track your job applications in an
              organized manner.
            </p>
          </div>
          <div className="col-6">
            <img
              height={"500px"}
              width={"500px"}
              src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="bg2">
        <h1 className="ms-4 pt-5">Testimony</h1>
        <div className="row">
          <div className="col-6 ps-5">
            <h4>Trusted by professionals worldwide.</h4>
            <p>
              At LiveCareer, we don't just help you create résumés we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results.
            </p>
            <p>
              In fact, users who used LiveCareer reported getting hired an
              average of 48 days faster.
            </p>
            <p>
              Join thousands of job-seekers who've fast-tracked their careers
              with a résumé that truly stands out.
            </p>
          </div>
          <div className="col-6" id="testimony">
            <div className="row">
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
