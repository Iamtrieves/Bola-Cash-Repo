import SignUpForm from "../Components/SignUpForm";
import LayoutBackground from "../Components/LayoutBackground";

const SignUpPage = () => {
  return (
    <div>
      <LayoutBackground
        topPosition="0px"
        firstImageHeight="140vh"
        secondImageHeight="0px"
      />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
