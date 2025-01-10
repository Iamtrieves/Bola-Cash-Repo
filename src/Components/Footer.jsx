import BolaCashLogo from "../assets/Images/Bola-Logo.svg";
import CustomButton from "./CustomButton";
import UseWindowSize from "./UseWindowSize";
import TelegramWhiteIcon from "../assets/icons/telegram-white.svg";
import TelegramIcon from "../assets/icons/telegram.svg";
import XWhiteIcon from "../assets/icons/x-white.svg";
import XIcon from "../assets/icons/x.svg";
import InstagramWhiteIcon from "../assets/icons/instagram-white.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
const Footer = () => {
  const screenWidth = UseWindowSize();
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={`flex ${
        screenWidth >= 1024 ? "flex-row" : "flex-col"
      } lg:pl-[4.75rem] pl-[1.5rem] lg:pt-[4rem] pt-[1.875rem] gap-[1.875rem] bg-white`}
    >
      {/* First Element */}
      <div className="flex flex-col gap-8 flex-1">
        {screenWidth >= 1024 ? (
          // Large Screen Content
          <>
            <div>
              <img src={BolaCashLogo} alt="" />
            </div>
            <div>
              <p className="font-normal text-[1rem] leading-[1.21rem]">
                Click below to get started and be a part of the change!
              </p>
            </div>
            <div>
              <CustomButton text="Get Started" />
            </div>
          </>
        ) : (
          // Small Screen Content
          <>
            <div>
              <img src={BolaCashLogo} alt="" />
            </div>
            <div>
              <p className="font-normal text-[1rem] leading-[1.21rem]">
                Ready to make a difference? Join our community of eco-warriors
                and start recycling with ease! Together, we can create a
                greener, cleaner future for generations to come. Click below to
                get started and be a part of the change!
              </p>
            </div>
            <div>
              <CustomButton text="Explore" />
            </div>
          </>
        )}
      </div>

      {/* Second Element */}
      <div
        className={`flex-1 ${
          screenWidth >= 1024
            ? "bg-[#228B22] text-white" // Large screen background
            : "bg-white " // Small screen background
        } p-[3rem] rounded-tl-[5rem] border-[1px] border-[#57c057]`}
      >
        <div className="flex lg:gap-32 gap-10 flex-col">
          <div className="flex lg:gap-[9.5rem] gap-[3.75rem] lg:flex-row flex-col">
            <div className="">
              <h1 className="lg:text-[0.75rem] text-[0.625rem] lg:text-white text-[#B1A9A9] mb-[1rem]">
                CONTACT
              </h1>
              <p className="text-[1.125rem]">+234 90 4020 2143</p>
              <p className="text-[1.125rem]">bolacash@gmail.com</p>
            </div>
            <div>
              <h1 className="lg:text-[0.75rem] text-[0.625rem] lg:text-white text-[#B1A9A9] mb-[1rem]">
                FOLLOW US
              </h1>
              <div className="flex lg:gap-5 gap-3">
                <div>
                  {screenWidth >= 1024 ? (
                    <img src={InstagramWhiteIcon} alt="Instagram White Icon" />
                  ) : (
                    <div className="border rounded-[50%] border-[#228B22] p-3">
                      <img src={InstagramIcon} alt="Instagram Icon" />
                    </div>
                  )}
                </div>
                <div>
                  {screenWidth >= 1024 ? (
                    <img src={XWhiteIcon} alt="X White Icon" />
                  ) : (
                    <div className="border rounded-[50%] border-[#228B22] p-3">
                      <img src={XIcon} alt="X Icon" />
                    </div>
                  )}
                </div>
                <div>
                  {screenWidth >= 1024 ? (
                    <img src={TelegramWhiteIcon} alt="Telegram White Icon" />
                  ) : (
                    <div className="border rounded-[50%] border-[#228B22] p-3">
                      <img src={TelegramIcon} alt="Telegram Icon" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[0.75rem] leading-[1.125rem]">
              <span>&copy; {currentYear}</span> - Copyright
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
