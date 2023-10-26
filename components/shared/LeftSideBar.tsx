"use client";
import { sidebarLinks } from "@/constatnts";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
function LeftSidebar() {
  const router = useRouter();
  const pathName = usePathname();
  const {userId} = useAuth();
  return (
    <section className=" bg-white sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto   pb-5 pt-28 max-md:hidden">
      <div className=" flex w-full flex-1 flex-col gap-10  px-6 ">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName == link.route;

            if(link.route === '/profile') link.route = `${link.route}/${userId}`


          return (
            <motion.div
            layout
            whileHover={{scale:1.1}}
            
            >
            <Link
              href={link.route}
              key={link.label}
              className={` hover:bg-[#2E9BE6] hover:text-white hover:shadow-lg hover:shadow-neutral-400   relative flex justify-start gap-4 rounded-lg p-4 ${
                isActive && "shadow-lg shadow-neutral-400 bg-[#2E9BE6] text-white"
              }`}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-slate-700  max-lg:hidden font-semibold"> {link.label}</p>
            </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
            <motion.div whileTap={{scale:0.5}} whileHover={{scale:1.1}} className="flex cursor-pointer gap-4 p-4">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
              <p className="max-lg:hidden font-semibold ">Logout</p>
            </motion.div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSidebar;
