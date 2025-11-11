import React, { createContext, useState } from "react";

const searchKeyContext = createContext("");

const Contextshare = ({ children }) => {
  const [searchKey, setSearchKey] = useState("");
  return (
    <searchKeyContext.Provider value={{ searchKey, setSearchKey }}>
      {children}
    </searchKeyContext.Provider>
  );
};
export default Contextshare;
