import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import LocationIcon from "../assets/icons/location.svg";
import { createAccount, signIn } from "../requests/apiService";
import useAuth from "./auth";
import { usePopUp } from "./PopUpContext";
import { useLoading } from "../assets/context/LoadingAnimationContext";

const SignUpForm = () => {
  const { showLoading, hideLoading } = useLoading();
  const location = useLocation();
  const [toggle, setToggle] = useState(false); // Controls flex direction and form switching
  const [isSignedUp, setIsSignedUp] = useState(false); // Tracks successful registration
  const { isSignedIn, setIsSignedIn } = useAuth();
  const { showPopUp } = usePopUp();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    location: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.userName) newErrors.userName = "User name is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format!";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required!";
    if (!/^\d{11}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be 11 digits.";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters!";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match!";
    if (!formData.location) newErrors.location = "Location is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const validateSignInForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format!";
    }

    if (!formData.password) {
      newErrors.password = "Password is required!";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

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
    if (!validateForm()) {
      return;
    }
    setErrorMessage("");
    setSuccessMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    showLoading();
    try {
      const response = await createAccount({
        userName: formData.userName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        location: formData.location || null,
      });
      hideLoading();
      const username = response.newUser.userName;
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
        showPopUp({
          title: "Success",
          username: `${username}`,
          message:
            "your Bola Cash account has been created, sign in to turn your trash to funds.",
          // username: formData.userName,
          className: "bg-[white] text-black",
        });
      } else {
        setErrorMessage("An error occurred.");
      }
    } catch (error) {
      hideLoading();
      if (error.message === "user already exists") {
        showPopUp({
          title: "Account Exists",
          message:
            "You already have an account with us, sign in to view your profile.",
          className: "bg-[#BF1D1D] text-white border border-[red]",
        });
        setIsSignedUp(true);
      } else {
        showPopUp({
          title: "Network Error",
          message:
            "Your internet has been disconnected, please reconnect and try again.",
          className: "bg-[#BF1D1D] text-white border border-[red]",
        });
      }
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateSignInForm()) return; // Run validation before API call
    setErrorMessage(""); // Clear any previous errors
    setSuccessMessage(""); // Clear any previous success messages
    showLoading();
    try {
      const signInData = {
        email: formData.email,
        password: formData.password,
      };

      // Call the `signIn` API
      const response = await signIn(signInData);

      hideLoading();
      if (response?.message === "Login Successful") {
        const username = response.user?.userName || "User";
        setSuccessMessage("Sign In Successful!");
        setIsSignedIn(true);

        showPopUp({
          title: "You're Logged In",
          username: `${username}`,
          message:
            "let's get right into the art of turning your trash to funds",
          className: "bg-white text-black",
        });

        navigate("/");
        return;
      }
    } catch (error) {
      hideLoading();
      if (error?.message === "Password is incorrect") {
        showPopUp({
          title: "Error",
          message:
            "The password you have entered is incorrect, kindly make corrections and try again",
          className: "bg-[#BF1D1D] text-white border border-[red]",
        });
        return;
      }
      if (error?.message === "User with email not found!") {
        showPopUp({
          title: "Login Error",
          message:
            "There is no account with the information you provided, kindly recheck your details or click on register to create an account.",
          className: "bg-[#BF1D1D] text-white border border-[red]",
        });
        return;
      }

      if (
        error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError")
      ) {
        showPopUp({
          title: "Network Error",
          message:
            "Your internet has been disconnected, please reconnect and try again.",
          className: "bg-[#BF1D1D] text-white border border-[red]",
        });
        return;
      }

      // Default error message
      showPopUp({
        title: "Unknown Error",
        message: "Something went wrong. Please try again later.",
        className: "bg-[#BF1D1D] text-white border border-[red]",
      });
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

  // Automatically clear error messages after 3 seconds
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 3000); // Clear errors after 3 seconds
      return () => clearTimeout(timer); // Clean up timeout
    }
  }, [errors]);

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
              <div className="flex flex-col lg:px-[3rem] px-[2rem] mt-[1rem] gap-[1rem]">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="lg:text-[0.875rem] w-full text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="lg:text-[0.875rem] w-full text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]"
                    name="password"
                    value={formData.password || ""}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
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
                {errorMessage && (
                  <p className="text-red-500 text-center">{errorMessage}</p>
                )}
              </div>
              <div className="flex flex-col lg:px-[3rem] px-[2rem] mt-[1rem] gap-[1rem]">
                <div className="">
                  <input
                    type="text"
                    placeholder="User Name"
                    className={`lg:text-[0.875rem] w-full text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]`}
                    name="userName"
                    value={formData.userName || ""}
                    onChange={handleChange}
                    required
                  />
                  {errors.userName && (
                    <p className="text-red-500 text-sm">{errors.userName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`lg:text-[0.875rem] w-full
                     text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]`}
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className={`lg:text-[0.875rem] w-full text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]`}
                    name="phoneNumber"
                    value={formData.phoneNumber || ""}
                    onChange={handleChange}
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className={`lg:text-[0.875rem] w-full text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272]`}
                    name="password"
                    value={formData.password || ""}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={`lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272] w-full
                  }`}
                    name="confirmPassword"
                    value={formData.confirmPassword || ""}
                    onChange={handleChange}
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="Location (optional)"
                    className={`lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272] w-full ${
                      errors.location ? "border-red-600" : "border-green-400"
                    }`}
                    name="location"
                    value={formData.location || ""}
                    onChange={handleChange}
                    required
                  />
                  {errors.location && (
                    <p className="text-red-500 absolute -bottom-5 left-0 text-sm">
                      {errors.location}
                    </p>
                  )}
                  <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                    <img
                      className="w-5 h-5 object-cover"
                      src={LocationIcon}
                      alt="Location Icon"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-[3rem] mt-[1.8rem]">
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
