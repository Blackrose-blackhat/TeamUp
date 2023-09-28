import Image from "next/image";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import logo from "../public/assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <>
      <nav className=" gap-5 md:gap-20 flex flex-row w-full shadow-lg shadow-seconday p-3">
        <div className="flex flex-row justify-start align-middle w-1/2 gap-12">
          <div className="flex flex-col justify-start align-middle mt-2">
            <Image src={logo} alt="logo" className="w-20 md:w-40" />
          </div>

          <div className=" border-2  md:px-2 rounded-lg  flex flex-row justify-start align-middle   ">
            <div className=" flex flex-row justify-center align-middle">
              <input
                type="text"
                placeholder="Search"
                className="  text-sm md:text-xl focus:outline-none text-secondary w-full "
              />
            </div>
          </div>
        </div>

        <div className="justify-end  w-1/2 ">
          <div className="flex flex-row gap-10 w-full justify-end">
            <Link href="/sign-in">
              <div className="bg-primary p-2 rounded-md mt-1">
                <p className="text-white font-bold">Register</p>
              </div>
            </Link>
            <div className="p-2 mt-1">
              <p className="text-primary font-bold">Log In</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
