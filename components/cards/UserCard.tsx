import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  id: string;
  username: string;
  imgUrl: string;
  skills: [];
  personType: string;
}
const UserCard = ({ id, username, imgUrl, skills, personType }: Props) => {
 

  return (
    <article className="w-full lg:w-[32%] ">
      <div className=" bg-white rounded-md shadow-lg shadow-slate-500 w-full align-middle items-center   justify-between  p-2 flex flex-col">
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
            <p className="capitalize font-semibold text-slate-700 text-lg ">
              {username}
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-3 lg:gap-8 px-4 items-center justify-center md:justify-center">
            {skills.map((idx) => (
              <div className=" bg-[#b7c9e2] cursor-pointer hover:scale-105 delay-75 font-semibold  w-fit p-2 text-slate-600 rounded-lg " key={idx}>
                {idx}
              </div>
            ))}
          </div>
        </div>
        <div className=" p-5 w-full hover:opacity-95">
          <Link href={`/profile/${id}`}>
            <Button className="w-full bg-[#104f8f] hover:bg-[#3871ab] ">View</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
