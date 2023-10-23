import AccountProfile from '@/components/forms/AccountProfile'
import Image from 'next/image'
import { currentUser } from '@clerk/nextjs'
import { fetchUser } from '@/lib/actions/user.actions';
import {redirect} from "next/navigation"

const page = async() => {
  const user = await currentUser();
  if(!user)
    return null;


  // user?.id)

  const userInfo =await fetchUser(user.id);
  if(userInfo?.onboarded) redirect("/");

 
  const userData ={
    // id:user?.id ,
    id:user?.id || "",
    objectId:userInfo?._id,
    username: userInfo?userInfo.username:user?.firstName,
    Gender :   userInfo? userInfo.gender : "",
    skills :   userInfo? userInfo.skills:"",
    institutionName :userInfo ? userInfo.institutionName : "",
    institutionAddress :userInfo ? userInfo.institutionName : "",
    image :  userInfo ? userInfo.image:user?.imageUrl,
    year:  userInfo ? userInfo.year:"",
    instagram:userInfo?userInfo.instagram : "",
    whatsapp:userInfo?userInfo.whatsapp : "",
    linkedin:userInfo?userInfo.linkedin : "",
    github:userInfo ? userInfo.github : "",
    bio:userInfo ? userInfo.bio : "",
    projects:userInfo ? userInfo.projects : "",
    projecttitle:userInfo ? userInfo.projecttitle:""
  }
  return (
    <main className='mx-auto flex max-w-6xl flex-col justify-start px-10 py-10'>
      <Image
        src="/logo.svg"
        alt='logo'
        width={174}
        height={174}
        />
      <h1 className=' mt-8 px-2 text-slate-700 text-3xl font-semibold'>
          Details
      </h1>
      <p className='mt-3 px-2 text-base'>
        Let's quickly get you in!
      </p>
      <section className='mt-5 rounded-lg bg-slate-300 p-10'>
        <AccountProfile user={userData} btnTitle ="Continue" />
      </section>
    </main>
  )
}

export default page