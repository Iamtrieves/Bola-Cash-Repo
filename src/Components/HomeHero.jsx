import React from "react";
import WomanWithPlasticBag from "../assets/Images/young-woman.png";
import CustomButton from "./CustomButton";
const Hero = () => {
  return (
    <div className="bg-white lg:pt-[7rem] mt-[8.25rem] lg:mt-[5.8125rem] sm:pb-[-50rem] lg:mx-[3.5rem] mx-[1.3125rem] grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[2rem] gap-[1.875rem]">
      <div className="flex flex-col lg:gap-[2.875rem] gap-[0.75rem]">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="lg:leading-[4.5rem] leading-[1.815625rem] text-[#1E1E1E] font-semibold lg:text-[3rem] text-[1.5rem]">
            Empower Change: Transforming Tomorrow, Today!
          </h1>
          <p className="lg:leading-[2.25rem] lg:text-[1.5rem] text-[1rem] leading-[1.21rem] text-[#1E1E1E] font-normal">
            Join the movement to make a difference! Discover the power of
            recycling and be a part of the solution. Together, let's create a
            cleaner, greener future for generations to come. Click below to get
            started!
          </p>
        </div>
        <div>
          <CustomButton
            style="py-[1rem] lg:px-[2rem] px-[1.375rem] bg-[#228B22] rounded-[0.25rem] text-white font-semibold lg:text-[1.406875rem] lg:leading-[1.7025rem] text-[1rem] leading:[1.21rem] md:w-auto"
            text="Get Started"
          ></CustomButton>
        </div>
      </div>
      <div className="lg:w-[35.75rem] lg:h-[28.6875rem] h-[16.375rem]">
        <img src={WomanWithPlasticBag} alt="" />
      </div>
    </div>
  );
};

export default Hero;
