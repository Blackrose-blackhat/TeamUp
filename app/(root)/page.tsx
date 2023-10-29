
import { fetchPosts } from "@/lib/actions/Gigs.action";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import GigsCard from "../../components/cards/GigsCard"
import { excerpt } from "@/lib/utils";
export default async function Home()  {
  const user = await currentUser();
  const result = await fetchPosts(1 ,30);




  return (
    <>
     

      <section className=" h-screen rounded-md flex flex-col gap-10  md:p-16 p-4">
        {result.posts.length === 0 ? (
          <p>No Gigs Found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <GigsCard
                key = {post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                content={excerpt(post.text,20)}
                author={post.author}
                tags={post.tags}
                createdAt={post.createdAt}
                />
            ))}
          </>
        )}
        </section>    </>
  )
}
