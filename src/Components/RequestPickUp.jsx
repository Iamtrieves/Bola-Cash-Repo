import CloseModalIcon from "../assets/icons/close-modal-icon.svg";
import { usePopUp } from "../assets/context/PopUpContext";
import CustomButton from "./CustomButton";

import LocationIcon from "../assets/icons/location-icon.svg";

import { useRequest } from "../assets/context/RequestPickUpContext";

import { useState, useEffect } from "react";

const RequestPickUp = ({ isVisible }) => {
  const { hideRequest } = useRequest();
  const { showPopUp } = usePopUp();
  const [errors, setErrors] = useState({});

  const [pickUpData, setPickUpData] = useState({
    number: "",
    location: "",
    pickUpTime: "",
    description: "",
  });

  const validatePickUp = () => {
    const pickUpError = {};

    if (!pickUpData.number) pickUpError.number = "This is required!";

    if (!pickUpData.location) pickUpError.location = "Location is required!";

    if (!pickUpData.pickUpTime)
      pickUpError.pickUpTime = "Pick Up Time is required!";

    if (!pickUpData.description)
      pickUpError.description = "Description is required!";

    setErrors(pickUpError);

    const isValid = Object.keys(pickUpError).length === 0;

    if (isValid) {
      setPickUpData({
        number: "",
        location: "",
        pickUpTime: "",
        description: "",
      });
      hideRequest();
      showPopUp({
        title: "Success",

        message: "You are on your way to turn your trash into cash!",

        className: "bg-[white] text-black",
      });
    }
    return isValid;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPickUpData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  if (!isVisible) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-[#228B2233] backdrop-blur-sm z-20"></div>

      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-4 sm:p-6 bg-white rounded-md shadow-md w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-lg">
        <div>
          <div className="flex items-center w-full relative py-2 sm:py-3">
            <h1 className="font-semibold center text-wrap text-justify flex py-[0.375rem] text-[1.5rem] lg:leading-[2.25rem] leading-[1.5rem] mx-auto">
              Enter Amount of Recyclables
            </h1>
            <div className="lg:size-10 size-7 absolute right-0 justify-end flex">
              <img
                src={CloseModalIcon}
                className="object-cover size-full"
                alt="Close"
                onClick={hideRequest}
              />
            </div>
          </div>
          <div className="py-[0.475rem] max-w-[90%] mx-auto">
            <p className="text-[#1E1E1E] text-center text-[1.2rem] leading-[1.5rem]">
              Select the time you prefer to receive daily notifications and
              reminders
            </p>
          </div>
          <div className="flex flex-col w-full gap-4 justify-center items-center">
            <div className="lg:w-[5rem] w-[4rem] text-center justify-center items-center flex-col flex">
              <input
                type="number"
                onChange={handleChange}
                className="w-full lg:py-[1rem] py-[0.8rem] rounded-md bg-[green] text-white p-2 border border-[#4EA24E]"
                placeholder="00"
                name="number"
                value={pickUpData.number || ""}
              />
              {errors.number && (
                <p className="text-red-500 w-[200%] text-sm">{errors.number}</p>
              )}
            </div>
            <div className="w-full relative">
              <input
                type="text"
                onChange={handleChange}
                placeholder="Location"
                className={`lg:p-2 p-1 border rounded-md border-[#4EA24E] w-full`}
                name="location"
                value={pickUpData.location || ""}
                required
              />
              {errors.location && (
                <p className="text-red-500 absolute -bottom-5 left-0 text-sm">
                  {errors.location}
                </p>
              )}

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <img
                  className="size-full rounded-md object-cover"
                  src={LocationIcon}
                  alt="Location Icon"
                />
              </div>
            </div>
            <div className="w-full">
              <input
                type="text"
                onChange={handleChange}
                className={`lg:p-2 p-1 border rounded-md border-[#4EA24E] ${
                  errors.location ? "mt-3" : ""
                } w-full`}
                placeholder="Pickup Time"
                name="pickUpTime"
                value={pickUpData.pickUpTime || ""}
              />
              {errors.pickUpTime && (
                <p className="text-red-500 text-sm">{errors.pickUpTime}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                onChange={handleChange}
                className="lg:p-2 p-1 border rounded-md border-[#4EA24E] w-full"
                placeholder="Description"
                name="description"
                value={pickUpData.description || ""}
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>
            <div className="w-full">
              <CustomButton
                style="bg-[#228B22] w-full rounded-[0.25rem] text-white lg:p-[0.625rem] py-[0.4rem] font-semibold"
                text="Request for pickup"
                onClick={validatePickUp}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPickUp;
