import { NavLink } from "react-router-dom";
import BolaCashLogo from "../assets/Images/Bola-Logo.svg";
import CustomButton from "./CustomButton";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="fixed w-screen bg-white bg-opacity-90 z-10 lg:py-[0.4375rem] py-[0.4rem] lg:px-[3.5rem] px-[1.3125rem]">
      <div className="flex items-center justify-between">
        <div className="size-9">
          <img className="size-full object-cover" src={BolaCashLogo} alt="" />
        </div>
        <div className="gap-[2.5rem] py-[1rem] px-[0.625rem] md:flex lg:flex hidden">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/eco-tips"
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-black"
            }
          >
            EcoTips
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-black"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="items-center gap-[1rem] md:flex lg:flex hidden">
          <CustomButton
            style="text-black p-[0.625rem] text-md"
            text="Sign In"
          ></CustomButton>
          <hr className="border border-black h-[1.5rem]" />
          <CustomButton text="Sign Up"></CustomButton>
        </div>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
