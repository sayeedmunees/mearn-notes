import React, { useState } from "react";
import Steps from "../components/Steps";
import Preview from "../components/Preview";

const Form = () => {
  const [formData, setFormData] = useState({
    personalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phoneNumber: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },
    education: {
      course: "",
      college: "",
      university: "",
      year: "",
    },
    experience: {
      jobRole: "",
      company: "",
      location: "",
      duration: "",
    },
    skills: [],
    summary: "",
  });

  const [isFinished, setIsFinished] = useState(false);

  return (
    <div className="row">
      {isFinished ? (
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <Preview formData={formData} setFormData={setFormData} />
          </div>
          <div className="col"></div>
        </div>
      ) : (
        <div className="row p-5">
          <div className="col-6">
            <Steps
              formData={formData}
              setFormData={setFormData}
              setIsFinished={setIsFinished}
            />
          </div>
          <div className="col-6">
            <Preview formData={formData} setFormData={setFormData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
