import React from "react";
import Steps from "../components/Steps";
import Preview from "../components/Preview";

const Form = () => {
  return (
    <div className="row">
      <div className="col-6">
        <Steps />
      </div>
      <div className="col-6">
        <Preview />
      </div>
    </div>
  );
};

export default Form;
