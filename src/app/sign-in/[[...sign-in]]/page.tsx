import { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Notes-GPT - Sign In",
};

const SignInPage = () => (
  <div className="flex h-screen items-center justify-center">
    <SignIn appearance={{ variables: { colorPrimary: "#0F172a" } }} />
  </div>
);

export default SignInPage;
