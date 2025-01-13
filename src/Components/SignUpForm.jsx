import CustomButton from "./CustomButton";
const SignUpForm = () => {
  return (
    <div>
      <section>
        <section>
          <div>
            <h1>Welcome Back!</h1>
            <p>To connect back with us please login with your personal info</p>
            <CustomButton text="Sign In" />
          </div>
        </section>
        <section>
          <h1>Create Account</h1>
          <p>To connect back with us please login with your personal info</p>
          <div>
            <input type="text" />
            <input type="email" />
            <input type="text" />
            <input type="password" />
            <input type="password" />
            <input type="location" />
          </div>
          <div>
            <CustomButton text="Sign Up" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default SignUpForm;
