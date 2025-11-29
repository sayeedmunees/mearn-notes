import React, { createContext, useState } from "react";

export const searchKeyContext = createContext("");
export const adminProfileUpdateStatusContext = createContext("");

const Contextshare = ({ children }) => {
  const [searchKey, setSearchKey] = useState("");
  const [adminProfileUpdateStatus, setAdminProfileUpdateStatus] = useState({});
  return (
    <adminProfileUpdateStatusContext.Provider
      value={{ adminProfileUpdateStatus, setAdminProfileUpdateStatus }}
    >
      <searchKeyContext.Provider value={{ searchKey, setSearchKey }}>
        {children}
      </searchKeyContext.Provider>
    </adminProfileUpdateStatusContext.Provider>
  );
};
export default Contextshare;
