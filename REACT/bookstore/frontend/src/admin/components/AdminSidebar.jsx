import {
  faBook,
  faGear,
  faHouse,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [homeStatus, setHomeStatus] = useState(false);
  const [bookStatus, setBookStatus] = useState(false);
  const [careerStatus, setCareerStatus] = useState(false);
  const [settingsStatus, setSettingsStatus] = useState(false);

  const navigate = useNavigate();
  const filter = (data) => {
    if (data == "home") {
      navigate("/admin-home");
    } else if (data == "books") {
      navigate("/admin-books");
    } else if (data == "careers") {
      navigate("/admin-careers");
    } else if (data == "settings") {
      navigate("/admin-settings");
    } else {
      navigate("*");
    }
  };

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == "/admin-home") {
      setHomeStatus(true);
      // } else if (location.pathname == "/admin-careers") {
      //   setCareerStatus(true);
    } else if (location.pathname == "/admin-books") {
      setBookStatus(true);
    } else if (location.pathname == "/admin-settings") {
      setSettingsStatus(true);
    } else {
      console.log("no such page");
    }
  }, []);
  return (
    <>
      <img
        src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
        alt="no image"
        style={{ width: "150px", height: "150px" }}
        className="mt-4"
      />
      <h1 className="mt-5 text-white font-medium">UserName</h1>
      <div className="my-5">
        <div className="mb-3" onClick={() => filter("home")}>
          <input
            type="radio"
            id="home"
            name="filterPage"
            defaultChecked={homeStatus}
          />
          <label htmlFor="home" className="ms-3 text-white">
            <FontAwesomeIcon icon={faHouse} className="me-3" />
            Home
          </label>
        </div>
        <div className="mb-3" onClick={() => filter("books")}>
          <input
            type="radio"
            id="allBooks"
            name="filterPage"
            defaultChecked={bookStatus}
          />
          <label htmlFor="allBooks" className="ms-3 text-white">
            <FontAwesomeIcon icon={faBook} className="me-3" />
            All Books
          </label>
        </div>
        {/* <div className="mb-3" onClick={() => filter("careers")}>
          <input
            type="radio"
            id="careers"
            name="filterPage"
            checked={careerStatus}
          />
          <label htmlFor="careers" className="ms-3 text-white">
            <FontAwesomeIcon icon={faUserTie} className="me-3" />
            Careers
          </label>
        </div> */}
        <div className="mb-3" onClick={() => filter("settings")}>
          <input
            type="radio"
            id="settings"
            name="filterPage"
            defaultChecked={settingsStatus}
          />
          <label htmlFor="settings" className="ms-3 text-white">
            <FontAwesomeIcon icon={faGear} className="me-3" />
            Settings
          </label>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
