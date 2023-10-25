
import { deleteGigsById } from "@/lib/actions/Gigs.action";
import Gigs from "@/lib/models/gig.models";
import { excerpt, formatDateString } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs";
import DeleteButton from "../ui/delete_button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  currentUserId: string | null;
  content: string;
  author: {
    username: string;
    image: string;
    id: string;
  };
  tags: string[];
  createdAt: string;
}

const GigsCard = ({
  id,
  currentUserId,
  content,
  author,
  tags,
  createdAt,
}: Props) => {
  
  return (
    <article className=" justify-between flex flex-row delay-100 transition bg-white shadow-lg shadow-slate-500 rounded-xl p-4 lg:p-8">

      <Link className="w-full" href={`/gigs/${id}`}>
        <div className="flex flex-1 flex-row gap-7">
          
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt={author.username}
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>
            
          </div>

          <div className="flex w-full flex-col">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className=" capitalize cursor-pointer text-base font-semibold">
                {author.username}
              </h4>
            </Link>
            <p className="text-slate-500 font-semibold">
              {formatDateString(createdAt)}
            </p>
            <p className=" hidden lg:block w-fit mt-2 text-regular py-5 text-lg text-slate-900 font-semibold">
              {excerpt(content, 50)}
            </p>
            <p className="block lg:hidden w-fit mt-2 text-regular py-5 text-lg text-slate-900 font-semibold ">
            {excerpt(content, 30)}
            </p>
          </div>
        </div>
       
        
        {tags && (
          <div className=" p-3 gap-5 mt-5 rounded-md w-fit flex flex-wrap">
            
            {tags.map((idx) => (
              <div
               
                className=" rounded-md cursor-pointer delay-105  hover:scale-105 font-semibold border-2 border-[#104f8f] text-[#104f8f] hover:text-white hover:bg-[#104f8f] p-3 px-8  capitalize "
              >
                {idx}
              </div>
            ))}
          </div>
        )}
        
      </Link>
      <div  className=" mx-2 w-fit  ">
      {author.id == currentUserId&& (
          <DeleteButton authorId={id} />
        ) }
      </div>
     
    </article>
  );
};

export default GigsCard;
