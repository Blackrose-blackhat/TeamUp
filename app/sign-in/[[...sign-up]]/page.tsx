"use client";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import signupImage from "../../../public/assets/signup.jpg";
const SignInPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
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
    <div className="w-full  p-10">
      <div className="   p-10 flex flex-row justify-center align-middle w-full">
        {/* //form */}
        <div className="w-1/2  flex flex-col gap-5  align-middle p-5">
          <div className="w-full flex flex-row justify-center">
            <div className="w-full justify-start flex flex-row ">
              <Image
                src="/assets/logo.png"
                width={160}
                height={140}
                alt="logo"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="justify-center flex-row font-bold text-secondary ml-2 ">
              <h1>Hi There!</h1>
            </div>
            <div className="font-normal text-secondary ml-2 mb-10">
              <h3>Get your own Dream Team Now </h3>
            </div>
            <div className="flex flex-col gap-5">
              <div className="ml-2 w-full">
                <input className="focus:outline-none border-2 p-2 w-full lg:w-2/4 " type="email" placeholder="Enter your Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
