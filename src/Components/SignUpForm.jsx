import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomButton from "./CustomButton";
import LocationIcon from "../assets/icons/location.svg";

const SignUpForm = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false); // Controls toggle state
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    location: "",
  }); // Tracks form inputs

  const [loading, setLoading] = useState(false); // Loading State
  const [message, setMessage] = useState(""); // Message for feedback

  // Dynamically update state based on route
  useEffect(() => {
    if (location.pathname === "/sign-in") {
      setToggle(false);
    } else if (location.pathname === "/sign-up") {
      setToggle(true);
    }
  }, [location.pathname]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Sign Up
  const handleSignUp = async (e) => {
    // e.preventDefault();
    setLoading(true);
    setMessage("");
    console.log("Sign Up");
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const userInfo = {
        userName: formData.userName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        passowrd: formData.password,
        location: formData.location,
      };
      const response = await createAccount(userInfo); // Call API
      if (response.success) {
        setMessage("Account created successfully! Please log in.");
        setToggle(false); // Switch to Sign-In form
      } else {
        setMessage(response.message || "Failed to create an account.");
      }
    } catch (error) {
      setMessage("An error occured. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Sign-In
  const handleSignIn = async (e) => {
    // e.preventDefault();
    setLoading(true);
    setMessage("");
    console.log("Sign In");
    try {
      const userInfo = {
        email: formData.email,
        password: formData.password,
      };
      const response = await signIn(userInfo); // Call API
      if (response.success) {
        setMessage("Login Successful! Redirecting...");
        // Save token or perfomr actions like redirecting to a dashboard
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
      } else {
        setMessage(response.message || "Login Failed! Check your credentials.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <section
        className={`flex lg:flex-row lg:p-[5rem] p-[1.8125rem] ${
          toggle ? "flex-col lg:flex-row-reverse" : "flex-col-reverse"
        } flex-grow h-full w-full`}
      >
        {/* Left Section: Welcome or Sign-In prompt */}
        <section className="signup-form-background shadow-md lg:rounded-tl-3xl lg:rounded-bl-3xl lg:w-1/2 flex p-4 flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-[1rem]">
            <h1 className="font-semibold text-[1.5rem] leading-[2.125rem] lg:text-[3rem] lg:leading-[4.5rem]">
              {toggle ? "Welcome Back!" : "Welcome!"}
            </h1>
            <p className="lg:text-[1.5rem] text-[1rem] leading-[1.125rem] text-center lg:leading-[1.8125rem] font-medium text-[#1E1E1E]">
              {toggle
                ? "Already have an account? Click teh button below to Log In"
                : "To connect with us, kindly create an account by clicking the register button"}
            </p>
            <CustomButton
              style="border border-black text-black lg:rounded-[0.25rem] px-[1rem] p-[0.625rem] mt-[1rem] font-semibold"
              text={toggle ? "Sign In" : "Register"}
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
        </section>

        {/* Right Section: Sign-Up Form */}
        <section className="lg:w-1/2 bg-white lg:py-[3rem] p-3 lg:px-[1.8125rem] border lg:rounded-tr-3xl lg:rounded-br-3xl shadow-sm">
          {toggle ? (
            <div className="lg:p-6">
              {/* Form Header */}
              <div className="flex flex-col justify-center items-center gap-[0.5rem]">
                <h1 className="font-semibold lg:text-[3rem] text-[1.5rem] leading-[1.8125rem] text-[#1E1E1E] lg:leading-[3.630625rem]">
                  Create Account
                </h1>
                <p className="font-medium text-[#4B4B4B] text-[1rem] leading-[1.21rem] lg:text-[1.5rem] text-center lg:leading-[1.8125rem]">
                  Click on the Sign In Button in the welcome section to login if
                  you already have an account
                </p>
              </div>
              {message && (
                <div className="text-center mb-4">
                  <p
                    className={`text-${
                      message.includes("success") ? "green" : "red"
                    }-500`}
                  >
                    {message}
                  </p>
                </div>
              )}
              {/* Form Inputs */}
              <div className="flex flex-col px-[3rem] mt-[1rem] gap-[1rem]">
                <input
                  type="text"
                  placeholder="User Name"
                  className="lg:text-[0.875rem] text-[0.5rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="lg:text-[0.875rem] text-[0.5rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="lg:text-[0.875rem] text-[0.5rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="lg:text-[0.875rem] text-[0.5rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="lg:text-[0.875rem] text-[0.5rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="Location (optional)"
                    className="lg:text-[0.875rem] text-[0.5rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272] w-full"
                    name="location"
                    value={formData.location}
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

              {/* Submit Button */}
              <div className="w-full px-[3rem] mt-[1rem]">
                <CustomButton
                  style="w-full bg-[#228B22] lg:rounded-[0.25rem] text-white p-[0.625rem] font-semibold"
                  text="Sign Up"
                  onClick={handleSignUp}
                />
              </div>
            </div>
          ) : (
            <div className="lg:p-6">
              {/* Form Header */}
              <div className="flex flex-col justify-center items-center gap-[0.5rem]">
                <h1 className="font-semibold lg:text-[3rem] text-[1.5rem] leading-[1.8125rem] text-[#1E1E1E] lg:leading-[3.630625rem]">
                  Sign In
                </h1>
                <p className="font-medium text-[#4B4B4B] text-[1rem] leading-[1.21rem] lg:text-[1.5rem] text-center lg:leading-[1.8125rem]">
                  Input your credentials to access your Bola Cash Account
                </p>
              </div>

              {/* Form Inputs */}
              <div className="flex flex-col px-[3rem] mt-[1rem] gap-[1rem]">
                <input
                  type="email"
                  placeholder="Email"
                  className="lg:text-[0.875rem] text-[0.5rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="lg:text-[0.875rem] text-[0.5rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <p className="text-center text-gray-500 mt-3">Forgot Password?</p>
              {/* Submit Button */}
              <div className="w-full px-[3rem] mt-[1rem]">
                <CustomButton
                  style="w-full bg-[#228B22] lg:rounded-[0.25rem] text-white p-[0.625rem] font-semibold"
                  text="Sign In"
                  onClick={handleSignIn}
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
