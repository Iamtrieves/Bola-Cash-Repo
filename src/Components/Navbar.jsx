import { NavLink } from "react-router-dom";
import BolaCashLogo from "../assets/Images/Bola-Logo.svg";
import CustomButton from "./CustomButton";
import HamburgerMenu from "./HamburgerMenu";
import useAuth from "./auth";

const Navbar = () => {
  const { isSignedIn, setIsSignedIn } = useAuth(); // Access auth state and setter

  const handleLogout = () => {
    setIsSignedIn(false); // Update state to log out
  };

  return (
    <nav className="fixed w-screen bg-white bg-opacity-90 z-10 lg:py-[0.4375rem] py-[0.4rem] lg:px-[3.5rem] px-[1.3125rem]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="size-9">
          <img
            className="size-full object-cover"
            src={BolaCashLogo}
            alt="Bola Cash Logo"
          />
        </div>

        {/* Links for Larger Screens */}
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
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-black"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Authentication Buttons */}
        {isSignedIn ? (
          <div className="items-center gap-[1rem] md:flex lg:flex hidden">
            <p className="text-black p-[0.625rem] text-md">Hi There!</p>
            <CustomButton
              style="text-black p-[0.625rem] text-md"
              text="Logout"
              onClick={handleLogout} // Logout handler
            />
          </div>
        ) : (
          <div className="items-center gap-[1rem] md:flex lg:flex hidden">
            <CustomButton
              to="/sign-in"
              style="text-black p-[0.625rem] text-md"
              text="Sign In"
            />
            <hr className="border border-black h-[1.5rem]" />
            <CustomButton text="Sign Up" to="/sign-up" />
          </div>
        )}

        {/* Hamburger Menu for Smaller Screens */}
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
