import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="flex h-screen items-center justify-center">
    <SignUp appearance={{ variables: { colorPrimary: "#0F172a" } }} />
  </div>
);

export default SignUpPage;
