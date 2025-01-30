import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";
import useAuth from "./auth";
import ProfileIcon from "../assets/icons/profile-icon.svg";
import CaretUpIcon from "../assets/icons/caret-up-icon.svg";
import Modal from "./Modal";

const HamburgerMenu = () => {
  const [isCaretUp, setIsCaretUp] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const { isSignedIn, setIsSignedIn } = useAuth();

  const handleLogout = () => {
    setIsSignedIn(false); // Update state to log out
  };
  const toggleState = () => {
    setIsOn((prevState) => !prevState); // Toggle the state
  };

  const closeMenu = () => {
    setIsOn(false); // Close the menu
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div
        onClick={toggleState}
        className="flex flex-col items-center justify-center gap-1 cursor-pointer z-50 relative"
      >
        {/* Top Line */}
        <span
          className={`h-1 w-7 rounded-md bg-[#292D32] transition-transform duration-300 ${
            isOn ? "translate-y-[8px] rotate-45" : ""
          }`}
        ></span>

        {/* Middle Line */}
        <span
          className={`h-1 w-7 rounded-md bg-[#292D32] transition-opacity duration-300 ${
            isOn ? "opacity-0" : "opacity-100"
          }`}
        ></span>

        {/* Bottom Line */}
        <span
          className={`h-1 w-7 rounded-md bg-[#292D32] transition-transform duration-300 ${
            isOn ? "-translate-y-[8px] -rotate-45" : ""
          }`}
        ></span>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-[#F5F5F5] text-[#292D32] transition-transform duration-500 ${
          isOn ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6 mt-10">
          <NavLink
            to="/"
            onClick={closeMenu} // Close menu on click
            className={({ isActive }) =>
              isActive
                ? "text-xl font-bold  hover:text-black-600"
                : "text-xl  hover:text-black-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu} // Close menu on click
            className={({ isActive }) =>
              isActive
                ? "text-xl font-bold  hover:text-black-600"
                : "text-xl  hover:text-black-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu} // Close menu on click
            className={({ isActive }) =>
              isActive
                ? "text-xl font-bold  hover:text-black-600"
                : "text-xl  hover:text-black-600"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Buttons at the Bottom */}
        {isSignedIn ? (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                setIsCaretUp(!isCaretUp);
              }}
            >
              <div>
                <img src={ProfileIcon} alt="Profile Icon" />
              </div>
              <h1>Profile</h1>
              <div>
                <img
                  className={`transform transition-transform duration-300 ${
                    isCaretUp ? "rotate-0" : "rotate-180"
                  }`}
                  src={CaretUpIcon}
                  alt="Caret Up Icon"
                />
              </div>
              <Modal isVisible={isCaretUp} />
            </div>
            <CustomButton text="Request for pickup" />
          </div>
        ) : (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
            <CustomButton
              style="text-black p-[0.625rem] text-md bg-transparent"
              text="Sign In"
              to="/sign-in"
            />
            <hr className="border border-gray-400 w-1/2" />
            <CustomButton
              style="bg-[#228B22] font-semibold text-white p-[0.625rem] text-md rounded-md"
              text="Sign Up"
              to="/sign-up"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
