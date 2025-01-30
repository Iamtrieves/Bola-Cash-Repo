import LoadingAnimationIcon from "../assets/icons/bola-cash-logo-icon.svg";

const LoadingAnimation = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-[#228B2233] backdrop-blur-sm z-20"></div>
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="animate-bounceSlow size-20">
          <img
            src={LoadingAnimationIcon}
            className="object-cover size-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LoadingAnimation;
