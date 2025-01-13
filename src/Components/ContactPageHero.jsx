import CustomButton from "./CustomButton";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import MessageIcon from "../assets/icons/message-icon.svg";

const ContactPageHero = () => {
  return (
    <>
      <div className="m-[1.75rem] lg:mt-[7.625rem] lg:mx-[3.6rem] flex flex-col lg:gap-[8.5rem] gap-[1.8rem]">
        <section className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-[1.5rem] leading-[1.815625rem] lg:text-[3rem] lg:leading-[3.630625rem]">
            Contact Us
          </h1>
          <p className="text-[#4B4B4B] font-medium lg:text-[1.5rem] lg:leading-[1.815625rem]">
            Any question or remarks? Just write us a message!
          </p>
        </section>
        <section className="flex lg:flex-row flex-col lg:gap-[4.75rem] gap-[2rem] w-full">
          <section className="p-[2.5rem] border shadow-sm lg:w-1/3 flex flex-col lg:gap-[2rem] gap-[1.5rem]">
            <div className="flex flex-col gap-[1.5rem]">
              <div className="flex items-center gap-[1rem] font-medium lg:text-[1rem] lg:leading-[1.5rem]">
                <img src={PhoneIcon} alt="" />
                <h1 className="font-medium lg:text-[1rem] lg:leading-[1.5rem]">
                  Call To Us
                </h1>
              </div>
              <p className="lg:text-[0.875rem] lg:leading-[1.3125rem]">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="lg:text-[0.875rem] lg:leading-[1.3125rem]">
                Phone: +1 (323) 275-1718
              </p>
            </div>
            <hr className="border-black" />
            <div className="flex flex-col gap-[1.5rem]">
              <div className="flex items-center gap-[1rem] font-medium lg:text-[1rem] lg:leading-[1.5rem]">
                <img src={MessageIcon} alt="" />
                <h1 className="font-medium lg:text-[1rem] lg:leading-[1.5rem]">
                  Write To Us
                </h1>
              </div>
              <p className="lg:text-[0.875rem] lg:leading-[1.3125rem]">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="lg:text-[0.875rem] lg:leading-[1.3125rem]">
                Emails: hello@logoipsum.com
              </p>
              <p className="lg:text-[0.875rem] lg:leading-[1.3125rem]">
                Emails: hello@logoipsum.com
              </p>
            </div>
          </section>
          <section className="lg:p-[2rem] p-4 shadow-sm flex flex-col gap-[1.5rem] border lg:w-2/3">
            <div className="flex lg:flex-row flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#F5F5F5] lg:text-[1rem] lg:leading-[1.5rem] text-[0.625rem] leading-[0.613125rem] flex-grow lg:p-[1rem] py-[0.8rem] px-[0.5rem]  "
              />
              <input
                type="text"
                placeholder="Your Email"
                className="bg-[#F5F5F5] lg:text-[1rem] lg:leading-[1.5rem] text-[0.625rem] leading-[0.613125rem] flex-grow lg:p-[1rem] py-[0.8rem] px-[0.5rem]  "
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="bg-[#F5F5F5] lg:text-[1rem] lg:leading-[1.5rem] text-[0.625rem] leading-[0.613125rem] flex-grow lg:p-[1rem] py-[0.8rem] px-[0.5rem]  "
              />
            </div>
            <div>
              <textarea
                name="text"
                id="text"
                placeholder="Your Message"
                className="bg-[#F5F5F5] lg:text-[1rem] lg:leading-[1.5rem] text-[0.625rem] leading-[0.613125rem] lg:p-[0.8rem] lg:pb-[8rem] pb-[5rem] w-full lg:mb-[2rem] py-[0.8rem] px-[0.5rem] "
              ></textarea>
            </div>
            <div className="flex justify-end">
              <CustomButton text="Send Message" />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default ContactPageHero;
