"use client";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Topbar() {

  return (
    <nav className=" border-b-[0.7px] border-[#15151537] bg-white flex top-0 z-30 fixed w-full items-center justify-between px-6 py-3">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt={"logo"} width={120} height={120} />
      </Link>
      <div className="flex items-center gap-1">
        <div className=" lg:flex-row lg:gap-10 hidden lg:flex">
          <div className="flex flex-row gap-1 items-center">
          <Image src="/assets/message.svg" alt="contact-us" width={26} height={26} />
          <p className="font-semibold text-blue-500">Contact us</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
          <Image src="/assets/about.svg" alt="about-us" width={26} height={26} />
          <p className="font-semibold text-blue-500">About </p>
          </div>
          
        </div>
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <LogOutIcon />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
