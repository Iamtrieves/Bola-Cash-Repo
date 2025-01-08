import RecycleBackground from "../assets/Images/landing-page-images/repeated-recycle-icon-background.png";

const LayoutBackground = ({
  topPosition = "1150px",
  secondImageHeight = "1000px",
}) => {
  return (
    <div>
      {/* Background Image */}
      <div
        className={`absolute hidden lg:block z-[-1]`}
        style={{ top: topPosition }}
      >
        <img
          src={RecycleBackground}
          alt="Background Fading Image"
          className="w-full h-full object-cover opacity-5 scale-[1.5]"
        />
        <img
          src={RecycleBackground}
          alt="Background Fading Image"
          className={`w-full object-cover opacity-5 scale-[1.5]`}
          style={{ height: secondImageHeight }}
        />
      </div>
    </div>
  );
};

export default LayoutBackground;
