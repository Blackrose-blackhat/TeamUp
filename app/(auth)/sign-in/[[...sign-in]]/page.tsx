"use client";
import { SignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const page = () => {
  const container = {
    hidden:{
      // x:-10000
      scale:0
    },
    show:{
      // x:0
      scale:1
    }
  }
  const image={
    hidden:{
      scale:0
    },
    show:{
      scale:1,
      transition: {
        delay:0.5
      }
    }
  }
  const form ={
    hidden:{
      scale:0
    },
    show:{
      scale:1,
      transition:{
        delay:1
      }
    }
  }
  return (
    <div className="   lg:p-24 lg:px-40  w-full  flex flex-row h-screen justify-center align-middle items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
       className=" h-[70%] lg:h-[100%] gap-10 w-full flex flex-row justify-between items-center bg-white shadow-lg rounded-2xl shadow-slate-800">
        <div className="bg-[#2E9BE6] w-1/2 h-[100%] rounded-2xl hidden lg:flex ">
          <motion.div variants={image} initial="hidden" animate="show"  className="flex flex-col items-center justify-center h-[100%] w-full object-cover realative  ">
            <Image
              className="object-cover bg-transparent border-none  bg-blend-overlay r "
              src="/assets/sign.gif"
              height={470}
              width={470}
              alt="signIn"
            />
            <div>
              <h3 className="text-white font-semibold capitalize text-2xl ">Trouble in finding like-minded members</h3>
              <h4 className="text-white font-light text-justify text-xl">Don't worry Team Up's got u covered</h4>
            </div>
          </motion.div>
        </div>
        <motion.div variants={form} initial="hidden" animate="show" className="w-full lg:w-1/2 flex flex-row justify-center align-middle items-center">
          <SignIn
            appearance={{
              elements: {
                card: " bg-transparent shadow-none   ",
              },
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default page;
