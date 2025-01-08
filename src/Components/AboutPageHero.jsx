import CurveHeroBackground from "../assets/Images/about-page-images/hero-section-curve.svg";

const AboutPageHero = () => {
  return (
    <>
      <div className="about-hero-section center h-[32rem] lg:h-[147dvh] relative py-[5rem] px-[2.4rem] lg:px-[11.2rem] lg:pt-0">
        <section className="w-[32.7m] lg:w-full text-center text-white lg:relative lg:bottom-[1.5rem]">
          <h1 className="font-semibold text-[1.5rem] lg:text-[3rem] leading-[1.815625rem] lg:leading-[3.630625rem] mb-[0.312rem] lg:mb-[1.2rem]">
            About Us
          </h1>
          <p className="font-medium lg:text-[2rem] lg:leading-[2.420625rem] text-[1rem] leading-[1.21rem] lg:mt-[0.75rem] lg:mb-[1.5rem] mb-[0.3125rem] mt-[]">
            Empower Change: Transforming Tomorrow, Today!
          </p>
          <p className="text-[1.2rem] lg:text-[2.4rem] leading-[1.8rem] lg:leading-[3.6rem]">
            Welcome to BolaCash! Since 2024, we've been on a mission to
            revolutionize recycling. Our platform connects eco-conscious
            individuals with resources to make a positive impact. Join us on
            this journey toward a cleaner, greener future!
          </p>
        </section>
        <section className=" absolute bottom-0 left-0 h-[5rem] lg:h-[18rem] w-full">
          <img
            src={CurveHeroBackground}
            alt="Hero Curve Image"
            className="size-full object-cover  object-left-top"
          />
        </section>
      </div>
    </>
  );
};

export default AboutPageHero;
