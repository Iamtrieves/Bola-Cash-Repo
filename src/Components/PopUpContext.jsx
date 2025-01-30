import React, { createContext, useState, useContext } from "react";
import PopUp from "./PopUp"; // Ensure correct import

// Create Context
const PopUpContext = createContext(null);

export const PopUpProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [customClass, setCustomClass] = useState(""); // Dynamic styling
  const [username, setUsername] = useState(""); // Store the username

  const showPopUp = ({ message, title, username = "", className = "" }) => {
    setMessage(message);
    setTitle(title);
    setUsername(username);
    setCustomClass(className);
    setIsVisible(true);
  };

  const hidePopUp = () => {
    setIsVisible(false);
    setMessage("");
    setTitle("");
    setUsername("");
    setCustomClass("");
  };

  return (
    <PopUpContext.Provider value={{ showPopUp, hidePopUp }}>
      {children}
      {isVisible && (
        <PopUp
          isVisible={isVisible}
          onClose={hidePopUp}
          message={message}
          title={title}
          username={username}
          className={customClass}
        />
      )}
    </PopUpContext.Provider>
  );
};

// Custom Hook
export const usePopUp = () => {
  const context = useContext(PopUpContext);
  if (!context) {
    throw new Error("usePopUp must be used within a PopUpProvider");
  }
  return context;
};
