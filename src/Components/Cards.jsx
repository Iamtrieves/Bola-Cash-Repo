import React from "react";

const Cards = ({ image, title, description }) => {
  return (
    <div className="bg-white flex flex-col gap-[2.5rem] rounded-[1.25rem] shadow-2xl border-[#228B2240] border pt-[1.875rem] pb-[0.9375rem] px-[1.4375rem]">
      <img
        className="rounded-[6.25rem] mx-auto w-[6.25rem] h-[6.25rem] object-cover border-[0.8125rem] border-[#BADBBA]"
        src={image}
        alt={title}
      />
      <div className="flex flex-col gap-[0.5rem]">
        <h2 className="text-[#1C1707] font-semibold text-[1rem] leading-[1.21rem]">
          {title}
        </h2>
        <p className="text-[#1C1707] text-[0.875rem] leading-[1.3125rem] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
