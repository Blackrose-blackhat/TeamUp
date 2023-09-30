"use client";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import GoogleLogo from "../../../public/assets/Frame.png";
import { FcGoogle } from "react-icons/fc";
import { InputField } from "@/components/InputField";
import { AiFillGoogleCircle } from "react-icons/ai";
const SignInPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pendingVerification, setpendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  //submit form
  // const handlesubmit = async(e) => {

  // };

  // //verify user Email code

  // const onPressVerify = async(e) => {

  // };

  return (
    <div className="  w-full h-[90%] flex  justify-center align-middle ">
      <div className="  flex flex-row w-full md:w-1/2 justify-center align-middle ">
        <div className="  flex flex-col py-20 gap-5 w-4/5 lg:ml-40   ">
          <div>
            <Image src="/assets/logo.png" width={160} height={140} alt="logo" />
          </div>
          <div className="font-regular text-secondary -mt-7">
            <p>Get your Dream Team Now! </p>
          </div>
          <div className="w-full mt-10">
            <div className="flex flex-col w-full lg:w-full gap-8">
              <InputField
                placeholder="Email"
                type="email"
                label=""
                value={email}
                onChange={(newvalue: string) => setEmail(newvalue)}
              />
              <InputField
                placeholder="Password"
                type="password"
                label=""
                value={password}
                onChange={(newvalue: string) => setEmail(newvalue)}
              />
              <div className="transition ease-in-out   hover:-translate-y-1 cursor-pointer  hover:bg-indigo-500 duration-300  bg-primary w-full lg:w-2/3  p-3 rounded-lg">
                <p className="text-white text-center font-bold">
                  Create Account!
                </p>
              </div>
              <div className="flex gap-7 flex-row w-full lg:w-2/3 justify-center align-middle">
                <div className="h-0.5 w-1/2 bg-secondary rounded-md" />
                <p className=" text-xl -mt-3 text-secondary">OR</p>
                <div className="h-0.5 w-1/2 bg-secondary rounded-md" />
              </div>
              <div className=" text-lg lg:text-xl font-semibold text-secondary delay-75 hover:translate-y-1 transition cursor-pointer  hover:text-white hover:bg-primary justify-center border-2 border-secondary w-full lg:w-2/3  p-2 rounded-lg flex flex-row md:gap-5   align-middle">
                <div className="text-3xl align-middle flex flex-row justify-center">
                  <FcGoogle />
                </div>
                
                  Sign In With Google
                
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap flex-row justify-start align-middle gap-3 p-3 ">
              <p className=" text-secondary font-semibold">Already have an Account?</p>
              <p className="font-bold text-primary">Sign up </p>
            </div>
            <div className=" -mt-4 flex flex-row flex-wrap justify-start align-middle gap-1 p-3 ">
              <p className=" text-sm text-secondary font-semibold">By signing up you agree to </p>
              <p className=" text-sm font-bold text-primary">Terms & Conditions </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2  hidden lg:block">
        
      </div>
    </div>
  );
};

export default SignInPage;
