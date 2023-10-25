import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import GigsCard from "../cards/GigsCard";
import { threadId } from "worker_threads";

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const GigsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  let result = await fetchUserPosts(accountId);
  if (!result) redirect("/");
  return (
    <section className="mt-9 flex flex-col gap-10 w-full">
      {result.gigs.map((gigs: any) => (
        <GigsCard
          key={gigs._id}
          id={gigs._id}
          currentUserId={currentUserId}
          content={gigs.text}
          author={
            accountType === "User"
              ? { username: result.username, image: result.image, id: result.id }
              : {username:gigs.author.username , image:gigs.author.image , id:gigs.author.id}
          }
          tags={gigs.tags}
          createdAt={gigs.createdAt}
        />
      ))}
    </section>
  );
};

export default GigsTab;
