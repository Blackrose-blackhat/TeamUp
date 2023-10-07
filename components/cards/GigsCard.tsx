import { excerpt, formatDateString } from "@/lib/utils";
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
  {console.log(tags.length)}
  return (
    
    <article className="   hover:bg-slate-100  delay-100 transition bg-white shadow-lg shadow-slate-500 rounded-md p-4 lg:p-8">
        <Link href={`/gigs/${id}`}>
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
            <div className="thread-card-bar" />
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
            <p className="mt-2 text-regular py-5 text-lg text-slate-900 font-semibold">
              {excerpt(content,50)}
            </p>
          </div>
        </div>
        {tags  && (
          <div className=" p-3 gap-5 mt-5 rounded-md w-fit flex flex-row">
          {tags.map((idx) => (
            <div className=" cursor-pointer delay-75 text-zinc-700 hover:scale-105 font-semibold bg-stone-200 p-3  capitalize ">
              {idx}
            </div>
          ))}
        </div>
        )}
        
          
        
        
    </Link>
      </article>
  );
};

export default GigsCard;
