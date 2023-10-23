import UserCard from "@/components/cards/UserCard";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  // fetch users

  const result = await fetchUsers({
    userId: user.id,
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
    skills: [],
  });
  console.log(result.users)
  return (
    <section className="w-full flex flex-col  px-5 ">
      <h1 className="font-bold text-3xl px-3 text-slate-800">Users</h1>
      
      
        {result.users.length === 0 ? (
          <p>No User found</p>
        ) : (
          <div className="flex flex-wrap w-full gap-6 mt-5 ">
            {result.users.map((person) => (
              <UserCard
                key={person.id}
                id={person.id}
                username={person.username}
                imgUrl={person.image}
                skills={person.skills}
                personType="User"
              />
            ))}
          </div>
        )}
      
    </section>
  );
};

export default page;
