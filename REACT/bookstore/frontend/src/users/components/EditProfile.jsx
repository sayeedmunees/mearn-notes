import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EditProfile = () => {
  return (
    <div className="bg-green-900 text-white rounded py-2 px-4">
      <p className=" inline-flex gap-2 items-center">
        <span>Edit</span>
        <FontAwesomeIcon icon={faPenToSquare} />
      </p>
    </div>
  );
};

export default EditProfile;
