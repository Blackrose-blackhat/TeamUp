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
  console.log(`skills are ${skills}`);
  return (
    <article>
      <div className=" bg-white rounded-md shadow-lg shadow-slate-500 p-5  justify-between w-full p-5 flex flex-row">
        <div className=" items-center gap-5 flex flex-row justify-start w-1/2">
          <div className="relative h-12 w-12 object-cover">
            <Image
              src={imgUrl}
              alt="profile Image"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>
          <div>
            <p className="capitalize font-semibold text-slate-700 text-lg ">
              {username}
            </p>
          </div>
        </div>
        <div className="hover:opacity-95">
          <Link href={`/profile/${id}`}>
            <Button>View</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
