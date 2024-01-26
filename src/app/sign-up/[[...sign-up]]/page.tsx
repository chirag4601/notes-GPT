import { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Notes-GPT - Sign Up",
};

const SignUpPage = () => (
  <div className="flex h-screen items-center justify-center">
    <SignUp appearance={{ variables: { colorPrimary: "#0F172a" } }} />
  </div>
);

export default SignUpPage;
