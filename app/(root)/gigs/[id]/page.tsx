"use server"
import GigsCard from "@/components/cards/GigsCard";
import { Button } from "@/components/ui/button";
import { fetchGigsById } from "@/lib/actions/Gigs.action";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { MessagesSquare } from "lucide-react";
import { redirect } from "next/navigation";

const page = async({ params }: { params: { id: string } }) => {

  if(!params.id) return null;

  const user = await currentUser();
  if(!user) return null;

  const userInfo = await fetchUser(user.id);
  if(!userInfo?.onboarded) redirect('/onboarding');

  const post = await fetchGigsById(params.id);

  return (
    <section className="relative">
      <div className=" gap-5 flex flex-col align-middle justify-center py-20">
      <GigsCard
        key = {post._id}
        id={post._id}
        currentUserId={user?.id || ""}
        content={post.text}
        author={post.author}
        tags={post.tags}
        createdAt={post.createdAt}
      />
      <div className="w-full flex flex-row  justify-center ">

      <Button className="w-1/2 p-7 text-lg font-smibold gap-5 "> <MessagesSquare />Message</Button>
      </div>
      </div>
    </section>
  );
};

export default page;
