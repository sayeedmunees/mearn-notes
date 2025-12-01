import React, { createContext, useState } from "react";

export const searchKeyContext = createContext("");
export const adminProfileUpdateStatusContext = createContext("");
export const userProfileUpdateStatusContext = createContext("");

const Contextshare = ({ children }) => {
  const [searchKey, setSearchKey] = useState("");
  const [adminProfileUpdateStatus, setAdminProfileUpdateStatus] = useState({});
  const [userProfileUpdateStatus, setUserProfileUpdateStatus] = useState({});

  return (
    <userProfileUpdateStatusContext.Provider
      value={{ userProfileUpdateStatus, setUserProfileUpdateStatus }}
    >
      <adminProfileUpdateStatusContext.Provider
        value={{ adminProfileUpdateStatus, setAdminProfileUpdateStatus }}
      >
        <searchKeyContext.Provider value={{ searchKey, setSearchKey }}>
          {children}
        </searchKeyContext.Provider>
      </adminProfileUpdateStatusContext.Provider>
    </userProfileUpdateStatusContext.Provider>
  );
};
export default Contextshare;
