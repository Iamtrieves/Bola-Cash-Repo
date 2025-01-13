import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";

const HamburgerMenu = () => {
  const [isOn, setIsOn] = useState(false);

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
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
          <CustomButton
            style="text-black p-[0.625rem] text-md bg-transparent"
            text="Sign In"
            to="/sign-up"
          />
          <hr className="border border-gray-400 w-1/2" />
          <CustomButton
            style="bg-[#228B22] font-semibold text-white p-[0.625rem] text-md rounded-md"
            text="Sign Up"
            to="/sign-up"
          />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
