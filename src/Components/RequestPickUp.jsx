import CloseModalIcon from "../assets/icons/close-modal-icon.svg";
import CustomButton from "./CustomButton";
import LocationIcon from "../assets/icons/location-icon.svg";
import { useRequest } from "../assets/context/RequestPickUpContext";

const RequestPickUp = ({ isVisible }) => {
  const { hideRequest } = useRequest();
  if (!isVisible) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-[#228B2233] backdrop-blur-sm z-20"></div>
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-[1rem] bg-white rounded-md shadow-md md:w-[75%] sm:w-[65%] w-[85%] lg:w-[34rem]">
        <div>
          <div className="flex items-center w-full relative py-[0.4375rem]">
            <h1 className="font-semibold flex-wrap flex py-[0.375rem] lg:text-[1.5rem] md:text-[1rem] text-[0.9rem] lg:leading-[2.25rem] leading-[1.5rem] mx-auto">
              Enter Amount of Recyclables
            </h1>
            <div className="lg:size-10 size-7 absolute right-0 justify-end flex">
              <img
                src={CloseModalIcon}
                className="object-cover size-full"
                alt="Close"
                onClick={hideRequest}
              />
            </div>
          </div>
          <div className="py-[0.475rem] max-w-[90%] mx-auto">
            <p className="text-[#1E1E1E] text-center lg:text-[1.2rem] text-[0.9rem] leading-[0.9rem] lg:leading-[1.5rem]">
              Select the time you prefer to receive daily notifications and
              reminders
            </p>
          </div>
          <div className="flex flex-col w-full lg:gap-3 gap-2 justify-center items-center">
            <div className="lg:w-[5rem] w-[4rem] justify-center items-center flex">
              <input
                type="number"
                className="w-full lg:py-[1rem] py-[0.8rem] rounded-md bg-[green] text-white p-2 border border-[#4EA24E]"
                placeholder="00"
              />
            </div>
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Location"
                className={`lg:p-2 p-1 border rounded-md border-[#4EA24E] w-full`}
                name="location"
                required
              />

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <img
                  className="size-full rounded-md object-cover"
                  src={LocationIcon}
                  alt="Location Icon"
                />
              </div>
            </div>
            <div className="w-full">
              <input
                type="text"
                className="lg:p-2 p-1 border rounded-md border-[#4EA24E] w-full"
                placeholder="Pickup Time"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="lg:p-2 p-1 border rounded-md border-[#4EA24E] w-full"
                placeholder="Description"
              />
            </div>
            <div className="w-full">
              <CustomButton
                style="bg-[#228B22] w-full rounded-[0.25rem] text-white lg:p-[0.925rem] py-[0.4rem] font-semibold"
                text="Request for pickup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPickUp;
