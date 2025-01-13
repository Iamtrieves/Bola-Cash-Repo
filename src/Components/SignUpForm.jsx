import CustomButton from "./CustomButton";
const SignUpForm = () => {
  return (
    <div>
      <section className="flex lg:flex-row lg:p-[5rem] flex-col  flex-grow h-full w-full">
        <section className="signup-form-background shadow-md rounded-tl-3xl rounded-bl-3xl w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-[1rem]">
            <h1 className="font-semibold lg:text-[3rem] lg:leading-[4.5rem]">
              Welcome Back!
            </h1>
            <p className="lg:text-[1.5rem] text-center lg:leading-[1.8125rem] font-medium text-[#1E1E1E]">
              To connect back with us please login with your personal info
            </p>
            <CustomButton
              style="border border-black text-[black] rounded-[0.25rem] text-white px-[1rem] p-[0.625rem] mt-[1rem] font-semibold"
              text="Sign In"
            />
          </div>
        </section>
        <section className="w-1/2 lg:py-[3rem] lg:px-[1.8125rem] border rounded-tr-3xl rounded-br-3xl  shadow-sm">
          <div className="lg:p-6">
            <div className="flex flex-col justify-center items-center gap-[0.5rem]">
              <h1 className="font-semibold lg:text-[3rem] lg:leading-[3.630625rem]">
                Create Account
              </h1>
              <p className="font-medium text-[#4B4B4B] lg:text-[1.5rem] text-center lg:leading-[1.8125rem]">
                To connect back with us please login with your personal info
              </p>
            </div>
            <div className="flex flex-col lg:px-[3rem] lg:mt-[1rem] gap-[1rem]">
              <input
                type="text"
                placeholder="User Name"
                className="lg:text-[0.875rem] lg:leading-[1rem] lg:p-2 border border-green-300 text-[#727272]"
              />
              <input
                type="email"
                placeholder="Email"
                className="lg:text-[0.875rem] lg:leading-[1rem] lg:p-2 border border-green-300 text-[#727272]"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="lg:text-[0.875rem] lg:leading-[1rem] lg:p-2 border border-green-300 text-[#727272]"
              />
              <input
                type="password"
                placeholder="Password"
                className="lg:text-[0.875rem] lg:leading-[1rem] lg:p-2 border border-green-300 text-[#727272]"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="lg:text-[0.875rem] lg:leading-[1rem] lg:p-2 border border-green-300 text-[#727272]"
              />
              <input
                type="location"
                placeholder="Location (optional)"
                className="lg:text-[0.875rem] lg:leading-[1rem] lg:p-2 border border-green-300 text-[#727272]"
              />
            </div>
            <div className="w-full lg:px-[3rem] lg:mt-[1rem]">
              <CustomButton
                style="w-full bg-[#228B22] rounded-[0.25rem] text-white p-[0.625rem] font-semibold"
                text="Sign Up"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SignUpForm;
