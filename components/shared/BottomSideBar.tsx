"use client"

import { sidebarLinks } from "@/constatnts"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
function Bottombar()
{
    const router = useRouter();
    const pathName = usePathname();
    return(
        <section className="fixed bottom-0 z-10 w-full  sidebar p-4  xs:px-7 md:hidden">
        <div className="flex items-center justify-between gap-3 xs:gap-5">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName == link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={` opacity-70  text-white font-semibold hover:bg-[#ffffff4b]      relative flex justify-start gap-4 rounded-lg p-4  ${
                isActive && "opacity-100 bg-[#ffffff4b]"
              }`}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-slate-700 max-lg:hidden"> {link.label}</p>
            </Link>
          );
        })}
        </div>
    </section>
    )
    

}

export default Bottombar