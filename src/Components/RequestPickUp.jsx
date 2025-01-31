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
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-[1rem] bg-white rounded-md shadow-md">
        <div>
          <div className="flex items-center w-full relative py-[0.4375rem]">
            <h1 className="font-semibold py-[0.375rem] text-[1.5rem] leading-[2.25rem] mx-auto">
              Enter Amount of Recyclables
            </h1>
            <div className="size-10 absolute right-0 justify-end flex">
              <img
                src={CloseModalIcon}
                className="object-cover size-full"
                alt="Close"
                onClick={hideRequest}
              />
            </div>
          </div>
          <div className="py-[0.475rem]">
            <p className="text-[#1E1E1E] text-center text-[0.75rem] leading-[1rem]">
              Select the time you prefer to receive daily notifications and
              reminders:
            </p>
          </div>
          <div>
            <input type="number" />
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Location"
                className={`lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272] w-full"
                }`}
                name="location"
                required
              />

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <img
                  className="w-5 h-5 object-cover"
                  src={LocationIcon}
                  alt="Location Icon"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Pickup Time"
              className={`lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272] w-full"
                }`}
              name="location"
              required
            />
            <input
              type="text"
              placeholder="Description"
              className={`lg:text-[0.875rem] text-[0.7rem] lg:leading-[1rem] p-2 border border-green-300 text-[#727272] w-full"
                }`}
              name="location"
              required
            />
          </div>
          <div>
            <CustomButton text="Request for pickup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPickUp;
