import RecycleBackground from "../assets/Images/landing-page-images/repeated-recycle-icon-background.png";

const LayoutBackground = ({
  topPosition = "1150px",
  secondImageHeight = "1000px",
}) => {
  return (
    <div className="overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute hidden lg:block z-[-1] w-full`}
        style={{ top: topPosition }}
      >
        <div className="relative w-full h-full overflow-x-hidden">
          <img
            src={RecycleBackground}
            alt="Background Fading Image"
            className="w-full h-full object-cover opacity-5 scale-[1.5] overflow-x-hidden"
          />
        </div>
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={RecycleBackground}
            alt="Background Fading Image"
            className={`w-full object-cover opacity-5 scale-[1.5] overflow-x-hidden`}
            style={{ height: secondImageHeight }}
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutBackground;
