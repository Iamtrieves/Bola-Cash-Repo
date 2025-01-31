import React, { createContext, useState, useContext } from "react";
import RequestPickUp from "../../Components/RequestPickUp";

const RequestPickUpContext = createContext(null);

export const RequestPickUpProvider = ({ children }) => {
  const [isRequested, setIsRequested] = useState(false);

  const showRequest = () => setIsRequested(true);
  const hideRequest = () => setIsRequested(false);

  return (
    <RequestPickUpContext.Provider
      value={{ isRequested, showRequest, hideRequest }}
    >
      {children}
      <RequestPickUp isVisible={isRequested} />
    </RequestPickUpContext.Provider>
  );
};

// Custom Hook
export const useRequest = () => {
  const context = useContext(RequestPickUpContext);
  if (!context) {
    throw new Error("useRequest must be used within a RequestPickUpProvider");
  }
  return context;
};
