import React from "react";

const Modal = ({ isVisible }) => {
  return (
    <div
      className={`w-44 text-center absolute shadow-md border border-[#E9F3E9] z-10 lg:top-16 top-[-165%] lg:right-[60%] right-[-10%] p-2 rounded-2xl bg-[#E9F3E9] transition-all duration-300 transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 z-0"
      } `}
    >
      <div className="flex flex-col">
        <div className="border-[#228B2280] text-[#1E1E1E] text-start text-[1rem] font-semibold leading-[1.21rem]  border-b-[1px] p-[0.625rem]">
          My Profile
        </div>
        <div className="border-[#228B2280] text-[#1E1E1E] text-start text-[1rem] font-semibold leading-[1.21rem]  border-b-[1px] p-[0.625rem]">
          Security Settings
        </div>
        <div className="p-[0.625rem] text-[#1E1E1E] text-start text-[1rem] font-semibold leading-[1.21rem]">
          Sign out
        </div>
      </div>
    </div>
  );
};

export default Modal;
