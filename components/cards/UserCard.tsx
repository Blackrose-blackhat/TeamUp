import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { excerpt } from "@/lib/utils";

interface Props {
  id: string;
  username: string;
  imgUrl: string;
  skills: [];
  personType: string;
  bio:string;
}
const UserCard = ({ id, username, imgUrl, skills, personType,bio }: Props) => {
 

  return (
    <article className=" lg:w-full shadow-md shadow-slate-400 h-96 flex flex-col justify-center items-center ">
      <div className=" bg-transparent md:h-64 h-cover   rounded-md  w-full lg:w-full align-middle items-center   justify-between  p-2 flex flex-col">
        <div className=" items-center gap-5 flex flex-col  justify-start w-full">
          <div className=" -mt-5 relative h-[5rem] w-[5rem] md:w-[6rem] md:h-[6rem] object-cover">
            <Image
              src={imgUrl}
              alt="logo"
              fill
              className="rounded-full object-cover shadow-2xl text-sm"
            />
          </div>
          <div>
            <p className="text-center capitalize font-semibold text-slate-700 text-md ">
              {username}
            </p>
          </div>
          <div className=" text-center text-sm w-full flex flex-wrap gap-3 lg:gap-8 px-4 items-center justify-center md:justify-center font-normal text-slate-900">
            <p className=" w-full hidden lg:block">
            {excerpt(bio,40)}
            </p>
            <p className="block lg:hidden"> 
            {excerpt(bio,20)}
            </p>
          </div>
        </div>
        <div className="items-end align-baseline px-4 py-1 md:py-3   w-full hover:opacity-95">
          <Link href={`/profile/${id}`}>
            <Button className="w-full  bg-[#104f8f] hover:bg-[#3871ab] ">View</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
