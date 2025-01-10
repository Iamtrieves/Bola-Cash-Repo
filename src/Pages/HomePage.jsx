import React from "react";
import HomeHero from "../Components/HomeHero";
import HomeCards from "../Components/HomeCards";
import LayoutBackground from "../Components/LayoutBackground";
import CustomButton from "../Components/CustomButton";
import UnlockEcoWisdomImage from "../assets/Images/landing-page-images/unlock-eco-wisdom.svg";
import HowItWorksImage from "../assets/Images/landing-page-images/how-it-works.svg";
import OrderImage from "../assets/Images/landing-page-images/landing-page-order-icon.svg";

const HomePage = () => {
  return (
    <div className="relative overflow-x-hidden w-full">
      <HomeHero />
      {/* Background Image */}
      <LayoutBackground topPosition="850px" />
      <HomeCards maxCards={3} />
      <section className="lg:mt-[14rem] mt-[1.875rem] grid lg:grid-cols-2 grid-cols-1 lg:gap-[3.0625rem] gap-[1.875rem] items-center lg:px-[3.5rem] px-[1.3125rem]">
        <div className="flex flex-col lg:gap-[2.75rem] gap-[0.75rem]">
          <div className="flex flex-col lg:gap-[1.5rem] gap-[0.75rem]">
            <h1 className="text-[#1E1E1E] font-semibold leading-[1.815625rem] text-[1.5rem] lg:leading-[3.025625rem] lg:text-[2.5rem]">
              Unlock Eco-Wisdom
            </h1>
            <p className="text-[#1E1E1E] lg:text-[1.5rem] font-normal leading-[1.21rem] text-[1rem] lg:leading-[2.25rem]">
              Discover the secrets to living green and making a positive impact
              on the planet! Dive into our recycling tips and education section
              for practical advice, helpful resources, and eco-friendly
              inspiration. Together let's embrace a more sustainable way of
              living. Start exploring now!
            </p>
          </div>
          <div>
            <CustomButton text="Explore"></CustomButton>
          </div>
        </div>
        <div>
          <img src={UnlockEcoWisdomImage} alt="" />
        </div>
      </section>
      <section className="lg:mt-[14rem] mt-[1.875rem] lg:px-[3.5rem] px-[1.3125rem] lg:mb-[14rem] mb-[1.875rem]">
        <div className="flex lg:gap-[1rem] gap-[0.3125rem] flex-col mb-[1.875rem]">
          <h1 className="font-semibold lg:text-[2.5rem] text-[1.5rem] leading-[1.815625rem] lg:leading-[3.025625rem] text-[#1E1E1E]">
            How it Works
          </h1>
          <p className="text-[#444444] lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.875rem] text-justify">
            Curious about how our recycling system works? It's as easy as 1-2-3!
            Follow these simple steps to start making a difference today. From
            finding nearby recycling centers to tracking your environmental
            impact, we've got you covered every step of the way. Let's get
            started!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[5.125rem] items-center lg:mt-[2.5rem]">
          <div>
            <div className="mb-[1rem]">
              <h1 className="font-semibold text-[#1E1E1E] text-[1.5rem] leading-[1.815625rem] mb-[0.5rem]">
                Step 1: Sign up on BolaCash
              </h1>
              <p className="text-[#444444] lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.875rem] text-justify">
                Join our community of eco-conscious individuals by creating your
                account. Signing up is quik and easy, and it unlocks a world of
                opportunities to make a positive impact on the planet. Get
                started on your journey towards a greener lifestyle today!
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-[#1E1E1E] text-[1.5rem] leading-[1.815625rem] mb-[0.5rem]">
                Step 2: Get recyclables
              </h1>
              <p className="text-[#444444] lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.875rem] text-justify">
                Gather your recyclables and prepare to make a difference!
                Collect plastics, paper, glass, and more, and get ready to give
                them a new life through recycling. Every item you recycle brings
                us one step closer to a cleaner, greener future. Let's start
                recycling together!
              </p>
            </div>
          </div>
          <div>
            <img src={HowItWorksImage} alt="" />
          </div>
        </div>
        <div className="mt-[2.875rem] grid lg:grid-cols-2 grid-cols-1 gap-[5.125rem] items-center">
          <div className="lg:order-1 order-2">
            <img src={OrderImage} alt="" />
          </div>
          <div className="order-1 lg:order-2">
            <div>
              <h1 className="font-semibold text-[#1E1E1E] text-[1.5rem] leading-[1.815625rem] mb-[0.5rem]">
                Step 3: Request for Pickup or drop off at our recycle center
              </h1>
              <p className="text-[#444444] lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.875rem] text-justify">
                Convenience meets sustainability with our pickup or drop-off
                option! Simply request a pickup for your recyclables or drop
                them off at our designated recycling center. We'll handle the
                resst, ensuringyour items are recycled reponsibly. Start your
                eco-friendly journey today with ease and convenience!
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-[#1E1E1E] text-[1.5rem] leading-[1.815625rem] mt-[1rem] mb-[0.5rem]">
                Step 4: Collect your reward
              </h1>
              <p className="text-[#444444] lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.875rem] text-justify">
                Congratualations on your eco-friendly efforts! It's time to reap
                the rewards for your sustainable actions. Collect points or
                incentives for every item you recycle and exchange them for
                exciting rewards. Your commitment to recycling not only benefits
                the environment but also earns you valuable rewards. Start
                collecting your rewards today and make a positive impact!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#228B22] flex flex-col lg:gap-[3.5rem] gap-[1rem] text-[#FFFFFF] py-[0.75rem] px-[1.5625rem]  lg:pt-[3.5rem] lg:pb-[1.5rem] lg:px-[7rem]">
        <div>
          <h1 className="lg:text-[2.5rem] text-[2rem] leading-[1.815625rem] lg:leading-[3.025625rem] font-semibold">
            Our Achievements in Numbers
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col gap-[1.5rem]">
          <div className="border-t-[1px] border-[#58ba58] pl-[0.25rem]  lg:pt-[3.5rem] lg:pb-[3.5rem] lg:pl-[1rem] pr-[3.25rem] ">
            <h2 className="lg:pb-[1.875rem] text-[1rem] lg:text-[2.5rem] font-semibold leading-[3.025625rem]">
              5.6k
            </h2>
            <p className="lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.5125rem]">
              Total amount of waste recycled
            </p>
          </div>
          <div className="border-t-[1px] border-[#58ba58] pl-[0.25rem]  lg:pt-[3.5rem] lg:pb-[3.5rem] lg:pl-[1rem] pr-[3.25rem]">
            <h2 className="lg:pb-[1.875rem] text-[1rem] lg:text-[2.5rem] font-semibold leading-[3.025625rem]">
              1.1k
            </h2>
            <p className="lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.5125rem]">
              Number of users registered
            </p>
          </div>
          <div className="border-t-[1px] border-[#58ba58] pl-[0.25rem]  lg:pt-[3.5rem] lg:pb-[3.5rem] lg:pl-[1rem] pr-[3.25rem]">
            <h2 className="lg:pb-[1.875rem] text-[1rem] lg:text-[2.5rem] font-semibold leading-[3.025625rem]">
              100+
            </h2>
            <p className="lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.5125rem]">
              Percentage of materials diverted from landfills
            </p>
          </div>
          <div className="border-t-[1px] border-[#58ba58] pl-[0.25rem]  lg:pt-[3.5rem] lg:pb-[3.5rem] lg:pl-[1rem] pr-[3.25rem]">
            <h2 className="lg:pb-[1.875rem] text-[1rem] lg:text-[2.5rem] font-semibold leading-[3.025625rem]">
              1.1k
            </h2>
            <p className="lg:text-[1.25rem] text-[1rem] leading-[1.21rem] lg:leading-[1.5125rem]">
              Total rewards earned by users
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
