import ContactPageHero from "../Components/ContactPageHero";
import LayoutBackground from "../Components/LayoutBackground";
const ContactPage = () => {
  return (
    <div className="pt-[5rem]">
      <LayoutBackground
        firstImageHeight="0px"
        topPosition="0px"
        secondImageHeight="0px"
      />
      <ContactPageHero />
    </div>
  );
};

export default ContactPage;
