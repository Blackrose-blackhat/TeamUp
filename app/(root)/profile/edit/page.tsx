
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";
import GigsCard from "@/components/cards/GigsCard";
import { fetchGigsById } from "@/lib/actions/Gigs.action";




async function Page() {
    
  
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id,);

  if (!userInfo?.onboarded) redirect("/onboarding");
  
  const userData ={
    // id:user?.id ,
    id:user?.id ,
    objectId:userInfo?._id,
    username: userInfo?userInfo.username:user?.lastName,
    Gender :   userInfo? userInfo.gender : "",
    skills :   userInfo? userInfo.skills:"",
    institutionName :userInfo ? userInfo.institutionName : "",
    institutionAddress :userInfo ? userInfo.institutionName : "",
    image :  userInfo ? userInfo.image:user?.imageUrl,
    year:  userInfo ? userInfo.year:"",
    instagram : userInfo ? userInfo.instagram:"",
    whatsapp : userInfo ? userInfo.whatsapp : "",
    linkedin : userInfo ? userInfo.linkedin : "",
    github : userInfo ? userInfo.github : "",
    bio:userInfo?userInfo.bio : "",
    projects : userInfo?userInfo.projects : "",
    projecttitle :userInfo?userInfo.projecttitle:""
  }


  return (
    <>
      <h1 className=' lg:text-center text-2xl font-semibold text-slate-800'>Edit Profile</h1>
      <p className='lg:text-center mt-3 font-normal text-slate-600'>Make any changes</p>

      <section className='mt-10'>
        <AccountProfile user={userData} btnTitle='Continue' />
        {/* <GigsCard
          key={post._id}
          id={post._id}
          currentUserId={user?.id || ""}
          content={post.text}
          author={post.author}
          tags={post.tags}
          createdAt={post.createdAt}
        /> */}
      </section>
    </>
  );
}

export default Page;