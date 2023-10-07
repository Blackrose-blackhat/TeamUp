
import GigsCard from "@/components/cards/GigsCard";
import GigsTab from "@/components/shared/GigsTab";
import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constatnts";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import Image from "next/image";
import {redirect} from 'next/navigation';
   

const page = async({params} : {params : {id:string}}) => {
    const user = await currentUser();


    if(!user)
        return null;

    const userInfo = await fetchUser(params.id);
 
    if(!userInfo?.onboarded)
        redirect('/onboarding');
    
  return (
    <section>
        <ProfileHeader
          accountId={userInfo.id}
          authUserId = {user.id}
          name = {userInfo.username}
          imgUrl = {userInfo.image}
          skills = {userInfo.skills}
          gender ={userInfo.gender}
          year={userInfo.year}
        />

        <div className="mt-9 flex flex-row items-center gap-2">
            <Image
              src="/assets/gigs.svg"
              alt="gigs"
              width={40}
              height={40}
              />
            <h3 className="text-lg font-semibold text-slate-800"> Gigs Posted</h3>
           
        </div>
        <div>
            <GigsTab
              currentUserId = {user.id}
              accountId = {userInfo.id}
              accountType = "User"
            />
        </div>
    </section>
  )
}

export default page