import React from "react";
import Cards from "./Cards";
import data from "../../cards";

const HomeCards = ({ maxCards }) => {
  const cardsToRender = maxCards ? data.slice(0, maxCards) : data;

  return (
    <div className="relative homecards lg:mx-[3.5rem] mx-[1.3125rem] lg:pt-[10.25rem] md:pt-[13rem]">
      <div className="lg:text-center">
        <h1 className="text-[#1E1E1E] font-semibold lg:text-[2.5rem] text-[1.25rem] leading-[1.5125rem] lg:leading-[3.025625rem] lg:mb-[1rem] mb-[0.3125rem]">
          Our Key Services
        </h1>
        <p className="font-normal text-[#444444] lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.875rem] lg:mb-[2.875rem] mb-[1.875rem]">
          Discover the power of our features! From finding nearby recycling
          centers to earning rewards for your eco-friendly actions, our platform
          offers everything you need to make a positive impact on the planet.
          Explore now and start your journey towards a greener future.
        </p>
      </div>

      {/* Flex container */}
      <div className="flex flex-wrap gap-[1.5rem]">
        {cardsToRender.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] flex" // Flex wrapper
          >
            <Cards
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
