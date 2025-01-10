import AboutPageHero from "../Components/AboutPageHero";
import ChartImage from "../assets/Images/about-page-images/chart-image.svg";
import GroupChartImage from "../assets/Images/about-page-images/group-chat-image.svg";
import LayoutBackground from "../Components/LayoutBackground";
import HomeCards from "../Components/HomeCards";
import ObjectivesGrid from "../Components/ObjectivesGrid";

const AboutPage = () => {
  return (
    <div className="">
      <AboutPageHero />
      <section className="lg:py-[8rem] pb-[3.5625rem] px-[1.5rem] lg:px-[7rem] flex flex-col gap-[1.875rem] lg:gap-[10rem] border-b-[1.5px] border-[#228B22]">
        <div className="flex lg:flex-row flex-col gap-[1.875rem] lg:gap-[3.4375rem]">
          <div className="w-full">
            <h1 className="font-semibold lg:text-[3rem] lg:leading-[3.630625rem]">
              Our Vision
            </h1>
            <p className="lg:text-[1.5rem] lg:leading-[2.25rem] text-justify">
              Our vision at BolaCash is a world where waste is minimized,
              resources are conserved, and every individual is empowered to make
              a positive impact on the environment. We strive to revolutionize
              recycling, inspiring global communities to embrace sustainability
              and build a cleaner, greener future together.
            </p>
          </div>
          <div className="w-full">
            <img src={ChartImage} alt="Chart Image" />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-[3.4375rem]">
          <div className="w-full">
            <img src={GroupChartImage} alt="Group Chart Image" />
          </div>
          <div className="w-full">
            <h1 className="font-semibold lg:text-[3rem] lg:leading-[3.630625rem]">
              Our Mission
            </h1>
            <p className="lg:text-[1.5rem] lg:leading-[2.25rem] text-justify">
              Our mission at [Your Recycling System Web Application Name] is to
              empower individuals and communities to adopt sustainable practices
              and reduce waste. Through education and innovation, we aim to
              create a global community committed to environmental stewardship
              and a brighter future for our planet.
            </p>
          </div>
        </div>
      </section>
      <LayoutBackground topPosition="2250px" secondImageHeight="0px" />
      <HomeCards />
      <ObjectivesGrid />
    </div>
  );
};

export default AboutPage;
