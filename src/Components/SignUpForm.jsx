import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import LocationIcon from "../assets/icons/location.svg";
import { createAccount, signIn } from "../requests/apiService";
import useAuth from "./auth";

const SignUpForm = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false); // Controls flex direction and form switching
  const [isSignedUp, setIsSignedUp] = useState(false); // Tracks successful registration
  const { isSignedIn, setIsSignedIn } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    location: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // Error message
  const [successMessage, setSuccessMessage] = useState(""); // Success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value || "",
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await createAccount({
        userName: formData.userName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        location: formData.location || null,
      });

      if (response.message) {
        setIsSignedUp(true); // Switch to Sign In form after successful registration
        setFormData({
          userName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          location: "",
        });
      } else {
        setErrorMessage("An error occurred.");
      }
    } catch (error) {
      setErrorMessage(error.message || "An error occured");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous errors
    setSuccessMessage(""); // Clear any previous success messages

    try {
      const signInData = {
        email: formData.email,
        password: formData.password,
      };

      // Call the `signIn` API
      const response = await signIn(signInData);

      if (response.message === "Login Successful") {
        // Handle successful login
        console.log("Sign In Successful:", response);
        setSuccessMessage("Sign In Successful!");
        setIsSignedIn(true);
        navigate("/");
      } else {
        // Handle failed login based on API response
        setErrorMessage(response.message || "Invalid email or password.");
        console.error("Sign In Failed:", response);
      }
    } catch (error) {
      // Handle any network or unexpected errors
      setErrorMessage(error.message || "An error occurred while signing in.");
      console.error("Sign In Error:", error);
    }
  };

  useEffect(() => {
    // Dynamically update state based on route
    if (location.pathname === "/sign-in") {
      setToggle(false);
    } else if (location.pathname === "/sign-up") {
      setToggle(true);
    }
  }, [location.pathname]);

  // Track state changes
  useEffect(() => {
    console.log("isSignedIn updated:", isSignedIn); // This will show the updated value
  }, [isSignedIn]);

  return (
    <div className="">
      <section
        className={`flex lg:flex-row lg:p-[5rem] p-[1.8125rem] ${
          toggle ? "flex-col lg:flex-row-reverse" : "flex-col-reverse"
        } flex-grow h-full w-full `}
      >
        {/* Left Section */}
        <section
          className={`signup-form-background shadow-md ${
            toggle
              ? "rounded-tr-xl rounded-tl-xl lg:rounded-tl-none  lg:rounded-tr-3xl lg:rounded-br-3xl"
              : "rounded-bl-xl rounded-br-xl lg:rounded-br-none  lg:rounded-tl-3xl lg:rounded-bl-3xl"
          } lg:w-1/2 flex p-4 flex-col items-center justify-center`}
        >
          <div className="flex flex-col justify-center items-center gap-[1rem]">
            <h1 className="font-semibold text-[1.5rem] leading-[2.125rem] lg:text-[3rem] lg:leading-[4.5rem]">
              {toggle ? "Welcome Back!" : "Welcome!"}
            </h1>
            <p className="lg:text-[1.5rem] text-[1rem] leading-[1.125rem] text-center lg:leading-[1.8125rem] font-medium text-[#1E1E1E]">
              {toggle
                ? "Already have an account? Click the button below to Log In"
                : "To connect with us, kindly create an account by clicking the register button"}
            </p>
            <CustomButton
              style="border border-black text-black lg:rounded-[0.25rem] px-[1rem] p-[0.625rem] mt-[1rem] font-semibold"
              text={toggle ? "Sign In" : "Register"}
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
        </section>

        {/* Right Section */}
        <section
          className={`lg:w-1/2 bg-white lg:py-[3rem] p-3 lg:px-[1.8125rem] border ${
            toggle
              ? "lg:rounded-tl-3xl lg:rounded-bl-3xl rounded-bl-xl lg:rounded-br-none rounded-br-xl"
              : "lg:rounded-tr-3xl lg:rounded-br-3xl rounded-tr-xl lg:rounded-tl-none rounded-tl-xl"
          }   shadow-sm`}
        >
          {isSignedUp || !toggle ? (
            // Sign-In Form
            <div className="lg:p-6">
              <div className="flex flex-col justify-center items-center gap-[0.5rem]">
                <h1 className="font-semibold lg:text-[3rem] text-[1.5rem] leading-[1.8125rem] text-[#1E1E1E] lg:leading-[3.630625rem]">
                  Sign In
                </h1>
                <p className="font-medium text-[#4B4B4B] text-[1rem] leading-[1.21rem] lg:text-[1.5rem] text-center lg:leading-[1.8125rem]">
                  Input your credentials to access your Bola Cash Account
                </p>
              </div>
              <div className="flex flex-col px-[3rem] mt-[1rem] gap-[1rem]">
                <input
                  type="email"
                  placeholder="Email"
                  className="lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange} // Update formData state
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="password"
                  value={formData.password || ""}
                  onChange={handleChange} // Update formData state
                />
              </div>
              <p className="text-center text-gray-500 mt-3">Forgot Password?</p>
              <div className="w-full px-[3rem] mt-[1rem]">
                <CustomButton
                  style="w-full bg-[#228B22] lg:rounded-[0.25rem] text-white p-[0.625rem] font-semibold"
                  text="Sign In"
                  onClick={handleSignIn}
                />
              </div>
            </div>
          ) : (
            // Sign-Up Form
            <div className="lg:p-6">
              <div className="flex flex-col justify-center items-center gap-[0.5rem]">
                <h1 className="font-semibold lg:text-[3rem] text-[1.5rem] leading-[1.8125rem] text-[#1E1E1E] lg:leading-[3.630625rem]">
                  Create Account
                </h1>
                <p className="text-center">
                  Click on the Sign in button in the welcome section to login if
                  you already have an account
                </p>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </div>
              <div className="flex flex-col px-[3rem] mt-[1rem] gap-[1rem]">
                <input
                  type="text"
                  placeholder="User Name"
                  className="lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="userName"
                  value={formData.userName || ""}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="phoneNumber"
                  value={formData.phoneNumber || ""}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="password"
                  value={formData.password || ""}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="confirmPassword"
                  value={formData.confirmPassword || ""}
                  onChange={handleChange}
                />
                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="Location (optional)"
                    className="lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272] w-full"
                    name="location"
                    value={formData.location || ""}
                    onChange={handleChange}
                  />
                  <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                    <img
                      className="w-5 h-5 object-cover"
                      src={LocationIcon}
                      alt="Location Icon"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-[3rem] mt-[1rem]">
                <CustomButton
                  style="w-full bg-[#228B22] lg:rounded-[0.25rem] text-white p-[0.625rem] font-semibold"
                  text="Sign Up"
                  onClick={handleSignUp}
                />
              </div>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default SignUpForm;
