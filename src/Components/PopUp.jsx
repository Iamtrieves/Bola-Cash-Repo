import React from "react";
import CloseModalIcon from "../assets/icons/close-modal-icon.svg";
import ModalCheckIcon from "../assets/icons/modal-check-icon.svg";

const PopUp = ({ isVisible, onClose, message, username, title, className }) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Blur Background */}
      <div className="fixed inset-0 bg-[#228B2233] backdrop-blur-sm z-20"></div>

      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl shadow-lg z-30 w-[19.3rem] ${className}`}
      >
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="flex items-center w-full relative py-[0.4375rem]">
            <h1 className="font-semibold text-[1.5rem] leading-[2.25rem] mx-auto">
              {title}
            </h1>
            <button
              className="size-10 absolute right-0 justify-end flex"
              onClick={onClose}
            >
              <img
                src={CloseModalIcon}
                alt="Close"
                className="object-cover size-full"
              />
            </button>
          </div>

          <div className="text-center">
            <p className="text-base leading-[1.5rem]">
              {username ? `${username}, ${message}` : message}
            </p>
          </div>

          <div className="size-14">
            <img
              src={ModalCheckIcon}
              alt="Success"
              className="object-cover size-full"
            />
          </div>
        </div>

        {/* <div className="mt-6 text-center">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
            onClick={onClose}
          >
            OK
          </button>
        </div> */}
      </div>
    </>
  );
};

export default PopUp;
