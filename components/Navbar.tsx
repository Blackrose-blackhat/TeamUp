import Image from "next/image";
import Link from "next/link";
import { UserButton,auth } from "@clerk/nextjs";
import logo from "../public/assets/logo.png"
const Navbar = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <>
      <nav className=" flex flex-row w-full shadow-lg shadow-seconday p-3">
        <div>
          <Image
            src={logo}
            alt="logo"
            height={150}
            width={150}
            />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
