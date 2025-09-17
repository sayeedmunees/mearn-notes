import React, { useState } from "react";
import Steps from "../components/Steps";
import Preview from "../components/Preview";

const Form = () => {
  const [formData, setFormData] = useState({
    personalData: {
      name: "",
      jobTitle: "",
      loctaion: "",
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

  return (
    <div className="row">
      <div className="col-6">
        <Steps formData={formData} setFormData={setFormData} />
      </div>
      <div className="col-6">
        <Preview />
      </div>
    </div>
  );
};

export default Form;
