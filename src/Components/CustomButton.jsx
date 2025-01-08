import React from "react";

const CustomButton = (props) => {
  return (
    <button
      className={
        props.style
          ? props.style
          : "bg-[#228B22] rounded-[0.25rem] text-white p-[0.625rem] font-semibold"
      }
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
